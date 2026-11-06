import { useState } from 'react'
import { categories, services } from '../data/services'
import { wa } from '../data/contact'
import { categoryIcons } from '../components/Icons'
import SectionHead from '../components/SectionHead'
import useStaggerIn from '../hooks/useStaggerIn'

const count = (id) => services.filter((s) => s.c === id).length

export default function Procedures() {
  const [cat, setCat] = useState('unhas')
  const gridRef = useStaggerIn(cat)
  const list = services.filter((s) => s.c === cat)

  return (
    <section className="blk" id="procedimentos">
      <div className="wrap">
        <SectionHead
          eyebrow="Procedimentos e valores"
          title="Escolha o cuidado"
          em="que combina com você"
          text="Cada procedimento é pensado para valorizar a sua beleza com técnica, cuidado e atenção aos detalhes."
        />

        <div className="cats" role="group" aria-label="Categorias">
          {categories.map((c) => {
            const Icon = categoryIcons[c.icon]
            return (
              <button
                key={c.id}
                type="button"
                className="cat"
                aria-pressed={cat === c.id}
                aria-controls="svcs"
                onClick={() => setCat(c.id)}
              >
                <div className="arch" aria-hidden="true"><Icon /></div>
                <h3>{c.title}</h3>
                <span>{count(c.id)} procedimentos</span>
              </button>
            )
          })}
        </div>

        <div className="svc-grid" id="svcs" ref={gridRef} aria-live="polite">
          {list.map((s) => (
            <article className="svc" key={s.name}>
              <h4>{s.name}</h4>
              <span className="price"><small>{s.tag}</small>{s.price}</span>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="svc-foot">
          <a className="btn fill" href={wa('Olá Dani! Quero agendar um procedimento.')} target="_blank" rel="noopener">
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
