import { useState } from 'react'
import { ArrowUpRight, Boxes, ChevronDown, ChevronUp, Network, Package2, TrendingUp, Wrench, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from './Badge'
import InteractiveCard from './InteractiveCard'

const projectIcons = {
  procureiq: Package2,
  sopnet: Network,
}

function MiniLabel({ children }) {
  return (
    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
      {children}
    </p>
  )
}

function ProjectCard({ project }) {
  const [stackExpanded, setStackExpanded] = useState(false)
  const ProjectIcon = projectIcons[project.slug] ?? Boxes
  const extraCount = project.techStack.length - 5
  const visibleStack = stackExpanded ? project.techStack : project.techStack.slice(0, 5)

  return (
    <InteractiveCard className="h-full">
      <div className="surface-card group flex h-full flex-col overflow-hidden">

        {/* Thumbnail — clicking goes to detail page */}
        <Link to={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
          <div className={`relative h-40 w-full overflow-hidden bg-gradient-to-br ${project.thumbnailGradient}`}>
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 320 160"
              fill="none"
            >
              <defs>
                <pattern id={`pg-${project.slug}`} width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M24 0H0V24" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="320" height="160" fill={`url(#pg-${project.slug})`} />
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_40%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ProjectIcon size={48} className="text-white/90" strokeWidth={1.8} />
            </div>
            {/* hover arrow hint */}
            <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <ArrowUpRight size={16} className="text-white" />
            </div>
          </div>
        </Link>

        <div className="flex flex-1 flex-col gap-5 p-6">

          {/* Header */}
          <Link to={`/projects/${project.slug}`} className="group/link focus-visible:outline-none">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  {project.shortName} · {project.duration}
                </p>
                <h3 className="mt-1.5 text-xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text-primary)] transition group-hover/link:text-[var(--accent)]">
                  {project.name}
                </h3>
              </div>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-[var(--accent)] transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </div>
          </Link>

          {/* What it does */}
          <div className="rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-subtle)_60%,transparent)] px-4 py-3">
            <div className="mb-1.5 flex items-center gap-1.5">
              <Zap size={12} className="text-[var(--accent)]" />
              <MiniLabel>What it does</MiniLabel>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{project.cardSummary}</p>
          </div>

          {/* Problem */}
          <div className="border-l-2 border-[var(--accent)] pl-3">
            <div className="mb-1 flex items-center gap-1.5">
              <TrendingUp size={12} className="text-[var(--warning)]" />
              <MiniLabel>Problem</MiniLabel>
            </div>
            <p className="line-clamp-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.problem}
            </p>
          </div>

          {/* Output / Impact — top 2 metrics */}
          <div>
            <div className="mb-2 flex items-center gap-1.5">
              <TrendingUp size={12} className="text-[var(--success)]" />
              <MiniLabel>Output</MiniLabel>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {project.impact.slice(0, 2).map((imp) => (
                <div
                  key={imp.metric}
                  className="rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_80%,transparent)] px-3 py-2.5"
                >
                  <p className="text-base font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    {imp.value}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-tight text-[var(--text-muted)]">{imp.metric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack — expandable */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Wrench size={12} className="text-[var(--text-muted)]" />
                <MiniLabel>Stack</MiniLabel>
              </div>
              {extraCount > 0 && (
                <button
                  onClick={() => setStackExpanded((v) => !v)}
                  className="flex items-center gap-1 rounded-full border border-[var(--border)] px-2 py-0.5 text-[11px] font-medium text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {stackExpanded ? (
                    <><ChevronUp size={10} /> less</>
                  ) : (
                    <><ChevronDown size={10} /> +{extraCount} more</>
                  )}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {visibleStack.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4">
            <span className="text-xs text-[var(--text-muted)]">{project.role}</span>
            <Link
              to={`/projects/${project.slug}`}
              className="button-accent px-4 py-2 text-sm"
            >
              See project
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </InteractiveCard>
  )
}

export default ProjectCard
