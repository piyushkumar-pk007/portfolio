import { motion } from 'framer-motion'
import { experience } from '../content/experience'
import FadeInSection from './FadeInSection'
import InteractiveCard from './InteractiveCard'
import { siteCopy } from '../content/profile'
import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={siteCopy.experienceHeading} title={siteCopy.experienceTitle} />
        <div className="relative ml-4 pl-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="timeline-draw absolute bottom-0 left-0 top-0 w-px origin-top bg-[var(--border)]"
          />
          {experience.map((entry, index) => (
            <motion.article
              key={`${entry.company}-${entry.period}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              <span
                className="absolute -left-[2.55rem] top-2 h-4 w-4 rounded-full border-4 bg-[var(--bg)] shadow-[0_0_0_10px_color-mix(in_srgb,var(--bg)_72%,transparent)]"
                style={{ borderColor: 'var(--accent)' }}
              />
              <InteractiveCard>
                <div className="surface-card p-7">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
                        {entry.industry}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                        {entry.role}
                      </h3>
                      <p className="group relative mt-1 inline-block text-base text-[var(--text-secondary)]">
                        {entry.company}
                        <span className="absolute bottom-[-0.15rem] left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition duration-200 group-hover:scale-x-100" />
                      </p>
                    </div>
                    <p className="font-mono text-sm text-[var(--text-muted)]">{entry.period}</p>
                  </div>
                  <ul className="mt-6 space-y-4 text-[var(--text-secondary)]">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </InteractiveCard>
            </motion.article>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

export default Experience
