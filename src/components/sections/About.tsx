// src/components/sections/About.tsx
// About section

import { motion } from 'framer-motion'
import { personal } from '../../data'

export function About() {
  return (
    <section className="py-16">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[#111111] border border-[#222222] rounded-xl p-7 md:p-9"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#f0f0f0]">About</h2>
          <p className="text-lg md:text-xl text-[--text-secondary] leading-relaxed max-w-5xl">
            {personal.bio}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
