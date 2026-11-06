export const PHONE_DIGITS = '5518998064950'
export const PHONE_LABEL = '(18) 99806-4950'
export const INSTAGRAM = '@dany_kitadani'
export const ADDRESS = 'Rua Sílvio José Venturolli, 18'
export const DISTRICT = 'Jardim Umuarama · Araçatuba/SP'
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Rua+S%C3%ADlvio+Jos%C3%A9+Venturolli+18+Ara%C3%A7atuba'

/** Mostra a faixa "Protótipo" no topo enquanto os valores não forem confirmados. */
export const SHOW_PROTO_BANNER = true

export const wa = (text) =>
  `https://wa.me/${PHONE_DIGITS}${text ? `?text=${encodeURIComponent(text)}` : ''}`
