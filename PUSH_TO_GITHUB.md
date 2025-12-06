# Push to GitHub - Authentication Required

Your portfolio is ready to push! You just need to authenticate with GitHub first. Here are your options:

## ✅ Recommended: Use GitHub CLI (Easiest)

If you have GitHub CLI installed:

```bash
cd ~/portfolio
gh auth login
git push -u origin main
```

## Option 2: Use Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Or visit: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Push"
4. Select scopes: at minimum check `repo`
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

Then push using the token as your password:

```bash
cd ~/portfolio
git push -u origin main
# Username: shukigold
# Password: [paste your token here]
```

## Option 3: Switch to SSH

1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "mail@joshgold.design"
# Press Enter to accept default location
# Optionally set a passphrase
```

2. Add SSH key to GitHub:
```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
# Copy the output, then go to:
# https://github.com/settings/ssh/new
# Paste the key and save
```

3. Update remote to use SSH:
```bash
cd ~/portfolio
git remote set-url origin git@github.com:shukigold/portfolio.git
git push -u origin main
```

## Quick Status Check

Your repository is already set up:
- ✅ Git initialized
- ✅ Remote added: https://github.com/shukigold/portfolio.git
- ✅ Files committed locally
- ⏳ Just need to authenticate and push

After authentication, run:
```bash
cd ~/portfolio
git push -u origin main
```

