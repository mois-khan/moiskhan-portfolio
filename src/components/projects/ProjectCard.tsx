// src/components/projects/ProjectCard.tsx
// Project card for grid display

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
    <article className="h-full flex flex-col bg-[#111111] border border-[#222222] rounded-xl p-7 hover:border-[#333333] transition-colors duration-200">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-2xl text-[#f0f0f0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {project.title}
        </h3>
        <span className="text-xs uppercase tracking-wider text-[#606060]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {project.year}
        </span>
      </div>

      <p className="text-base text-[#a0a0a0] leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {project.longDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded text-xs uppercase tracking-wider bg-[#1a1a1a] text-[#a0a0a0]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded text-xs bg-[#151515] text-[#7f7f7f]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg p-4 mb-6 min-h-[78px]">
        {loadingGitHubInfo ? (
          <p className="text-sm text-[#606060]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Fetching GitHub insights...
          </p>
        ) : githubInfo ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#606060]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Stars</p>
              <p className="text-sm text-[#f0f0f0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{githubInfo.stargazers_count}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#606060]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Forks</p>
              <p className="text-sm text-[#f0f0f0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{githubInfo.forks_count}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#606060]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Issues</p>
              <p className="text-sm text-[#f0f0f0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{githubInfo.open_issues_count}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#606060]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Updated</p>
              <p className="text-sm text-[#f0f0f0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{formatUpdatedDate(githubInfo.updated_at)}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-[#606060]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            GitHub metadata unavailable
          </p>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="inline-flex items-center justify-center px-4 py-2 rounded bg-[#e8ff47] text-black text-sm hover:opacity-90 transition-opacity duration-200"
        >
          View Embed
        </Link>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded border border-[#333333] text-[#f0f0f0] text-sm hover:border-[#e8ff47] hover:text-[#e8ff47] transition-all duration-200"
        >
          Live Project
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded border border-[#333333] text-[#f0f0f0] text-sm hover:border-[#e8ff47] hover:text-[#e8ff47] transition-all duration-200"
          >
            Source Code
          </a>
        )}
      </div>
    </article>
  )
}
