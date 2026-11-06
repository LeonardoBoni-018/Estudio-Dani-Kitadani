import { wa } from '../data/contact'
import useOpenStatus from '../hooks/useOpenStatus'
import { NailFan } from '../components/Icons'

export default function Hero({ onScroll }) {
  const status = useOpenStatus()
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <span className={`open-badge${status.open ? ' open' : ''}`}>{status.label}</span>
          <span className="eyebrow">Lash &amp; Nail Designer · Araçatuba</span>
          <h1>
            Cuidado e técnica em <em>cada detalhe</em>
          </h1>
          <p className="lede">
            Cílios, unhas, sobrancelhas e cuidados que valorizam a sua beleza com técnica e elegância.
          </p>
          <div className="cta-row">
            <a className="btn fill" href={wa('Olá Dani! Quero agendar um horário.')} target="_blank" rel="noopener">
              Agendar horário
            </a>
            <button className="btn" type="button" onClick={() => onScroll('procedimentos')}>
              Ver procedimentos
            </button>
          </div>
        </div>
        <div className="hero-art">
          <div className="arch float" aria-hidden="true">
            <NailFan />
          </div>
          <div className="sig">
            <span className="s">Studio Kitadani</span>
            <small>Beleza e Estética</small>
          </div>
        </div>
      </div>
    </section>
  )
}
