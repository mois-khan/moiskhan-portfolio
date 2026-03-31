// src/components/layout/Footer.tsx
// Site footer with social links

import { personal } from '../../data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#222222] py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-[#a0a0a0]">
            © {currentYear} {personal.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a0a0a0] hover:text-[#e8ff47] transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a0a0a0] hover:text-[#e8ff47] transition-colors duration-200"
            >
              LinkedIn
            </a>
            {personal.twitter && (
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#a0a0a0] hover:text-[#e8ff47] transition-colors duration-200"
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
