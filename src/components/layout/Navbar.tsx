// src/components/layout/Navbar.tsx
// Top navigation — bold, prominent, glass blur

import { useEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { personal } from '../../data'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
  ] as const

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: isScrolled
          ? 'rgba(8, 8, 12, 0.85)'
          : 'rgba(8, 8, 12, 0.4)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)'}`,
        transition: 'all 350ms ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base font-bold"
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, #9b7dff 100%)',
              fontFamily: 'var(--font-display)',
              boxShadow: '0 0 20px rgba(124, 92, 252, 0.25)',
            }}
          >
            M
          </div>
          <span
            className="text-xl font-semibold hidden sm:block"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Mois Khan
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1.5">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200"
              style={{
                fontFamily: 'var(--font-body)',
                color: isActive(to) ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: isActive(to) ? 'rgba(255,255,255,0.08)' : 'transparent',
              }}
            >
              {label}
            </Link>
          ))}

          <div className="w-px h-6 mx-3" style={{ background: 'rgba(255,255,255,0.10)' }} />

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 hover:bg-white/[0.05]"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="px-5 py-2.5 rounded-lg text-[15px] font-semibold text-white transition-all duration-200 hover:brightness-110"
            style={{
              fontFamily: 'var(--font-body)',
              background: 'linear-gradient(135deg, var(--accent) 0%, #9b7dff 100%)',
              boxShadow: '0 0 20px rgba(124, 92, 252, 0.2)',
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
