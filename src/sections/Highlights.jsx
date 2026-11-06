import FeatureGrid from '../components/FeatureGrid'

const items = [
  { icon: 'drop', title: 'Atenção aos detalhes', text: 'Técnica construída com anos de prática, estudo e aperfeiçoamento.' },
  { icon: 'eye', title: 'Atendimento acolhedor', text: 'Um espaço aconchegante, pensado para você se sentir bem cuidada.' },
  { icon: 'star', title: 'Quem ensina a técnica', text: 'A Dani forma novas profissionais e leva esse cuidado a cada atendimento.' },
]

export default function Highlights() {
  return (
    <section className="blk blush">
      <div className="wrap">
        <FeatureGrid items={items} />
      </div>
    </section>
  )
}
