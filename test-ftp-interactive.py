#!/usr/bin/env python3
"""
Interactive FTP connection test for Namecheap cPanel
Allows you to test different credentials
"""

import ftplib
import getpass
import sys

FTP_HOST = "ftp.joshgold.design"
FTP_PORT = 21

def test_connection(username, password):
    try:
        print(f"\n🔌 Testing connection with username: {username}")
        ftp = ftplib.FTP()
        ftp.connect(FTP_HOST, FTP_PORT, timeout=10)
        ftp.login(username, password)
        
        print("✅ Login successful!")
        
        # Try to access public_html
        try:
            ftp.cwd("/public_html")
            print("✅ Successfully accessed /public_html")
        except:
            print("⚠️  Could not access /public_html, but connection works")
        
        pwd = ftp.pwd()
        print(f"📍 Current directory: {pwd}")
        
        ftp.quit()
        return True
    except ftplib.error_perm as e:
        print(f"❌ Authentication failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    print("🔌 Interactive FTP Connection Test")
    print("=" * 40)
    
    # Try default credentials first
    default_user = "joshpbon"
    default_pass = "zowzoT-zobma6-cywzab"
    
    print(f"\n1️⃣  Testing default credentials...")
    if test_connection(default_user, default_pass):
        print("\n✅ Default credentials work!")
        sys.exit(0)
    
    # Try with @domain format
    print(f"\n2️⃣  Trying username with @domain format...")
    if test_connection(f"{default_user}@joshgold.design", default_pass):
        print("\n✅ Credentials with @domain format work!")
        sys.exit(0)
    
    # Interactive mode
    print("\n" + "=" * 40)
    print("Default credentials didn't work.")
    print("Please enter your FTP credentials:")
    print()
    
    username = input("FTP Username: ").strip()
    password = getpass.getpass("FTP Password: ")
    
    if test_connection(username, password):
        print("\n✅ These credentials work!")
        print(f"\nUpdate deploy-ftp.py with:")
        print(f'FTP_USER = "{username}"')
        print(f'FTP_PASS = "{password}"')
    else:
        print("\n❌ These credentials also failed.")
        print("Please check your cPanel FTP settings.")

