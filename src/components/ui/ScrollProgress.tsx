// src/components/ui/ScrollProgress.tsx
// Thin gradient progress bar fixed at top of viewport

import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  if (progress <= 0) return null

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
    />
  )
}
