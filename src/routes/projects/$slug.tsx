// src/routes/projects/$slug.tsx
// Individual project embed page

import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ProjectEmbed } from '../../components/projects/ProjectEmbed'
import { getProjectBySlug } from '../../data'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectEmbedPage,
})

function ProjectEmbedPage() {
  const { slug } = Route.useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20"
      >
        <h1
          className="text-4xl md:text-5xl mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          Project not found
        </h1>
        <p style={{ color: 'var(--text-secondary)' }} className="text-lg">
          We could not find a project with slug:{' '}
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>{slug}</span>
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <ProjectEmbed project={project} />
    </motion.div>
  )
}
