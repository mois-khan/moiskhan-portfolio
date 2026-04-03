// src/components/sections/Hero.tsx
// Homepage hero — split layout with terminal preview

import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { personal } from '../../data'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background glow blobs */}
      <motion.div className="hero-glow-primary" {...fadeIn(0)} />
      <motion.div className="hero-glow-secondary" {...fadeIn(0)} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ─── Left: Text content ─── */}
          <div>
            {/* Status badge */}
            {personal.availableForWork && (
              <motion.div className="mb-6" {...fadeIn(0.1)}>
                <span
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: '#6ee7b7',
                    background: 'rgba(110, 231, 183, 0.08)',
                    border: '1px solid rgba(110, 231, 183, 0.15)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: '#6ee7b7' }}
                  />
                  Available for opportunities
                </span>
              </motion.div>
            )}

            {/* Name */}
            <motion.h1
              className="leading-[1.05] mb-5"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 5.5vw, 64px)',
                color: 'var(--text-primary)',
              }}
              {...fadeUp(0.15)}
            >
              Hi, I'm{' '}
              <span style={{ color: 'var(--accent)' }}>Mois</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-lg md:text-xl mb-4 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
              {...fadeUp(0.25)}
            >
              {personal.tagline}
            </motion.p>

            {/* Location */}
            <motion.p
              className="text-sm mb-8 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
              {...fadeUp(0.3)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {personal.location}
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-3 mb-8" {...fadeUp(0.35)}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:brightness-110 hover:shadow-lg"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: 'var(--accent)',
                  boxShadow: '0 0 24px var(--accent-glow)',
                }}
              >
                View my work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-lg font-medium border transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.03]"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-hover)',
                }}
              >
                Read my blog
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              {...fadeUp(0.4)}
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/[0.06]"
                style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/[0.06]"
                style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/[0.06]"
                style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ─── Right: Terminal / code preview ─── */}
          <motion.div {...fadeUp(0.3)}>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#febc2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
                <span
                  className="ml-3 text-xs"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                >
                  mois@dev ~
                </span>
              </div>
              <div className="terminal-body">
                <p><span className="comment">// about-me.ts</span></p>
                <p>&nbsp;</p>
                <p>
                  <span className="keyword">const</span>{' '}
                  <span className="fn">developer</span> = {'{'}
                </p>
                <p>&nbsp;&nbsp;name: <span className="string">"Mois Khan"</span>,</p>
                <p>&nbsp;&nbsp;role: <span className="string">"Full-Stack Developer"</span>,</p>
                <p>&nbsp;&nbsp;focus: <span className="string">"AI-Powered Web Apps"</span>,</p>
                <p>&nbsp;&nbsp;education: <span className="string">"B.Tech CSE, 3rd Year"</span>,</p>
                <p>&nbsp;&nbsp;stack: [<span className="string">"React"</span>, <span className="string">"Node"</span>, <span className="string">"Python"</span>, <span className="string">"LLMs"</span>],</p>
                <p>&nbsp;&nbsp;currentlyBuilding: <span className="string">"things that matter"</span>,</p>
                <p>{'}'}</p>
                <p>&nbsp;</p>
                <p>
                  <span className="fn">developer</span>.<span className="keyword">ship</span>()
                  <span className="comment"> // let's go 🚀</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
