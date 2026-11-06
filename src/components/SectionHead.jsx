export default function SectionHead({ eyebrow, title, em, text, center = true }) {
  return (
    <div className={`sec-head reveal${center ? ' center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title} {em && <em>{em}</em>}
      </h2>
      {text && <p>{text}</p>}
    </div>
  )
}
