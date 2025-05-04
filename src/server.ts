// src/server.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
// Import ChromaClient AND the IncludeEnum type/enum
import { ChromaClient, IncludeEnum } from 'chromadb-client';
import dotenv from 'dotenv';
import { pipeline, env } from '@xenova/transformers';

// --- Environment Setup ---
dotenv.config();
if (process.env.TRANSFORMERS_CACHE) {
    env.cacheDir = process.env.TRANSFORMERS_CACHE;
    console.log(`Using transformers cache directory: ${env.cacheDir}`);
}

// --- Configuration ---
const CHROMA_HOST = "http://localhost:8000";
const COLLECTION_NAME = process.env.CHROMA_COLLECTION_NAME;
const LOCAL_EMBEDDING_MODEL = process.env.LOCAL_EMBEDDING_MODEL;

if (!COLLECTION_NAME || !LOCAL_EMBEDDING_MODEL) {
    console.error("Error: Missing environment variables. Ensure CHROMA_COLLECTION_NAME and LOCAL_EMBEDDING_MODEL are set in .env");
    process.exit(1);
}

// --- Initialize MCP Server ---
const server = new McpServer({
  name: "ETABS-Doc-Assistant-Local",
  version: "1.0.8", // Incremented version
  capabilities: {
    tools: { listChanged: false },
  },
});

// --- Initialize Local Embedder Pipeline ---
let embedderPipeline: any | null = null;
async function initializeEmbedder() {
    try {
        console.error(`Loading local embedding model: ${LOCAL_EMBEDDING_MODEL}...`);
        embedderPipeline = await pipeline('feature-extraction', LOCAL_EMBEDDING_MODEL);
        console.error("Local embedding model loaded successfully.");
    } catch (error) {
        console.error(`[FATAL ERROR] Failed to load local embedding model: ${LOCAL_EMBEDDING_MODEL}`, error);
        process.exit(1);
    }
}

// --- Define the Search Tool ---
const SearchDocsShape = {
    query: z.string().describe("The natural language query about the ETABS API or documentation."),
    top_k: z.number().int().positive().optional().default(5).describe("The maximum number of relevant documentation snippets to return (default 5)."),
};

const BaseSearchDocsInputSchema = z.object(SearchDocsShape);
const RefinedSearchDocsInputSchema = BaseSearchDocsInputSchema.refine(data => data.top_k <= 10, {
    message: "top_k cannot be greater than 10",
    path: ["top_k"],
});


server.tool(
  "search_etabs_docs",
  "Searches the indexed ETABS API documentation using semantic similarity to find relevant information based on a natural language query.",
  SearchDocsShape, // Use the raw shape for server.tool
  async (parsedArgs) => {
    console.error(`[Tool Call Start] search_etabs_docs: raw_args=${JSON.stringify(parsedArgs)}`);

    // Validate args inside the handler
    const validationResult = RefinedSearchDocsInputSchema.safeParse(parsedArgs);
    if (!validationResult.success) {
        console.error(`[Tool Validation Error] Input validation failed: ${validationResult.error.message}`);
        const errorMsg = validationResult.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('; ');
        return {
            isError: true,
            content: [{ type: "text", text: `Invalid input: ${errorMsg}` }],
        };
    }
    const { query, top_k } = validationResult.data;
    console.error(`[Tool Call] search_etabs_docs: validated_query="${query}", validated_top_k=${top_k}`);


    if (!embedderPipeline) {
         console.error("[Tool Error] Embedder pipeline not initialized.");
         return {
            isError: true,
            content: [{ type: "text", text: "Error: The documentation search engine is not ready. Please try again later." }],
        };
    }

    try {
        // 1. Initialize Chroma Client
        const chroma = new ChromaClient({ path: CHROMA_HOST });
        let collection;
        try {
            await chroma.heartbeat();
            collection = await chroma.getCollection({ name: COLLECTION_NAME! });
            console.error(`[Tool Call] Connected to ChromaDB collection: ${COLLECTION_NAME}`);
        } catch (e: any) {
            console.error(`[Tool Error] Failed to connect/get collection '${COLLECTION_NAME}': ${e.message}`);
             return {
                isError: true,
                content: [{ type: "text", text: `Error: Could not connect to documentation index. Details: ${e.message}` }],
            };
        }

        // 2. Generate query embedding locally
        console.error("[Tool Call] Generating query embedding...");
        let queryEmbedding: number[];
        try {
             const output = await embedderPipeline(query, { pooling: 'mean', normalize: true as boolean });
             queryEmbedding = Array.from(output?.data as Float32Array ?? []);
             if (queryEmbedding.length === 0) {
                 throw new Error("Embedding generation resulted in an empty vector.");
             }
             console.error("[Tool Call] Query embedding generated.");
        } catch (embedError: any){
             console.error(`[Tool Error] Failed to generate query embedding: ${embedError.message}`);
              return {
                isError: true,
                content: [{ type: "text", text: `Error: Failed to process query for search. Details: ${embedError.message}` }],
            };
        }

        // 3. Query ChromaDB
        console.error(`[Tool Call] Querying ChromaDB for top ${top_k} results...`);
        // --- APPLY FRIEND'S FIX HERE ---
        const includeFields: IncludeEnum[] = [
            IncludeEnum.Documents,
            IncludeEnum.Metadatas,
            IncludeEnum.Distances
        ];
        const results = await collection.query({
            queryEmbeddings: [queryEmbedding],
            nResults: top_k,
            include: includeFields // Use the array of enum members
        });
        // --- END OF FIX ---
        console.error(`[Tool Call] ChromaDB query returned ${results.ids?.[0]?.length ?? 0} results.`);

        // 4. Format and Return Results
        if (!results || !results.ids || results.ids.length === 0 || !results.documents || results.documents.length === 0 || results.documents[0].length === 0) {
            console.error("[Tool Call] No relevant results found in ChromaDB.");
            return {
                content: [{ type: "text", text: "No relevant documentation snippets found." }],
            };
        }

        const formattedSnippets = results.documents[0].map((doc, index) => {
            const source = results.metadatas?.[0]?.[index]?.source ?? 'Unknown Source';
            const distance = results.distances?.[0]?.[index] ?? NaN;
            const similarity = isNaN(distance) ? 'N/A' : (1 - distance).toFixed(4);
            const docText = doc ?? "[Error: Document content is missing]";
            return `--- Snippet from: ${source} (Similarity: ${similarity}) ---\n${docText}\n`;
        }).join('\n');

        console.error("[Tool Call] Successfully formatted results.");
        return {
            content: [{ type: "text", text: formattedSnippets }],
        };

    } catch (error: any) {
        console.error(`[Tool Error] Unexpected error in search_etabs_docs: ${error.message}`, error.stack);
        return {
            isError: true,
            content: [{ type: "text", text: `An internal error occurred while searching documentation: ${error.message}` }],
        };
    }
  }
);

// --- Start the MCP Server ---
async function main() {
  console.error("Initializing MCP server...");
  await initializeEmbedder();

  if(embedderPipeline){
      const transport = new StdioServerTransport();
      await server.connect(transport);
      console.error("ETABS Doc Assistant MCP Server (Local Embeddings) running on stdio.");
      console.error("Waiting for connections...");
  } else {
      console.error("MCP Server exiting due to embedding model load failure.");
      process.exit(1);
  }
}

// --- Graceful Shutdown ---
function shutdown() {
    console.error("\nShutting down MCP server...");
    process.exit(0);
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// --- Run Server ---
main().catch((error) => {
  console.error("[FATAL ERROR] MCP server failed to start:", error);
  process.exit(1);
});