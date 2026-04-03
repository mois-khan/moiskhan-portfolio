// src/components/sections/Skills.tsx
// Skills section with categories

import { motion } from 'framer-motion'
import { skills } from '../../data'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Skills() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-3xl md:text-4xl mb-8"
            style={{ color: 'var(--text-primary)' }}
            variants={cardVariants}
          >
            Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  borderColor: 'var(--border-hover)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="rounded-xl p-7"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3
                  className="text-lg font-medium mb-5"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
                >
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-base flex items-start"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                    >
                      <span className="mr-2" style={{ color: 'var(--accent)' }}>•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
