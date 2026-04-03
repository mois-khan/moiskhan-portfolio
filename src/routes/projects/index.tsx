// src/routes/projects/index.tsx
// Projects grid page

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
  if (!repoUrl) {
    return null
  }

  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/i)
  if (!match) {
    return null
  }

  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/i, ''),
  }
}

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const [githubInfoBySlug, setGithubInfoBySlug] = useState<Record<string, GitHubRepoInfo | null>>({})
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(true)

  const reposToFetch = useMemo(() => {
    return projects
      .map((project) => {
        const parsed = parseGitHubRepo(project.repoUrl)
        if (!parsed) {
          return null
        }

        return {
          slug: project.slug,
          owner: parsed.owner,
          repo: parsed.repo,
        }
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
            if (!response.ok) {
              return { slug, data: null }
            }

            const data = (await response.json()) as GitHubRepoInfo
            return { slug, data }
          }),
        )

        if (cancelled) {
          return
        }

        const next: Record<string, GitHubRepoInfo | null> = {}
        results.forEach(({ slug, data }) => {
          next[slug] = data
        })
        setGithubInfoBySlug(next)
      } finally {
        if (!cancelled) {
          setIsLoadingMetadata(false)
        }
      }
    }

    fetchGitHubInfo()

    return () => {
      cancelled = true
    }
  }, [reposToFetch])

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-serif mb-6">Projects</h1>
      <p className="text-[--text-secondary] text-lg mb-12">
        Detailed case studies of my work, enriched with live repository stats fetched from GitHub.
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
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
    </div>
  )
}
