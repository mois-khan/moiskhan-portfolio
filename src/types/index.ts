// src/types/index.ts
// All shared TypeScript types for moiskhan.dev
// Claude: never use `any` — extend these types when needed

export type Project = {
  slug: string
  title: string
  description: string           // Short — used in cards (1-2 lines)
  longDescription: string       // Full — used in /projects/:slug header
  liveUrl: string               // The URL loaded inside the iframe
  repoUrl?: string              // Optional GitHub link
  stack: string[]               // Tech stack tags
  tags: string[]                // Category tags (e.g. "Full-stack", "AI")
  featured: boolean             // Show in homepage Featured Projects section
  coverImage: string            // Path from /public, e.g. "/images/projects/slug.png"
  status: "live" | "wip" | "archived"
  year: number
}

export type Achievement = {
  title: string                 // e.g. "1st Place — HackIndia 2024"
  event: string                 // Event/competition name
  date: string                  // ISO date string "YYYY-MM-DD"
  description: string           // What you built / what it was for
  position: string              // "1st Place", "Winner", "Finalist", etc.
  link?: string                 // Optional — certificate, article, devpost, etc.
}

export type Skill = {
  category: string              // e.g. "Frontend", "Backend", "Tools"
  items: string[]               // e.g. ["React", "TypeScript", "Tailwind"]
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string                  // ISO date string
  tags: string[]
  published: boolean
  readingTime?: string          // e.g. "5 min read" — computed or manual
}

export type Personal = {
  name: string
  tagline: string               // Short headline under name in hero
  bio: string                   // About section paragraph
  email: string
  github: string                // Full URL
  linkedin: string              // Full URL
  twitter?: string              // Optional
  resumeUrl?: string            // Optional — link to PDF resume
  location: string              // e.g. "Mumbai, India"
  availableForWork: boolean     // Shows "Open to work" badge if true
}
