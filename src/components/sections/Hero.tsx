// src/components/sections/Hero.tsx
// Homepage hero section

import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { personal } from '../../data'

export function Hero() {
  return (
    <section className="pt-28 md:pt-32 pb-16">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 text-[#f0f0f0]" style={{ fontFamily: "'DM Serif Display', serif" }}>
            {personal.name}
          </h1>

          <p className="text-2xl md:text-3xl text-[#a0a0a0] mb-10 max-w-4xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {personal.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="bg-[#e8ff47] text-black text-base px-6 py-3 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 inline-block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8ff47]/60"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              View Projects
            </Link>
            <a
              href={`mailto:${personal.email}`}
              className="border border-[#222222] text-[#f0f0f0] text-base px-6 py-3 hover:border-[#e8ff47] hover:text-[#e8ff47] hover:-translate-y-0.5 transition-all duration-200 inline-block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8ff47]/60"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Contact
            </a>
          </div>

          {personal.availableForWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-10"
            >
              <span className="inline-flex items-center gap-2 text-base text-[#a0a0a0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="w-2 h-2 bg-[#e8ff47] rounded-full animate-pulse" />
                Open to work
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
