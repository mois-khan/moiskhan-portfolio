// src/components/sections/About.tsx
// About section with bio, highlights, and stat counters

import { motion } from 'framer-motion'
import { personal } from '../../data'
import { projects } from '../../data'
import { achievements } from '../../data'
import { useCountUp } from '../../hooks/useCountUp'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function StatCounter({
  target,
  label,
  suffix,
  format,
}: {
  target: number
  label: string
  suffix?: string
  format?: (n: number) => string
}) {
  const { count, ref } = useCountUp(target)
  return (
    <div
      ref={ref}
      className="flex flex-col gap-1 p-5 rounded-xl"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}
    >
      <span
        className="text-3xl md:text-4xl font-semibold leading-none"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
      >
        {format ? format(count) : count}{suffix || ''}
      </span>
      <span
        className="text-xs uppercase tracking-wider mt-1"
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
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section label */}
          <motion.p
            className="text-xs uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
            variants={childVariants}
          >
            About Me
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl mb-6"
            style={{ color: 'var(--text-primary)' }}
            variants={childVariants}
          >
            Building software that<br />
            <span style={{ color: 'var(--text-secondary)' }}>solves real problems.</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg leading-relaxed max-w-3xl mb-10"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
            variants={childVariants}
          >
            {personal.bio}
          </motion.p>

          {/* Stat counters grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={childVariants}
          >
            <StatCounter target={85} label="SGPA" format={(n) => `${(n / 10).toFixed(1)}`} />
            <StatCounter target={projects.length} label="Projects" suffix="+" />
            <StatCounter target={prizeWins} label="Awards" />
            <StatCounter target={3} label="Years Coding" suffix="+" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
