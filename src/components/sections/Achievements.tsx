// src/components/sections/Achievements.tsx
// Achievements section — hackathon wins and awards

import { motion } from 'framer-motion'
import { achievements } from '../../data'

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

export function Achievements() {
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
            Achievements
          </motion.h2>

          <div className="space-y-4">
            {achievements.map((achievement) => (
              <motion.article
                key={achievement.title}
                variants={cardVariants}
                className="rounded-xl p-7"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'var(--border-hover)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3
                      className="text-xl font-medium mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
                    >
                      {achievement.title}
                    </h3>
                    <p
                      className="text-base"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                    >
                      {achievement.event}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className="inline-block px-3 py-1 rounded-md text-xs uppercase tracking-wider"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(124, 92, 252, 0.15)',
                      }}
                    >
                      {achievement.position}
                    </span>
                    <span
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                    >
                      {new Date(achievement.date).getFullYear()}
                    </span>
                  </div>
                </div>

                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                >
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm transition-opacity duration-200 hover:opacity-70"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
                  >
                    View Details →
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
