import { motion } from 'framer-motion'
import { education } from '../content/education'
import { siteCopy } from '../content/profile'
import Badge from './Badge'
import FadeInSection from './FadeInSection'
import InteractiveCard from './InteractiveCard'
import SectionHeading from './SectionHeading'

function Education() {
  return (
    <section id="education" className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={siteCopy.educationHeading} title={siteCopy.educationTitle} />
        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={`${item.degree}-${item.period}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <InteractiveCard>
                <div className="surface-card p-7">
                  <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-base text-[var(--text-secondary)]">{item.institution}</p>
                  <p className="mt-5 text-sm text-[var(--text-muted)]">{item.score}</p>
                  {item.coursework ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.coursework.map((course) => (
                        <Badge key={course}>{course}</Badge>
                      ))}
                    </div>
                  ) : null}
                </div>
              </InteractiveCard>
            </motion.article>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

export default Education
