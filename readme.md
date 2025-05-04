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


Setup Guide for ETABS MCP Server with Local Embeddings
======================================================

Prerequisites
-------------

Before you begin, ensure you have the following installed:

-   **Node.js**: Version 18 or later recommended ([Download](https://nodejs.org/)).
-   **npm**: Usually included with Node.js.
-   **Python**: Version 3.9 or later recommended ([Download](https://www.python.org/)). Ensure `python` and `pip` are in your PATH.
-   **Docker**: Required to run the ChromaDB vector database ([Download Docker Desktop](https://www.docker.com/products/docker-desktop/)). Ensure the Docker daemon/service is running.
-   **ETABS Documentation File**: Your legally obtained `etabs.chm` (or similarly named) file.
-   **CHM Extraction Tool**: An external command-line tool capable of extracting .chm file contents. This script attempts to use `7z` (from 7-Zip) or `chmextract`.
    -   **Windows**: Install [7-Zip](https://www.7-zip.org/). Ensure `7z.exe` is added to your system's PATH during or after installation.
    -   **macOS**: Install via Homebrew:

        ```
        brew install p7zip chmextract

        ```

    -   **Linux (Debian/Ubuntu)**:

        ```
        sudo apt update && sudo apt install p7zip-full libchm-bin

        ```

    -   Verify the tool is callable from your terminal before proceeding.

Setup Instructions
------------------

### Clone the Repository

```
git clone https://github.com/<your-github-username>/etabs-mcp-server-local-embeddings.git
cd etabs-mcp-server-local-embeddings

```

Replace `<your-github-username>` with your actual username.

### Install Node.js Dependencies

```
npm install

```

### Setup Python Environment & Install Dependencies

```
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

# Stay in this activated environment for the indexing step!

# Go back to the project root when done
cd ..

```

Configuration
-------------

1.  **Copy Example Environment File**:\
    From the project root directory:

    ```
    cp .env.example .env

    ```

2.  **Edit .env**:\
    Open the `.env` file in your project root using a text editor and review:

    -   `CHROMA_COLLECTION_NAME`: Default `etabs_docs_local` is usually fine.
    -   `LOCAL_EMBEDDING_MODEL`: Default `Xenova/all-MiniLM-L6-v2` is recommended. Changing to other Hugging Face models requires re-indexing.
    -   `CHROMA_HOST`: Default `http://localhost:8000` matches the Docker command below. Ensure it's reachable from where you run the indexer.

Running Dependencies (ChromaDB)
-------------------------------

1.  **Start Docker Desktop**: Ensure the Docker application/service is running.
2.  **Start ChromaDB Container**:\
    From the project root directory:

    ```
    # Remove container if it exists from a previous run
    docker rm -f etabs_chroma_local

    # Run ChromaDB, mapping local data directory for persistence
    docker run -d -p 8000:8000 --name etabs_chroma_local\
      -v "$(pwd)/chroma_data:/chroma/chroma"\
      chromadb/chroma

    ```

    This starts ChromaDB detached (`-d`), maps port `8000`, names the container, and maps the local `chroma_data` folder for persistence.

Indexing Process (One-Time Setup)
---------------------------------

This step extracts your .chm file, processes the content, generates embeddings, and populates the ChromaDB database. Only needed once unless the ETABS documentation changes significantly.

1.  **Ensure Dependencies are Running**:

    -   Docker Desktop must be running.
    -   The `etabs_chroma_local` ChromaDB container must be started (use `docker start etabs_chroma_local` if stopped).
2.  **Activate Python Virtual Environment**:\
    If not active, navigate to `index_chm_py` and activate the `.venv`:

    ```
    source .venv/bin/activate  # macOS/Linux
    # or
    .venv\Scripts\activate.bat  # Windows Command Prompt

    ```

3.  **Run the Indexer Script**:\
    From the `index_chm_py` directory (with venv active), replace `<PATH_TO_YOUR_ETABS.CHM>` with the actual path:

    ```
    python indexer.py --chm-file "<PATH_TO_YOUR_ETABS.CHM>"

    ```

    -   Use quotes around the path if it contains spaces.
    -   Examples:
        -   Windows: `python indexer.py --chm-file "C:\Program Files\Computers and Structures\ETABS 21\etabs.chm"`
        -   macOS: `python indexer.py --chm-file "/Applications/ETABS.app/Contents/Resources/etabs.chm"`
        -   Linux: `python indexer.py --chm-file "/opt/CSI/ETABS/Documentation/etabs.chm"`
4.  **Wait**: This process may take minutes to hours. Monitor console output for progress and errors.

Running the MCP Server
----------------------

Once indexing is complete and ChromaDB is running:

1.  **Navigate to Project Root**:\
    Ensure your terminal is in the `etabs-mcp-server-local-embeddings` directory.

2.  **Build the Node.js Server** (if code changes were made):

    ```
    npm run build

    ```

3.  **Start the Server**:

    ```
    npm start

    ```

    Alternatively, for development with auto-reloading:

    ```
    npm run dev

    ```

    The server loads the embedding model (may take a moment initially) and prints `...running on stdio.` to the console's standard error output, indicating it's ready for an MCP client connection.

Connecting to a Client (Example: Claude Desktop)
------------------------------------------------

1.  **Locate/Create Claude Desktop Config**:

    -   Windows: `%APPDATA%\Claude\claude_desktop_config.json`
    -   macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
2.  **Edit the Config**:\
    Add an entry for your server in the `mcpServers` object with the absolute path to `build/server.js`:

    ```
    {
      "mcpServers": {
        "etabs-local-docs": {
          "command": "node",
          "args": [
            "YOUR_ABSOLUTE_PATH_TO_PROJECT/etabs-mcp-server-local-embeddings/build/server.js"
          ]
        }
      }
    }

    ```

    -   Replace with the actual path (use double backslashes `\\` for Windows).
    -   Example paths:
        -   Windows: `C:\\Users\\YourUser\\Projects\\etabs-mcp-server-local-embeddings\\build\\server.js`
        -   macOS: `/Users/youruser/Projects/etabs-mcp-server-local-embeddings/build/server.js`
        -   Linux: `/home/youruser/projects/etabs-mcp-server-local-embeddings/build/server.js`
3.  **Save and Restart**:\
    Save the config file, fully quit Claude Desktop (check system tray/menu bar), and reopen.

4.  **Verify**:\
    Look for the hammer icon in Claude Desktop. Click it to confirm the `search_etabs_docs` tool is listed.

Troubleshooting
---------------

### Indexing Fails

-   Check Python error messages.
-   Verify the .chm file path is correct.
-   Ensure the CHM extraction tool (`7z` or `chmextract`) is installed and in PATH. Test it manually on a file.
-   Confirm the ChromaDB container (`etabs_chroma_local`) is running (`docker ps`).
-   Ensure the Python virtual environment is activated and `pip install -r requirements.txt` was successful.

### Server Fails to Start (`npm start`)

-   Did `npm run build` complete without errors? Check terminal output.
-   Check for issues loading the embedding model (requires sufficient RAM/CPU).
-   Review terminal output for errors.

### Claude Desktop Connection Fails

-   Double-check the absolute path to `build/server.js` in `claude_desktop_config.json`. Ensure correct path separators.
-   Is Node.js installed and in PATH? Try the full path to `node.exe`/`node` in the config.
-   Did the server exit early? Run `npm start` manually to check for errors.
-   Is the ChromaDB container running? The server may crash if it can't connect.
-   Check Claude logs: In Developer settings, click "Open Logs Folder". Review `mcp.log` and `mcp-server-etabs-local-docs.log` for errors.

License
-------

This project is currently provided without an explicit open-source license. Be mindful of standard copyright laws. To distribute or modify this code significantly, consider adding an appropriate license (e.g., MIT, Apache 2.0) by creating a `LICENSE` file in the repository root.