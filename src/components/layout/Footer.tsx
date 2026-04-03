// src/components/layout/Footer.tsx
// Minimal footer with social links

import { personal } from '../../data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-10 mt-16"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-white text-[10px] font-bold"
              style={{ background: 'var(--accent)', fontFamily: 'var(--font-display)' }}
            >
              M
            </div>
            <p
              className="text-sm"
              style={{ color: 'var(--text-tertiary)' }}
            >
              © {currentYear} {personal.name}
            </p>
          </div>

          <div className="flex items-center gap-5" style={{ fontFamily: 'var(--font-mono)' }}>
            {[
              { label: 'GitHub', href: personal.github },
              { label: 'LinkedIn', href: personal.linkedin },
              ...(personal.twitter ? [{ label: 'Twitter', href: personal.twitter }] : []),
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
