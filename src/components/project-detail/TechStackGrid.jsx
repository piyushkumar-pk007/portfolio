import {
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { BarChart3, BrainCircuit, Cloud, Code2, Layers3, Rocket } from 'lucide-react'
import Badge from '../Badge'
import FadeInSection from '../FadeInSection'
import SectionHeading from '../SectionHeading'
import { projectPageCopy } from '../../content/projects'

const categoryMap = {
  Python: 'Core',
  SQL: 'Core',
  Streamlit: 'Apps',
  'Power BI': 'Apps',
  AWS: 'Cloud',
  'OCI Data Science': 'Cloud',
  'Oracle OCI Data Science': 'Cloud',
  Prophet: 'Forecasting',
  ARIMA: 'Forecasting',
  'PuLP (MILP)': 'Optimization',
  PuLP: 'Optimization',
  SimPy: 'Optimization',
  SHAP: 'Modeling',
  XGBoost: 'Modeling',
  LightGBM: 'Modeling',
}

const categoryMeta = {
  Core: { color: 'var(--project-accent)', Icon: Code2 },
  Apps: { color: 'var(--accent-amber)', Icon: Rocket },
  Cloud: { color: 'var(--project-secondary)', Icon: Cloud },
  Forecasting: { color: 'var(--accent-violet)', Icon: BarChart3 },
  Optimization: { color: 'var(--accent-emerald)', Icon: Layers3 },
  Modeling: { color: 'var(--accent-rose)', Icon: BrainCircuit },
  Platform: { color: 'var(--text-muted)', Icon: Layers3 },
}

function getGroupedStack(techStack) {
  return techStack.reduce((groups, tool) => {
    const category = categoryMap[tool] || 'Platform'
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(tool)
    return groups
  }, {})
}

function TechStackGrid({ techStack, sectionId }) {
  const grouped = getGroupedStack(techStack)
  const chartData = Object.entries(grouped).map(([name, tools]) => ({
    name,
    count: tools.length,
    fill: categoryMeta[name]?.color ?? 'var(--project-accent)',
  }))

  return (
    <section
      id={sectionId}
      className="section-shell bg-[linear-gradient(180deg,color-mix(in_srgb,var(--project-tint)_78%,transparent),transparent_32%)]"
    >
      <FadeInSection className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={projectPageCopy.stackLabel} title={projectPageCopy.stackTitle} />
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.4rem] border px-5 py-4" style={{ borderColor: 'var(--border)', backgroundColor: 'color-mix(in srgb, var(--project-accent) 8%, var(--bg-elevated))' }}>
            <div className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{techStack.length}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Tools in stack</div>
          </div>
          <div className="rounded-[1.4rem] border px-5 py-4" style={{ borderColor: 'var(--border)', backgroundColor: 'color-mix(in srgb, var(--project-secondary) 8%, var(--bg-elevated))' }}>
            <div className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{Object.keys(grouped).length}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Capability bands</div>
          </div>
          <div className="rounded-[1.4rem] border px-5 py-4" style={{ borderColor: 'var(--border)', backgroundColor: 'color-mix(in srgb, var(--accent-emerald) 8%, var(--bg-elevated))' }}>
            <div className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{Math.max(...chartData.map((item) => item.count))}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Largest cluster</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(grouped).map(([category, tools]) => {
              const meta = categoryMeta[category] ?? categoryMeta.Platform
              const Icon = meta.Icon

              return (
                <article
                  key={category}
                  className="surface-card border-l-4 p-6"
                  style={{ borderLeftColor: meta.color }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${meta.color} 14%, transparent)`,
                        color: meta.color,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                        {category}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        {tools.length} tool{tools.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {tools.map((tool) => (
                      <Badge key={tool}>{tool}</Badge>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
          <div className="surface-card p-6">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
              {projectPageCopy.stackDistributionLabel}
            </p>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 16, right: 12 }}>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="4 4" vertical={false} />
                  <XAxis type="number" allowDecimals={false} tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="name" width={92} tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: 'color-mix(in srgb, var(--accent) 10%, transparent)' }}
                    contentStyle={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      borderRadius: '16px',
                    }}
                  />
                  <Bar dataKey="count" radius={[0, 14, 14, 0]}>
                    {chartData.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default TechStackGrid
