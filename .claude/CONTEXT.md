# Claude Code — Project Context

Read this before doing anything in this repo.

---

## What this project is

Personal portfolio and project showcase for **Mois Khan** at `moiskhan.dev`.

Built with: **Vite + React 18 + TypeScript + TanStack Router + Tailwind CSS v4 + Framer Motion**

---

## What you must read before coding

| File | Read when |
|---|---|
| `docs/ARCHITECTURE.md` | Always — folder structure, routing, data flow |
| `docs/SYSTEM_DESIGN.md` | Before writing any component or logic |
| `docs/STYLE_GUIDE.md` | Before writing any UI |
| `docs/ADDING_PROJECTS.md` | When adding or modifying projects |
| `docs/DEPLOYMENT.md` | When touching build config or deploy setup |

---

## Key rules (non-negotiable)

1. **Never hardcode content in components.** All projects, skills, achievements, and personal info live in `src/data/*.ts`. Components read from there.

2. **TanStack Router only.** No `react-router-dom`. Routes live in `src/routes/` using file-based conventions.

3. **Dark theme only.** Use CSS variables from `src/styles/globals.css`. No hardcoded hex values in components.

4. **TypeScript strict.** No `any`. Define types in `src/types/index.ts`.

5. **Framer Motion for animations.** Follow the exact animation patterns in `docs/STYLE_GUIDE.md`.

6. **Do not install new packages** without confirming. Check if it can be done with Tailwind, Framer, or native APIs first.

---

## Site sections

| Route | Component | Data source |
|---|---|---|
| `/` | `src/routes/index.tsx` | All `src/data/` files |
| `/projects` | `src/routes/projects/index.tsx` | `src/data/projects.ts` |
| `/projects/:slug` | `src/routes/projects/$slug.tsx` | `src/data/projects.ts` |
| `/blog` | `src/routes/blog/index.tsx` | `src/content/blog/*.mdx` |
| `/blog/:slug` | `src/routes/blog/$slug.tsx` | `src/content/blog/*.mdx` |

Homepage sections (in order): Hero → About → Skills → Featured Projects → Achievements → Contact

---

## Types reference

All shared types are in `src/types/index.ts`. Key ones:

```ts
type Project = {
  slug: string
  title: string
  description: string
  longDescription: string
  liveUrl: string
  repoUrl?: string
  stack: string[]
  tags: string[]
  featured: boolean
  coverImage: string
  status: "live" | "wip" | "archived"
  year: number
}

type Achievement = {
  title: string
  event: string
  date: string
  description: string
  position: string       // "1st Place", "Winner", etc.
  link?: string
}

type Skill = {
  category: string
  items: string[]
}
```

---

## Current status

This is a **fresh project**. Nothing has been built yet. Start from scratch following the architecture above.

When initializing the project, use:
```bash
npm create vite@latest . -- --template react-ts
npm install @tanstack/react-router @tanstack/router-vite-plugin
npm install tailwindcss @tailwindcss/vite
npm install framer-motion
```

---

## Owner

**Md. Mois Khan** — CS undergrad & full-stack developer (Batch 2027, Malla Reddy Engineering College, Hyderabad)  
Domain: `moiskhan.dev`  
Email: `contact@moiskhan.dev`  
GitHub: `https://github.com/mois-khan`  
LinkedIn: `https://linkedin.com/in/mois-khan`  
Location: Hyderabad, India  
Available for: Internships, Freelance, Full-time (post-graduation)