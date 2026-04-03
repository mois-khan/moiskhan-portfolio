// src/components/layout/Navbar.tsx
// Top navigation bar — transparent until 50px scroll, then blur + border

import { useEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16"
      style={{
        background: isScrolled ? 'rgba(8,8,12,0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          to="/"
          className="text-xl hover:opacity-80 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          moiskhan.dev
        </Link>

        <div className="flex gap-7 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/projects', label: 'Projects' },
            { to: '/blog', label: 'Blog' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="transition-colors duration-200"
              style={{ color: isActive(to) ? 'var(--accent)' : 'var(--text-secondary)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
