import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, rootMargin = '-35% 0px -45% 0px') {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)

        if (visibleEntries[0]?.target?.id) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      { rootMargin, threshold: [0.2, 0.4, 0.6, 0.8] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [rootMargin, sectionIds])

  return activeId
}
