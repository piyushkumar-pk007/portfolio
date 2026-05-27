import { motion } from 'framer-motion'
import { BrainCircuit, Database, LayoutPanelTop, Settings2, Wand2 } from 'lucide-react'
import FadeInSection from '../FadeInSection'
import SectionHeading from '../SectionHeading'
import { projectPageCopy } from '../../content/projects'

const layerMeta = {
  data: {
    label: 'Data',
    accent: 'var(--text-muted)',
    Icon: Database,
  },
  features: {
    label: 'Features',
    accent: 'var(--project-secondary)',
    Icon: Wand2,
  },
  models: {
    label: 'Models',
    accent: 'var(--project-accent)',
    Icon: BrainCircuit,
  },
  optimization: {
    label: 'Optimization',
    accent: 'var(--accent-emerald)',
    Icon: Settings2,
  },
  app: {
    label: 'App layer',
    accent: 'var(--accent-amber)',
    Icon: LayoutPanelTop,
  },
}

function ArchitectureDiagram({ pipeline, sectionId }) {
  const layerCounts = pipeline.reduce((counts, item) => {
    counts[item.layer] = (counts[item.layer] ?? 0) + 1
    return counts
  }, {})

  return (
    <section
      id={sectionId}
      className="section-shell bg-[linear-gradient(180deg,color-mix(in_srgb,var(--project-tint)_78%,transparent),transparent_28%)]"
    >
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={projectPageCopy.architectureLabel}
          title={projectPageCopy.architectureTitle}
          description={`${pipeline.length} planning stages connected across ${Object.keys(layerCounts).length} system layers.`}
        />

        <div className="mb-8 grid gap-4 md:grid-cols-5">
          {Object.entries(layerCounts).map(([layer, count]) => {
            const meta = layerMeta[layer] ?? layerMeta.data
            const Icon = meta.Icon

            return (
              <div
                key={layer}
                className="rounded-[1.4rem] border px-4 py-4"
                style={{
                  borderColor: 'color-mix(in srgb, var(--border) 86%, transparent)',
                  backgroundColor: `color-mix(in srgb, ${meta.accent} 10%, var(--bg-elevated))`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${meta.accent} 16%, transparent)`,
                      color: meta.accent,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--text-primary)]">{meta.label}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      {count} stage{count > 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-[linear-gradient(180deg,color-mix(in_srgb,var(--project-accent)_25%,transparent),color-mix(in_srgb,var(--project-secondary)_22%,transparent),transparent)] lg:left-1/2 lg:-translate-x-1/2" />
          <div className="grid gap-5">
            {pipeline.map((node, index) => {
              const meta = layerMeta[node.layer] ?? layerMeta.data
              const Icon = meta.Icon
              const alignRight = index % 2 === 1

              return (
                <motion.article
                  key={node.stage}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-10"
                >
                  <div className={`${alignRight ? 'lg:col-start-2' : ''}`}>
                    <div
                      className={`surface-card relative overflow-hidden p-6 ${alignRight ? 'lg:ml-8' : 'lg:mr-8'}`}
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, ${meta.accent} 10%, transparent), transparent 58%), var(--bg-elevated)`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-2xl"
                            style={{
                              backgroundColor: `color-mix(in srgb, ${meta.accent} 14%, transparent)`,
                              color: meta.accent,
                            }}
                          >
                            <Icon size={20} />
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                              {meta.label}
                            </div>
                            <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                              {node.stage}
                            </h3>
                          </div>
                        </div>
                        <span className="font-mono text-sm text-[var(--text-muted)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)]">
                        {node.detail}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute left-[0.76rem] top-9 h-4 w-4 rounded-full border-4 border-[var(--bg)] lg:left-1/2 lg:-translate-x-1/2"
                    style={{ backgroundColor: meta.accent }}
                  />
                </motion.article>
              )
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default ArchitectureDiagram
