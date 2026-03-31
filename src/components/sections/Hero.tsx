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
          <p className="text-sm font-mono uppercase tracking-wider text-[--text-secondary] mb-5">
            {personal.location}
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-[--text-primary]">
            {personal.name}
          </h1>

          <p className="text-xl md:text-2xl text-[--text-secondary] mb-8 max-w-3xl">
            {personal.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="bg-[--accent] text-black text-sm font-mono px-5 py-2.5 hover:opacity-90 transition-opacity duration-200 inline-block rounded"
            >
              View Projects
            </Link>
            <a
              href={`mailto:${personal.email}`}
              className="border border-[--border] text-[--text-primary] text-sm font-mono px-5 py-2.5 hover:border-[--border-hover] transition-colors duration-200 inline-block rounded"
            >
              Contact
            </a>
          </div>

          {personal.availableForWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-8"
            >
              <span className="inline-flex items-center gap-2 text-sm font-mono text-[--text-secondary]">
                <span className="w-2 h-2 bg-[--accent] rounded-full animate-pulse" />
                Open to work
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
