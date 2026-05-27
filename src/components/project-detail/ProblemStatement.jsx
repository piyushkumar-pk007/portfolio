import { motion } from 'framer-motion'
import FadeInSection from '../FadeInSection'
import { projectPageCopy } from '../../content/projects'

function ProblemStatement({ problem, sectionId }) {
  return (
    <section id={sectionId} className="section-shell">
      <FadeInSection className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45 }}
          className="surface-card relative overflow-hidden p-10 md:p-14"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--project-accent)_10%,transparent),transparent_56%)]" />
          <span className="eyebrow">{projectPageCopy.challengeLabel}</span>
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.28fr] lg:items-start">
            <p className="max-w-4xl text-2xl font-medium italic leading-relaxed tracking-[-0.02em] text-[var(--text-primary)] md:text-3xl">
              {problem}
            </p>
            <div className="rounded-[1.5rem] border px-5 py-5" style={{ borderColor: 'color-mix(in srgb, var(--border) 80%, transparent)', backgroundColor: 'color-mix(in srgb, var(--bg-elevated) 78%, transparent)' }}>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Design pressure
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                The system has to connect prediction, supplier risk, and cost-constrained action in one flow.
              </p>
            </div>
          </div>
        </motion.div>
      </FadeInSection>
    </section>
  )
}

export default ProblemStatement
