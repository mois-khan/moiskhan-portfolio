// src/components/projects/ProjectEmbed.tsx
// Iframe wrapper for individual project pages

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../../types'

type ProjectEmbedProps = {
  project: Project
}

export function ProjectEmbed({ project }: ProjectEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [hasTimedOut, setHasTimedOut] = useState(false)

  useEffect(() => {
    if (isLoaded || hasError) return
    const timer = window.setTimeout(() => setHasTimedOut(true), 5500)
    return () => window.clearTimeout(timer)
  }, [isLoaded, hasError])

  const showFallback = hasError || hasTimedOut

  return (
    <section className="min-h-screen pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="rounded-xl overflow-hidden"
          style={{
            border: '1px solid var(--border)',
            background: 'var(--bg-secondary)',
          }}
        >
          {/* Title bar */}
          <div
            className="h-14 px-5 flex items-center gap-3"
            style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-primary)' }}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <div className="min-w-0 ml-2">
              <p
                className="text-sm truncate"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}
              >
                {project.title} — Live Preview
              </p>
            </div>
          </div>

          {/* Loading skeleton */}
          {!isLoaded && !showFallback && (
            <div
              className="h-[calc(100vh-14rem)] min-h-[520px] p-6"
              style={{ background: 'var(--bg-primary)' }}
            >
              <div className="h-6 w-56 rounded shimmer mb-4" />
              <div className="h-4 w-80 rounded shimmer mb-2" />
              <div className="h-4 w-64 rounded shimmer" />
            </div>
          )}

          {/* Fallback */}
          {showFallback ? (
            <div
              className="h-[calc(100vh-14rem)] min-h-[520px] p-8 flex flex-col items-start justify-center"
              style={{ background: 'var(--bg-primary)' }}
            >
              <p
                className="text-2xl mb-3"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Unable to load embed
              </p>
              <p
                className="mb-6 max-w-2xl"
                style={{ color: 'var(--text-secondary)' }}
              >
                This project may block iframe embedding. Open it in a new tab for the best experience.
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-5 py-2.5 rounded-lg hover:brightness-110 transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--accent)',
                  boxShadow: '0 0 16px var(--accent-glow)',
                }}
              >
                Launch Project
              </a>
            </div>
          ) : (
            <iframe
              title={project.title}
              src={project.liveUrl}
              className={`w-full h-[calc(100vh-14rem)] min-h-[520px] ${isLoaded ? 'block' : 'hidden'}`}
              style={{ background: 'var(--bg-primary)' }}
              loading="lazy"
              onLoad={() => { setIsLoaded(true); setHasTimedOut(false) }}
              onError={() => setHasError(true)}
            />
          )}

          {/* Bottom bar */}
          <div
            className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{
              borderTop: '1px solid var(--border)',
              background: 'var(--bg-primary)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              If the preview does not appear, open the project directly.
            </p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white text-sm px-4 py-2 rounded-lg hover:brightness-110 transition-all duration-200"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'var(--accent)',
              }}
            >
              Open in New Tab
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
