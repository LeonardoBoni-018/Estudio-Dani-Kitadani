import { useEffect, useState } from 'react'

const ROUTES = ['studio', 'cursos']
const read = () => {
  const h = window.location.hash.slice(1)
  return ROUTES.includes(h) ? h : 'studio'
}

/** Rotas simples por hash: #studio e #cursos (funciona em hospedagem estática). */
export default function useHashRoute() {
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const on = () => {
      setRoute(read())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  const go = (name) => {
    if (read() === name && window.location.hash) {
      window.scrollTo({ top: 0, behavior: prefersSmooth() })
    } else {
      window.location.hash = name
    }
  }
  return [route, go]
}

const prefersSmooth = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
