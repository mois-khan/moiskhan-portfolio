// src/components/sections/Contact.tsx
// Contact CTA section

import { motion } from 'framer-motion'
import { personal } from '../../data'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Contact() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative rounded-2xl overflow-hidden p-8 md:p-12"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(124,92,252,0.08) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="relative z-10">
            <motion.p
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
              variants={childVariants}
            >
              Get in Touch
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: 'var(--text-primary)' }}
              variants={childVariants}
            >
              Let's build something<br />
              <span style={{ color: 'var(--accent)' }}>together.</span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-xl mb-8"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
              variants={childVariants}
            >
              I'm open to internships, freelance projects, and full-time roles.
              If you have an interesting problem to solve, I'd love to hear about it.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={childVariants}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm text-white font-medium hover:brightness-110 transition-all duration-200"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 0 24px var(--accent-glow)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
                Send me an email
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border transition-all duration-200 hover:bg-white/[0.03]"
                style={{
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-hover)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </motion.div>

            {/* Email shown visually */}
            <motion.p
              className="mt-6 text-sm"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
              variants={childVariants}
            >
              {personal.email}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
