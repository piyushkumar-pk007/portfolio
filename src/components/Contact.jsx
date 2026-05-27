import { FolderGit2, Link2, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile, siteCopy } from '../content/profile'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'

const contactMethods = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: Phone },
  { label: 'LinkedIn', href: profile.linkedin, icon: Link2 },
  { label: 'GitHub', href: profile.github, icon: FolderGit2 },
]

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={siteCopy.contactHeading}
          title={siteCopy.contactTitle}
          description={siteCopy.contactBody}
          align="center"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="surface-card mx-auto max-w-4xl p-8 text-center"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center justify-center gap-3 rounded-2xl border px-5 py-4 text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <Icon size={18} className="text-[var(--accent)]" />
                  <span>{method.label}</span>
                </a>
              )
            })}
          </div>
        </motion.div>
      </FadeInSection>
    </section>
  )
}

export default Contact
