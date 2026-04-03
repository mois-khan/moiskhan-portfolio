// src/routes/blog/$slug.tsx
// Individual blog post page

import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { getBlogPostBySlug } from '../../data'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
})

function BlogPostPage() {
  const { slug } = Route.useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h1
              className="text-4xl mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Post not found
            </h1>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              We couldn't find a blog post with that slug.
            </p>
            <Link
              to="/blog"
              className="text-sm transition-colors duration-200"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
            >
              ← Back to blog
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-10 transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to blog
          </Link>

          {/* Post header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: 'var(--accent-subtle)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(124, 92, 252, 0.12)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-[42px] leading-tight mb-5"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              {post.title}
            </h1>

            <div
              className="flex items-center gap-4 text-sm"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
            >
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              {post.readingTime && (
                <>
                  <span style={{ color: 'var(--border-hover)' }}>·</span>
                  <span>{post.readingTime}</span>
                </>
              )}
            </div>
          </header>

          {/* Divider */}
          <div className="section-divider mb-10" style={{ maxWidth: '100%' }} />

          {/* Post content */}
          <div
            className="prose-blog"
            style={{ fontFamily: 'var(--font-body)' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Post footer */}
          <div
            className="mt-14 pt-8 flex items-center justify-between"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All posts
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  )
}
