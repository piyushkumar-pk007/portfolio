import { motion, useReducedMotion } from 'framer-motion'
import { BarChart3, BrainCircuit, Boxes, CloudCog, Sparkles, Truck } from 'lucide-react'
import { skillGroups } from '../content/skills'
import { siteCopy } from '../content/profile'
import Badge from './Badge'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'

const categoryColors = {
  'Machine Learning': 'violet',
  'ML & Forecasting': 'violet',
  'Optimization & Simulation': 'emerald',
  'MLOps & Deployment': 'sky',
  'MLOps & Cloud': 'sky',
  'Data & BI': 'sky',
  'Domain Expertise': 'emerald',
  'Supply Chain Domain': 'emerald',
}

const categoryIcons = {
  'Machine Learning': BrainCircuit,
  'ML & Forecasting': BrainCircuit,
  'Optimization & Simulation': Boxes,
  'MLOps & Deployment': CloudCog,
  'MLOps & Cloud': CloudCog,
  'Data & BI': BarChart3,
  'Domain Expertise': Truck,
  'Supply Chain Domain': Truck,
}

function Skills() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="skills" className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={siteCopy.skillsHeading} title={siteCopy.skillsTitle} />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const colorKey = categoryColors[group.category] ?? 'violet'
            const Icon = categoryIcons[group.category] ?? Sparkles

            return (
              <motion.article
                key={group.category}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="surface-card border-l-4 p-6"
                style={{
                  borderLeftColor: `var(--accent-${colorKey})`,
                  '--skill-accent': `var(--accent-${colorKey})`,
                  '--skill-accent-soft': `color-mix(in srgb, var(--accent-${colorKey}) 16%, transparent)`,
                }}
              >
                <motion.div
                  className="skill-bar"
                  style={{ background: 'linear-gradient(90deg, var(--skill-accent), transparent)' }}
                  initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                />
                <div className="mt-4 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: 'var(--skill-accent-soft)', color: 'var(--skill-accent)' }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    {group.category}
                  </h3>
                </div>
                <motion.div
                  className="mt-5 flex flex-wrap gap-3"
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
            )
          })}
        </div>
      </FadeInSection>
    </section>
  )
}

export default Skills
