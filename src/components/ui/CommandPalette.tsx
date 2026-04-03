// src/components/ui/CommandPalette.tsx
// Raycast-inspired Cmd+K command palette for quick navigation

import { useEffect, useState, useMemo, useRef, useCallback } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, getPublishedPosts, personal } from '../../data'

type PaletteItem = {
  id: string
  label: string
  description?: string
  category: string
  icon: 'page' | 'project' | 'blog' | 'link'
  action: () => void
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  // Build search items
  const items = useMemo<PaletteItem[]>(() => {
    const pages: PaletteItem[] = [
      { id: 'home', label: 'Home', category: 'Pages', icon: 'page', action: () => navigate({ to: '/' }) },
      { id: 'projects', label: 'Projects', category: 'Pages', icon: 'page', action: () => navigate({ to: '/projects' }) },
      { id: 'blog', label: 'Blog', category: 'Pages', icon: 'page', action: () => navigate({ to: '/blog' }) },
    ]

    const projectItems: PaletteItem[] = projects.map(p => ({
      id: `project-${p.slug}`,
      label: p.title,
      description: p.description,
      category: 'Projects',
      icon: 'project',
      action: () => navigate({ to: '/projects/$slug', params: { slug: p.slug } }),
    }))

    const blogItems: PaletteItem[] = getPublishedPosts().map(post => ({
      id: `blog-${post.slug}`,
      label: post.title,
      description: post.readingTime,
      category: 'Blog Posts',
      icon: 'blog',
      action: () => navigate({ to: '/blog/$slug', params: { slug: post.slug } }),
    }))

    const links: PaletteItem[] = [
      { id: 'github', label: 'GitHub', description: 'Open in new tab', category: 'Links', icon: 'link', action: () => window.open(personal.github, '_blank') },
      { id: 'linkedin', label: 'LinkedIn', description: 'Open in new tab', category: 'Links', icon: 'link', action: () => window.open(personal.linkedin, '_blank') },
      { id: 'email', label: 'Send Email', description: personal.email, category: 'Links', icon: 'link', action: () => { window.location.href = `mailto:${personal.email}` } },
    ]

    return [...pages, ...projectItems, ...blogItems, ...links]
  }, [navigate])

  // Filter items
  const filtered = useMemo(() => {
    if (!query.trim()) return items
    const q = query.toLowerCase()
    return items.filter(
      item =>
        item.label.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    )
  }, [items, query])

  // Group by category
  const grouped = useMemo(() => {
    const groups: { category: string; items: PaletteItem[] }[] = []
    for (const item of filtered) {
      const existing = groups.find(g => g.category === item.category)
      if (existing) existing.items.push(item)
      else groups.push({ category: item.category, items: [item] })
    }
    return groups
  }, [filtered])

  // Keyboard shortcut to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  // Reset active index on filter change
  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const executeItem = useCallback((item: PaletteItem) => {
    setOpen(false)
    item.action()
  }, [])

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => (i + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => (i - 1 + filtered.length) % filtered.length)
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault()
      executeItem(filtered[activeIndex])
    }
  }, [filtered, activeIndex, executeItem])

  const iconMap = {
    page: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    project: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    blog: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    link: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
      </svg>
    ),
  }

  let flatIndex = -1

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100]"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
            onClick={() => setOpen(false)}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-[90vw] max-w-[560px] rounded-xl overflow-hidden"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-hover)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(124,92,252,0.08)',
            }}
          >
            {/* Search input */}
            <div
              className="flex items-center gap-3 px-5 h-14"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-tertiary)', flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent outline-none text-[15px]"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-primary)',
                }}
              />
              <kbd
                className="text-[11px] px-1.5 py-0.5 rounded"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-tertiary)',
                  border: '1px solid var(--border)',
                }}
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[340px] overflow-y-auto py-2 px-2">
              {grouped.length === 0 && (
                <p
                  className="text-sm text-center py-8"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  No results found.
                </p>
              )}
              {grouped.map(group => (
                <div key={group.category}>
                  <p
                    className="text-[11px] uppercase tracking-wider px-3 pt-3 pb-1.5"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                  >
                    {group.category}
                  </p>
                  {group.items.map(item => {
                    flatIndex++
                    const isActive = flatIndex === activeIndex
                    const currentIndex = flatIndex
                    return (
                      <button
                        key={item.id}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors duration-100"
                        style={{
                          background: isActive ? 'rgba(124, 92, 252, 0.1)' : 'transparent',
                          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        }}
                        onClick={() => executeItem(item)}
                        onMouseEnter={() => setActiveIndex(currentIndex)}
                      >
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background: isActive ? 'var(--accent-subtle)' : 'var(--bg-tertiary)',
                            color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {iconMap[item.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate" style={{ fontFamily: 'var(--font-body)' }}>
                            {item.label}
                          </p>
                          {item.description && (
                            <p className="text-xs truncate" style={{ color: 'var(--text-tertiary)' }}>
                              {item.description}
                            </p>
                          )}
                        </div>
                        {isActive && (
                          <kbd
                            className="text-[10px] px-1.5 py-0.5 rounded shrink-0"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              background: 'var(--bg-tertiary)',
                              color: 'var(--text-tertiary)',
                              border: '1px solid var(--border)',
                            }}
                          >
                            ↵
                          </kbd>
                        )}
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>

            {/* Footer hint */}
            <div
              className="flex items-center justify-between px-5 py-2.5"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <p className="text-[11px]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>
                ↑↓ Navigate &middot; ↵ Open &middot; Esc Close
              </p>
              <p className="text-[11px]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>
                <kbd className="px-1 py-0.5 rounded" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}>⌘K</kbd>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
