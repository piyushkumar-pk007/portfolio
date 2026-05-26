import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from './Badge'
import InteractiveCard from './InteractiveCard'

function ProjectCard({ project }) {
  return (
    <InteractiveCard className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="surface-card group block h-full p-7 focus-visible:outline-none"
      >
        <div className="flex h-full flex-col">
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
