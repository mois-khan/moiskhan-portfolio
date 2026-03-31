// src/components/ui/SectionHeading.tsx
// Reusable section heading component

import { cn } from '../../lib/utils'

type SectionHeadingProps = {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn('text-3xl md:text-4xl font-serif mb-8', className)}>
      {children}
    </h2>
  )
}
