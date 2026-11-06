import { Fragment } from 'react'
import { serviceLine } from '../data/services'

export default function ServiceLine() {
  return (
    <div className="svc-line" aria-label="Procedimentos do studio">
      <div className="wrap">
        {serviceLine.map((s, i) => (
          <Fragment key={s}>
            {i > 0 && <i aria-hidden="true">✦</i>}
            <span>{s}</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
