// src/lib/utils.ts
// Utility functions

/**
 * Merge class names conditionally
 * Usage: cn("base-class", condition && "conditional-class", "always-class")
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
