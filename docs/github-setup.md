# Publish TrainerPro Academy to GitHub

Because this environment has no GitHub remote configured, use these steps from your machine (or add a remote here) to publish the code.

## 1) Create a GitHub repository

- Go to https://github.com/new
- Repository name: `trainerpro-academy` (or your preferred name)
- Visibility: Public or Private
- Do **not** initialize with README (this repo already has commits)

## 2) Add remote and push

Run in this repo root:

```bash
git remote add origin git@github.com:<YOUR_GITHUB_USERNAME>/trainerpro-academy.git
# or HTTPS:
# git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/trainerpro-academy.git

git branch -M main
git push -u origin main
```

## 3) Verify on GitHub

- Open your repo URL.
- Confirm files like `prisma/schema.prisma`, `app/`, and `docs/architecture.md` are visible.

## 4) Optional: connect to Vercel

- Import the GitHub repo in Vercel.
- Add env vars from `.env.example`.
- Deploy.

## 5) Optional: open a pull request workflow

For future work:

```bash
git checkout -b feature/phase-2
# make changes
git add .
git commit -m "Phase 2: core CRUD and validations"
git push -u origin feature/phase-2
```

Then open a PR on GitHub.
