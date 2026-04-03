// src/routes/projects/index.tsx
// Projects grid page with live GitHub stats

import { useEffect, useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ProjectCard } from '../../components/projects/ProjectCard'
import { projects } from '../../data'

type GitHubRepoInfo = {
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  language: string | null
  updated_at: string
}

const parseGitHubRepo = (repoUrl?: string) => {
  if (!repoUrl) return null
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/i)
  if (!match) return null
  return { owner: match[1], repo: match[2].replace(/\.git$/i, '') }
}

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ProjectsPage() {
  const [githubInfoBySlug, setGithubInfoBySlug] = useState<Record<string, GitHubRepoInfo | null>>({})
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(true)

  const reposToFetch = useMemo(() => {
    return projects
      .map((project) => {
        const parsed = parseGitHubRepo(project.repoUrl)
        if (!parsed) return null
        return { slug: project.slug, owner: parsed.owner, repo: parsed.repo }
      })
      .filter((repo): repo is { slug: string; owner: string; repo: string } => Boolean(repo))
  }, [])

  useEffect(() => {
    let cancelled = false

    const fetchGitHubInfo = async () => {
      try {
        const results = await Promise.all(
          reposToFetch.map(async ({ slug, owner, repo }) => {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
            if (!response.ok) return { slug, data: null }
            const data = (await response.json()) as GitHubRepoInfo
            return { slug, data }
          }),
        )

        if (cancelled) return

        const next: Record<string, GitHubRepoInfo | null> = {}
        results.forEach(({ slug, data }) => { next[slug] = data })
        setGithubInfoBySlug(next)
      } finally {
        if (!cancelled) setIsLoadingMetadata(false)
      }
    }

    fetchGitHubInfo()
    return () => { cancelled = true }
  }, [reposToFetch])

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-8">
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
            Projects
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            variants={cardVariants}
          >
            All Projects
          </motion.h1>

          <motion.p
            className="text-lg mb-12 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
            variants={cardVariants}
          >
            Case studies of my work, enriched with live GitHub stats.
          </motion.p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {projects.map((project) => (
              <motion.div
                key={project.slug}
                variants={cardVariants}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  githubInfo={githubInfoBySlug[project.slug] ?? null}
                  loadingGitHubInfo={isLoadingMetadata}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
