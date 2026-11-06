import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './useReducedMotion'

/** Anima a entrada dos filhos de um grid quando o filtro muda (pula a 1ª renderização). */
export default function useStaggerIn(key, { duration = 600, step = 70 } = {}) {
  const ref = useRef(null)
  const first = useRef(true)
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const el = ref.current
    if (!el || prefersReducedMotion() || !el.animate) return
    ;[...el.children].forEach((c, i) => {
      c.classList.remove('rv-await')
      c.animate(
        [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }],
        { duration, delay: i * step, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' },
      )
    })
  }, [key, duration, step])
  return ref
}
