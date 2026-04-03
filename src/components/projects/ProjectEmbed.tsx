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
    if (isLoaded || hasError) {
      return
    }

    const timer = window.setTimeout(() => {
      setHasTimedOut(true)
    }, 5500)

    return () => window.clearTimeout(timer)
  }, [isLoaded, hasError])

  const showFallback = hasError || hasTimedOut

  return (
    <section className="min-h-screen pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6">
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
          <div
            className="h-16 px-5 flex items-center"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div className="min-w-0">
              <h1
                className="text-lg md:text-xl truncate"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                {project.title}
              </h1>
              <p
                className="text-xs truncate"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
              >
                Embedded Live Preview
              </p>
            </div>
          </div>

          {!isLoaded && !showFallback && (
            <div
              className="h-[calc(100vh-14rem)] min-h-[520px] p-6 animate-pulse"
              style={{ background: 'var(--bg-primary)' }}
            >
              <div className="h-6 w-56 rounded mb-4" style={{ background: 'var(--bg-tertiary)' }} />
              <div className="h-4 w-80 rounded mb-2" style={{ background: 'var(--bg-tertiary)' }} />
              <div className="h-4 w-64 rounded" style={{ background: 'var(--bg-tertiary)' }} />
            </div>
          )}

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
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
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
              onLoad={() => {
                setIsLoaded(true)
                setHasTimedOut(false)
              }}
              onError={() => setHasError(true)}
            />
          )}

          <div
            className="px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{
              borderTop: '1px solid var(--border)',
              background: 'var(--bg-primary)',
            }}
          >
            <p
              className="text-sm md:text-base"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
            >
              If the preview does not appear, open the project directly in a new tab.
            </p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white text-sm px-5 py-2.5 rounded-lg hover:brightness-110 transition-all duration-200"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'var(--accent)',
                boxShadow: '0 0 16px var(--accent-glow)',
              }}
            >
              Open Project in New Tab
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
