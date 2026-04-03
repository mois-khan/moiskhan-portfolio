// src/components/projects/ProjectCard.tsx
// Project card with hover lift, inner glow, animated gradient border

import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import type { Project } from '../../types'

type GitHubRepoInfo = {
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  language: string | null
  updated_at: string
}

type ProjectCardProps = {
  project: Project
  githubInfo?: GitHubRepoInfo | null
  loadingGitHubInfo?: boolean
}

function formatUpdatedDate(value: string) {
  const date = new Date(value)
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short' })
}

export function ProjectCard({ project, githubInfo, loadingGitHubInfo = false }: ProjectCardProps) {
  return (
    <motion.article
      className="gradient-border-card h-full flex flex-col rounded-xl overflow-hidden"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
      }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(255,255,255,0.10)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 0 40px rgba(124,92,252,0.02)',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Tags strip */}
      <div className="flex flex-wrap gap-2 px-7 pt-7 pb-0">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-[11px] uppercase tracking-wider"
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

      <div className="p-7 pt-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="text-xl md:text-2xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>
          <span
            className="text-xs shrink-0 mt-1"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
          >
            {project.year}
          </span>
        </div>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
        >
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-tertiary)',
                border: '1px solid var(--border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub info */}
        <div
          className="hidden md:block rounded-lg p-4 mb-6 min-h-[72px]"
          style={{
            background: 'var(--bg-primary)',
            border: '1px solid var(--border)',
          }}
        >
          {loadingGitHubInfo ? (
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1">
                  <div className="h-3 w-12 rounded shimmer mb-2" />
                  <div className="h-4 w-8 rounded shimmer" />
                </div>
              ))}
            </div>
          ) : githubInfo ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Stars', value: githubInfo.stargazers_count },
                { label: 'Forks', value: githubInfo.forks_count },
                { label: 'Issues', value: githubInfo.open_issues_count },
                { label: 'Updated', value: formatUpdatedDate(githubInfo.updated_at) },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="text-[11px] uppercase tracking-wider mb-0.5"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p
              className="text-sm"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
            >
              GitHub metadata unavailable
            </p>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-3" style={{ fontFamily: 'var(--font-body)' }}>
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-white font-medium hover:brightness-110 transition-all duration-200"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 0 16px var(--accent-glow)',
            }}
          >
            View Details
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:bg-white/[0.03]"
            style={{
              color: 'var(--text-primary)',
              borderColor: 'var(--border)',
            }}
          >
            Live
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:bg-white/[0.03]"
              style={{
                color: 'var(--text-primary)',
                borderColor: 'var(--border)',
              }}
            >
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
