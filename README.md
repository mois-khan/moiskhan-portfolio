# moiskhan.dev — Personal Portfolio

A minimal, scalable personal portfolio and project showcase for **Md. Mois Khan**, built with **Vite + React + TypeScript**, deployed at [moiskhan.dev](https://moiskhan.dev).

> CS undergrad @ Malla Reddy Engineering College, Hyderabad (2023–2027) · Full-stack developer · AI integrations · Open to internships & freelance

## What this is

This is the **single source of truth** for everything at `moiskhan.dev`. It includes:

- A personal portfolio (landing page, about, skills, achievements, contact)
- A projects showcase at `/projects`
- Live project embeds at `/projects/:slug` (each project is deployed separately and embedded via iframe)
- A blog at `/blog` and `/blog/:slug`

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Vite + React 18 | Fast dev experience, modern bundling |
| Language | TypeScript | Type safety across the entire codebase |
| Routing | TanStack Router | File-based, fully type-safe, scales well |
| Styling | Tailwind CSS v4 | Utility-first, consistent design system |
| Animation | Framer Motion | Smooth, production-grade animations |
| Deployment | TBD (Vercel recommended) | Easy custom domain + preview deployments |

## Project Structure

See [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for a full breakdown.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

- **New project** → Add an entry to `src/data/projects.ts`
- **New blog post** → Add a `.mdx` file to `src/content/blog/`
- **Update skills** → Edit `src/data/skills.ts`
- **Update achievements** → Edit `src/data/achievements.ts`

No component changes needed for content updates.

## Deployment

See [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) for step-by-step instructions including custom domain setup for `moiskhan.dev`.