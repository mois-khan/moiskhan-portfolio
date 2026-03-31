# Adding a New Project

Adding a new project to `moiskhan.dev` takes under 2 minutes. You only edit **one file**.

---

## Step 1: Deploy your project

Deploy your project to any platform (Vercel, Netlify, Railway, etc.) and get its public URL.

Example: `https://my-ecommerce-app.vercel.app`

---

## Step 2: Add an entry to `src/data/projects.ts`

Open `src/data/projects.ts` and add a new object to the array:

```ts
{
  slug: "e-commerce",               // URL-safe, used for /projects/e-commerce
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce app with cart, payments, and admin panel.",
  longDescription: "Built with React, Node.js, and Stripe. Features product search, user auth, order tracking, and a full admin dashboard.",
  liveUrl: "https://my-ecommerce-app.vercel.app",  // The iframe source
  repoUrl: "https://github.com/moiskhan/e-commerce", // Optional
  stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
  tags: ["Full-stack", "E-commerce"],
  featured: true,                   // Shows on homepage featured section
  coverImage: "/images/projects/e-commerce.png",  // Place image in public/images/projects/
  status: "live",                   // "live" | "wip" | "archived"
  year: 2025,
},
```

---

## Step 3: Add a cover image (optional but recommended)

Place a screenshot or cover image at:
```
public/images/projects/e-commerce.png
```

Recommended size: **1280 × 720px** (16:9 ratio)

---

## That's it.

The project will automatically appear:
- In the `/projects` grid
- On the homepage Featured Projects section (if `featured: true`)
- At `/projects/e-commerce` as a live iframe embed

---

## Slug rules

- Must be lowercase, hyphenated, URL-safe
- Must be unique across all projects
- Once set, don't change it — the URL becomes permanent

## iframe requirements

Make sure your deployed project:
- Does NOT set `X-Frame-Options: DENY`
- Allows embedding from `moiskhan.dev` (see `DEPLOYMENT.md` for the safe CSP config)
