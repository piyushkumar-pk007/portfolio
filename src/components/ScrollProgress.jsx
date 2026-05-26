import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 1000 : 160,
    damping: prefersReducedMotion ? 100 : 28,
    mass: 0.2,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-[var(--accent)]"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
