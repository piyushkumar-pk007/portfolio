import { FolderGit2, Link2, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile, siteCopy } from '../content/profile'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'

const contactLinks = [
  { label: profile.location, href: null, icon: MapPin },
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: Phone },
  { label: 'LinkedIn', href: profile.linkedin, icon: Link2 },
  { label: 'GitHub', href: profile.github, icon: FolderGit2 },
]

function About() {
  return (
    <section id="about" className="section-shell bg-[color-mix(in_srgb,var(--accent-emerald)_4%,transparent)]">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={siteCopy.aboutHeading}
          title={siteCopy.aboutTitle}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="surface-card grid gap-8 p-8 lg:grid-cols-[1.3fr_0.7fr]"
        >
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            {siteCopy.aboutBody}
          </p>
          <div className="grid gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-center gap-3 rounded-2xl border px-4 py-3" style={{ borderColor: 'var(--border)' }}>
                  <Icon size={18} className="text-[var(--accent)]" />
                  <span className="text-sm text-[var(--text-secondary)]">{item.label}</span>
                </div>
              )

              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="transition hover:-translate-y-0.5">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>
        </motion.div>
      </FadeInSection>
    </section>
  )
}

export default About
