// src/components/sections/Achievements.tsx
// Achievements — timeline-style layout

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
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8">
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
            Recognition
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl mb-10"
            style={{ color: 'var(--text-primary)' }}
            variants={cardVariants}
          >
            Achievements & Awards
          </motion.h2>

          <div className="space-y-4">
            {achievements.map((achievement) => {
              const isPrize = achievement.position.toLowerCase().includes('prize')
              return (
                <motion.article
                  key={achievement.title}
                  variants={cardVariants}
                  className="group rounded-xl p-6 md:p-7 transition-all duration-200"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                  whileHover={{
                    borderColor: 'rgba(255,255,255,0.10)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    {/* Position badge */}
                    <div className="shrink-0">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs uppercase tracking-wider font-medium"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          background: isPrize ? 'var(--accent-subtle)' : 'var(--bg-tertiary)',
                          color: isPrize ? 'var(--accent)' : 'var(--text-secondary)',
                          border: isPrize
                            ? '1px solid rgba(124, 92, 252, 0.15)'
                            : '1px solid var(--border)',
                        }}
                      >
                        {isPrize && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                          </svg>
                        )}
                        {achievement.position}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base md:text-lg font-medium mb-1"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
                      >
                        {achievement.event}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {achievement.description}
                      </p>
                    </div>

                    {/* Date + link */}
                    <div className="flex items-center gap-4 shrink-0">
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                      >
                        {new Date(achievement.date).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/[0.06]"
                          style={{ border: '1px solid var(--border)', color: 'var(--text-tertiary)' }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
