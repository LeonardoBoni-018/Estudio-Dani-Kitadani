import { wa } from '../data/contact'
import { WhatsAppIcon } from './Icons'

export default function WhatsAppFab() {
  return (
    <a className="wa" href={wa()} target="_blank" rel="noopener" aria-label="WhatsApp do studio">
      <span className="ic"><WhatsAppIcon /></span>
      <span className="t">Agendar</span>
    </a>
  )
}
