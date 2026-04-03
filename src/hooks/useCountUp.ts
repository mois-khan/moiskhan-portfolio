// src/hooks/useCountUp.ts
// Counts from 0 to target when the element enters the viewport.

import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    let frame: number
    const t0 = performance.now()

    const tick = (now: number) => {
      const elapsed = Math.min((now - t0) / duration, 1)
      const eased = 1 - (1 - elapsed) ** 3          // ease-out cubic
      setCount(Math.round(eased * target))
      if (elapsed < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target, duration])

  return { count, ref }
}
