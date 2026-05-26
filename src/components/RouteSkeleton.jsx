import { siteCopy } from '../content/profile'

function RouteSkeleton() {
  return (
    <div className="min-h-screen bg-[var(--bg)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 inline-flex rounded-full border px-5 py-3 text-sm text-[var(--text-secondary)]" style={{ borderColor: 'var(--border)' }}>
          {siteCopy.loadingPageLabel}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {[0, 1].map((item) => (
            <div key={item} className="surface-card overflow-hidden p-7">
              <div className="shimmer-block h-4 w-24 rounded-full" />
              <div className="mt-5 shimmer-block h-10 w-3/4 rounded-2xl" />
              <div className="mt-5 shimmer-block h-20 w-full rounded-2xl" />
              <div className="mt-6 flex gap-3">
                <div className="shimmer-block h-8 w-20 rounded-full" />
                <div className="shimmer-block h-8 w-24 rounded-full" />
                <div className="shimmer-block h-8 w-16 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RouteSkeleton
