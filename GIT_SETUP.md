# Connecting to GitHub Repository

Follow these steps to connect your portfolio to your GitHub repo `shukigold/portfolio`:

## Step 1: Configure Git (if not already done)

If you haven't configured git on this machine, set your user name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 2: Create Initial Commit

```bash
cd ~/portfolio
git commit -m "Initial commit: Portfolio website with Next.js, TypeScript, Tailwind CSS, and Framer Motion"
```

## Step 3: Connect to GitHub Remote

### Option A: If the repository already exists on GitHub

```bash
git remote add origin https://github.com/shukigold/portfolio.git
```

### Option B: If you need to create a new repository on GitHub

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Choose public or private
4. **Don't** initialize with README (we already have one)
5. Click "Create repository"
6. Then run:

```bash
git remote add origin https://github.com/shukigold/portfolio.git
```

## Step 4: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

If you're using SSH instead of HTTPS:

```bash
git remote add origin git@github.com:shukigold/portfolio.git
git branch -M main
git push -u origin main
```

## Troubleshooting

- **Authentication issues**: Make sure you're authenticated with GitHub (use GitHub CLI `gh auth login` or set up SSH keys)
- **Repository exists**: If the repo already exists with files, you may need to pull first or force push (be careful!)
- **Branch name**: The default branch might be `master` - use `git branch -M main` to rename

## Future Updates

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

