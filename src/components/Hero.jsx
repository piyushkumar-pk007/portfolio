import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import AnimatedCount from './AnimatedCount'
import { profile, siteCopy } from '../content/profile'
import { useTypewriter } from '../hooks/useTypewriter'
import ResumeButton from './ResumeButton'

function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const typedRole = useTypewriter(profile.heroRoles)

  const containerVariants = prefersReducedMotion
    ? { animate: {} }
    : {
        animate: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }

  const itemVariants = prefersReducedMotion
    ? { animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <section id="top" className="mesh-hero relative overflow-hidden pb-20 pt-20 md:pb-24 md:pt-28">
      <div className="hero-blob left-[5%] top-20 h-56 w-56 bg-[color-mix(in_srgb,var(--accent)_34%,transparent)]" />
      <div className="hero-blob right-[8%] top-12 h-44 w-44 bg-[color-mix(in_srgb,var(--accent-soft)_88%,transparent)]" style={{ animationDelay: '-3.5s' }} />
      <div className="hero-blob bottom-10 left-[28%] h-64 w-64 bg-[color-mix(in_srgb,var(--border)_72%,transparent)]" style={{ animationDelay: '-6.5s' }} />

      <div className="hero-data-chip left-[8%] top-32 hidden rounded-3xl p-4 xl:block">
        <svg width="106" height="48" viewBox="0 0 106 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 34C17 34 19 10 34 10C49 10 52 38 68 38C80 38 83 22 102 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="34" cy="10" r="3.5" fill="currentColor" />
          <circle cx="68" cy="38" r="3.5" fill="currentColor" />
        </svg>
      </div>
      <div className="hero-data-chip right-[10%] top-44 hidden rounded-[1.75rem] p-5 xl:block" style={{ animationDelay: '-2.5s' }}>
        <svg width="86" height="60" viewBox="0 0 86 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="26" width="10" height="24" rx="5" fill="currentColor" />
          <rect x="28" y="14" width="10" height="36" rx="5" fill="currentColor" />
          <rect x="48" y="20" width="10" height="30" rx="5" fill="currentColor" />
          <rect x="68" y="8" width="10" height="42" rx="5" fill="currentColor" />
        </svg>
      </div>
      <div className="hero-data-chip bottom-10 right-[24%] hidden rounded-full p-5 xl:flex xl:h-28 xl:w-28 xl:items-center xl:justify-center" style={{ animationDelay: '-5.2s' }}>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="36" r="22" stroke="currentColor" strokeWidth="7" strokeOpacity="0.34" />
          <path d="M36 14C48.1503 14 58 23.8497 58 36" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
          <text x="36" y="41" textAnchor="middle" fill="currentColor" fontSize="12" fontFamily="JetBrains Mono, monospace">+18%</text>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? false : 'initial'}
          animate="animate"
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <motion.span variants={itemVariants} className="eyebrow">{profile.title}</motion.span>
            <motion.p variants={itemVariants} className="mb-4 mt-0 text-sm font-medium uppercase tracking-[0.24em] text-[var(--accent)]">
              {siteCopy.heroRolePrefix} <span className="text-[var(--text-primary)]">{typedRole}</span><span className="type-cursor" />
            </motion.p>
            <motion.h1 variants={itemVariants} className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-6xl xl:text-7xl">
              {profile.name}
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-5 max-w-3xl text-xl text-[var(--text-secondary)]">{profile.tagline}</motion.p>
            <motion.p variants={itemVariants} className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              {siteCopy.heroIntro}
            </motion.p>
            <motion.p variants={itemVariants} className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              {profile.summary}
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
              <ResumeButton large />
              <a
                href="#projects"
                className="button-secondary"
              >
                {siteCopy.viewProjectsLabel}
                <ArrowDownRight size={18} />
              </a>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="surface-card relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_45%)]" />
            <div className="relative">
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-[var(--text-muted)]">
                {siteCopy.heroSnapshotLabel}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {profile.heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-shimmer rounded-3xl border bg-[color-mix(in_srgb,var(--bg-elevated)_72%,transparent)] p-5"
                    style={{ borderColor: 'var(--border)', '--delay': `${index * 120}ms` }}
                  >
                    <div className="text-3xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                      <AnimatedCount value={stat.value} active duration={800} />
                    </div>
                    <div className="mt-2 text-sm text-[var(--text-secondary)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
