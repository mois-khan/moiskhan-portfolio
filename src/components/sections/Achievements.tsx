// src/components/sections/Achievements.tsx
// Achievements section with hackathon wins and awards

import { motion } from 'framer-motion'
import { achievements } from '../../data'

export function Achievements() {
  return (
    <section className="py-16">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-[#f0f0f0]" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Achievements
          </h2>

          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-[#111111] border border-[#222222] rounded-xl p-7 hover:border-[#333333] transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-[#f0f0f0] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {achievement.title}
                    </h3>
                    <p className="text-base text-[#a0a0a0] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {achievement.event}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block px-3 py-1 bg-[#1a1a1a] text-[#e8ff47] text-xs rounded uppercase tracking-wider"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {achievement.position}
                    </span>
                    <span className="text-base text-[#606060]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {new Date(achievement.date).getFullYear()}
                    </span>
                  </div>
                </div>
                
                <p className="text-lg text-[#a0a0a0] leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#e8ff47] hover:underline transition-all duration-200"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
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
