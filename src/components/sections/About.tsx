// src/components/sections/About.tsx
// About section with bio and stat counters

import { motion } from 'framer-motion'
import { personal } from '../../data'
import { projects } from '../../data'
import { achievements } from '../../data'
import { useCountUp } from '../../hooks/useCountUp'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function StatCounter({
  target,
  label,
  format,
}: {
  target: number
  label: string
  format?: (n: number) => string
}) {
  const { count, ref } = useCountUp(target)
  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span
        className="text-4xl font-semibold leading-none"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
      >
        {format ? format(count) : count}
      </span>
      <span
        className="text-xs uppercase tracking-wider"
        style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
      >
        {label}
      </span>
    </div>
  )
}

export function About() {
  const prizeWins = achievements.filter((a) =>
    a.position.toLowerCase().includes('prize'),
  ).length

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="rounded-xl p-7 md:p-9"
            variants={childVariants}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              About
            </h2>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
            >
              {personal.bio}
            </p>

            {/* Stat counters */}
            <div
              className="grid grid-cols-3 gap-6 pt-8"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <StatCounter target={85} label="SGPA" format={(n) => `${(n / 10).toFixed(1)}`} />
              <StatCounter target={projects.length} label="Projects" />
              <StatCounter target={prizeWins} label="Awards" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
