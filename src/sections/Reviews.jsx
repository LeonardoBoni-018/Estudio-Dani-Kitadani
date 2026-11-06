import { useCallback, useEffect, useRef, useState } from 'react'
import { reviews } from '../data/studio'
import SectionHead from '../components/SectionHead'
import useReducedMotion from '../hooks/useReducedMotion'

export default function Reviews() {
  const railRef = useRef(null)
  const [active, setActive] = useState(0)
  const [scrollable, setScrollable] = useState(true)
  const reduce = useReducedMotion()

  const sync = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    const items = [...rail.children]
    const x = rail.scrollLeft
    let k = 0
    items.forEach((it, i) => {
      if (Math.abs(it.offsetLeft - rail.offsetLeft - x) < Math.abs(items[k].offsetLeft - rail.offsetLeft - x)) k = i
    })
    const max = rail.scrollWidth - rail.clientWidth
    if (max > 0 && x >= max - 4) k = items.length - 1
    setActive(k)
    setScrollable(rail.scrollWidth > rail.clientWidth + 4)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    rail.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    sync()
    return () => {
      rail.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const goTo = (i) => {
    const rail = railRef.current
    const it = rail.children[i]
    rail.scrollTo({ left: it.offsetLeft - rail.offsetLeft, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section className="blk blush" id="depoimentos">
      <div className="wrap">
        <SectionHead eyebrow="Depoimentos" title="O carinho de" em="quem já passou por aqui" />
        <div className="reviews" ref={railRef}>
          {reviews.map((r) => (
            <article className="rv" key={r.name}>
              <span className="stars" aria-hidden="true">★★★★★</span>
              <q>{r.text}</q>
              <footer><b>{r.name}</b> · {r.src}</footer>
            </article>
          ))}
        </div>
        <div className="dots" aria-label="Navegar depoimentos" hidden={!scrollable}>
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type="button"
              aria-label={`Depoimento ${i + 1}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
