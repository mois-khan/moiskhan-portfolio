// src/components/sections/Hero.tsx
// Homepage hero section

import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { personal } from '../../data'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Violet blob — top-right */}
      <motion.div className="hero-glow-primary" {...fadeIn(0)} />

      {/* Blue blob — bottom-left */}
      <motion.div className="hero-glow-secondary" {...fadeIn(0)} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-24">
        {/* Badge */}
        {personal.availableForWork && (
          <motion.div className="mb-8" {...fadeIn(0.8)}>
            <span
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-sm"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent)',
                background: 'var(--accent-subtle)',
                border: '1px solid rgba(124, 92, 252, 0.2)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: 'var(--accent)' }}
              />
              Open to work
            </span>
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          className="leading-[1.0] mb-6 font-semibold"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 7vw, 72px)',
            color: 'var(--text-primary)',
          }}
          {...fadeUp(0.2)}
        >
          {personal.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
          {...fadeUp(0.4)}
        >
          {personal.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div className="flex flex-wrap gap-4" {...fadeUp(0.6)}>
          <Link
            to="/projects"
            className="inline-block text-sm px-6 py-2.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-lg"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'var(--accent)',
              color: '#ffffff',
              boxShadow: '0 0 20px var(--accent-glow)',
            }}
          >
            View Projects
          </Link>
          <a
            href={`mailto:${personal.email}`}
            className="inline-block text-sm px-6 py-2.5 rounded-lg border transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-primary)',
              borderColor: 'var(--border-hover)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
