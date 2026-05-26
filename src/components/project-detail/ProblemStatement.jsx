import { motion } from 'framer-motion'
import { projectPageCopy } from '../../content/projects'

function ProblemStatement({ problem }) {
  return (
    <section id="project-problem" className="section-shell">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45 }}
          className="surface-card p-10 md:p-14"
        >
          <span className="eyebrow">{projectPageCopy.challengeLabel}</span>
          <p className="max-w-4xl text-2xl font-medium italic leading-relaxed tracking-[-0.02em] text-[var(--text-primary)] md:text-3xl">
            {problem}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemStatement
