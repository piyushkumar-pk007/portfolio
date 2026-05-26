import { Download } from 'lucide-react'
import { profile, siteCopy } from '../content/profile'

function ResumeButton({ large = false }) {
  return (
    <a
      href={profile.resumeUrl}
      download
      className={`button-accent ${
        large ? 'px-6 py-3.5 text-base' : 'px-4 py-2.5 text-sm'
      }`}
    >
      <Download size={large ? 18 : 16} />
      <span>{siteCopy.resumeLabel}</span>
    </a>
  )
}

export default ResumeButton
