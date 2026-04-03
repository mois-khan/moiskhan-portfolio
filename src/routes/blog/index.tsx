// src/routes/blog/index.tsx
// Blog listing page

import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { getPublishedPosts } from '../../data'

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
})

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

function BlogPage() {
  const posts = getPublishedPosts()

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-xs uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
            variants={cardVariants}
          >
            Blog
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            variants={cardVariants}
          >
            Thoughts & Writing
          </motion.h1>

          <motion.p
            className="text-lg mb-12 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
            variants={cardVariants}
          >
            On building software, reading books, and lessons learned along the way.
          </motion.p>

          <div className="space-y-4">
            {posts.map((post) => (
              <motion.div key={post.slug} variants={cardVariants}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group block rounded-xl p-6 md:p-8 transition-all duration-200"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    {/* Date column */}
                    <div className="shrink-0 md:w-28">
                      <p
                        className="text-sm"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                      {post.readingTime && (
                        <p
                          className="text-xs mt-1"
                          style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                        >
                          {post.readingTime}
                        </p>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h2
                        className="text-xl md:text-2xl mb-2 group-hover:text-[var(--accent)] transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-base leading-relaxed mb-4"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-xs"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              background: 'var(--bg-tertiary)',
                              color: 'var(--text-tertiary)',
                              border: '1px solid var(--border)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center shrink-0 self-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
