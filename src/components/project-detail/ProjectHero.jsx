import { motion } from 'framer-motion'
import { ChevronDown, FolderGit2 } from 'lucide-react'
import Badge from '../Badge'
import { projectPageCopy } from '../../content/projects'

function ProjectHero({ project }) {
  const scrollToProblem = () => {
    document.getElementById('project-problem')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="grid-band relative flex min-h-[70vh] items-center border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_45%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="font-mono text-sm uppercase tracking-[0.28em] text-[var(--text-muted)]"
        >
          {project.role} · {project.duration}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.08 }}
          className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-[var(--text-primary)] sm:text-6xl xl:text-7xl"
        >
          {project.shortName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.14 }}
          className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl"
        >
          {project.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {project.techStack.map((tool) => (
            <Badge key={tool} tone="accent">
              {tool}
            </Badge>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.42, delay: 0.28 }}
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
          style={{ borderColor: 'var(--border)' }}
        >
          <FolderGit2 size={16} />
          {projectPageCopy.repoLabel}
        </motion.a>
        <button
          type="button"
          onClick={scrollToProblem}
          aria-label={projectPageCopy.scrollLabel}
          className="mt-16 inline-flex flex-col items-center gap-2 text-sm text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
        >
          <span>{projectPageCopy.scrollLabel}</span>
          <ChevronDown size={18} />
        </button>
      </div>
    </section>
  )
}

export default ProjectHero
