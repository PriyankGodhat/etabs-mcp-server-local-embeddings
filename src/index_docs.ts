// src/index_docs.ts
import { ChromaClient } from 'chromadb-client';
import * as fs from 'fs/promises';
import * as path from 'path';
import dotenv from 'dotenv';
import { pipeline, env } from '@xenova/transformers';

// --- Environment Setup ---
dotenv.config(); // Load variables from .env file

// Optional: Setup transformers cache path if defined in .env
// Allows models to be stored in a specific directory
if (process.env.TRANSFORMERS_CACHE) {
    env.cacheDir = process.env.TRANSFORMERS_CACHE;
    console.log(`Using transformers cache directory: ${env.cacheDir}`);
}
// Optional: Disable remote model downloads if you want to manage models manually
// env.allowRemoteModels = false;

// --- Configuration ---
const DOCS_PATH = process.env.ETABS_DOCS_PATH;
const CHROMA_HOST = "http://localhost:8000"; // Default for Docker setup
// const CHROMA_PATH = process.env.CHROMA_DB_PATH; // Use this if running Chroma standalone persistent
const COLLECTION_NAME = process.env.CHROMA_COLLECTION_NAME;
const LOCAL_EMBEDDING_MODEL = process.env.LOCAL_EMBEDDING_MODEL;

// Validate required environment variables
if (!DOCS_PATH || !COLLECTION_NAME || !LOCAL_EMBEDDING_MODEL) {
    console.error("Error: Missing required environment variables.");
    console.error("Ensure ETABS_DOCS_PATH, CHROMA_COLLECTION_NAME, and LOCAL_EMBEDDING_MODEL are set in .env");
    process.exit(1);
}
// Log the configuration being used (excluding sensitive keys if any)
console.log("--- Configuration ---");
console.log(`Docs Path: ${DOCS_PATH}`);
console.log(`Chroma Host: ${CHROMA_HOST}`);
console.log(`Collection Name: ${COLLECTION_NAME}`);
console.log(`Embedding Model: ${LOCAL_EMBEDDING_MODEL}`);
console.log("---------------------");


// --- Basic Chunking Function (Needs improvement for optimal results) ---
function chunkMarkdown(content: string, filename: string, chunkSize = 500, overlap = 50): string[] {
    // This is a very basic chunking strategy.
    // Consider using libraries like 'langchain/text_splitter' or custom logic
    // aware of Markdown structure (headings, code blocks) for better semantic chunks.

    // Example: Fixed size chunking (simple, but breaks semantics)
    const chunks: string[] = [];
    let start = 0;
    while (start < content.length) {
      const end = Math.min(start + chunkSize, content.length);
      const chunk = content.substring(start, end);
      // Simple check to avoid adding tiny leftover pieces or whitespace chunks
      if (chunk.trim().length > 20) {
          chunks.push(chunk);
      }
      start += chunkSize - overlap; // Move window with overlap
       // Prevent potential infinite loops if overlap is too large or chunk size too small
       if (start >= content.length - overlap && content.length > chunkSize) break;
       start = Math.max(start, 0); // Ensure start index isn't negative
    }
    // Add the last part if it wasn't captured and is meaningful
    const lastPart = content.substring(start);
     if (start < content.length && lastPart.trim().length > 20 && (chunks.length === 0 || chunks[chunks.length -1] !== lastPart) ) {
         chunks.push(lastPart);
     }

     return chunks;
}

// --- Recursive File Processing ---
async function processFiles(dirPath: string): Promise<{ id: string; content: string; metadata: { source: string } }[]> {
    console.log(`Processing directory: ${dirPath}`);
    let allChunks: { id: string; content: string; metadata: { source: string } }[] = [];
    let fileCounter = 0;

    try {
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);
            if (entry.isDirectory()) {
                // Recurse into subdirectories
                allChunks = allChunks.concat(await processFiles(fullPath));
            } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
                fileCounter++;
                process.stdout.write(`\rProcessing file ${fileCounter}: ${entry.name.padEnd(50)}`); // Pad for alignment
                try {
                    const content = await fs.readFile(fullPath, 'utf-8');
                    const chunks = chunkMarkdown(content, entry.name);
                    chunks.forEach((chunk, index) => {
                        // Create a more robust unique ID (replace non-alphanumeric)
                        const cleanFilename = entry.name.replace(/[^a-zA-Z0-9_.-]/g, '_');
                        const id = `${cleanFilename}_chunk_${index}`;
                        allChunks.push({
                            id: id,
                            content: chunk,
                            metadata: { source: entry.name } // Store original filename
                        });
                    });
                } catch (err: any) {
                    console.warn(`\n[WARN] Skipping file ${entry.name} due to read error: ${err.message}`);
                }
            }
        }
    } catch (err: any) {
         console.error(`\n[ERROR] Failed to read directory ${dirPath}: ${err.message}`);
         // Depending on severity, you might want to exit or just skip the directory
    }

    // Log completion only at the top level or adjust logging approach
    // console.log(`Finished processing directory ${dirPath}. Found ${fileCounter} markdown files.`);
    return allChunks;
}


