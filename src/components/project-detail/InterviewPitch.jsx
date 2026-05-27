import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeInSection from '../FadeInSection'
import SectionHeading from '../SectionHeading'
import { projectPageCopy } from '../../content/projects'

function InterviewPitch({ pitchShort, pitchLong, sectionId }) {
  const [activeTab, setActiveTab] = useState('short')

  const tabs = [
    { id: 'short', label: projectPageCopy.pitchShortTab, content: pitchShort },
    { id: 'long', label: projectPageCopy.pitchLongTab, content: pitchLong },
  ]

  const activeContent = tabs.find((tab) => tab.id === activeTab)

  return (
    <section id={sectionId} className="section-shell">
      <FadeInSection className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow={projectPageCopy.pitchLabel} title={projectPageCopy.pitchTitle} />
        <div className="surface-card p-6 md:p-8">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-[var(--accent)] text-white'
                    : 'border text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
                style={activeTab === tab.id ? undefined : { borderColor: 'var(--border)' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border-l-4 bg-[var(--bg-subtle)] p-8" style={{ borderLeftColor: 'var(--accent)' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeContent.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="text-lg italic leading-relaxed text-[var(--text-primary)] md:text-xl"
              >
                {activeContent.content}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default InterviewPitch
