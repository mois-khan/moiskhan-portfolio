// src/components/sections/Contact.tsx
// Contact section

import { motion } from 'framer-motion'
import { personal } from '../../data'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Contact() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="rounded-xl p-7 md:p-9"
            variants={childVariants}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            <h2
              className="text-3xl md:text-4xl mb-5"
              style={{ color: 'var(--text-primary)' }}
            >
              Get in Touch
            </h2>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
            >
              I am open to internships, freelance work, and product collaborations. If you have an
              idea worth building, let's connect.
            </p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={childVariants}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <a
                href={`mailto:${personal.email}`}
                className="px-5 py-2.5 rounded-lg text-sm text-white hover:brightness-110 transition-all duration-200"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 0 16px var(--accent-glow)',
                }}
              >
                Email
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-sm border transition-colors duration-200"
                style={{
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-sm border transition-colors duration-200"
                style={{
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
