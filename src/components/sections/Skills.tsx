// src/components/sections/Skills.tsx
// Skills section with categories

import { motion } from 'framer-motion'
import { skills } from '../../data'

export function Skills() {
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
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-[#111111] border border-[#222222] rounded-xl p-7 hover:border-[#333333] transition-colors duration-200"
              >
                <h3 className="text-xl font-medium mb-5 text-[#f0f0f0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-base text-[#a0a0a0] flex items-start"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className="text-[#e8ff47] mr-2">•</span>
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
