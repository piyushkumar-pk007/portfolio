function Badge({ children, tone = 'default' }) {
  const tones = {
    default: {
      background: 'var(--bg-subtle)',
      color: 'var(--text-secondary)',
      borderColor: 'var(--border)',
    },
    accent: {
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      borderColor: 'transparent',
    },
  }

  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition duration-200"
      style={tones[tone]}
    >
      {children}
    </span>
  )
}

export default Badge
