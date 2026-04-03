// src/components/sections/Skills.tsx
// Skills section — bento grid with category cards

import { motion } from 'framer-motion'
import { skills } from '../../data'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Assign a subtle unique icon/emoji per category for visual variety
const categoryIcons: Record<string, string> = {
  Languages: '{ }',
  Frontend: '◧',
  'Backend & Systems': '⚙',
  Databases: '◉',
  'AI & ML': '◈',
  'Tools & Platforms': '▣',
}

export function Skills() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
            variants={cardVariants}
          >
            Tech Stack
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl mb-10"
            style={{ color: 'var(--text-primary)' }}
            variants={cardVariants}
          >
            Tools I work with
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(124, 92, 252, 0.2)',
                  boxShadow: '0 16px 50px rgba(0,0,0,0.4), 0 0 30px rgba(124,92,252,0.06)',
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="gradient-border-card group rounded-xl p-6 relative overflow-hidden"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Hover glow backdrop */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(124,92,252,0.06) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(124,92,252,0.25)]"
                      style={{
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(124,92,252,0.12)',
                      }}
                    >
                      {categoryIcons[skillGroup.category] || '◆'}
                    </span>
                    <h3
                      className="text-base font-medium"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
                    >
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-md text-xs transition-all duration-200 hover:border-[rgba(124,92,252,0.25)] hover:text-[var(--accent)]"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
