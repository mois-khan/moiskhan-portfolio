// src/components/sections/FeaturedProjects.tsx
// Featured projects with rich cards

import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '../../data'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects()

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
            Featured Work
          </motion.p>

          <motion.div className="flex items-end justify-between gap-4 mb-10" variants={cardVariants}>
            <h2
              className="text-3xl md:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Things I've built
            </h2>
            <Link
              to="/projects"
              className="text-sm font-medium transition-colors duration-200 shrink-0 hidden md:inline-flex items-center gap-1.5"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--accent)' }}
            >
              View all
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                variants={cardVariants}
                className="gradient-border-card group rounded-xl overflow-hidden"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
                whileHover={{
                  borderColor: 'rgba(255,255,255,0.10)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 0 60px rgba(124,92,252,0.02)',
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Visual side — gradient placeholder for project image */}
                  <div
                    className="lg:w-2/5 min-h-[200px] lg:min-h-0 relative overflow-hidden"
                    style={{
                      background: index === 0
                        ? 'linear-gradient(135deg, rgba(124,92,252,0.15) 0%, rgba(56,120,255,0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(56,120,255,0.12) 0%, rgba(110,231,183,0.08) 100%)',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-6xl font-bold opacity-10"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-2.5 py-1 rounded-md text-[11px] uppercase tracking-wider font-medium"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(110, 231, 183, 0.12)',
                          color: '#6ee7b7',
                          border: '1px solid rgba(110, 231, 183, 0.2)',
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="lg:w-3/5 p-7 lg:p-8 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3
                        className="text-xl md:text-2xl font-medium"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="text-xs shrink-0 mt-1.5"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <p
                      className="text-sm md:text-base leading-relaxed mb-5"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            background: 'var(--bg-tertiary)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-3 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                      <Link
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium hover:brightness-110 transition-all duration-200"
                        style={{
                          background: 'var(--accent)',
                          boxShadow: '0 0 16px var(--accent-glow)',
                        }}
                      >
                        View Project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium border transition-all duration-200 hover:bg-white/[0.03]"
                          style={{
                            color: 'var(--text-primary)',
                            borderColor: 'var(--border)',
                          }}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
