# index_chm_py/indexer.py
import argparse
import os
import sys
import tempfile
import shutil
import subprocess
import logging
from pathlib import Path
from dotenv import load_dotenv
from bs4 import BeautifulSoup
import html2text # Using html2text for simplicity, markdownify is also an option
from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.utils import embedding_functions

# --- Setup Logging ---
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# --- Helper Functions ---

def is_tool(name):
    """Check whether `name` is on PATH and marked as executable."""
    return shutil.which(name) is not None

def extract_chm(chm_path, output_dir):
    """Extracts CHM content using external tools."""
    logging.info(f"Attempting to extract '{chm_path}' to '{output_dir}'...")
    chm_path = Path(chm_path).resolve()
    output_dir = Path(output_dir).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    tool_used = None
    cmd = []

    if sys.platform.startswith('win') and is_tool('7z'):
        # Use 7-Zip on Windows if available
        logging.info("Using 7z for extraction on Windows.")
        seven_zip_path = shutil.which('7z')
        # Command: 7z x <chm_file> -o<output_dir> -y
        # The '*' wildcard in -o* ensures contents go directly into output_dir
        cmd = [seven_zip_path, 'x', str(chm_path), f'-o{output_dir}', '-y']
        tool_used = '7z'
    elif (sys.platform.startswith('linux') or sys.platform.startswith('darwin')) and is_tool('chmextract'):
        # Use chmextract on Linux/macOS if available
        logging.info("Using chmextract for extraction.")
        # Command: chmextract <chm_file> <output_dir>
        cmd = ['chmextract', str(chm_path), str(output_dir)]
        tool_used = 'chmextract'
    # Add more platform/tool checks if needed (e.g., 7z on Linux/macOS)
    elif is_tool('7z'): # Fallback to 7z if chmextract not found but 7z is
         logging.info("Using 7z for extraction as fallback.")
         seven_zip_path = shutil.which('7z')
         cmd = [seven_zip_path, 'x', str(chm_path), f'-o{output_dir}', '-y']
         tool_used = '7z'


    if not cmd:
        logging.error("No suitable CHM extraction tool (7z or chmextract) found in PATH.")
        logging.error("Please install 7-Zip (Windows/Linux/macOS) or chmextract (Linux/macOS).")
        return False

    try:
        logging.info(f"Running command: {' '.join(cmd)}")
        # Run the command, capture output, check for errors
        result = subprocess.run(cmd, check=True, capture_output=True, text=True, encoding='utf-8', errors='ignore')
        logging.info(f"Extraction successful using {tool_used}.")
        # logging.debug(f"Extraction stdout:\n{result.stdout}") # Optional debug
        if result.stderr:
            logging.warning(f"Extraction stderr:\n{result.stderr}")
        return True
    except FileNotFoundError:
         logging.error(f"Extraction tool '{cmd[0]}' not found. Please ensure it's installed and in your PATH.")
         return False
    except subprocess.CalledProcessError as e:
        logging.error(f"Extraction failed with error code {e.returncode}.")
        logging.error(f"Command: {' '.join(e.cmd)}")
        logging.error(f"Stderr:\n{e.stderr}")
        logging.error(f"Stdout:\n{e.stdout}")
        return False
    except Exception as e:
        logging.error(f"An unexpected error occurred during extraction: {e}")
        return False

def html_to_text(html_content):
    """Converts HTML to plain text, attempting to retain structure."""
    h = html2text.HTML2Text()
    h.ignore_links = True
    h.ignore_images = True
    h.body_width = 0 # Don't wrap lines
    try:
        text = h.handle(html_content)
        # Basic cleaning: remove excessive newlines
        text = '\n'.join(line.strip() for line in text.splitlines() if line.strip())
        return text
    except Exception as e:
        logging.warning(f"html2text conversion failed: {e}")
        # Fallback: Very basic text extraction using BeautifulSoup
        try:
            soup = BeautifulSoup(html_content, 'html.parser')
            return soup.get_text(separator='\n', strip=True)
        except Exception as be:
            logging.error(f"BeautifulSoup fallback failed: {be}")
            return ""


