export default function Header({ route, onGo, onScroll }) {
  return (
    <header className="top">
      <div className="wrap">
        <button className="brand" type="button" onClick={() => onGo('studio')} aria-label="Início">
          <span className="dk">dk</span>
          <span className="nm">Studio Kitadani</span>
        </button>
        <nav className="menu" aria-label="Principal">
          <button type="button" onClick={() => onScroll('procedimentos')}>Procedimentos</button>
          <button type="button" className="opt" onClick={() => onScroll('sobre')}>A Dani</button>
          <button type="button" className="opt" onClick={() => onScroll('visita')}>Contato</button>
          <button
            type="button"
            onClick={() => onGo('cursos')}
            aria-current={route === 'cursos' ? 'page' : undefined}
          >
            Cursos
          </button>
        </nav>
      </div>
    </header>
  )
}
