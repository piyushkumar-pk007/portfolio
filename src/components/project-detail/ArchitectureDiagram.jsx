import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeInSection from '../FadeInSection'
import SectionHeading from '../SectionHeading'
import { projectPageCopy } from '../../content/projects'

const layerStyles = {
  data: { fill: '#cbd5e1', text: '#0f172a' },
  features: { fill: '#93c5fd', text: '#172554' },
  models: { fill: '#c4b5fd', text: '#2e1065' },
  optimization: { fill: '#86efac', text: '#14532d' },
  app: { fill: '#fcd34d', text: '#78350f' },
}

function getNodeLayout(pipeline) {
  const firstRowCount = pipeline.length > 5 ? Math.ceil(pipeline.length / 2) : pipeline.length
  const secondRowCount = pipeline.length - firstRowCount
  const width = 214
  const height = 66
  const gapX = 34
  const gapY = 84
  const rowOneOffset = 24
  const rowTwoOffset = secondRowCount > 0 ? 24 + ((firstRowCount - secondRowCount) * (width + gapX)) / 2 : 24

  return pipeline.map((item, index) => {
    const inFirstRow = index < firstRowCount
    const rowIndex = inFirstRow ? index : index - firstRowCount
    return {
      ...item,
      x: (inFirstRow ? rowOneOffset : rowTwoOffset) + rowIndex * (width + gapX),
      y: inFirstRow ? 32 : 32 + height + gapY,
      width,
      height,
    }
  })
}

function buildConnector(from, to) {
  const startX = from.x + from.width
  const startY = from.y + from.height / 2
  const endX = to.x
  const endY = to.y + to.height / 2

  if (from.y === to.y) {
    const delta = (endX - startX) / 2
    return `M ${startX} ${startY} C ${startX + delta} ${startY}, ${endX - delta} ${endY}, ${endX} ${endY}`
  }

  const midX = startX + 40
  return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`
}

function getTextLines(label) {
  const words = label.split(' ')
  const lines = []
  let currentLine = ''

  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word
    if (nextLine.length > 23 && currentLine) {
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = nextLine
    }
  })

  if (currentLine) {
    lines.push(currentLine)
  }

  return lines
}

function ArchitectureDiagram({ pipeline, sectionId }) {
  const nodes = getNodeLayout(pipeline)
  const svgWidth = Math.max(...nodes.map((node) => node.x + node.width)) + 24
  const svgHeight = Math.max(...nodes.map((node) => node.y + node.height)) + 40
  const [hoveredNode, setHoveredNode] = useState(null)

  return (
    <section id={sectionId} className="section-shell">
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={projectPageCopy.architectureLabel}
          title={projectPageCopy.architectureTitle}
        />
        <div className="surface-card relative overflow-hidden p-4 md:p-8">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="h-auto w-full"
            role="img"
            aria-label={projectPageCopy.architectureTitle}
          >
            {nodes.slice(0, -1).map((node, index) => (
              <motion.path
                key={`${node.stage}-${nodes[index + 1].stage}`}
                d={buildConnector(node, nodes[index + 1])}
                fill="none"
                stroke="var(--border)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              />
            ))}
            {nodes.map((node, index) => {
              const style = layerStyles[node.layer]
              const lines = getTextLines(node.stage)

              return (
                <motion.g
                  key={node.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-default"
                >
                  <rect
                    x={node.x}
                    y={node.y}
                    rx="18"
                    width={node.width}
                    height={node.height}
                    fill={style.fill}
                    opacity="0.92"
                  />
                  {hoveredNode?.stage === node.stage ? (
                    <motion.rect
                      x={node.x - 6}
                      y={node.y - 6}
                      rx="24"
                      width={node.width + 12}
                      height={node.height + 12}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      initial={{ opacity: 0.2, scale: 0.96 }}
                      animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.98, 1.02, 0.98] }}
                      transition={{ duration: 1.1, repeat: Infinity }}
                    />
                  ) : null}
                  <text
                    x={node.x + node.width / 2}
                    y={node.y + node.height / 2 - (lines.length - 1) * 9}
                    fill={style.text}
                    fontSize="14"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                    textAnchor="middle"
                  >
                    {lines.map((line) => (
                      <tspan key={line} x={node.x + node.width / 2} dy="18">
                        {line}
                      </tspan>
                    ))}
                  </text>
                </motion.g>
              )
            })}
          </svg>
          {hoveredNode ? (
            <div
              className="pointer-events-none absolute max-w-xs rounded-2xl border px-4 py-3 text-sm leading-relaxed text-[var(--text-secondary)] shadow-soft"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'color-mix(in srgb, var(--bg-elevated) 92%, transparent)',
                left: `${((hoveredNode.x + hoveredNode.width / 2) / svgWidth) * 100}%`,
                top: `${((hoveredNode.y + hoveredNode.height + 28) / svgHeight) * 100}%`,
                transform: 'translateX(-50%)',
              }}
            >
              {hoveredNode.detail}
            </div>
          ) : null}
        </div>
      </FadeInSection>
    </section>
  )
}

export default ArchitectureDiagram
