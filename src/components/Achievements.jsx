import { Award, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { achievements } from '../content/achievements'
import { siteCopy } from '../content/profile'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'

const groups = [
  { title: siteCopy.competitionsLabel, items: achievements.competitions, icon: Award, color: 'var(--accent-amber)' },
  { title: siteCopy.certificationsLabel, items: achievements.certifications, icon: BadgeCheck, color: 'var(--accent-emerald)' },
]

function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={siteCopy.achievementsHeading} title={siteCopy.achievementsTitle} />
        <div className="grid gap-6 lg:grid-cols-2">
          {groups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="surface-card p-7"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-2xl p-3"
                    style={{
                      background: `color-mix(in srgb, ${group.color} 16%, transparent)`,
                      color: group.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-4 text-[var(--text-secondary)]">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-2 w-2 rounded-full" style={{ background: group.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </FadeInSection>
    </section>
  )
}

export default Achievements
