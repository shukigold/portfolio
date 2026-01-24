#!/usr/bin/env python3
"""
FTP Deployment Script for Namecheap cPanel
Uploads the built Next.js site to the server via FTP
"""

import os
import sys
import ftplib
from pathlib import Path

# FTP connection details (update these for your Namecheap cPanel)
FTP_HOST = "ftp.joshgold.design"
FTP_PORT = 21  # Standard FTP port (cPanel usually uses 21)
FTP_USER = "joshpbon"
FTP_PASS = "s9h8@6tF8l6T^2x2"
REMOTE_PATH = "/public_html"

def upload_directory(ftp, local_dir, remote_dir):
    """Recursively upload a directory to FTP server"""
    local_path = Path(local_dir)
    
    # Change to remote directory, create if it doesn't exist
    try:
        ftp.cwd(remote_dir)
    except ftplib.error_perm:
        # Directory doesn't exist, try to create it
        try:
            ftp.mkd(remote_dir)
            ftp.cwd(remote_dir)
        except ftplib.error_perm:
            print(f"⚠️  Could not create/access {remote_dir}, trying root...")
            ftp.cwd("/")
    
    # Upload all files recursively
    for root, dirs, files in os.walk(local_dir):
        # Calculate relative path
        rel_path = os.path.relpath(root, local_dir)
        if rel_path == ".":
            remote_current = remote_dir
        else:
            remote_current = f"{remote_dir}/{rel_path}".replace("\\", "/")
        
        # Create remote directory if needed
        if rel_path != ".":
            try:
                ftp.cwd(remote_current)
            except ftplib.error_perm:
                # Try to create the directory
                try:
                    ftp.mkd(remote_current)
                    ftp.cwd(remote_current)
                except:
                    print(f"⚠️  Could not create directory {remote_current}")
                    continue
        
        # Upload files in current directory
        for file in files:
            local_file = os.path.join(root, file)
            remote_file = file
            
            try:
                print(f"📤 Uploading {local_file} -> {remote_current}/{remote_file}")
                with open(local_file, 'rb') as f:
                    ftp.storbinary(f'STOR {remote_file}', f)
                print(f"✅ Uploaded {remote_file}")
            except Exception as e:
                print(f"❌ Error uploading {remote_file}: {e}")

def main():
    print("🚀 Starting FTP deployment to joshgold.design...")
    
    # Check if out directory exists
    out_dir = Path("out")
    if not out_dir.exists():
        print("❌ Error: 'out' directory not found.")
        print("   Please run 'npm run build' first to create the build files.")
        sys.exit(1)
    
    print(f"📦 Found build directory: {out_dir}")
    
    # Connect to FTP server
    try:
        print(f"🔌 Connecting to {FTP_HOST}:{FTP_PORT}...")
        ftp = ftplib.FTP()
        ftp.connect(FTP_HOST, FTP_PORT)
        ftp.login(FTP_USER, FTP_PASS)
        print("✅ Connected successfully!")
        
        # Set binary mode for all file transfers
        ftp.voidcmd("TYPE I")
        
        # Upload the directory
        print(f"📤 Uploading files to {REMOTE_PATH}...")
        upload_directory(ftp, str(out_dir), REMOTE_PATH)
        
        # Close connection
        ftp.quit()
        print("✅ Deployment complete! Your site should be live at https://joshgold.design")
        
    except ftplib.error_perm as e:
        print(f"❌ FTP Error: {e}")
        print("   Please check your FTP credentials and permissions.")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

