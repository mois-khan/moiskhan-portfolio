// src/routes/projects/$slug.tsx
// Individual project embed page with iframe

import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectEmbedPage,
})

function ProjectEmbedPage() {
  const { slug } = Route.useParams()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <p className="p-6 text-center text-[--text-secondary]">
        Project embed page for: {slug}
      </p>
      {/* ProjectEmbed component will go here */}
    </motion.div>
  )
}
