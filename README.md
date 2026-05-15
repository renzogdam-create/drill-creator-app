# TrainerPro Academy

Phase 1 scaffold for a Next.js + Supabase + Prisma soccer coaching platform.

## Run locally

```bash
cp .env.example .env.local
# fill environment variables first
npm install
npx prisma generate
npx prisma db push
npm run dev
```

- App: http://localhost:3000
- Health: http://localhost:3000/api/health

## Publish to GitHub

Follow the exact instructions in `docs/github-setup.md`.
