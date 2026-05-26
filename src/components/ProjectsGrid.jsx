import { motion } from 'framer-motion'
import { projects } from '../content/projects'
import FadeInSection from './FadeInSection'
import { siteCopy } from '../content/profile'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function ProjectsGrid() {
  return (
    <section id="projects" className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={siteCopy.projectsHeading} title={siteCopy.projectsTitle} />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

export default ProjectsGrid
