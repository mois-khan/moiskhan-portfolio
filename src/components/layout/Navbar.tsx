// src/components/layout/Navbar.tsx
// Top navigation bar — glass blur on scroll, prominent fonts

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
        background: isScrolled ? 'rgba(8,8,12,0.80)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 300ms ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 hover:opacity-90 transition-opacity duration-200"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: 'var(--accent)', fontFamily: 'var(--font-display)' }}
          >
            M
          </div>
          <span
            className="text-lg font-medium hidden sm:block"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Mois Khan
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: 'var(--font-body)',
                color: isActive(to) ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: isActive(to) ? 'rgba(255,255,255,0.06)' : 'transparent',
              }}
            >
              {label}
            </Link>
          ))}
          <div className="w-px h-5 mx-3" style={{ background: 'var(--border)' }} />
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            GitHub
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:brightness-110"
            style={{
              fontFamily: 'var(--font-body)',
              background: 'var(--accent)',
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
