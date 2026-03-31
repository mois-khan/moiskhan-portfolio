// src/routes/blog/$slug.tsx
// Individual blog post page

import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
})

function BlogPostPage() {
  const { slug } = Route.useParams()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="max-w-3xl mx-auto px-6 py-20"
    >
      <h1 className="text-4xl md:text-5xl font-serif mb-6">Blog Post: {slug}</h1>
      <p className="text-[--text-secondary]">
        MDX content will be rendered here.
      </p>
    </motion.div>
  )
}
