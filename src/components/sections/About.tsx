// src/components/sections/About.tsx
// About section

import { motion } from 'framer-motion'
import { personal } from '../../data'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8"
        >
          <article className="bg-[--bg-secondary] border border-[--border] rounded-lg p-6 md:p-8">
            <SectionHeading className="mb-6">About</SectionHeading>
            <p className="text-lg text-[--text-secondary] leading-relaxed">
              {personal.bio}
            </p>
          </article>

          <aside className="bg-[--bg-secondary] border border-[--border] rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-sans font-medium text-[--text-primary] mb-6">Quick Facts</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-mono uppercase tracking-wider text-[--text-secondary]">Location</dt>
                <dd className="text-base text-[--text-primary] mt-1">{personal.location}</dd>
              </div>
              <div>
                <dt className="text-xs font-mono uppercase tracking-wider text-[--text-secondary]">Status</dt>
                <dd className="text-base text-[--text-primary] mt-1">
                  {personal.availableForWork ? 'Open to internships and freelance' : 'Currently unavailable'}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-mono uppercase tracking-wider text-[--text-secondary]">Focus</dt>
                <dd className="text-base text-[--text-primary] mt-1">Full-stack products and AI integration</dd>
              </div>
            </dl>
          </aside>
        </motion.div>
      </div>
    </section>
  )
}
