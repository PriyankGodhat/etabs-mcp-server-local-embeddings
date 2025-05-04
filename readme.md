# ETABS Documentation Assistant MCP Server (Local Embeddings)

This project provides a Model Context Protocol (MCP) server that allows AI models (like Anthropic's Claude via Claude Desktop) to perform semantic searches on **user-provided** ETABS documentation. It uses local sentence transformer models for embedding generation (via `@xenova/transformers.js`) and ChromaDB for vector storage, making it free to run after initial setup.

**Core Functionality:**

*   Exposes an MCP tool named `search_etabs_docs`.
*   Accepts a natural language query about ETABS.
*   Finds the most relevant sections in the user's indexed ETABS documentation using semantic similarity.
*   Returns text snippets from the documentation (with source file references) to the MCP client (e.g., Claude Desktop) to be used as context by the AI model.

---

**🚨 IMPORTANT DISCLAIMERS 🚨**

*   **NO ETABS DOCUMENTATION INCLUDED:** This repository **DOES NOT** contain any ETABS documentation files. ETABS documentation is proprietary software owned by Computers & Structures, Inc. (CSI).
*   **USER MUST PROVIDE DOCUMENTATION:** To use this server, you **MUST** have a legally obtained copy of the ETABS documentation, typically in `.chm` format.
*   **NO AFFILIATION:** This project is not affiliated with, endorsed by, or sponsored by Computers & Structures, Inc. (CSI).
*   **USE AT YOUR OWN RISK:** This software is provided "as-is" without warranty. Ensure you comply with all relevant software licenses for ETABS and its documentation.

---

## Architecture Overview

This project consists of two main parts:

1.  **Python Indexer (`index_chm_py/`):** A script that extracts content from your `.chm` ETABS documentation file, converts it to text, chunks it, generates embeddings locally using Sentence Transformers, and stores everything in a local ChromaDB database. **This needs to be run once initially.**
2.  **Node.js MCP Server (`src/`):** The actual MCP server that runs persistently. It receives search queries via the `search_etabs_docs` tool, generates an embedding for the query locally, queries the ChromaDB database for similar chunks, and returns the results to the connected MCP client.

```mermaid
graph LR
    subgraph "User's Machine"
        U[User] --> Client[MCP Client e.g., Claude Desktop]
        Client <-->|MCP (stdio)| Server[Node.js MCP Server]
        Server <-->|HTTP| DB[(ChromaDB via Docker)]
        User -- Provides --> CHM[ETABS .chm File]
        CHM -- Used by --> Indexer[Python Indexer Script]
        Indexer --> DB
    end
```

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** Version 18 or later recommended ([Download](https://nodejs.org/)).
- **npm:** Usually included with Node.js.
- **Python:** Version 3.9 or later recommended ([Download](https://www.python.org/)). Ensure `python` and `pip` are in your PATH.
- **Docker:** Required to easily run the ChromaDB vector database ([Download Docker Desktop](https://www.docker.com/products/docker-desktop/)). Ensure the Docker daemon/service is running.
- **ETABS Documentation File:** Your legally obtained `etabs.chm` (or similarly named) file.
- **CHM Extraction Tool:** An external command-line tool capable of extracting `.chm` file contents. This script attempts to use `7z` (from 7-Zip) or `chmextract`.
  - **Windows:** Install 7-Zip. Ensure `7z.exe` is added to your system's PATH environment variable during or after installation.
  - **macOS:** Install via Homebrew: `brew install p7zip chmextract` (provides both `7z` and `chmextract`).
  - **Linux (Debian/Ubuntu):** `sudo apt update && sudo apt install p7zip-full libchm-bin` (provides `7z` and `chmextract`).

(Verify the tool is callable from your terminal before proceeding).

---

## Setup Instructions

### Clone the Repository:

```bash
git clone https://github.com/<your-github-username>/etabs-mcp-server-local-embeddings.git
cd etabs-mcp-server-local-embeddings
```
(Replace `<your-github-username>` with your actual username)

### Install Node.js Dependencies:

```bash
npm install
```

### Setup Python Environment & Install Dependencies:

```bash
# Navigate to the Python indexer directory
cd index_chm_py

# Create a Python virtual environment
python -m venv .venv

# Activate the virtual environment
# Windows (Command Prompt): .venv\Scripts\activate.bat
# Windows (PowerShell):   .venv\Scripts\Activate.ps1
# macOS/Linux:            source .venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# IMPORTANT: Stay in this activated environment for the indexing step!

# Go back to the project root when done with Python setup/indexing
# cd ..
```

---

## Configuration

Copy Example Environment File: From the project root directory:

```bash
cp .env.example .env
```

Edit `.env`: Open the `.env` file in your project root using a text editor.

- Review the `CHROMA_COLLECTION_NAME`. The default `etabs_docs_local` is usually fine.
- Review the `LOCAL_EMBEDDING_MODEL`. `Xenova/all-MiniLM-L6-v2` is a good default. You can change this to other compatible models from Hugging Face (requires re-indexing if changed later).
- Review `CHROMA_HOST`. The default `http://localhost:8000` matches the Docker command below. Make sure this is reachable from where you run the indexer.

---

## Running Dependencies (ChromaDB)

Start Docker Desktop: Ensure the Docker application/service is running.

Start ChromaDB Container: Open a terminal in the project root directory and run:

```bash
# Remove container if it exists from a previous run
docker rm -f etabs_chroma_local

# Run ChromaDB, mapping local data directory for persistence
# (Use ` ` for line continuation in PowerShell if needed)
docker run -d -p 8000:8000 --name etabs_chroma_local \
  -v "$(pwd)/chroma_data:/chroma/chroma" \
  chromadb/chroma
```

This starts ChromaDB detached (`-d`), maps port 8000, names the container, and maps the local `chroma_data` folder for persistence.

---

## Indexing Process (One-Time Setup)

This step extracts your `.chm` file, processes the content, generates embeddings, and populates the ChromaDB database. You only need to do this once, unless your ETABS documentation file changes significantly.

- **Ensure Dependencies are Running:** Docker Desktop must be running, and the `etabs_chroma_local` ChromaDB container must be started (use `docker start etabs_chroma_local` if previously stopped).
- **Activate Python Virtual Environment:** If not already active, navigate to `index_chm_py` and activate the `.venv` (`source .venv/bin/activate` or Windows equivalent).
- **Run the Indexer Script:** Execute the following command from within the `index_chm_py` directory (while the venv is active), replacing `<PATH_TO_YOUR_ETABS.CHM>` with the actual, full path to your documentation file:

```bash
python indexer.py --chm-file "<PATH_TO_YOUR_ETABS.CHM>"
```

Use quotes around the path, especially if it contains spaces.

- **Example (Windows):**
  ```bash
  python indexer.py --chm-file "C:\Program Files\Computers and Structures\ETABS 21\etabs.chm"
  ```
- **Example (macOS):**
  ```bash
  python indexer.py --chm-file "/Applications/ETABS.app/Contents/Resources/etabs.chm"
  ```
- **Example (Linux):**
  ```bash
  python indexer.py --chm-file "/opt/CSI/ETABS/Documentation/etabs.chm"
  ```

Wait: This process can take time (minutes to hours). Monitor the console output for progress and errors.

---

## Running the MCP Server

Once indexing is complete and ChromaDB is running:

- **Navigate to Project Root:** Ensure your terminal is in the main `etabs-mcp-server-local-embeddings` directory.
- **Build the Node.js Server (if you made code changes):**

  ```bash
  npm run build
  ```

- **Start the Server:**

  ```bash
  npm start
  ```

  Alternatively, for development with auto-reloading: `npm run dev`

The server will load the embedding model (this might take a moment the very first time you run `npm start` or `npm run dev` after cloning) and then print `...running on stdio.` to the console's standard error output. It is now waiting for an MCP client connection.

---

## Connecting to a Client (Example: Claude Desktop)

- **Locate/Create Claude Desktop Config:**
  - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
  - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

- **Edit the Config:** Add an entry for your server within the `mcpServers` object, using the absolute path to the compiled `build/server.js` file.

```json
{
  "mcpServers": {
    // Add other servers here if you have them
    "etabs-local-docs": {
      "command": "node", // Or full path to node.exe if needed
      "args": [
        // --- REPLACE WITH YOUR ABSOLUTE PATH ---
        // Windows Example: "C:\\Users\\YourUser\\Projects\\etabs-mcp-server-local-embeddings\\build\\server.js"
        // macOS Example: "/Users/youruser/Projects/etabs-mcp-server-local-embeddings/build/server.js"
        // Linux Example: "/home/youruser/projects/etabs-mcp-server-local-embeddings/build/server.js"
        "YOUR_ABSOLUTE_PATH_TO_PROJECT/etabs-mcp-server-local-embeddings/build/server.js"
      ]
      // "env": {} // Environment variables needed by the Node.js server can be added here if not using .env properly
    }
  }
}
```

(Remember to use double backslashes `\\` on Windows paths within the JSON string)

Save the config file.

Restart Claude Desktop completely. Ensure it's fully quit (check system tray/menu bar) before reopening.

**Verify:** Look for the hammer icon <img src="https://mintlify.s3.us-west-1.amazonaws.com/mcp/images/claude-desktop-mcp-hammer-icon.svg" style="display: inline; margin: 0; height: 1.3em;" /> in Claude Desktop. Click it to confirm your `search_etabs_docs` tool is listed.

---

## Troubleshooting

### Indexing Fails:

- Check Python error messages.
- Verify the `.chm` file path is correct.
- Ensure the CHM extraction tool (`7z` or `chmextract`) is installed correctly and in your system's PATH. Try running the tool manually from the command line on a test file.
- Confirm the ChromaDB container (`etabs_chroma_local`) is running (`docker ps`).
- Make sure the Python virtual environment is activated and `pip install -r requirements.txt` was successful.

### Server Fails to Start (`npm start`):

- Did `npm run build` complete without errors? Check the terminal output.
- Could be an issue loading the embedding model (requires sufficient RAM/CPU). Check terminal output for errors.

### Claude Desktop Connection Fails ("failed" status in Settings > Developer):

- Double-check the absolute path to `build/server.js` in `claude_desktop_config.json`. Ensure correct path separators (`\\` for Windows).
- Is Node.js installed and in the PATH? Try using the full path to `node.exe`/`node` in the command field of the config.
- Did the server script exit early? Try `npm start` manually in the terminal to see if it stays running or prints errors.
- Is the ChromaDB container running? The Node.js server might crash if it can't connect.
- Check Claude logs: Click "Open Logs Folder" in Claude's Developer settings. Look at `mcp.log` and `mcp-server-etabs-local-docs.log` (or your server name). `console.error` messages from your Node.js script appear here.

---

## License

This project is currently provided without an explicit open-source license. Please be mindful of standard copyright laws. If you intend to distribute or modify this code significantly, consider adding an appropriate open-source license (e.g., MIT, Apache 2.0) by creating a LICENSE file in the repository root.

Remember that any license you choose applies only to the code in this repository, not to the ETABS documentation itself.

--- 