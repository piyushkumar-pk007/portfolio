import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

function formatAnimatedValue(template, progress) {
  let numberIndex = 0
  const numbers = [...template.matchAll(/\d+(\.\d+)?/g)].map((match) => match[0])

  return template.replace(/\d+(\.\d+)?/g, () => {
    const raw = numbers[numberIndex]
    numberIndex += 1
    const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
    const target = Number.parseFloat(raw)
    const value = progress * target
    return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()
  })
}

function AnimatedCount({ value, active, duration = 900 }) {
  const prefersReducedMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(
    active || prefersReducedMotion ? value : formatAnimatedValue(value, 0),
  )

  useEffect(() => {
    if (!active || prefersReducedMotion) {
      setDisplayValue(value)
      return undefined
    }

    let frameId = 0
    const startedAt = performance.now()

    const tick = (timestamp) => {
      const elapsed = Math.min((timestamp - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - elapsed, 3)
      setDisplayValue(formatAnimatedValue(value, eased))

      if (elapsed < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [active, duration, prefersReducedMotion, value])

  return <span>{displayValue}</span>
}

export default AnimatedCount
