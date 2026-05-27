import { useMemo, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import AnimatedCount from '../AnimatedCount'
import FadeInSection from '../FadeInSection'
import SectionHeading from '../SectionHeading'
import { projectPageCopy } from '../../content/projects'

function ImpactStats({ impact, sectionId }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })
  const prefersReducedMotion = useReducedMotion()

  const description = useMemo(() => impact.map((item) => item.metric).join(' · '), [impact])

  return (
    <section id={sectionId} className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={projectPageCopy.impactLabel}
          title={projectPageCopy.impactTitle}
          description={description}
        />
        <div ref={ref} className="grid gap-5 lg:grid-cols-4">
          {impact.map((item, index) => (
            <motion.article
              key={item.metric}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="surface-card p-6"
            >
              <div className="text-4xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
                <AnimatedCount value={item.value} active={isInView} duration={950} />
              </div>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{item.metric}</p>
              <div className="mt-5">
                <div className="h-1.5 overflow-hidden rounded-full bg-[var(--bg-subtle)]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.progress ?? 0.65) * 100}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, delay: index * 0.07 }}
                    className="h-full rounded-full bg-[var(--accent)]"
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {item.benchmarkLabel}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

export default ImpactStats
