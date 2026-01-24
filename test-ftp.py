#!/usr/bin/env python3
"""
Test FTP connection for Namecheap cPanel
Tests the FTP connection without uploading files
"""

import ftplib
import sys

# FTP connection details
FTP_HOST = "ftp.joshgold.design"
FTP_PORT = 21  # Standard FTP port (cPanel usually uses 21)
FTP_USER = "joshpbon"
FTP_PASS = "s9h8@6tF8l6T^2x2"
REMOTE_PATH = "/public_html"

def test_connection():
    print("🔌 Testing FTP connection to Namecheap cPanel...")
    print(f"   Host: {FTP_HOST}")
    print(f"   Port: {FTP_PORT}")
    print(f"   User: {FTP_USER}")
    print()
    
    try:
        print("📡 Connecting to FTP server...")
        ftp = ftplib.FTP()
        ftp.connect(FTP_HOST, FTP_PORT, timeout=10)
        print("✅ Connected to server!")
        
        print("🔐 Attempting login...")
        ftp.login(FTP_USER, FTP_PASS)
        print("✅ Login successful!")
        
        print(f"📁 Checking remote directory: {REMOTE_PATH}")
        try:
            ftp.cwd(REMOTE_PATH)
            print(f"✅ Successfully accessed {REMOTE_PATH}")
            
            # List current directory contents
            print("\n📋 Current directory contents:")
            files = []
            ftp.retrlines('LIST', files.append)
            for line in files[:10]:  # Show first 10 items
                print(f"   {line}")
            if len(files) > 10:
                print(f"   ... and {len(files) - 10} more items")
                
        except ftplib.error_perm as e:
            print(f"⚠️  Could not access {REMOTE_PATH}: {e}")
            print("   Trying root directory...")
            ftp.cwd("/")
            print("✅ Root directory accessible")
        
        # Get current working directory
        pwd = ftp.pwd()
        print(f"\n📍 Current working directory: {pwd}")
        
        # Test write permissions
        print("\n✍️  Testing write permissions...")
        try:
            # Try to create a test file (we'll delete it immediately)
            test_file = ".ftp_test_write_permission"
            test_content = b"test"
            ftp.storbinary(f'STOR {test_file}', test_content)
            print("✅ Write permission confirmed!")
            # Try to delete the test file
            try:
                ftp.delete(test_file)
                print("✅ Test file cleaned up")
            except:
                print("⚠️  Could not delete test file (not critical)")
        except Exception as e:
            print(f"⚠️  Write test failed: {e}")
            print("   You may not have write permissions, but connection works")
        
        ftp.quit()
        print("\n✅ FTP connection test successful!")
        print("   Ready to deploy!")
        return True
        
    except ftplib.error_perm as e:
        print(f"❌ FTP Authentication Error: {e}")
        print("   Please check your username and password.")
        return False
    except ftplib.all_errors as e:
        print(f"❌ FTP Connection Error: {e}")
        print("   Please check:")
        print("   - Host and port are correct")
        print("   - Your internet connection")
        print("   - Firewall settings")
        return False
    except Exception as e:
        print(f"❌ Unexpected Error: {e}")
        return False

if __name__ == "__main__":
    success = test_connection()
    sys.exit(0 if success else 1)

