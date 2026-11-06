import { LineIcons } from './Icons'

/** Grade de 3 diferenciais com ícone de linha, título e texto. */
export default function FeatureGrid({ items, className = '' }) {
  return (
    <div className={`why ${className}`.trim()}>
      {items.map((it) => (
        <div className="reveal" key={it.title}>
          <svg viewBox="0 0 48 48" aria-hidden="true">{LineIcons[it.icon]}</svg>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </div>
      ))}
    </div>
  )
}
