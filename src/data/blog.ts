// src/data/blog.ts
// Blog posts — add new posts here

import type { BlogPost } from '../types'

export type BlogPostWithContent = BlogPost & {
  content: string // HTML content for now (can switch to MDX later)
}

export const blogPosts: BlogPostWithContent[] = [
  {
    slug: 'breaking-the-silence-my-first-community-event',
    title: 'Breaking the Silence: My First Step Out of the Comfort Zone',
    description:
      'A personal reflection on attending my first community event, Studentpreneurs: Vibe & Connect. Lessons on networking, helping others, and the art of asking better questions.',
    date: '2026-04-19',
    tags: ['Community', 'Networking', 'Growth Mindset', 'Soft Skills'],
    published: true,
    readingTime: '4 min read',
    content: `
<p>Wanderlust Cafe in KPHB was buzzing. Around 30 people—a diverse mix ranging from high schoolers to techies and business students—were talking, laughing, and "vibing." I was there, sitting in the middle of it all, but I was silent. For someone who had always been "less social," walking into <strong>Studentpreneurs: Vibe & Connect (Edition-5)</strong> was a massive leap out of my comfort zone.</p>

<h2>The Experiment</h2>

<p>I didn't attend this event to find a co-founder or to pitch a project. I attended because I knew I was too comfortable in my own shell. I wanted to see if I could handle the pressure of a social environment and improve my ability to interact with strangers. For the first hour, I remained a silent observer, curious but hesitant. It took a structured ice-breaker activity to finally crack the shell.</p>

<p>Once the ice was broken, the energy shifted. I met a peer from the business side who had a vision but was struggling with the technical "how." I found myself suggesting tools and architectural paths for his idea. In that moment, the nervousness vanished. I realized that my technical skills weren't just for building apps; they were a medium for helping others and starting conversations.</p>

<h2>The Catalyst</h2>

<p>One of the highlights of the afternoon was hearing from <strong>Abhishek Pratap</strong>, the CEO of Extrive Innovations and the <em>Catalyst Talk</em> of the event. Seeing a young founder leading a company was inspiring, but it was our brief conversation afterward that provided my most valuable takeaway.</p>

<p>He didn't talk about code or funding. He talked about <strong>clarity</strong>. It led me to a realization that has changed how I approach engineering: <strong>The quality of your solution is limited by the quality of your questions.</strong></p>

<p>Before you build, you must ask: <em>What is the core problem? Is this feasible? What is the actual impact?</em> Asking better questions leads to a clearer understanding, which leads to better software.</p>

<h2>Contentment</h2>

<p>I walked out of Wanderlust Cafe that Sunday feeling a deep sense of contentment. I hadn't just "networked"; I had intentionally sought discomfort and found growth on the other side. It was the first step in a journey that would eventually lead me to hackathons, collaborative projects, and the portfolio you are reading today.</p>

<p><em>To anyone reading this who feels "less social": the first hour is the hardest. The growth on the other side is worth it.</em></p>
`,
  },
  {
    slug: 'the-roi-of-reading-fiction-vs-non-fiction',
    title: 'The ROI of Reading: Why I Can’t Afford Fiction (Yet)',
    description:
      'A reflection on my experience at the BookTalk meetup at Bahrisons. Why I prioritize systems over stories, and the philosophical clash between self-help and sci-fi.',
    date: '2026-05-02',
    tags: ['Books', 'Philosophy', 'Productivity', 'Community'],
    published: true,
    readingTime: '5 min read',
    content: `
<p>Bahrisons Booksellers in Hyderabad is a beautiful space—smelling of old paper and fresh coffee. I walked in with high expectations for the "BookTalk" meetup organized by Communitie, carrying my notes on <em>Deep Work</em> and <em>Thinking Fast and Slow</em>, ready to discuss the neurobiology of focus and system design.</p>

<h2>The Culture Shock</h2>

<p>For the first 90 minutes, I felt like a stranger in a strange land. The room was buzzing with talk of world-building, sci-fi tropes, and fictional character arcs. Most of the books and authors being discussed were entirely foreign to me. To the group, these stories were essential. To me—a CS student in the middle of a high-stakes career-building sprint—it felt like watching valuable time slip away.</p>

<p>I realized then that the room was speaking a different language. They were discussing <strong>Life as a Story</strong>, while I was there to discuss <strong>Life as a System</strong>.</p>

<h2>The Debate: Systems vs. Stories</h2>

<p>When it was finally my turn, I didn't sugarcoat my perspective. I shared my "Three Pillars": <em>The 5 AM Club</em> by Robin Sharma, <em>Deep Work</em> by Cal Newport, and <em>Thinking Fast and Slow</em> by Daniel Kahneman. I told the group plainly: <strong>"I don't read fiction, and I don't plan to in the near future. I simply can't afford to."</strong></p>

<p>The pushback was immediate and fascinating. <em>"Self-help books are all the same,"</em> they argued. <em>"You read them but never actually apply them. Fiction is what actually teaches you empathy and gives you a broader perspective on the world."</em> Some even warned me that once I started working, I’d never have the time to read fiction again, so I should "enjoy it now."</p>

<h2>The Engineer’s Takeaway</h2>

<p>This experience wasn't just a disagreement about book genres; it was a fundamental clash over <strong>Opportunity Cost</strong>. From my perspective, as a student and a developer, every hour I spend reading is an investment. I am in the "Building Phase" of my life. In this phase, the ROI (Return on Investment) of a book that teaches me how to focus deeply or how the human brain makes decisions is infinitely higher than a book about a fictional galactic empire.</p>

<p>I left Bahrisons that day with a clear realization: <strong>Your inputs determine your outputs.</strong> While I respect the empathy that fiction can build, my priority right now is building the systems and habits that will define my career. I might not be joining the sci-fi circle again, but I’m more convinced than ever that being ruthless about your intellectual inputs is a superpower.</p>

<p><em>What’s your take? Can we "afford" fiction in the middle of a sprint, or is it a luxury for later?</em></p>
`,
  },
  {
    slug: 'deallens-hackathon-build',
    title: '40 Hours to 10 Minutes: How We Built DealLens in a Weekend',
    description:
      'Lessons from the Bower AI Hackathon 2026: Building an automated due diligence engine, pivoting based on mentor feedback, and hacking through API rate limits.',
    date: '2026-05-12',
    tags: ['Hackathon', 'AI Agents', 'FinTech', 'Engineering'],
    published: true,
    readingTime: '7 min read',
    content: `
<p>Imagine you're an angel investor. Your inbox is a graveyard of "game-changing" pitch decks. To verify just one—checking founder backgrounds, mapping competitors, and validating market size—takes 40+ hours of manual, tab-switching hell. Most investors just rely on their gut. At the <strong>Bower AI Hackathon 2026</strong>, we decided to automate that "gut feeling."</p>

<h2>The Problem: The Due Diligence Bottleneck</h2>

<p>The gap between a startup's pitch and its reality is often hidden in hours of research. Small VCs and angel investors don't have the massive teams that Sequoia or Accel do. They spend their weekends manually identifying sources, cross-referencing claims, and trying to stay objective. We set out to build <strong>DealLens</strong> to bridge that gap.</p>

<h2>The Mid-Hackathon Pivot: From Tool to Pipeline</h2>

<p>Initially, we built a simple "Upload and Analyze" tool. It was functional, but on Day 1, we met with mentor <strong>Abhijeet Navandar</strong>. He challenged our UX: <em>"Why should the investor even have to upload? They should just receive filtered insights."</em></p>

<p>That conversation changed everything. We pivoted DealLens from a manual tool to an <strong>Automated Inbound Filter</strong>. We built a custom "founder link" that investors can put in their social bios. When a founder applies, the system automatically:</p>
<ul>
  <li>Classifies the startup's domain and industry.</li>
  <li>Filters the submission against the investor's specific interests and preferences.</li>
  <li>Populates a high-end dashboard where the investor only sees what matters.</li>
</ul>

<h2>Engineering for Performance: The Parallel Pipeline</h2>

<p>Building an agentic pipeline that researches founders, competitors, and TAM (Total Addressable Market) is computationally expensive. If the analysis took 10 minutes to run, the user experience would suffer. To solve this, we architected the backend using <strong>FastAPI</strong> and Python's <strong>asyncio</strong>.</p>

<p>By running the market analysis, competitor mapping, and founder background checks in parallel, we <strong>reduced end-to-end latency by 3x</strong>. This ensured that by the time an investor clicks "View Report," the data is ready and structured.</p>

<h2>The "9 API Key" Hack</h2>

<p>Every hackathon has its "breaking point." Ours was the <strong>Gemini API</strong>. Due to high traffic during the event, we were constantly hitting rate limits and 500 errors. To ensure our demo stayed alive for the judges, we built a round-robin cycling system using <strong>9 API keys across 5 different accounts</strong>. It wasn't the "cleanest" solution, but it guaranteed 100% uptime when it mattered most. Engineering is often about solving for reliability under pressure.</p>

<h2>Reflections: Beyond the Trophy</h2>

<p>We didn't make the Top 15 shortlist. In a room full of brilliant teams, that's part of the game. But what we walked away with was more valuable: a validated product pivot, a high-performance FastAPI pipeline, and a system that actually solves a $10,000+ problem for small investors.</p>

<p>For me, DealLens isn't just a hackathon project; it’s a demonstration of how to listen to feedback, optimize for performance, and build resilient systems that solve real-world friction.</p>

<p><em>DealLens is live and open-source. Check it out on <a href="https://github.com/mois-khan/DealLens" target="_blank">GitHub</a>.</em></p>
`,
  },
  {
    slug: 'building-realtime-ai-what-i-learned',
    title: 'What I Learned Building a Real-Time AI System From Scratch',
    description:
      'Lessons from building CallShield AI — a real-time phone scam detection system. On latency budgets, LLM pipelines, and why the "demo works" bar is dangerously low.',
    date: '2026-03-28',
    tags: ['AI', 'Engineering', 'Lessons Learned'],
    published: true,
    readingTime: '8 min read',
    content: `
<p>In January 2026, I started building CallShield AI — an Android app that detects phone scams in real-time, while the call is still happening. Not after. Not "we'll send you a report." During the call, before the scammer succeeds.</p>

<p>Here's what I learned building it, and what I wish someone had told me before I started.</p>

<h2>The demo is not the product</h2>

<p>Getting a demo working took about a week. Hardcoded audio file → Deepgram transcription → Gemini analysis → "This is a scam" printed to console. Impressive in a slide deck. Completely useless in the real world.</p>

<p>The gap between "demo works" and "product works" is where 90% of the engineering lives:</p>

<ul>
<li>The demo doesn't care about latency. The product needs to respond in under 3 seconds or the scammer has already asked for your OTP.</li>
<li>The demo uses perfect audio. The product gets background noise, network jitter, and people who mumble.</li>
<li>The demo runs on your laptop. The product runs on a mid-range Android phone with spotty 4G.</li>
</ul>

<h2>Latency budgets are everything</h2>

<p>When you have a 3-second end-to-end budget, every millisecond matters. Here's how our pipeline budget broke down:</p>

<ul>
<li><strong>Audio capture + buffering:</strong> ~200ms (we send 2-second chunks)</li>
<li><strong>Network to server:</strong> ~150ms (WebSocket, not HTTP)</li>
<li><strong>Deepgram STT:</strong> ~400ms (streaming mode, not batch)</li>
<li><strong>Gemini 3.1 Flash:</strong> ~800ms (with a very tight prompt)</li>
<li><strong>Alert back to client:</strong> ~100ms</li>
<li><strong>Total:</strong> ~1.7s average, ~2.8s P95</li>
</ul>

<p>We spent more time optimizing this pipeline than writing the actual scam detection logic. The lesson: <strong>in real-time systems, architecture is the product.</strong></p>

<h2>Prompt engineering is software engineering</h2>

<p>Our Gemini prompt went through 40+ iterations. The first version was a paragraph of instructions. The final version is a structured system prompt with:</p>

<ul>
<li>A taxonomy of scam patterns (urgency, authority impersonation, information extraction)</li>
<li>Explicit scoring criteria (each pattern gets a 0-1 confidence score)</li>
<li>A threshold system (alert at 0.7+ aggregate, warn at 0.4+)</li>
<li>Few-shot examples of both scam and legitimate conversations</li>
</ul>

<p>Treating prompts like code — version-controlled, tested against a benchmark set, reviewed by the team — was the single biggest improvement to our accuracy. We went from ~60% true positive rate to 90%+ by treating prompt engineering as a first-class engineering discipline.</p>

<h2>WebSockets over REST, always (for real-time)</h2>

<p>We initially built the API as REST endpoints. Upload audio chunk, get transcription, send to LLM, get result. Four round trips. It worked, but the latency was brutal — over 5 seconds end-to-end.</p>

<p>Switching to WebSockets cut our latency nearly in half. One persistent connection, bidirectional streaming, no HTTP overhead per chunk. The server pushes alerts the moment the LLM responds. No polling, no waiting.</p>

<p>If your system needs to respond in seconds, not minutes, WebSockets aren't optional — they're the architecture.</p>

<h2>The hardest bug was human</h2>

<p>Our biggest false positive problem wasn't technical — it was cultural. Indian phone conversations often include phrases like "please do this urgently" or "I'm calling from [authority]" in completely legitimate contexts. A bank genuinely calling about your account uses the same language patterns as a scammer impersonating the bank.</p>

<p>We solved this by adding conversation-level context: a single urgent phrase isn't a scam. But urgency + request for OTP + resistance to "I'll call you back" = high confidence scam. The model needed to understand conversations, not just sentences.</p>

<h2>What I'd do differently</h2>

<p>If I started over tomorrow:</p>

<ul>
<li><strong>Start with the latency budget.</strong> Define your time constraint first, then design the architecture to fit it. Don't build the "ideal" system and then try to make it fast.</li>
<li><strong>Build the evaluation suite before the model.</strong> We wrote our benchmark set of 50 scam/legitimate conversations too late. Having it from day one would have saved weeks of "does this prompt change actually help or did I just test it on one example?"</li>
<li><strong>Ship the simplest version that's useful.</strong> Our first release could have been a simple "this call has unusual patterns" notification. Instead, we tried to ship a full confidence score system with explanations. The simple version would have helped people three months earlier.</li>
</ul>

<h2>Building in public</h2>

<p>CallShield AI won 2nd prize at NYXORA MREM 2k26. But the real value wasn't the prize — it was the conversations that followed. Other students asking "how did you handle the latency?" Engineers at the event suggesting we look into on-device inference. A professor connecting us with a telecom researcher.</p>

<p>Build things that solve real problems. Then talk about how you built them. The network effects are worth more than any prize.</p>
`,
  },
]

export const getPublishedPosts = () =>
  blogPosts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug && p.published)
