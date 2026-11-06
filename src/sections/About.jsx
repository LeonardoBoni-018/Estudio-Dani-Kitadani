import { useEffect, useRef } from 'react'
import { timeline } from '../data/studio'
import useReducedMotion from '../hooks/useReducedMotion'

const LASH_PATHS = [
  'M10 70 C80 18 220 18 290 70',
  'M40 50 l-14 -26', 'M62 39 l-9 -30', 'M86 31 l-5 -31',
  'M110 26 l-2 -32', 'M134 24 l0 -33', 'M158 24 l2 -33',
  'M182 26 l4 -32', 'M206 30 l7 -31', 'M230 38 l10 -29', 'M254 50 l14 -25',
]

/** Cílios que vão sendo "desenhados" conforme a seção entra na tela. */
function useLashDraw(sectionRef, svgRef, reduce) {
  useEffect(() => {
    const paths = [...(svgRef.current?.querySelectorAll('path') ?? [])]
    if (reduce) {
      paths.forEach((p) => { p.style.strokeDasharray = ''; p.style.strokeDashoffset = '' })
      return
    }
    paths.forEach((p) => { p.style.strokeDasharray = '1' })
    let raf = 0
    const tick = () => {
      raf = 0
      const r = sectionRef.current?.getBoundingClientRect()
      if (!r) return
      const vh = window.innerHeight
      const prog = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9)))
      paths.forEach((p, i) => {
        const v = Math.min(1, Math.max(0, prog * 1.5 - (i ? 0.3 + i * 0.06 : 0)))
        p.style.strokeDashoffset = String(1 - v)
      })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    tick()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [sectionRef, svgRef, reduce])
}

export default function About() {
  const sectionRef = useRef(null)
  const svgRef = useRef(null)
  const reduce = useReducedMotion()
  useLashDraw(sectionRef, svgRef, reduce)

  return (
    <section className="blk" id="sobre" ref={sectionRef}>
      <div className="wrap about-grid">
        <div className="portrait reveal">
          <div className="arch" aria-hidden="true">
            <span className="nm">Dani</span>
            <svg className="lash" ref={svgRef} viewBox="0 0 300 110">
              {LASH_PATHS.map((d) => <path key={d} pathLength="1" d={d} />)}
            </svg>
            <span className="cap">espaço para a foto da Dani</span>
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow">Quem é a Dani?</span>
          <h2>Daniela <em>Kitadani</em></h2>
          <p>
            Profissional da beleza, educadora e uma mulher que acredita no poder que uma profissão tem de
            transformar uma vida. Trabalha como manicure desde os 15 anos e foi se especializando em
            alongamentos, cílios e sobrancelhas, sempre com muita prática e estudo.
          </p>
          <p>Mãe da Mariani, apaixonada pelos seus animais e por tudo que envolve cuidado, transformação e crescimento.</p>
          <p className="quote">Beleza foi onde minha história começou. Transformar mulheres se tornou o meu propósito.</p>
          <ol className="timeline" aria-label="Trajetória">
            {timeline.map((t) => (
              <li key={t.y}><b>{t.y}</b><span>{t.t}</span></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
