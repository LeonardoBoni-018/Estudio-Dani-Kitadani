import { ADDRESS, DISTRICT, INSTAGRAM, PHONE_LABEL } from '../data/contact'

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <span className="s">Studio Kitadani</span>
        <span>{ADDRESS} · {DISTRICT}</span>
        <span>{PHONE_LABEL} · {INSTAGRAM}</span>
      </div>
    </footer>
  )
}
