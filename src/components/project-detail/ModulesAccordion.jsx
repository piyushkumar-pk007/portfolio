import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown, Copy, FileCode2 } from 'lucide-react'
import FadeInSection from '../FadeInSection'
import { siteCopy } from '../../content/profile'
import SectionHeading from '../SectionHeading'
import { projectPageCopy } from '../../content/projects'

const layerAccents = {
  data: '#94a3b8',
  features: '#60a5fa',
  models: '#a78bfa',
  optimization: '#34d399',
  app: '#f59e0b',
}

function ModulesAccordion({ modules, sectionId }) {
  const [openIndex, setOpenIndex] = useState(0)
  const [copiedFile, setCopiedFile] = useState('')

  const handleCopy = async (file) => {
    await navigator.clipboard.writeText(file)
    setCopiedFile(file)
    window.setTimeout(() => setCopiedFile(''), 1400)
  }

  return (
    <section id={sectionId} className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={projectPageCopy.modulesLabel} title={projectPageCopy.modulesTitle} />
        <div className="grid gap-4">
          {modules.map((module, index) => {
            const isOpen = openIndex === index
            const layerColor = layerAccents[module.layer] ?? 'var(--accent)'
            const isCopied = copiedFile === module.file

            return (
              <motion.article
                key={module.file}
                layout
                className="surface-card overflow-hidden"
                style={{
                  borderLeft: isOpen ? `4px solid ${layerColor}` : '4px solid transparent',
                }}
              >
                <div className="group flex items-center justify-between gap-4 px-6 py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex min-w-0 flex-1 items-center justify-between gap-4 text-left"
                  >
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                        {module.name}
                      </h3>
                      <div className="mt-2 truncate font-mono text-sm text-[var(--text-muted)]">
                        {module.file}
                      </div>
                    </div>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="text-[var(--text-secondary)]" />
                    </motion.span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopy(module.file)}
                    className="rounded-full p-2 text-[var(--text-muted)] opacity-0 transition hover:text-[var(--accent)] group-hover:opacity-100"
                    aria-label={isCopied ? siteCopy.copiedPathLabel : siteCopy.copyPathLabel}
                  >
                    {isCopied ? <Check size={16} className="text-[var(--accent)]" /> : <Copy size={16} />}
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t px-6 pb-6 pt-5" style={{ borderColor: 'var(--border)' }}>
                        <div className="flex items-start gap-4">
                          <div
                            className="rounded-2xl p-3"
                            style={{ backgroundColor: `color-mix(in srgb, ${layerColor} 16%, transparent)`, color: layerColor }}
                          >
                            <FileCode2 size={18} />
                          </div>
                          <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                            {module.notes}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </FadeInSection>
    </section>
  )
}

export default ModulesAccordion
