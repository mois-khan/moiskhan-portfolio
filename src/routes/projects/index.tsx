// src/routes/projects/index.tsx
// Projects grid page

import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <h1 className="text-4xl md:text-5xl font-serif mb-6">Projects</h1>
      <p className="text-[--text-secondary] text-lg mb-12">
        Collection of projects I've built and deployed.
      </p>
      {/* ProjectCard grid will go here */}
    </motion.div>
  )
}
