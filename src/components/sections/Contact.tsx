// src/components/sections/Contact.tsx
// Contact section

import { motion } from 'framer-motion'
import { personal } from '../../data'

export function Contact() {
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
          <h2 className="text-4xl md:text-5xl font-serif mb-5 text-[#f0f0f0]">Get in Touch</h2>
          <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-4xl mb-8">
            I am open to internships, freelance work, and product collaborations. If you have an idea worth building, let's connect.
          </p>

          <div className="flex flex-wrap gap-4 text-base" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <a
              href={`mailto:${personal.email}`}
              className="bg-[#e8ff47] text-black px-6 py-3 rounded hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8ff47]/60"
            >
              Email
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#222222] text-[#f0f0f0] px-6 py-3 rounded hover:border-[#e8ff47] hover:text-[#e8ff47] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8ff47]/60"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#222222] text-[#f0f0f0] px-6 py-3 rounded hover:border-[#e8ff47] hover:text-[#e8ff47] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8ff47]/60"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
