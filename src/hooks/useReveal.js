import { useEffect } from 'react'
import { prefersReducedMotion } from './useReducedMotion'

const SELECTOR = '.reveal, .svc, .course'

/**
 * Revela suavemente os elementos que estão abaixo da primeira dobra
 * conforme entram na tela. Elementos já visíveis não são animados.
 */
export default function useReveal(rootRef, deps = []) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion() || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const t = e.target
          t.classList.add('rv-on')
          requestAnimationFrame(() => t.classList.remove('rv-await'))
          io.unobserve(t)
        }),
      { rootMargin: '0px 0px -8% 0px' },
    )
    root.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.classList.contains('rv-on')) return
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('rv-await')
        io.observe(el)
      }
    })
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
