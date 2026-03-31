// src/components/sections/Hero.tsx
// Homepage hero section

import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { personal } from '../../data'

export function Hero() {
  return (
    <section className="min-h-screen flex items-start pt-32 md:pt-40">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Name */}
          <h1 className="text-5xl md:text-7xl mb-6 text-[#f0f0f0]" style={{ fontFamily: "'DM Serif Display', serif" }}>
            {personal.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[#a0a0a0] mb-8 max-w-3xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="bg-[#e8ff47] text-black text-sm px-5 py-2.5 hover:opacity-90 transition-opacity duration-200 inline-block rounded"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              View Projects
            </Link>
            <a
              href={`mailto:${personal.email}`}
              className="border border-[#222222] text-[#f0f0f0] text-sm px-5 py-2.5 hover:border-[#333333] transition-colors duration-200 inline-block rounded"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Contact
            </a>
          </div>

          {/* Available for Work Badge */}
          {personal.availableForWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-8"
            >
              <span className="inline-flex items-center gap-2 text-sm text-[#a0a0a0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
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
