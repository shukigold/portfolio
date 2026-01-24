#!/bin/bash

# FTP Upload script for joshgold.design
# Uploads the built 'out' directory to the server via FTP (cPanel)

set -e

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: 'out' directory not found."
    echo "   Please run 'npm run build' first to create the build files."
    exit 1
fi

# Use Python FTP script for upload
if command -v python3 &> /dev/null; then
    echo "📤 Uploading via FTP..."
    python3 deploy-ftp.py
else
    echo "❌ Python 3 not found. Cannot upload files."
    echo "   Please install Python 3 or use an FTP client manually."
    exit 1
fi

