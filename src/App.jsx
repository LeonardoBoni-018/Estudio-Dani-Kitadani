import { useEffect, useRef } from 'react'
import useHashRoute from './hooks/useHashRoute'
import { prefersReducedMotion } from './hooks/useReducedMotion'
import ProtoBanner from './components/ProtoBanner'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import Studio from './pages/Studio'
import Cursos from './pages/Cursos'

export default function App() {
  const [route, go] = useHashRoute()
  const pending = useRef(null)

  const scrollToId = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    })

  /** Rola até uma seção do studio; se estiver em Cursos, troca de página antes. */
  const onScroll = (id) => {
    if (route === 'studio') return scrollToId(id)
    pending.current = id
    go('studio')
  }

  useEffect(() => {
    if (route === 'studio' && pending.current) {
      const id = pending.current
      pending.current = null
      requestAnimationFrame(() => scrollToId(id))
    }
    document.title = route === 'cursos' ? 'Cursos · Studio Dani Kitadani' : 'Studio Dani Kitadani'
  }, [route])

  return (
    <>
      <ProtoBanner />
      <Header route={route} onGo={go} onScroll={onScroll} />
      {route === 'cursos' ? <Cursos /> : <Studio onScroll={onScroll} />}
      <Footer />
      <WhatsAppFab />
    </>
  )
}
