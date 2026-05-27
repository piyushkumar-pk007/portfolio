import { lazy, Suspense } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import ArchitectureDiagram from '../components/project-detail/ArchitectureDiagram'
import ImpactStats from '../components/project-detail/ImpactStats'
import ProjectNarrative from '../components/project-detail/ProjectNarrative'
import ProblemStatement from '../components/project-detail/ProblemStatement'
import ProjectHero from '../components/project-detail/ProjectHero'
import Badge from '../components/Badge'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeToggle'
import { profile, siteCopy } from '../content/profile'
import { projectPageCopy, projects } from '../content/projects'
import { useScrollSpy } from '../hooks/useScrollSpy'

const TechStackGrid = lazy(() => import('../components/project-detail/TechStackGrid'))

const projectThemeMap = {
  procureiq: {
    accent: 'var(--accent-violet)',
    secondary: 'var(--accent-sky)',
    tint: 'color-mix(in srgb, var(--accent-violet) 6%, transparent)',
  },
  sopnet: {
    accent: 'var(--accent-emerald)',
    secondary: 'var(--accent-sky)',
    tint: 'color-mix(in srgb, var(--accent-emerald) 6%, transparent)',
  },
}

function ProjectDetail() {
  const { slug } = useParams()
  const sectionIds = ['project-story', 'project-problem', 'project-architecture', 'project-impact', 'project-tech']
  const activeSection = useScrollSpy(sectionIds, '-25% 0px -50% 0px')
  const projectIndex = projects.findIndex((item) => item.slug === slug)

  if (projectIndex === -1) {
    return <Navigate to="/" replace />
  }

  const project = projects[projectIndex]
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const projectTheme = projectThemeMap[project.slug] ?? projectThemeMap.procureiq

  return (
    <div
      className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]"
      style={{
        '--project-accent': projectTheme.accent,
        '--project-secondary': projectTheme.secondary,
        '--project-tint': projectTheme.tint,
      }}
    >
      <div
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
        style={{
          borderColor: 'color-mix(in srgb, var(--border) 85%, transparent)',
          backgroundColor: 'color-mix(in srgb, var(--bg) 82%, transparent)',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
          >
            <ArrowLeft size={16} />
            {siteCopy.backToPortfolioLabel}
          </Link>
          <div className="flex items-center gap-3">
            <Badge tone="accent">{project.shortName}</Badge>
            <span className="hidden text-sm text-[var(--text-muted)] md:inline">{profile.name}</span>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <main>
        <ProjectHero project={project} />
        <ProjectNarrative project={project} sectionId="project-story" />
        <ProblemStatement problem={project.problem} sectionId="project-problem" />
        <ArchitectureDiagram pipeline={project.pipeline} sectionId="project-architecture" />
        <ImpactStats impact={project.impact} sectionId="project-impact" />
        <Suspense
          fallback={
            <div className="mx-auto max-w-6xl px-6 pb-24">
              <div
                className="rounded-2xl border px-5 py-4 text-sm text-[var(--text-secondary)]"
                style={{ borderColor: 'var(--border)' }}
              >
                {siteCopy.loadingStackLabel}
              </div>
            </div>
          }
        >
          <TechStackGrid techStack={project.techStack} sectionId="project-tech" />
        </Suspense>
        <aside className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 2xl:block">
          <div
            className="rounded-[2rem] border px-3 py-5 shadow-soft backdrop-blur-xl"
            style={{
              borderColor: 'color-mix(in srgb, var(--border) 85%, transparent)',
              backgroundColor: 'color-mix(in srgb, var(--bg) 84%, transparent)',
            }}
          >
            <div className="flex flex-col items-center gap-4">
              {sectionIds.map((sectionId, index) => {
                const isActive = activeSection === sectionId
                const label = projectPageCopy.sectionRail[index]

                return (
                  <a
                    key={sectionId}
                    href={`#${sectionId}`}
                    className="group flex items-center gap-3"
                    aria-label={label}
                  >
                    <span className={`text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] transition ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      {label}
                    </span>
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <span
                        className="h-1.5 w-1.5 rounded-full transition"
                        style={{ backgroundColor: isActive ? 'var(--project-accent)' : 'var(--text-muted)' }}
                      />
                      {isActive ? (
                        <span
                          className="absolute h-4 w-4 rounded-full border"
                          style={{ borderColor: 'var(--project-accent)' }}
                        />
                      ) : null}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </aside>

        <section className="pb-24">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35 }}
              className="surface-card relative overflow-hidden px-6 py-5 italic text-[var(--text-muted)]"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, color-mix(in srgb, var(--project-accent) 9%, transparent), transparent 58%)',
                }}
              />
              <span className="mb-3 block font-mono text-sm uppercase tracking-[0.24em]">
                {projectPageCopy.honestyLabel}
              </span>
              <div className="relative">{project.honestyNote}</div>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Link
                to={`/projects/${previousProject.slug}`}
                className="surface-card relative block overflow-hidden p-6"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--project-secondary)_8%,transparent),transparent_58%)]" />
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  {siteCopy.previousProjectLabel}
                </p>
                <div className="relative">
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    {previousProject.shortName}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{previousProject.tagline}</p>
                </div>
              </Link>
              <Link
                to={`/projects/${nextProject.slug}`}
                className="surface-card relative block overflow-hidden p-6 text-right"
              >
                <div className="absolute inset-0 bg-[linear-gradient(225deg,color-mix(in_srgb,var(--project-accent)_10%,transparent),transparent_58%)]" />
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  {siteCopy.nextProjectLabel}
                </p>
                <div className="relative">
                  <div className="mt-3 inline-flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    <span>{nextProject.shortName}</span>
                    <ArrowRight size={20} />
                  </div>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{nextProject.tagline}</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProjectDetail
