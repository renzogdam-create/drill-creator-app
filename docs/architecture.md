# TrainerPro Academy — Architecture (MVP to Scale)

## 1) Recommended Folder Structure

- `app/` App Router pages + API routes
- `components/` reusable UI + layout
- `lib/` integrations, validations, server actions
- `prisma/` schema and migrations
- `docs/` project documentation

## 2) Prisma Schema

The complete schema is in `prisma/schema.prisma` with all requested entities and enums.

## 3) Main Routes/Pages

`/`, `/annual-plan`, `/mesocycles`, `/microcycles`, `/training-sessions`, `/drills`, `/game-sheets`, `/players`, `/squad`, `/concepts`, `/reports`, `/settings`, `/auth/sign-in`.

## 4) Component Structure

- `components/layout/*`: app shell, sidebar, topbar.
- `components/dashboard/*`: dashboard widgets.
- `components/ui/*`: shadcn-style primitives.

## 5) Database Relationships

User → Teams → Players/GameSheets/AnnualPlans → Mesocycles → Microcycles → TrainingSessions → SessionBlocks, with Drill + PlayerSelection linked to sessions and drill context.

## 6) Free Deployment Setup (Vercel + Supabase)

1. Create Supabase project (free tier).
2. Configure Postgres + auth keys.
3. Add env vars in local and Vercel.
4. `npx prisma db push`
5. Deploy repo to Vercel.
6. Configure Supabase auth redirect URLs.

## 7) Phase 1 Completed

- Next.js + TS scaffold files
- Tailwind setup
- Prisma schema
- Supabase helper
- Dashboard shell
- health API route
