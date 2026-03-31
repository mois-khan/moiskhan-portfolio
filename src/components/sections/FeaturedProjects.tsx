// src/components/sections/FeaturedProjects.tsx
// Featured projects section

import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '../../data'
import { Badge } from '../ui/Badge'
import { SectionHeading } from '../ui/SectionHeading'

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading className="mb-4">Featured Projects</SectionHeading>
          <p className="text-[--text-secondary] text-lg mb-10 max-w-3xl">
            Products and prototypes focused on practical impact, from scam prevention to safer urban navigation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                className="bg-[--bg-secondary] border border-[--border] rounded-lg p-6 hover:border-[--border-hover] transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-sans font-medium text-[--text-primary]">{project.title}</h3>
                  <Badge>{project.year}</Badge>
                </div>

                <p className="text-[--text-secondary] leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 4).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="flex items-center gap-5 font-mono text-sm">
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="text-[--text-primary] hover:text-[--accent] transition-colors duration-200"
                  >
                    View Embed
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--text-secondary] hover:text-[--text-primary] transition-colors duration-200"
                  >
                    Open Live
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--text-secondary] hover:text-[--text-primary] transition-colors duration-200"
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
