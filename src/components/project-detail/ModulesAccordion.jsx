import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, FileCode2 } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { projectPageCopy } from '../../content/projects'

function ModulesAccordion({ modules }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={projectPageCopy.modulesLabel} title={projectPageCopy.modulesTitle} />
        <div className="grid gap-4">
          {modules.map((module, index) => {
            const isOpen = openIndex === index

            return (
              <motion.article key={module.file} layout className="surface-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                      {module.name}
                    </h3>
                    <p className="mt-2 font-mono text-sm text-[var(--text-muted)]">{module.file}</p>
                  </div>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="text-[var(--text-secondary)]" />
                  </motion.span>
                </button>
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
                          <div className="rounded-2xl bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
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
      </div>
    </section>
  )
}

export default ModulesAccordion
