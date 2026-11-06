import { useRef, useState } from 'react'
import { ADDRESS, DISTRICT, INSTAGRAM, MAPS_URL, PHONE_LABEL, wa } from '../data/contact'
import { hours } from '../data/studio'
import useOpenStatus from '../hooks/useOpenStatus'
import SectionHead from '../components/SectionHead'

export default function Visit() {
  const { day } = useOpenStatus()
  const [copied, setCopied] = useState(false)
  const foneRef = useRef(null)

  const copy = async () => {
    const select = () => {
      const r = document.createRange()
      r.selectNodeContents(foneRef.current)
      const s = window.getSelection()
      s.removeAllRanges()
      s.addRange(r)
    }
    try {
      await navigator.clipboard.writeText('18998064950')
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      select()
    }
  }

  return (
    <section className="blk" id="visita">
      <div className="wrap">
        <SectionHead eyebrow="Visite o studio" title="Vamos" em="conversar?" />
        <div className="visit-grid">
          <div className="visit-card reveal">
            <h3>Horários</h3>
            <ul className="hours">
              {hours.map((h) => (
                <li key={h.day} className={h.day === day ? 'today' : undefined}>
                  <span className="d">{h.label}</span>
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="visit-card reveal">
            <h3>Contato</h3>
            <div className="info">
              <span className="lbl">Endereço</span>
              <span className="val">{ADDRESS}</span>
              <span className="sub">{DISTRICT}</span>
            </div>
            <div className="info">
              <span className="lbl">WhatsApp</span>
              <span>
                <span className="val" ref={foneRef}>{PHONE_LABEL}</span>
                <button className="copy" type="button" onClick={copy} aria-live="polite">
                  {copied ? 'copiado' : 'copiar'}
                </button>
              </span>
            </div>
            <div className="info">
              <span className="lbl">Instagram</span>
              <span className="val">{INSTAGRAM}</span>
            </div>
            <div className="cta-row">
              <a className="btn fill" href={wa()} target="_blank" rel="noopener">WhatsApp</a>
              <a className="btn" href={MAPS_URL} target="_blank" rel="noopener">Ver no mapa</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
