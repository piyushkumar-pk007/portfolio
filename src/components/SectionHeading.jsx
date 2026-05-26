function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
