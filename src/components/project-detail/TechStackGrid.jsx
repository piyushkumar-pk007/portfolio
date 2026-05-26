import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Badge from '../Badge'
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

function TechStackGrid({ techStack }) {
  const grouped = getGroupedStack(techStack)
  const chartData = Object.entries(grouped).map(([name, tools]) => ({
    name,
    count: tools.length,
  }))

  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={projectPageCopy.stackLabel} title={projectPageCopy.stackTitle} />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(grouped).map(([category, tools]) => (
              <article key={category} className="surface-card p-6">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                  {category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="surface-card p-6">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
              {projectPageCopy.stackDistributionLabel}
            </p>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="4 4" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis allowDecimals={false} tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: 'color-mix(in srgb, var(--accent) 10%, transparent)' }}
                    contentStyle={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      borderRadius: '16px',
                    }}
                  />
                  <Bar dataKey="count" radius={[14, 14, 0, 0]} fill="var(--accent)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStackGrid
