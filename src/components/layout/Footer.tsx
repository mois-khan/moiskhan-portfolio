// src/components/layout/Footer.tsx
// Site footer with social links

import { personal } from '../../data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-12 mt-20"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-sm"
            style={{ color: 'var(--text-tertiary)' }}
          >
            © {currentYear} {personal.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6" style={{ fontFamily: 'var(--font-mono)' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              LinkedIn
            </a>
            {personal.twitter && (
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
