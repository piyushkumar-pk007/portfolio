import { profile, siteCopy } from '../content/profile'

function Footer() {
  return (
    <footer className="relative overflow-hidden py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="relative overflow-hidden rounded-[1.75rem] border px-6 py-6 shadow-soft md:px-8"
          style={{
            borderColor: 'color-mix(in srgb, var(--border) 82%, transparent)',
            background:
              'linear-gradient(180deg, color-mix(in srgb, var(--bg-elevated) 92%, transparent), color-mix(in srgb, var(--bg) 88%, transparent))',
          }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />
          <div className="absolute -top-12 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] blur-3xl" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-medium text-[var(--text-primary)]">{profile.name}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{`© ${new Date().getFullYear()} All rights reserved.`}</p>
            </div>
            <div className="inline-flex items-center gap-2 self-start rounded-full border px-4 py-2 text-sm text-[var(--text-secondary)] md:self-auto" style={{ borderColor: 'color-mix(in srgb, var(--border) 80%, transparent)', backgroundColor: 'color-mix(in srgb, var(--bg-elevated) 68%, transparent)' }}>
              <span className="h-2 w-2 rounded-full bg-[var(--accent-emerald)]" />
              <span>{siteCopy.footerNote}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
