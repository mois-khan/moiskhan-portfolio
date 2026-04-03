// src/components/projects/ProjectCard.tsx
// Project card with hover lift, border brighten, inner glow, animated gradient border

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
      className="gradient-border-card h-full flex flex-col rounded-xl p-7"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
      }}
      whileHover={{
        y: -4,
        borderColor: 'var(--border-hover)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.5), inset 0 0 40px rgba(124,92,252,0.03)',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3
          className="text-2xl"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>
        <span
          className="text-xs uppercase tracking-wider shrink-0"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
        >
          {project.year}
        </span>
      </div>

      <p
        className="text-base leading-relaxed mb-4"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
      >
        {project.longDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs uppercase tracking-wider"
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

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded text-xs"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'var(--bg-tertiary)',
              color: 'var(--text-tertiary)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        className="rounded-lg p-4 mb-6 min-h-[78px]"
        style={{
          background: 'var(--bg-primary)',
          border: '1px solid var(--border)',
        }}
      >
        {loadingGitHubInfo ? (
          <p
            className="text-sm"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
          >
            Fetching GitHub insights...
          </p>
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
                  className="text-sm"
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

      <div className="mt-auto flex flex-wrap gap-3" style={{ fontFamily: 'var(--font-mono)' }}>
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm text-white hover:brightness-110 transition-all duration-200"
          style={{
            background: 'var(--accent)',
            boxShadow: '0 0 16px var(--accent-glow)',
          }}
        >
          View Embed
        </Link>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm border transition-colors duration-200"
          style={{
            color: 'var(--text-primary)',
            borderColor: 'var(--border)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          Live Project
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm border transition-colors duration-200"
            style={{
              color: 'var(--text-primary)',
              borderColor: 'var(--border)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            Source Code
          </a>
        )}
      </div>
    </motion.article>
  )
}
