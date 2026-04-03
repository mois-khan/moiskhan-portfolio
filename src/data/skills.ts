// src/data/skills.ts
// Group your skills by category. Shown in the Skills section on the homepage.

import type { Skill } from "../types"

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "Figma"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express", "Flask", "WebSockets", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    category: "AI & ML",
    items: ["Gemini 3.1 Flash API", "OpenAI API", "LangChain", "Hugging Face", "Deepgram (STT)", "Prompt Engineering"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "Vercel", "Netlify", "Postman", "VS Code"],
  },
]