def chunk_text(text, filename="<unknown>", chunk_size=500, overlap=50):
    """Chunks text into smaller pieces with overlap."""
    # Basic fixed-size chunking with overlap
    chunks = []
    start = 0
    text_len = len(text)
    while start < text_len:
        end = min(start + chunk_size, text_len)
        chunk = text[start:end].strip()
        if len(chunk) > 20: # Avoid very small/empty chunks
            chunks.append(chunk)
        next_start = start + chunk_size - overlap
        # Prevent infinite loop if step is non-positive or stuck
        if next_start <= start:
             next_start = start + 1
        start = next_start
        if start >= text_len:
             break
    # Add the very last part if missed and meaningful
    # last_part = text[start:].strip()
    # if start < text_len and len(last_part) > 20 and (not chunks or chunks[-1] != last_part):
    #     chunks.append(last_part)
    return chunks

# --- Main Execution ---
if __name__ == "__main__":
    # Load .env file from the parent directory (project root)
    dotenv_path = Path(__file__).resolve().parent.parent / '.env'
    logging.info(f"Loading environment variables from: {dotenv_path}")
    load_dotenv(dotenv_path=dotenv_path)

    parser = argparse.ArgumentParser(description="Index ETABS CHM documentation into ChromaDB using local embeddings.")
    parser.add_argument("--chm-file", required=True, help="Path to the ETABS .chm documentation file.")
    # Read config from .env or allow overrides via args
    parser.add_argument("--collection-name", default=os.getenv("CHROMA_COLLECTION_NAME", "etabs_docs_local"), help="ChromaDB collection name.")
    parser.add_argument("--chroma-host", default=os.getenv("CHROMA_HOST", "http://localhost:8000"), help="ChromaDB host URL (e.g., http://localhost:8000).")
    parser.add_argument("--model-name", default=os.getenv("LOCAL_EMBEDDING_MODEL", "Xenova/all-MiniLM-L6-v2"), help="Sentence Transformer model name (from HuggingFace).")
    parser.add_argument("--batch-size", type=int, default=50, help="Batch size for embedding and adding to ChromaDB.")
    parser.add_argument("--force-recreate", action='store_true', help="Delete the collection if it exists before indexing.")


    args = parser.parse_args()
    logging.info(f"Starting indexing process with config: {args}")

    # Validate CHM file path
    chm_file_path = Path(args.chm_file)
    if not chm_file_path.is_file():
        logging.error(f"CHM file not found at: {args.chm_file}")
        sys.exit(1)

    # Use a temporary directory for extracted files
    with tempfile.TemporaryDirectory() as temp_dir_str:
        temp_dir = Path(temp_dir_str)
        logging.info(f"Using temporary directory: {temp_dir}")

        # 1. Extract CHM
        if not extract_chm(chm_file_path, temp_dir):
            logging.error("Failed to extract CHM file. Exiting.")
            sys.exit(1)

        all_chunks_data = []
        file_counter = 0
        total_chunks_generated = 0

        # 2. Find HTML, Convert to Text, Chunk
        logging.info("Scanning temporary directory for HTML files and processing...")
        html_files_found = list(temp_dir.rglob('*.htm*'))
        if not html_files_found:
             logging.error(f"No *.htm / *.html files found in the extracted content at {temp_dir}. Check extraction.")
             sys.exit(1)

        logging.info(f"Found {len(html_files_found)} potential HTML files. Converting and chunking...")
        for html_file in html_files_found:
            file_counter += 1
            logging.debug(f"Processing extracted file {file_counter}/{len(html_files_found)}: {html_file.name}")
            try:
                # Try common encodings if utf-8 fails
                html_content = None
                for encoding in ['utf-8', 'iso-8859-1', 'windows-1252']:
                    try:
                        html_content = html_file.read_text(encoding=encoding)
                        break # Stop if successful
                    except UnicodeDecodeError:
                        continue # Try next encoding
                    except Exception as read_err: # Catch other file read errors
                        logging.warning(f"Could not read {html_file} with any encoding: {read_err}")
                        break
                if html_content is None:
                    logging.warning(f"Could not read {html_file} with any tried encoding. Skipping.")
                    continue

                # Basic check to skip likely non-content files (e.g., index pages)
                if '<title>index</title>' in html_content.lower() or '<frame' in html_content.lower():
                     logging.debug(f"Skipping likely index/frameset file: {html_file.name}")
                     continue

                text_content = html_to_text(html_content)

                if not text_content or len(text_content.strip()) < 30: # Skip empty or very short pages
                    logging.debug(f"Skipping short/empty content from: {html_file.name}")
                    continue

                chunks = chunk_text(text_content, filename=html_file.name, chunk_size=500, overlap=50) # Adjust chunk size/overlap
                source_name = html_file.relative_to(temp_dir).as_posix() # Use relative path as source identifier

                for i, chunk in enumerate(chunks):
                    chunk_id = f"{source_name}_chunk_{i}" # Generate unique ID
                    all_chunks_data.append({"id": chunk_id, "text": chunk, "metadata": {"source": source_name}})
                    total_chunks_generated += 1

            except Exception as e:
                logging.warning(f"Could not process {html_file}: {e}")

        if not all_chunks_data:
            logging.error("No processable content chunks generated after extraction and conversion.")
            sys.exit(1)
        logging.info(f"Generated {total_chunks_generated} chunks from {file_counter} processed HTML files.")

        # 3. Initialize Embedder (Local Sentence Transformer)
        logging.info(f"Loading sentence transformer model: {args.model_name} (this may take time)...")
        try:
            model = SentenceTransformer(args.model_name)
        except Exception as e:
             logging.error(f"Failed to load Sentence Transformer model '{args.model_name}'. Ensure it's a valid model name accessible by the library. Error: {e}")
             sys.exit(1)
        logging.info("Sentence transformer model loaded.")

        # 4. Initialize ChromaDB Client
        logging.info(f"Connecting to ChromaDB at {args.chroma_host}...")
        try:
            # Use HttpClient for connecting to a running server instance
            chroma_client = chromadb.HttpClient(host=args.chroma_host.replace("http://", "").split(":")[0],
                                                port=args.chroma_host.split(":")[-1])
            chroma_client.heartbeat() # Test connection
        except Exception as e:
            logging.error(f"Failed to connect to ChromaDB server at {args.chroma_host}. Is it running? Error: {e}")
            sys.exit(1)

        # 5. Get or Create/Recreate Collection
        try:
            if args.force_recreate:
                logging.warning(f"Force recreating collection '{args.collection_name}'. Deleting if exists...")
                try:
                    chroma_client.delete_collection(name=args.collection_name)
                    logging.info(f"Deleted existing collection '{args.collection_name}'.")
                except Exception:
                    logging.info(f"Collection '{args.collection_name}' did not exist or couldn't be deleted.")
            logging.info(f"Getting or creating collection '{args.collection_name}'...")
            collection = chroma_client.get_or_create_collection(
                 name=args.collection_name,
                 metadata={"hnsw:space": "cosine"} # Use cosine similarity
             )
            logging.info(f"Using collection: {args.collection_name}")
        except Exception as e:
             logging.error(f"Failed to get or create ChromaDB collection '{args.collection_name}'. Error: {e}")
             sys.exit(1)


        # 6. Embed and Add to ChromaDB (in batches)
        logging.info(f"Embedding and adding to ChromaDB in batches of {args.batch_size}...")
        added_count = 0
        failed_batches = 0
        num_batches = (len(all_chunks_data) + args.batch_size - 1) // args.batch_size

        for i in range(0, len(all_chunks_data), args.batch_size):
            batch_num = (i // args.batch_size) + 1
            batch = all_chunks_data[i : i + args.batch_size]
            ids = [item['id'] for item in batch]
            texts = [item['text'] for item in batch]
            metadatas = [item['metadata'] for item in batch]

            logging.info(f"Processing Batch {batch_num}/{num_batches}: Embedding {len(texts)} texts...")
            try:
                embeddings = model.encode(texts, show_progress_bar=False).tolist() # Generate embeddings

                logging.info(f"Adding batch {batch_num} ({len(ids)} items) to ChromaDB...")
                collection.add( # Add batch to collection
                    ids=ids,
                    embeddings=embeddings,
                    documents=texts,
                    metadatas=metadatas
                )
                added_count += len(ids)
                logging.info(f"Successfully added batch {batch_num}. Total added: {added_count}")

            except Exception as e:
                logging.error(f"Error processing or adding batch {batch_num}: {e}")
                failed_batches += 1

        logging.info("--- Indexing Complete ---")
        if failed_batches > 0:
             logging.warning(f"{failed_batches} batches encountered errors during processing.")
        try:
            final_count = collection.count()
            logging.info(f"Collection '{args.collection_name}' now contains {final_count} items.")
        except Exception as e:
            logging.error(f"Could not get final count from collection '{args.collection_name}'. Error: {e}")

    # Temporary directory is automatically cleaned up upon exiting the 'with' block
    logging.info("Temporary directory cleaned up.")