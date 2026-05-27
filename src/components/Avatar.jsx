import { useState } from 'react'
import { profile } from '../content/profile'

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

function Avatar({
  src = profile.avatarUrl,
  alt = profile.name,
  initials = getInitials(profile.name),
  available = profile.availableForWork,
  sizeClassName = 'h-32 w-32',
  className = '',
}) {
  const [hasError, setHasError] = useState(false)
  const showImage = Boolean(src) && !hasError

  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      <div className={`avatar-ring relative ${sizeClassName}`}>
        <div className="absolute inset-[3px] z-10 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--bg-subtle)_86%,transparent)]">
          {showImage ? (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[color-mix(in_srgb,var(--accent-soft)_58%,var(--bg-elevated))] text-2xl font-semibold tracking-[0.18em] text-[var(--text-primary)]">
              {initials}
            </div>
          )}
        </div>
      </div>
      {available ? (
        <span
          aria-label="Available for work"
          className="absolute bottom-1 right-1 z-20 h-3.5 w-3.5 animate-pulse rounded-full border-2 border-white bg-green-500"
        />
      ) : null}
    </div>
  )
}

export default Avatar
