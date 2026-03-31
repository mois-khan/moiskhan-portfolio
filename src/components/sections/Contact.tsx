// src/components/sections/Contact.tsx
// Contact section

import { motion } from 'framer-motion'
import { personal } from '../../data'
import { SectionHeading } from '../ui/SectionHeading'

export function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[--bg-secondary] border border-[--border] rounded-lg p-6 md:p-8"
        >
          <SectionHeading className="mb-4">Get in Touch</SectionHeading>
          <p className="text-[--text-secondary] text-lg leading-relaxed max-w-3xl mb-8">
            I am currently open to internships, freelance projects, and meaningful product collaborations.
            If you have something interesting to build, I would love to hear from you.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={`mailto:${personal.email}`}
              className="bg-[--accent] text-black text-sm font-mono px-5 py-2.5 rounded hover:opacity-90 transition-opacity duration-200"
            >
              Email Me
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[--border] text-[--text-primary] text-sm font-mono px-5 py-2.5 rounded hover:border-[--border-hover] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[--border] text-[--text-primary] text-sm font-mono px-5 py-2.5 rounded hover:border-[--border-hover] transition-colors duration-200"
            >
              GitHub
            </a>
          </div>

          <p className="text-sm font-mono text-[--text-secondary]">
            {personal.location} · {personal.email}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
