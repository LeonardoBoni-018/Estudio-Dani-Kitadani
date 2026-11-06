import { useRef } from 'react'
import useReveal from '../hooks/useReveal'
import Hero from '../sections/Hero'
import ServiceLine from '../sections/ServiceLine'
import Procedures from '../sections/Procedures'
import Highlights from '../sections/Highlights'
import About from '../sections/About'
import Reviews from '../sections/Reviews'
import Visit from '../sections/Visit'

export default function Studio({ onScroll }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <main id="v-studio" ref={ref}>
      <Hero onScroll={onScroll} />
      <ServiceLine />
      <Procedures />
      <Highlights />
      <About />
      <Reviews />
      <Visit />
    </main>
  )
}
