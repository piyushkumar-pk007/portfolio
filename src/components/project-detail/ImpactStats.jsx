import { useMemo, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import AnimatedCount from '../AnimatedCount'
import FadeInSection from '../FadeInSection'
import SectionHeading from '../SectionHeading'
import { projectPageCopy } from '../../content/projects'

const impactPalette = [
  'var(--project-accent)',
  'var(--project-secondary)',
  'var(--accent-emerald)',
  'var(--accent-amber)',
]

function ImpactStats({ impact, sectionId }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })
  const prefersReducedMotion = useReducedMotion()
  const primaryValue = impact[0]?.value ?? ''
  const primaryValueClassName =
    primaryValue.length > 20
      ? 'text-4xl sm:text-5xl'
      : primaryValue.length > 12
        ? 'text-5xl sm:text-6xl'
        : 'text-6xl'

  const description = useMemo(
    () => `${impact.length} outcome signals spanning cost, inventory, accuracy, and planning value.`,
    [impact],
  )

  return (
    <section id={sectionId} className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={projectPageCopy.impactLabel}
          title={projectPageCopy.impactTitle}
          description={description}
        />
        <div ref={ref} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {impact.map((item, index) => (
            <motion.article
              key={item.metric}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className={`surface-card relative overflow-hidden p-6 ${index === 0 ? 'md:col-span-2 xl:col-span-3 xl:p-8' : 'h-full'}`}
              style={{
                '--impact-accent': impactPalette[index % impactPalette.length],
                background:
                  index === 0
                    ? 'linear-gradient(135deg, color-mix(in srgb, var(--impact-accent) 12%, transparent), transparent 55%), var(--bg-elevated)'
                    : 'var(--bg-elevated)',
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {index === 0 ? 'Primary signal' : 'Measured outcome'}
                </p>
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: 'var(--impact-accent)' }}
                />
              </div>
              <div className={`mt-5 font-semibold tracking-[-0.04em] text-[var(--text-primary)] ${index === 0 ? primaryValueClassName : 'text-4xl'}`}>
                <AnimatedCount value={item.value} active={isInView} duration={950} />
              </div>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{item.metric}</p>
              <div className={`mt-5 ${index === 0 ? 'max-w-2xl' : ''}`}>
                <div className="h-1.5 overflow-hidden rounded-full bg-[var(--bg-subtle)]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.progress ?? 0.65) * 100}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, delay: index * 0.07 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: 'var(--impact-accent)' }}
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
