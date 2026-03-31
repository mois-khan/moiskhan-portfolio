// src/routes/blog/index.tsx
// Blog listing page

import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <h1 className="text-4xl md:text-5xl font-serif mb-6">Blog</h1>
      <p className="text-[--text-secondary] text-lg mb-12">
        Thoughts on code, design, and building things.
      </p>
      {/* BlogCard grid will go here */}
    </motion.div>
  )
}
