// src/data/achievements.ts
// Your hackathon wins, competition awards, and notable recognitions.

import type { Achievement } from "../types"

export const achievements: Achievement[] = [
  {
    title: "Participant — Bower AI Hackathon 2026",
    event: "Bower School of Entrepreneurship",
    date: "2026-05-14",
    description: "Architected and built DealLens, an automated due diligence engine for investors. Pivoted the product from a manual analysis tool to an automated inbound filtering pipeline based on mentor feedback.",
    position: "Participant",
    link: "https://github.com/mois-khan/DealLens",
  },
  {
    title: "2nd Prize — NYXORA MREM 2k26",
    event: "NYXORA MREM 2k26",
    date: "2026-03-27",               // Update with exact date
    description: "Built and showcased CallShield AI — a real-time phone scam detection Android app that alerts users mid-call before they get defrauded. Competed against cross-functional teams across engineering colleges.",
    position: "2nd Prize",
    link: "https://eventsmrem.online/",
  },
  {
    title: "1st Prize — Paper Presentation, Avazya 2k25",
    event: "Avazya 2k25 — CMR Engineering College (CMREC)",
    date: "2025-04-11",               // Update with exact date
    description: "Awarded 1st prize for a technical paper presentation on Generative AI, demonstrating strong command of LLM architectures, applications, and implications in real-world systems.",
    position: "1st Prize",
    link: undefined,                   // Add certificate link if available
  },
  {
    title: "OpenAI x NXTWave Buildathon",
    event: "OpenAI x NXTWave Buildathon",
    date: "2025-09-15",
    description: "Developed a generative AI prototype with a focus on ethical AI integration. Competed in a national-level buildathon organised in collaboration with OpenAI.",
    position: "Participant",
    link: undefined,
  },
]