import { ArrowUpRight, Boxes, Network, Package2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from './Badge'
import InteractiveCard from './InteractiveCard'

const projectIcons = {
  procureiq: Package2,
  sopnet: Network,
}

function ProjectCard({ project }) {
  const ProjectIcon = projectIcons[project.slug] ?? Boxes

  return (
    <InteractiveCard className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="surface-card group block h-full p-7 focus-visible:outline-none"
      >
        <div className="flex h-full flex-col">
          <div className={`relative mb-6 h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br ${project.thumbnailGradient}`}>
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 320 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id={`project-grid-${project.slug}`} width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M24 0H0V24" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="320" height="160" fill={`url(#project-grid-${project.slug})`} />
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_40%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ProjectIcon size={48} className="text-white/90" strokeWidth={1.8} />
            </div>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
                {project.shortName}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                {project.name}
              </h3>
            </div>
            <ArrowUpRight className="text-[var(--accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{project.cardSummary}</p>
          <p className="mt-4 text-sm font-medium text-[var(--accent)]">{project.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between text-sm text-[var(--text-muted)]">
            <span>{project.role}</span>
            <span>{project.duration}</span>
          </div>
        </div>
      </Link>
    </InteractiveCard>
  )
}

export default ProjectCard
