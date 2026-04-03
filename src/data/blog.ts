// src/data/blog.ts
// Blog posts — add new posts here

import type { BlogPost } from '../types'

export type BlogPostWithContent = BlogPost & {
  content: string // HTML content for now (can switch to MDX later)
}

export const blogPosts: BlogPostWithContent[] = [
  {
    slug: 'books-that-shaped-how-i-think',
    title: 'Books That Shaped How I Think About Building Software',
    description:
      'Five books that changed the way I approach problem-solving, system design, and engineering as a whole — from "Atomic Habits" to "The Pragmatic Programmer".',
    date: '2026-03-20',
    tags: ['Books', 'Personal Growth', 'Engineering'],
    published: true,
    readingTime: '6 min read',
    content: `
<p>I started reading seriously in my second year of college. Not textbooks — those I'd been forced to read my whole life — but books I chose because I genuinely wanted to understand how things work beyond code.</p>

<p>Here are five books that genuinely changed how I think. Not in a "motivational quote" way, but in a "I literally write different code now" way.</p>

<h2>1. Atomic Habits — James Clear</h2>

<p>Everyone recommends this book and for good reason. But the part that stuck with me wasn't the habit stacking or the 1% improvement math. It was the idea that <strong>you don't rise to the level of your goals, you fall to the level of your systems.</strong></p>

<p>I applied this directly to coding. Instead of saying "I'll build a project this month," I set up a system: open VS Code every morning at 9, write at least 20 lines, push to GitHub before lunch. The projects became a side effect of the system, not the goal.</p>

<h2>2. The Pragmatic Programmer — David Thomas & Andrew Hunt</h2>

<p>This is the book that made me stop writing "clever" code and start writing code that my future self could actually read. Two concepts that stayed with me:</p>

<ul>
<li><strong>DRY (Don't Repeat Yourself)</strong> — but the nuance is that DRY is about knowledge, not code. Two identical-looking functions that represent different business logic should NOT be merged.</li>
<li><strong>Tracer bullets</strong> — build a thin, working end-to-end slice first. Not a prototype. An actual working piece that you can iterate on. This is exactly how I built SafeRoute AI — a single route calculation that worked before I added safety scoring.</li>
</ul>

<h2>3. Deep Work — Cal Newport</h2>

<p>Reading this during exam season was both a blessing and a curse. Newport's argument is simple: the ability to focus without distraction is becoming rare and therefore valuable. The people who cultivate this skill will dominate.</p>

<p>I started blocking out 3-hour "deep work" windows with my phone in another room. The difference was staggering. What used to take me a full day — setting up an Express server with auth, database, and basic CRUD — I could finish in one focused session.</p>

<h2>4. Show Your Work — Austin Kleon</h2>

<p>This short book convinced me to build this portfolio and start writing. Kleon's argument is that you don't need to be an expert to share — you just need to be one step ahead of someone else. Document what you're learning, share your process, and the audience finds you.</p>

<p>It's why I write about what I build, not just build things. The building is the easy part. Articulating what you did and why — that's the skill that compounds.</p>

<h2>5. Designing Data-Intensive Applications — Martin Kleppmann</h2>

<p>This was the hardest book on this list and I'm still working through parts of it. But even the first few chapters fundamentally changed how I think about databases, consistency, and distributed systems. When I was building CallShield AI's real-time pipeline, I kept coming back to Kleppmann's chapters on stream processing and exactly-once semantics.</p>

<p>You don't need to understand every page. But having a mental model of how data flows through systems — from a user's tap to a database write to a real-time notification — makes you a fundamentally better engineer.</p>

<h2>The common thread</h2>

<p>None of these books taught me a programming language or a framework. They taught me how to <strong>think</strong>. Frameworks change every two years. The ability to design systems, focus deeply, build sustainable habits, and communicate clearly — those compound forever.</p>

<p>If you're a student reading this: read one book a month that isn't assigned by your university. Your future self will thank you.</p>
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
