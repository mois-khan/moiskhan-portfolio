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
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="border border-[#222222] bg-[#111111] rounded-xl overflow-hidden"
        >
          <div className="h-16 px-5 border-b border-[#222222] flex items-center">
            <div className="min-w-0">
              <h1 className="text-lg md:text-xl text-[#f0f0f0] truncate" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {project.title}
              </h1>
              <p className="text-xs text-[#a0a0a0] truncate" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Embedded Live Preview
              </p>
            </div>
          </div>

          {!isLoaded && !showFallback && (
            <div className="h-[calc(100vh-14rem)] min-h-[520px] p-6 animate-pulse bg-[#0f0f0f]">
              <div className="h-6 w-56 bg-[#1a1a1a] rounded mb-4" />
              <div className="h-4 w-80 bg-[#1a1a1a] rounded mb-2" />
              <div className="h-4 w-64 bg-[#1a1a1a] rounded" />
            </div>
          )}

          {showFallback ? (
            <div className="h-[calc(100vh-14rem)] min-h-[520px] p-8 flex flex-col items-start justify-center bg-[#0f0f0f]">
              <p className="text-2xl text-[#f0f0f0] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Unable to load embed
              </p>
              <p className="text-[#a0a0a0] mb-6 max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                This project may block iframe embedding. Open it in a new tab for the best experience.
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e8ff47] text-black px-5 py-2.5 rounded hover:opacity-90 transition-opacity duration-200"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Launch Project
              </a>
            </div>
          ) : (
            <iframe
              title={project.title}
              src={project.liveUrl}
              className={`w-full h-[calc(100vh-14rem)] min-h-[520px] bg-black ${isLoaded ? 'block' : 'hidden'}`}
              loading="lazy"
              onLoad={() => {
                setIsLoaded(true)
                setHasTimedOut(false)
              }}
              onError={() => setHasError(true)}
            />
          )}

          <div className="px-6 py-5 border-t border-[#222222] bg-[#0f0f0f] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm md:text-base text-[#a0a0a0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              If the preview does not appear, open the project directly in a new tab.
            </p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#e8ff47] text-black text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity duration-200"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Open Project in New Tab
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
