// src/routes/projects/$slug.tsx
// Individual project embed page with iframe

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
        className="max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-8 py-20"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-[#f0f0f0] mb-4">Project not found</h1>
        <p className="text-[#a0a0a0] text-lg">
          We could not find a project with slug: <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>{slug}</span>
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
