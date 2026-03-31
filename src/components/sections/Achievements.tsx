// src/components/sections/Achievements.tsx
// Achievements section with hackathon wins and awards

import { motion } from 'framer-motion'
import { achievements } from '../../data'

export function Achievements() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[--text-primary]">
            Achievements
          </h2>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-[--bg-secondary] border border-[--border] rounded-lg p-6 hover:border-[--border-hover] transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-sans font-medium text-[--text-primary] mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-[--text-secondary] mb-1">
                      {achievement.event}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block px-3 py-1 bg-[--bg-tertiary] text-[--accent] text-xs font-mono rounded uppercase tracking-wider"
                    >
                      {achievement.position}
                    </span>
                    <span className="text-sm font-mono text-[--text-tertiary]">
                      {new Date(achievement.date).getFullYear()}
                    </span>
                  </div>
                </div>
                
                <p className="text-[--text-secondary] leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-mono text-[--accent] hover:underline transition-all duration-200"
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
