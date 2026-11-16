# EduVerse AI — Starter Project

A responsive React + TypeScript starter for the EduVerse AI education platform.

## Run locally

1. Install Node.js (LTS) on your computer.
2. Extract this ZIP.
3. Open the extracted `eduverse-ai` folder in VS Code.
4. Open the VS Code terminal and run:

```bash
npm install
npm run dev
```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Included

- Responsive landing page and app navigation
- Student dashboard
- Board and textbook library starter
- AI Teacher chat interface (demo replies only)
- Notes and quiz starter pages
- 3D learning and virtual lab placeholder pages
- Admin overview starter
- Optional Supabase client configuration

## Important

This is a working **frontend starter/MVP scaffold**, not the completed production platform.
The AI Teacher currently uses demo responses. Connect a secure server-side AI endpoint before using a real AI provider.
Supabase authentication and database operations need project credentials, SQL tables, and Row Level Security policies.
Textbooks, videos, and 3D models must be supplied using content you have permission to use.
Never put private service-role keys or AI API keys in frontend code.

## Supabase setup

1. Create a Supabase project.
2. Copy `.env.example` to `.env`.
3. Add your Supabase project URL and anon key.
4. Review `src/lib/supabase.ts`.
5. Create database tables and Row Level Security policies before enabling student data features.

## Suggested next steps

1. Finish Supabase authentication.
2. Add board/class/subject content to the database.
3. Connect a secure AI backend.
4. Add licensed 3D assets and simulations.
5. Add admin permissions and test on real mobile devices.
