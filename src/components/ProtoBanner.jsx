import { SHOW_PROTO_BANNER } from '../data/contact'

export default function ProtoBanner() {
  if (!SHOW_PROTO_BANNER) return null
  return (
    <div className="proto">
      Protótipo · Studio Dani Kitadani · valores marcados como “exemplo” aguardam confirmação
    </div>
  )
}
