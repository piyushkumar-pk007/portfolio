import { useEffect, useMemo, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '../SectionHeading'
import { projectPageCopy } from '../../content/projects'

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

function AnimatedMetricValue({ value, active }) {
  const [displayValue, setDisplayValue] = useState(active ? value : formatAnimatedValue(value, 0))

  useEffect(() => {
    if (!active) {
      return undefined
    }

    let frameId
    const startedAt = performance.now()
    const duration = 1200

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
  }, [active, value])

  return <span>{displayValue}</span>
}

function ImpactStats({ impact }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })

  const description = useMemo(() => impact.map((item) => item.metric).join(' · '), [impact])

  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={projectPageCopy.impactLabel}
          title={projectPageCopy.impactTitle}
          description={description}
        />
        <div ref={ref} className="grid gap-5 lg:grid-cols-4">
          {impact.map((item, index) => (
            <motion.article
              key={item.metric}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="surface-card p-6"
            >
              <div className="text-4xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
                <AnimatedMetricValue value={item.value} active={isInView} />
              </div>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{item.metric}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats
