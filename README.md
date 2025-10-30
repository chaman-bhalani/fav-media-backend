# fav-media-backend

Simple TypeScript + Express backend using Prisma.  
This README explains how to run locally, manage the database with Prisma, and deploy to Render.

## Requirements

- Node.js >= 18 (Node 22 used in CI)
- npm
- A database (SQLite for local development or Postgres/MySQL/etc. for production)

## Environment

Create a `.env` file in the project root with at least:

DATABASE_URL="file:./dev.db" # SQLite example

# or

# DATABASE_URL="postgres://USER:PASS@HOST:5432/DBNAME"

Do NOT commit production credentials to git. Use the hosting provider's environment variables instead.

## Scripts (package.json)

- `npm run dev` — start dev server with tsx (loads env via dotenv)
- `npm run build` — compile TypeScript to `dist/`
- `npm start` — run compiled server (`dist/index.js`)
- `postinstall` — runs `prisma generate` after install (requires DATABASE_URL)
- `render-build` — helper: runs migrations then builds

## Local development

1. Install (including dev deps):
   - Windows PowerShell:
     ```powershell
     npm ci --include=dev
     ```
2. Ensure `.env` exists (see above).
3. Generate Prisma client:
   ```powershell
   npx prisma generate
   ```
4. Apply migrations (local dev):
   ```powershell
   npx prisma migrate dev --name init
   ```
   or if you want to deploy existing migrations:
   ```powershell
   npx prisma migrate deploy
   ```
5. Start in dev mode:
   ```powershell
   npm run dev
   ```
6. Build and run production locally:
   ```powershell
   npm run build
   npm start
   ```

## Prisma notes

- Prisma schema: `prisma/schema.prisma`
- Migrations: `prisma/migrations/`
- `postinstall` runs `prisma generate` so the client exists after `npm install` — ensure `DATABASE_URL` is set during install (CI / hosting).
- If you encounter the `@prisma/client did not initialize yet` error, run `npx prisma generate` after setting `DATABASE_URL`.

## API (endpoints)

The project exposes the entries routes under `/entries`. Typical endpoints include:

- GET /entries — list entries
- GET /entries/:id — get one entry
- POST /entries — create entry (body validated)
- PUT /entries/:id — update entry
- DELETE /entries/:id — delete entry

Request/response shapes follow the Zod validations in `src/validations/entry.ts`. Check that file for exact fields and validation rules.

## Deploying to Render

1. Set environment variables in the Render service:
   - `DATABASE_URL` (production DB)
2. Recommended Build Command (ensure dev deps for build/migrations):
   ```
   npm ci --include=dev && npm run render-build
   ```
   - `render-build` runs migrations and then `npm run build`.
3. Start Command:
   ```
   npm start
   ```
4. Notes:
   - Ensure `prisma.config.js` is present (JS config) so Prisma CLI can load it at build time. (A TypeScript `prisma.config.ts` can fail unless you run the TypeScript loader.)
   - If `postinstall` runs `prisma generate`, Render must have `DATABASE_URL` available at install time.
   - If you prefer not to install dev dependencies on Render, move `prisma` and `@prisma/client` to `dependencies` or run `prisma generate` during the build step while dev deps are available.

## Troubleshooting

- "Cannot find module 'prisma/config'" — ensure `prisma.config.js` exists (JS) or configure Prisma CLI to run with ts-node.
- "Cannot find module 'dist/index.js'" — run `npm run build` to produce `dist/` and confirm `tsconfig.json` has `"outDir": "./dist"` and `"rootDir": "./src"`.
- Prisma errors about missing DATABASE_URL — set env var before running `npx prisma generate` / migrations.

## Project structure

- src/ — TypeScript source
  - index.ts — app entry (loads dotenv)
  - prismaClient.ts — Prisma client instance
  - routes/entries.ts — entries routes
  - validations/entry.ts — Zod validation
- prisma/ — Prisma schema & migrations
- tsconfig.json — TypeScript config
- package.json — scripts & dependencies

