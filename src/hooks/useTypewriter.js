import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export function useTypewriter(words, typingSpeed = 85, pauseMs = 1400) {
  const prefersReducedMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState(() => (prefersReducedMotion ? words[0] ?? '' : ''))
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion || !words.length) {
      return undefined
    }

    const currentWord = words[wordIndex % words.length]
    let timeoutId

    if (!isDeleting && displayText === currentWord) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseMs)
      return () => window.clearTimeout(timeoutId)
    }

    if (isDeleting && displayText === '') {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
      }, 0)
      return () => window.clearTimeout(timeoutId)
    }

    timeoutId = window.setTimeout(() => {
      setDisplayText((currentText) => {
        if (isDeleting) {
          return currentText.slice(0, -1)
        }

        return currentWord.slice(0, currentText.length + 1)
      })
    }, isDeleting ? Math.max(typingSpeed / 2, 35) : typingSpeed)

    return () => window.clearTimeout(timeoutId)
  }, [displayText, isDeleting, pauseMs, prefersReducedMotion, typingSpeed, wordIndex, words])

  return prefersReducedMotion ? words[0] ?? '' : displayText
}
