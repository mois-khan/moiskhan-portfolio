// src/routes/__root.tsx
// Root layout — background layers, page transitions, Navbar, Footer, global UI

import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ScrollProgress } from '../components/ui/ScrollProgress'
import { BackToTop } from '../components/ui/BackToTop'
import { CommandPalette } from '../components/ui/CommandPalette'
import { Analytics } from "@vercel/analytics/next"

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const location = useLocation()
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 })
  const [cursorVisible, setCursorVisible] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY })
    if (!cursorVisible) setCursorVisible(true)
  }, [cursorVisible])

  const handleMouseLeave = useCallback(() => setCursorVisible(false), [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      {/* Layered background: mesh gradient + noise texture + top vignette */}
      <div className="mesh-gradient-bg" />
      <div className="noise-overlay" />
      <div className="top-vignette" />

      {/* Cursor spotlight */}
      <div
        className="cursor-spotlight hidden md:block"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          opacity: cursorVisible ? 1 : 0,
        }}
      />

      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <main className="flex-1 relative z-[1]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
