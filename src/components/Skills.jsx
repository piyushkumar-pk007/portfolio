import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../content/skills'
import { siteCopy } from '../content/profile'
import Badge from './Badge'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'

function Skills() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="skills" className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={siteCopy.skillsHeading} title={siteCopy.skillsTitle} />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.category}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="surface-card p-6"
            >
              <motion.div
                className="skill-bar"
                initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              />
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                {group.category}
              </h3>
              <motion.div
                className="mt-4 flex flex-wrap gap-3"
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={
                  prefersReducedMotion
                    ? {}
                    : {
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.03,
                          },
                        },
                      }
                }
              >
                {group.items.map((item) => (
                  <motion.div
                    key={item}
                    variants={
                      prefersReducedMotion
                        ? {}
                        : {
                            hidden: { opacity: 0, y: 14 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.24 } },
                          }
                    }
                    whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.03 }}
                  >
                    <Badge>
                      <span className="group-hover:text-[var(--text-primary)]">{item}</span>
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

export default Skills
