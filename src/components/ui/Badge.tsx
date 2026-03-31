// src/components/ui/Badge.tsx
// Tag/badge component

import { cn } from '../../lib/utils'

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn(
      'font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded',
      'bg-[--bg-tertiary] text-[--text-secondary]',
      className
    )}>
      {children}
    </span>
  )
}
