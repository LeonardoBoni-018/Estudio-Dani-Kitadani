/* Ilustrações em SVG usadas no site (traço fino, paleta rosé). */

const NAIL_SM = 'M-19 58 C-22 6 -10 -56 0 -72 C10 -56 22 6 19 58 C11 67 -11 67 -19 58Z'
const SHINE_SM = 'M-7 -26 C-6 -42 -2 -52 0 -58'
const NAIL_LG = 'M-21 62 C-24 4 -11 -64 0 -82 C11 -64 24 4 21 62 C12 72 -12 72 -21 62Z'
const SHINE_LG = 'M-8 -32 C-7 -50 -2 -62 0 -69'

const fan = [
  { rot: -30, fill: '#fff', shine: '#F1DCDF' },
  { rot: -15, fill: '#F7E3E6', shine: '#fff' },
  { rot: 0, fill: '#EBC6CC', shine: '#fff', big: true },
  { rot: 15, fill: '#F7E3E6', shine: '#fff' },
  { rot: 30, fill: '#fff', shine: '#F1DCDF' },
]

export function NailFan() {
  return (
    <svg viewBox="-150 -170 300 290">
      <g transform="translate(0 40)">
        {fan.map((n, i) => (
          <g className="nail" key={i}>
            <g transform={n.rot ? `rotate(${n.rot} 0 70)` : undefined}>
              <path d={n.big ? NAIL_LG : NAIL_SM} fill={n.fill} stroke="#C9939C" strokeWidth="1.3" />
              <path d={n.big ? SHINE_LG : SHINE_SM} stroke={n.shine} strokeWidth="4" strokeLinecap="round" fill="none" />
            </g>
          </g>
        ))}
      </g>
    </svg>
  )
}

export function NailIcon() {
  return (
    <svg viewBox="-40 -95 80 170">
      <path d={NAIL_LG} fill="#fff" stroke="#C9939C" strokeWidth="1.2" />
      <path d={SHINE_LG} stroke="#F1DCDF" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function LashIcon() {
  const lashes = ['M48 62 l-14 -26', 'M72 51 l-9 -30', 'M98 44 l-5 -31', 'M124 40 l-2 -32', 'M150 39 l0 -33', 'M176 40 l2 -32', 'M202 44 l5 -31', 'M228 51 l9 -30', 'M252 62 l14 -26']
  return (
    <svg viewBox="0 -10 300 120">
      <path d="M20 82 C90 30 210 30 280 82" fill="none" stroke="#4A2E3C" strokeWidth="2.2" strokeLinecap="round" />
      <g stroke="#4A2E3C" strokeWidth="1.6" strokeLinecap="round">
        {lashes.map((d) => <path key={d} d={d} />)}
      </g>
    </svg>
  )
}

export function BrowIcon() {
  const hairs = ['M40 86 l8 -12', 'M58 72 l8 -13', 'M76 61 l8 -13', 'M94 52 l8 -13', 'M112 46 l8 -12', 'M130 41 l9 -11', 'M148 38 l9 -10', 'M166 36 l9 -9', 'M184 36 l9 -8', 'M202 37 l9 -7', 'M220 42 l9 -6', 'M238 48 l9 -5', 'M256 57 l8 -4']
  return (
    <svg viewBox="0 0 300 120">
      <path d="M24 92 C70 46 150 28 206 38 C238 44 260 58 278 74" fill="none" stroke="#C9939C" strokeWidth="12" strokeLinecap="round" opacity=".55" />
      <g stroke="#4A2E3C" strokeWidth="1.3" strokeLinecap="round">
        {hairs.map((d) => <path key={d} d={d} />)}
      </g>
    </svg>
  )
}

export const categoryIcons = { nail: NailIcon, lash: LashIcon, brow: BrowIcon }

/* Ícones de linha (seção de diferenciais e "o que inclui") */
export const LineIcons = {
  drop: (
    <>
      <path d="M24 6 C30 16 36 22 36 30 a12 12 0 0 1 -24 0 C12 22 18 16 24 6Z" />
      <path d="M19 31 a5 5 0 0 0 5 5" />
    </>
  ),
  eye: (
    <>
      <path d="M8 24 C14 14 34 14 40 24 C34 34 14 34 8 24Z" />
      <circle cx="24" cy="24" r="5" />
    </>
  ),
  star: <path d="M24 8 l4.6 9.4 10.4 1.5 -7.5 7.3 1.8 10.3 -9.3 -4.9 -9.3 4.9 1.8 -10.3 -7.5 -7.3 10.4 -1.5Z" />,
  book: (
    <>
      <path d="M8 14 h14 a4 4 0 0 1 4 4 v20 a3 3 0 0 0 -3 -3 H8Z" />
      <path d="M40 14 H26 a4 4 0 0 0 -4 4 v20 a3 3 0 0 1 3 -3 h15Z" />
    </>
  ),
  cert: (
    <>
      <rect x="8" y="10" width="32" height="24" rx="3" />
      <circle cx="24" cy="34" r="5" />
      <path d="M21 38 l-2 6 5 -2 5 2 -2 -6" />
    </>
  ),
  heart: <path d="M24 40 C10 30 6 22 10 15 a8 8 0 0 1 14 -1 a8 8 0 0 1 14 1 c4 7 0 15 -14 25Z" />,
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  )
}
