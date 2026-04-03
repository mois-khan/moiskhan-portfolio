// src/components/sections/FeaturedProjects.tsx
// Featured projects with gradient border cards

import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '../../data'

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

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects()

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
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.slug}
                variants={cardVariants}
                className="gradient-border-card rounded-xl p-7"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'var(--border-hover)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.5), inset 0 0 40px rgba(124,92,252,0.03)',
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3
                    className="text-xl font-medium"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="text-xs shrink-0"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                  >
                    {project.year}
                  </span>
                </div>

                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs uppercase tracking-wider"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-white hover:brightness-110 transition-all duration-200"
                    style={{
                      background: 'var(--accent)',
                      boxShadow: '0 0 16px var(--accent-glow)',
                    }}
                  >
                    View Project
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg border transition-colors duration-200"
                    style={{
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border)',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  >
                    Live
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg border transition-colors duration-200"
                      style={{
                        color: 'var(--text-primary)',
                        borderColor: 'var(--border)',
                        background: 'rgba(255,255,255,0.03)',
                      }}
                    >
                      Source
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
