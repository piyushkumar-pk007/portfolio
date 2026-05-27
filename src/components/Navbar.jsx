import { useState } from 'react'
import { LayoutGroup, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { navigationLinks, profile } from '../content/profile'
import { useScrollSpy } from '../hooks/useScrollSpy'
import ResumeButton from './ResumeButton'
import ScrollProgress from './ScrollProgress'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const prefersReducedMotion = useReducedMotion()
  const sectionIds = navigationLinks.map((link) => link.href.replace('#', ''))
  const activeSection = useScrollSpy(sectionIds)
  const { scrollY } = useScroll()
  const [isElevated, setIsElevated] = useState(() => (typeof window !== 'undefined' ? window.scrollY > 56 : false))

  useMotionValueEvent(scrollY, 'change', (value) => {
    setIsElevated(value > 56)
  })

  return (
    <>
      <ScrollProgress />
      <header
        className="sticky top-0 z-50 border-b transition duration-200"
        style={{
          borderColor: `color-mix(in srgb, var(--border) ${isElevated ? '85%' : '0%'}, transparent)`,
          backgroundColor: isElevated
            ? 'color-mix(in srgb, var(--bg) 80%, transparent)'
            : 'color-mix(in srgb, var(--bg) 18%, transparent)',
          backdropFilter: isElevated ? 'blur(20px)' : 'blur(0px)',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
            {profile.name}
          </a>
          <LayoutGroup>
            <nav className="hidden items-center gap-3 text-sm text-[var(--text-secondary)] lg:flex">
              {navigationLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative rounded-full px-4 py-2 transition hover:text-[var(--text-primary)]"
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 32 }}
                        style={{ background: 'color-mix(in srgb, var(--accent) 14%, transparent)' }}
                      />
                    ) : null}
                    <span className={`relative z-10 ${isActive ? 'text-[var(--text-primary)]' : ''}`}>{link.label}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[var(--accent)]"
                        transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    ) : null}
                  </a>
                )
              })}
            </nav>
          </LayoutGroup>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ResumeButton />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
