import FadeInSection from '../FadeInSection'
import SectionHeading from '../SectionHeading'

function ProjectNarrative({ project, sectionId }) {
  const plainEnglish = project.plainEnglish

  if (!plainEnglish?.cards?.length) {
    return null
  }

  return (
    <section
      id={sectionId}
      className="section-shell bg-[linear-gradient(180deg,color-mix(in_srgb,var(--project-tint)_62%,transparent),transparent_24%)]"
    >
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={plainEnglish.eyebrow}
          title={plainEnglish.title}
          description={plainEnglish.description}
        />

        <div className="surface-card relative overflow-hidden p-7 md:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--project-accent)_8%,transparent),transparent_58%)]" />
          <div className="relative">
            <p className="max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
              {plainEnglish.summary}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {plainEnglish.cards.map((card, index) => (
                <article
                  key={card.title}
                  className="rounded-[1.4rem] border bg-[color-mix(in_srgb,var(--bg-elevated)_88%,transparent)] p-5"
                  style={{ borderColor: 'color-mix(in srgb, var(--border) 84%, transparent)' }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Note {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default ProjectNarrative
