import { useEffect, useState } from 'react'
import { hours } from '../data/studio'

/** Dia e hora atuais no fuso do studio (Araçatuba/SP), independente do fuso de quem visita. */
function nowInStudio() {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Sao_Paulo',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23',
    }).formatToParts(new Date())
    const get = (t) => parts.find((p) => p.type === t)?.value
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
    return { day, h: Number(get('hour')) + Number(get('minute')) / 60 }
  } catch {
    const d = new Date()
    return { day: d.getDay(), h: d.getHours() + d.getMinutes() / 60 }
  }
}

function compute() {
  const { day, h } = nowInStudio()
  const today = hours.find((x) => x.day === day)
  if (!today || today.open == null) {
    return { day, open: false, label: 'Fechado hoje · abre terça às 9h' }
  }
  const open = h >= today.open && h < today.close
  const label = open
    ? `Aberto agora · até ${today.close}h`
    : h < today.open
      ? `Abre hoje às ${today.open}h`
      : 'Fechado agora · consulte os horários'
  return { day, open, label }
}

export default function useOpenStatus() {
  const [status, setStatus] = useState(compute)
  useEffect(() => {
    const id = setInterval(() => setStatus(compute()), 60_000)
    return () => clearInterval(id)
  }, [])
  return status
}
