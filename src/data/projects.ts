// src/data/projects.ts
// Add all your projects here. No component changes needed.
// See docs/ADDING_PROJECTS.md for full instructions.

import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "callshield-ai",
    title: "CallShield AI",
    description:
      "A real-time phone call scam detection Android app that alerts users mid-call before they get defrauded.",
    longDescription:
      "CallShield AI is a real-time voice scam detection system built as an Android app. It uses a multi-stage asynchronous pipeline — Deepgram for speech-to-text and Gemini 3.1 Flash for LLM-based scam pattern detection — to identify coercion, urgency tactics, and social engineering in live phone calls. It achieves sub-3 second end-to-end latency and a 90%+ true positive rate benchmarked against synthetic scam taxonomies. Unlike passive tools, it alerts users before the scam succeeds.",
    liveUrl: "https://github.com/mois-khan/CallShield-AI", // Update with deployed URL when available
    repoUrl: "https://github.com/mois-khan/CallShield-AI",
    stack: [
      "Node.js",
      "WebSockets",
      "Deepgram STT",
      "Gemini 3.1 Flash",
      "Flutter",
      "Twilio",
      "Android",
    ],
    tags: ["AI", "Security", "Android", "Real-time"],
    featured: true,
    coverImage: "/images/projects/callshield-ai.png",
    status: "live",
    year: 2026,
  },
  {
    slug: "saferoute-ai",
    title: "SafeRoute AI",
    description:
      "A navigation web app that shows how safe a route actually is — factoring in police stations, hospitals, street lighting, and more.",
    longDescription:
      "SafeRoute AI is a web-based navigation prototype that reimagines routing by prioritising 'Safety Density' over shortest distance. It uses OpenStreetMap (OSM) geospatial datasets and a custom heuristic that weighs nearby safety anchors — police stations, hospitals, street lighting conditions — to score and recommend safer paths through urban areas. Demonstrated a 15% improvement in safety score compared to baseline shortest-path algorithms.",
    liveUrl: "https://saferoute-frontend.onrender.com/app.html",
    repoUrl: "https://github.com/akavinashsingh/safeRoute-AI",
    stack: ["React", "Node.js", "OpenStreetMap", "Python", "Gemini API"],
    tags: ["AI", "Maps", "Urban Safety", "Full-stack"],
    featured: true,
    coverImage: "/images/projects/saferoute-ai.png",
    status: "live",
    year: 2025,
  },
  {
    slug: "deallens",
    title: "DealLens",
    description:
      "An AI co-pilot for VCs and angel investors that automates due diligence by synthesizing pitch decks into structured investment briefs.",
    longDescription:
      "DealLens is an AI-powered due diligence engine designed to transform 10 hours of manual research into 10 minutes of automated analysis. It reads pitch decks, extracts verifiable claims, cross-checks market data, maps competitors, and researches founders publicly. The system generates a structured investment brief complete with a deal scorecard and five strategic meeting questions to streamline the investment decision process.",
    liveUrl: "https://deallens.onrender.com/",
    repoUrl: "https://github.com/mois-khan/DealLens",
    stack: [
      "React",
      "Node.js",
      "FastAPI",
      "Python",
      "Gemini API",
      "Tavily API",
      "Firecrawl",
    ],
    tags: [
      "AI Agents",
      "FinTech",
      "Investment Analysis",
      "Web Scraping",
      "RAG",
    ],
    featured: true,
    coverImage: "/images/projects/deallens.png",
    status: "live",
    year: 2026,
  },
];

export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured && p.status === "live");

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
