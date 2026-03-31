# System Design

This document explains **why** each major decision was made. Claude Code should follow these decisions consistently and not deviate unless explicitly told to.

---

## 1. Framework: Vite + React 18 + TypeScript

**Decision:** Use Vite as the build tool with React 18 and TypeScript strict mode enabled.

**Why:**
- Vite gives near-instant HMR and fast cold starts
- React 18 brings concurrent features for smoother animations
- TypeScript strict mode catches errors early and makes the data-driven architecture safe
- Industry standard for modern React projects — easy to onboard collaborators

**Rules for Claude:**
- Always use `.tsx` for files with JSX, `.ts` for pure logic
- Never use `any` — define proper types in `src/types/index.ts`
- Use named exports for components, default exports only for route files (TanStack Router convention)

---

## 2. Routing: TanStack Router (File-based)

**Decision:** Use TanStack Router v1 with file-based routing.

**Why over React Router:**
- Fully type-safe — route params, search params, and loaders are all typed
- File-based routing keeps routes predictable and auto-generates the route tree
- Scales cleanly as more routes are added (blog, projects, future sections)
- Loader pattern keeps data fetching co-located with routes

**Rules for Claude:**
- Route files live in `src/routes/`
- Dynamic routes use the `$param` convention (e.g., `$slug.tsx`)
- Never use `useNavigate` with raw strings — always use typed route helpers
- `routeTree.gen.ts` is auto-generated — never manually edit it

---

## 3. Content: Data-driven via `src/data/`

**Decision:** All site content (projects, skills, achievements, personal info) lives in TypeScript files under `src/data/`, not hardcoded inside components.

**Why:**
- Adding a new project means editing one file, not touching components
- Data is type-checked, so malformed entries are caught at build time
- Easy to migrate to a CMS later if needed (just swap the import source)

**Rules for Claude:**
- Never hardcode project names, URLs, or descriptions inside components
- Always read from `src/data/` files
- When generating sample/placeholder data, match the types in `src/types/index.ts`

---

## 4. Project Hosting: Separate Repos + iframe Embed

**Decision:** Each project lives in its own GitHub repo, deployed independently. The portfolio embeds them via `<iframe>` at `/projects/:slug`.

**Why:**
- Projects can use completely different stacks (Next.js, SvelteKit, plain HTML, etc.)
- Failures in one project don't affect the portfolio
- Projects can be updated independently without touching the portfolio repo

**Iframe implementation rules:**
- The iframe should be `width: 100%, height: 100vh` minus the embed header height
- Always show a loading skeleton while the iframe loads
- Show a fallback message if the iframe fails to load
- The embed header should show: back button, project name, and "Open in new tab" link
- Never hardcode iframe URLs — always read from `projects.ts`

---

## 5. Styling: Tailwind CSS v4

**Decision:** Use Tailwind CSS v4 for all styling. No CSS Modules, no styled-components.

**Why:**
- Utility-first keeps styles co-located with markup
- Tailwind v4 uses CSS variables natively — great for theming
- Consistent spacing and color scales prevent design drift

**Design tokens (defined in `src/styles/globals.css`):**
- Font: Display font for headings, monospace accent for code/labels
- Colors: Near-black background, off-white text, single accent color
- Spacing: Follow Tailwind's default scale strictly
- Breakpoints: Mobile-first, sm/md/lg/xl

**Rules for Claude:**
- Never write inline `style={{}}` for layout — use Tailwind classes
- Use `cn()` utility from `src/lib/utils.ts` for conditional classes
- Dark mode is default — the site is dark-themed

---

## 6. Animation: Framer Motion

**Decision:** Use Framer Motion for all animations.

**Why:**
- Physics-based spring animations feel natural
- `AnimatePresence` handles route transitions cleanly
- Works well with TanStack Router's route lifecycle

**Rules for Claude:**
- Page transitions: fade + slight upward slide (y: 20 → 0, opacity: 0 → 1)
- Section reveals: use `whileInView` with `once: true`
- Never animate layout shifts — only opacity and transform
- Keep durations short: 0.3s–0.5s for UI, 0.6s–0.8s for page transitions

---

## 7. Blog: MDX files in `src/content/blog/`

**Decision:** Blog posts are `.mdx` files with frontmatter. Use `vite-plugin-mdx` or `@mdx-js/rollup`.

**Frontmatter shape:**
```
---
title: string
date: YYYY-MM-DD
description: string
tags: string[]
published: boolean
---
```

**Rules for Claude:**
- Only posts with `published: true` should appear in listings
- Slugs are derived from the filename (e.g., `my-first-post.mdx` → `/blog/my-first-post`)
- Never hardcode blog post content inside React components

---

## 8. What Claude Should Never Do

- Never install unnecessary packages — check if something can be done with what's already in the stack
- Never use `useEffect` for data that can be handled in a TanStack Router loader
- Never add a new dependency for something Tailwind or Framer Motion already handles
- Never break the data-driven pattern by hardcoding content in components
- Never add `eslint-disable` comments — fix the actual issue
