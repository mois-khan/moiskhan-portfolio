// src/components/layout/Navbar.tsx
// Top navigation bar with scroll blur effect

import { useEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 border-b transition-all duration-200 ${
        isScrolled
          ? 'border-[#222222] bg-[#0a0a0a]/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-[1.7rem] hover:text-[#e8ff47] transition-colors duration-200" style={{ fontFamily: "'DM Serif Display', serif" }}>
          moiskhan.dev
        </Link>

        <div className="flex gap-7 text-base md:text-lg" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <Link
            to="/"
            className={`hover:text-[#e8ff47] transition-colors duration-200 ${
              isActive('/') ? 'text-[#e8ff47]' : 'text-[#f0f0f0]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`hover:text-[#e8ff47] transition-colors duration-200 ${
              isActive('/projects') ? 'text-[#e8ff47]' : 'text-[#f0f0f0]'
            }`}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className={`hover:text-[#e8ff47] transition-colors duration-200 ${
              isActive('/blog') ? 'text-[#e8ff47]' : 'text-[#f0f0f0]'
            }`}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
