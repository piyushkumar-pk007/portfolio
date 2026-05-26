import { profile, siteCopy } from '../content/profile'

function Footer() {
  return (
    <footer className="border-t py-8" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
        <p>{`© ${new Date().getFullYear()} ${profile.name}.`}</p>
        <p>{siteCopy.footerNote}</p>
      </div>
    </footer>
  )
}

export default Footer
