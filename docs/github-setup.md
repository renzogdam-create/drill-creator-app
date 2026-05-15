# Exact Guide: Publish and Run TrainerPro Academy

Use this guide exactly as written to get the project on GitHub and running locally.

## A) Prerequisites (one-time)

- Git installed (`git --version`)
- Node.js 20+ and npm (`node -v`, `npm -v`)
- GitHub account
- Supabase account

---

## B) Create GitHub repository

1. Open: https://github.com/new
2. Repository name: `trainerpro-academy`
3. Visibility: choose Public or Private
4. **Important:** keep “Add a README” unchecked
5. Click **Create repository**

After creation, copy your repo URL, for example:
- SSH: `git@github.com:YOUR_USERNAME/trainerpro-academy.git`
- HTTPS: `https://github.com/YOUR_USERNAME/trainerpro-academy.git`

---

## C) Push current project to GitHub

Run these commands from the project root:

```bash
cd /path/to/drill-creator-app
git status
git remote remove origin 2>/dev/null || true
git remote add origin git@github.com:YOUR_USERNAME/trainerpro-academy.git
# If you prefer HTTPS:
# git remote add origin https://github.com/YOUR_USERNAME/trainerpro-academy.git

git branch -M main
git push -u origin main
```

If GitHub asks for authentication:
- SSH: ensure your SSH key is added to GitHub.
- HTTPS: use a GitHub Personal Access Token as password.

---

## D) Verify code on GitHub

1. Open `https://github.com/YOUR_USERNAME/trainerpro-academy`
2. Confirm these paths exist:
   - `app/(dashboard)/page.tsx`
   - `prisma/schema.prisma`
   - `docs/architecture.md`
3. Open **Commits** tab and verify latest commit is present.

---

## E) Create Supabase project + database URL

1. Create a new project at https://supabase.com/dashboard
2. In **Project Settings → Database**, copy the Postgres connection string
3. In **Project Settings → API**, copy:
   - `Project URL`
   - `anon public` key

---

## F) Configure local environment

From project root:

```bash
cp .env.example .env.local
```

Fill `.env.local` with real values:

```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

---

## G) Install and run locally

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

Open:
- App: `http://localhost:3000`
- Health check: `http://localhost:3000/api/health`

---

## H) Optional deploy to Vercel from GitHub

1. Go to https://vercel.com/new
2. Import `trainerpro-academy` repo
3. Add environment variables from `.env.local`
4. Deploy
5. Add Vercel URL in Supabase Auth redirect settings

---

## I) Troubleshooting

- `npm install` fails with 403: check corporate/proxy registry restrictions.
- Prisma connection error: verify `DATABASE_URL` and database is active.
- Auth callback issues: confirm Supabase redirect URLs include local and Vercel URLs.
