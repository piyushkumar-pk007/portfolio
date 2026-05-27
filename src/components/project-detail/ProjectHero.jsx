import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  BarChart3,
  Network,
  Package2,
  Sparkles,
  Workflow,
} from 'lucide-react'
import Badge from '../Badge'
import { projectPageCopy } from '../../content/projects'

const projectIconMap = {
  procureiq: Package2,
  sopnet: Network,
}

function GithubMark(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.33 9.33 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.81-4.56 5.06.36.32.68.95.68 1.91 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  )
}

function ProjectHero({ project }) {
  const ProjectIcon = projectIconMap[project.slug] ?? Sparkles
  const heroOutcome = project.impact[0]?.value ?? project.duration
  const outcomeClassName =
    heroOutcome.length > 20
      ? 'text-lg sm:text-xl'
      : heroOutcome.length > 12
        ? 'text-xl sm:text-2xl'
        : 'text-2xl sm:text-3xl'
  const metaStats = [
    { label: 'Pipeline stages', value: `${project.pipeline.length}`.padStart(2, '0') },
    { label: 'Code modules', value: `${project.modules.length}`.padStart(2, '0') },
    { label: 'Stack tools', value: `${project.techStack.length}`.padStart(2, '0') },
  ]
  const leadOutcome = project.impact[0]
  const visualStages = project.pipeline.filter((_, index) => index % 2 === 0).slice(0, 2)

  const scrollToProblem = () => {
    document.getElementById('project-problem')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="grid-band relative overflow-hidden border-b" style={{ borderColor: 'var(--border)' }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 20%, color-mix(in srgb, var(--project-accent) 18%, transparent), transparent 32%), radial-gradient(circle at 82% 18%, color-mix(in srgb, var(--project-secondary) 20%, transparent), transparent 28%), linear-gradient(180deg, color-mix(in srgb, var(--project-tint) 80%, transparent), transparent 42%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Badge tone="accent">{project.role}</Badge>
              <Badge>{project.duration}</Badge>
              <span className="text-sm uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Public case study
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="mt-10 font-mono text-sm uppercase tracking-[0.28em] text-[var(--text-muted)]"
            >
              {project.name}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.08 }}
              className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--text-primary)] sm:text-6xl xl:text-7xl"
            >
              {project.shortName}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.14 }}
              className="mt-5 max-w-3xl text-xl leading-relaxed text-[var(--text-secondary)] md:text-2xl"
            >
              {project.tagline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.18 }}
              className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
            >
              {project.cardSummary}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="button-accent px-6 py-3.5 text-base"
                style={{ '--button-accent': 'var(--project-accent)' }}
              >
                <GithubMark className="h-[18px] w-[18px]" />
                {projectPageCopy.repoLabel}
              </a>
              <button type="button" onClick={scrollToProblem} className="button-secondary">
                {projectPageCopy.scrollLabel}
                <ArrowDownRight size={18} />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.3 }}
              className="mt-12 space-y-4"
            >
              <div className="grid gap-3 sm:grid-cols-3">
                {metaStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border px-5 py-4 backdrop-blur-sm"
                    style={{
                      borderColor: 'color-mix(in srgb, var(--border) 88%, transparent)',
                      backgroundColor: 'color-mix(in srgb, var(--bg-elevated) 82%, transparent)',
                    }}
                  >
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {leadOutcome ? (
                <div
                  className="rounded-[1.6rem] border px-5 py-5"
                  style={{
                    borderColor: 'color-mix(in srgb, var(--project-accent) 20%, var(--border))',
                    background:
                      'linear-gradient(135deg, color-mix(in srgb, var(--project-accent) 12%, transparent), color-mix(in srgb, var(--accent-emerald) 8%, transparent))',
                  }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                        Lead outcome
                      </p>
                      <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl">
                        {heroOutcome}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {leadOutcome.metric}
                      </p>
                    </div>
                    <div className="rounded-2xl border px-4 py-3 text-sm text-[var(--text-secondary)]" style={{ borderColor: 'color-mix(in srgb, var(--border) 84%, transparent)', backgroundColor: 'color-mix(in srgb, var(--bg-elevated) 72%, transparent)' }}>
                      {leadOutcome.benchmarkLabel}
                    </div>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="surface-card relative overflow-hidden"
          >
            <div className={`relative overflow-hidden bg-gradient-to-br ${project.thumbnailGradient} p-6 md:p-8`}>
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-20"
                viewBox="0 0 640 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id={`project-hero-grid-${project.slug}`} width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M32 0H0V32" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="640" height="520" fill={`url(#project-hero-grid-${project.slug})`} />
              </svg>
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                  <Workflow size={14} />
                  Decision system
                </div>
                <div className="w-full max-w-[18rem] rounded-2xl border border-white/18 bg-white/10 px-4 py-3 text-white/88 backdrop-blur-md sm:w-auto">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
                    <BarChart3 size={14} />
                    Outcome signal
                  </div>
                  <div className={`mt-2 font-semibold tracking-[-0.04em] text-white ${outcomeClassName}`}>
                    {heroOutcome}
                  </div>
                </div>
              </div>
              <div className="relative flex min-h-[250px] flex-col items-center justify-center px-4 py-10 text-center text-white sm:px-6">
                <div className="rounded-[1.75rem] border border-white/18 bg-white/10 p-5 shadow-soft backdrop-blur-md">
                  <ProjectIcon size={60} strokeWidth={1.7} className="mx-auto text-white/95" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.26em] text-white/70 sm:text-sm">
                  Forecast to action
                </p>
                <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Connected supply-chain logic
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                  Signals move from data intake to risk-aware optimization, then land in a usable app layer.
                </p>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                {visualStages.map((stage, index) => (
                  <div
                    key={stage.stage}
                    className="rounded-[1.4rem] border border-white/15 bg-[rgba(10,15,28,0.18)] p-4 text-white shadow-soft backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-white/62">
                        Step {index + 1}
                      </span>
                      <span className="rounded-full border border-white/14 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/72">
                        {stage.layer}
                      </span>
                    </div>
                    <div className="mt-3 text-sm font-medium leading-relaxed text-white/92">{stage.stage}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero
