// src/components/sections/FeaturedProjects.tsx
// Featured projects section

import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '../../data'

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section className="py-16">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#f0f0f0]">Featured Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="bg-[#111111] border border-[#222222] rounded-xl p-7 hover:border-[#333333] transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-medium text-[#f0f0f0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {project.title}
                  </h3>
                  <span className="text-sm text-[#606060]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {project.year}
                  </span>
                </div>

                <p className="text-lg text-[#a0a0a0] leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs uppercase tracking-wider bg-[#1a1a1a] text-[#a0a0a0]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="inline-flex items-center justify-center px-4 py-2 rounded bg-[#e8ff47] text-black hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8ff47]/60"
                  >
                    View Project
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded border border-[#333333] text-[#f0f0f0] hover:border-[#e8ff47] hover:text-[#e8ff47] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8ff47]/60"
                  >
                    Live
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded border border-[#333333] text-[#f0f0f0] hover:border-[#e8ff47] hover:text-[#e8ff47] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8ff47]/60"
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
