import { useRef, useState } from 'react'
import { courses, filters, levels } from '../data/courses'
import { wa } from '../data/contact'
import FeatureGrid from '../components/FeatureGrid'
import useReveal from '../hooks/useReveal'
import useStaggerIn from '../hooks/useStaggerIn'

const includes = [
  { icon: 'book', title: 'Teoria e prática', text: 'Aulas presenciais no studio, com prática real e acompanhamento de perto.' },
  { icon: 'cert', title: 'Certificado', text: 'Certificado de conclusão para comprovar a sua formação.' },
  { icon: 'heart', title: 'Suporte depois do curso', text: 'Mais do que técnica: preparo para crescer no mercado da beleza.' },
]

export default function Cursos() {
  const ref = useRef(null)
  const [filter, setFilter] = useState('todos')
  const listRef = useStaggerIn(filter, { duration: 550, step: 50 })
  useReveal(ref)

  const list = courses.filter((c) => filter === 'todos' || c.a === filter)

  return (
    <main id="v-cursos" ref={ref}>
      <section className="c-hero">
        <div className="wrap">
          <span className="script">Formando profissionais, inspirando histórias</span>
          <h1>Começar, evoluir <em>e ensinar</em></h1>
          <p>
            Formações para quem deseja começar, se aperfeiçoar ou aprender a ensinar. Onde técnica vira
            profissão e experiência vira autoridade.
          </p>
        </div>
      </section>

      <section className="c-body">
        <div className="wrap">
          <div className="levels">
            {levels.map((l) => (
              <div className="level reveal" key={l.title}>
                <span className="eyebrow">{l.eyebrow}</span>
                <b>{l.title}</b>
                <span>{l.desc}</span>
              </div>
            ))}
          </div>

          <div className="pills" role="group" aria-label="Filtrar cursos">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                className="pill"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="courses" ref={listRef} aria-live="polite">
            {list.map((c) => (
              <article className="course" key={c.title}>
                <div className="tags">
                  {c.tags.map((t) => (
                    <span key={t.t} className={`tag${t.hl ? ' hl' : ''}`}>{t.t}</span>
                  ))}
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="foot">
                  <span className="price"><small>{c.small}</small>{c.price}</span>
                  <a
                    className="ask"
                    href={wa(c.msg ?? `Olá Dani! Quero saber sobre o curso de ${c.title}.`)}
                    target="_blank"
                    rel="noopener"
                  >
                    {c.cta ?? 'Saber mais'}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="note reveal">
            <p>
              Datas, horários e formas de pagamento são combinados direto com a Dani. Chame no WhatsApp e
              escolha o seu próximo passo.
            </p>
            <a className="btn fill" href={wa('Olá Dani! Quero saber sobre os cursos.')} target="_blank" rel="noopener">
              Falar sobre cursos
            </a>
          </div>

          <FeatureGrid items={includes} className="includes" />
        </div>
      </section>
    </main>
  )
}
