// src/components/ui/Button.tsx
// Reusable button component

import { cn } from '../../lib/utils'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const baseStyles = 'px-5 py-2.5 font-mono text-sm transition-colors duration-200'
  
  const variants = {
    primary: 'bg-[--accent] text-black hover:opacity-90',
    secondary: 'border border-[--border] text-[--text-primary] hover:border-[--border-hover]',
    ghost: 'text-[--text-secondary] hover:text-[--text-primary] underline-offset-4 hover:underline'
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