// --- Main Indexing Logic ---
async function main() {
    console.log("--- Starting ETABS Documentation Indexing ---");

    // 1. Initialize ChromaDB Client
    const chroma = new ChromaClient({ path: CHROMA_HOST });
    try {
        const hb = await chroma.heartbeat();
        console.log(`ChromaDB connection successful (host: ${CHROMA_HOST}, heartbeat: ${hb})`);
    } catch (e) {
        console.error(`[FATAL ERROR] Failed to connect to ChromaDB at ${CHROMA_HOST}. Is it running?`);
        console.error(e);
        process.exit(1);
    }

    // 2. Load Local Embedding Pipeline
    let embedderPipeline: Awaited<ReturnType<typeof pipeline>>;
    try {
        console.log(`Loading local embedding model: ${LOCAL_EMBEDDING_MODEL}... (This may take time and download the model on first run)`);
        // Using 'feature-extraction' task for embeddings
        embedderPipeline = await pipeline('feature-extraction', LOCAL_EMBEDDING_MODEL);
        console.log("Local embedding model loaded successfully.");
    } catch (error) {
        console.error(`[FATAL ERROR] Failed to load local embedding model: ${LOCAL_EMBEDDING_MODEL}`, error);
        process.exit(1);
    }

    // 3. Get or Create ChromaDB Collection
    let collection;
    try {
        console.log(`Ensuring ChromaDB collection '${COLLECTION_NAME}' exists...`);
        collection = await chroma.getOrCreateCollection({
            name: COLLECTION_NAME!,
            metadata: { "hnsw:space": "cosine" } // Use cosine distance for similarity search
            // No embedding function needed here, we provide embeddings directly
        });
        console.log(`Collection '${COLLECTION_NAME}' ready.`);
    } catch (error) {
        console.error(`[FATAL ERROR] Failed to get or create ChromaDB collection '${COLLECTION_NAME}'`, error);
        process.exit(1);
    }


    // 4. Process and Chunk Markdown Files
    console.log(`Reading markdown files from specified path: ${DOCS_PATH}`);
    // FIX 1: Added non-null assertion '!' because we checked DOCS_PATH earlier
    const documents = await processFiles(DOCS_PATH!);
    if (documents.length === 0) {
        console.error(`[ERROR] No markdown document chunks were generated from ${DOCS_PATH}. Check the path, permissions, and chunking logic.`);
        return; // Exit gracefully if no docs found
    }
    console.log(`Total document chunks generated: ${documents.length}`);

    // 5. Generate Embeddings & Add to ChromaDB (in batches)
    const batchSize = 50; // Adjust based on your machine's memory/CPU. Smaller is safer for local models.
    console.log(`Adding documents to ChromaDB in batches of ${batchSize}...`);
    let addedCount = 0;
    let failedEmbeddingCount = 0;

    for (let i = 0; i < documents.length; i += batchSize) {
        const batch = documents.slice(i, i + batchSize);
        const currentBatchNum = Math.floor(i / batchSize) + 1;
        const totalBatches = Math.ceil(documents.length / batchSize);

        // FIX 2: Explicitly type batchEmbeddings as number[][]
        const batchEmbeddings: (number[] | null)[] = []; // Use null to mark failures easily

        process.stdout.write(`\rProcessing Batch ${currentBatchNum}/${totalBatches}: Generating embeddings... `);
        for (const doc of batch) {
            try {
                // Generate embedding for one document's content
                const output = await embedderPipeline(doc.content, { pooling: 'mean', normalize: true });
                batchEmbeddings.push(Array.from(output.data as Float32Array));
            } catch (err: any) {
                 console.warn(`\n[WARN] Failed to embed chunk ID ${doc.id} from ${doc.metadata.source}. Skipping. Error: ${err.message}`);
                 batchEmbeddings.push(null); // Mark as failed
                 failedEmbeddingCount++;
            }
        }

        // Filter out failed embeddings and their corresponding documents
        const validEntries = batch
            .map((doc, idx) => ({
                id: doc.id,
                embedding: batchEmbeddings[idx],
                document: doc.content,
                metadata: doc.metadata
            }))
            .filter(entry => entry.embedding !== null); // Keep only successful ones

        if (validEntries.length === 0) {
             process.stdout.write(`Skipping batch ${currentBatchNum} (0 valid embeddings generated).\n`);
             continue; // Skip this batch if all embeddings failed
        }

        // Prepare data for ChromaDB Add call
        const validIds = validEntries.map(entry => entry.id);
        const validEmbeddings = validEntries.map(entry => entry.embedding as number[]); // Assert not null
        const validDocuments = validEntries.map(entry => entry.document);
        const validMetadatas = validEntries.map(entry => entry.metadata);

        // Add the valid batch with generated embeddings to ChromaDB
        try {
             process.stdout.write(`Adding ${validIds.length} items to ChromaDB... `);
            await collection.add({
                ids: validIds,
                embeddings: validEmbeddings,
                documents: validDocuments,
                metadatas: validMetadatas,
            });
            addedCount += validIds.length;
             process.stdout.write(`Done. Total added: ${addedCount}\n`);

        } catch (error: any) {
            console.error(`\n[ERROR] Failed to add batch ${currentBatchNum} to ChromaDB: ${error.message}`);
            // Consider adding retry logic or logging failed IDs for later processing
        }
    }

    console.log("--- Indexing Complete ---");
    if (failedEmbeddingCount > 0) {
        console.warn(`[WARN] A total of ${failedEmbeddingCount} chunks failed during embedding generation.`);
    }
    try {
        const finalCount = await collection.count();
        console.log(`Collection '${COLLECTION_NAME}' now contains ${finalCount} items.`);
    } catch (e) {
        console.error("Could not get final count from collection.", e)
    }
}

// Run the main indexing function
main().catch(error => {
    console.error("[FATAL ERROR] Indexing process failed:", error);
    process.exit(1);
});