import { useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

function InteractiveCard({ children, className = '' }) {
  const prefersReducedMotion = useReducedMotion()
  const [isHovering, setIsHovering] = useState(false)
  const rotateXRaw = useMotionValue(0)
  const rotateYRaw = useMotionValue(0)
  const rotateX = useSpring(rotateXRaw, { stiffness: 150, damping: 18, mass: 0.2 })
  const rotateY = useSpring(rotateYRaw, { stiffness: 150, damping: 18, mass: 0.2 })
  const sheenX = useTransform(rotateY, [-8, 8], ['25%', '75%'])
  const sheenY = useTransform(rotateX, [-8, 8], ['70%', '30%'])
  const highlight = useMotionTemplate`radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.18), transparent 35%)`

  const handlePointerMove = (event) => {
    if (prefersReducedMotion) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - bounds.left
    const offsetY = event.clientY - bounds.top
    const rotateAmountY = ((offsetX / bounds.width) * 2 - 1) * 8
    const rotateAmountX = -(((offsetY / bounds.height) * 2 - 1) * 8)

    rotateXRaw.set(rotateAmountX)
    rotateYRaw.set(rotateAmountY)
    event.currentTarget.style.setProperty('--spotlight-x', `${offsetX}px`)
    event.currentTarget.style.setProperty('--spotlight-y', `${offsetY}px`)
  }

  const resetTilt = () => {
    rotateXRaw.set(0)
    rotateYRaw.set(0)
    setIsHovering(false)
  }

  return (
    <motion.div
      className={`interactive-card ${className}`}
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={resetTilt}
      style={
        prefersReducedMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              willChange: isHovering ? 'transform' : 'auto',
            }
      }
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition duration-200"
        style={prefersReducedMotion ? undefined : { backgroundImage: highlight, opacity: isHovering ? 1 : 0 }}
      />
      <div className="interactive-card__content">{children}</div>
    </motion.div>
  )
}

export default InteractiveCard
