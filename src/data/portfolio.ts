export interface PortfolioItem {
  id: number
  title: string
  client: string
  category: string
  image: string
  description: string
}

const portfolio: Array<PortfolioItem> = [
  {
    id: 1,
    title: 'Pedal de Travão para Honda Civic EG/EK/EJ',
    client: "Rollin' Portugal",
    category: 'Peças Funcionais',
    image: '/images/Pedal Honda Civic EK Nylon 12 CF.jfif',
    description:
      'Pedido de 1 peça funcional para projeto de carro de competição em PETG-CF. Impresso e entregue em 4 dias úteis',
  },
  {
    id: 2,
    title: 'Modernização de engrenagem planetária',
    client: 'Nortech Robotics',
    category: 'Engrenagens',
    image: '/images/engrenagens.png',
    description:
      'Conjunto planetário em nylon com fibra de carbono para um protótipo de AMR de armazém, com folga ajustada numa série de 12 unidades.',
  },
  {
    id: 3,
    title: 'Conjunto de suportes para sensores',
    client: 'Vale Agro Systems',
    category: 'Suportes',
    image: '/images/suportes.png',
    description:
      'Suportes de montagem resistentes às intempéries para sensores de humidade de campo, com classificação para exposição UV exterior ao longo de três estações.',
  },
  {
    id: 4,
    title: 'Conjunto de emblemas para showroom',
    client: 'Carvalho Motors',
    category: 'Marca',
    image: '/images/emblemas.png',
    description:
      'Logótipo dimensional de concessionário e sinalética direcional nas cores da marca para o relançamento de um showroom.',
  },
  {
    id: 5,
    title: 'Gabaritos para linha de montagem',
    client: 'Lisboa Fabrication Co.',
    category: 'Peças',
    image: '/images/gabaritos.png',
    description:
      'Gabaritos de alinhamento personalizados que reduziram o tempo de montagem numa linha de pequenos eletrodomésticos em cerca de um terço.',
  },
  {
    id: 6,
    title: 'Placas de logótipo de secretária',
    client: 'Braga Software House',
    category: 'Marca',
    image: '/images/placas-logotipo.png',
    description:
      'Placas de secretária bicolores para a mudança de instalações de um escritório de 40 pessoas, adaptadas ao guia de estilo do cliente.',
  },
]

export default portfolio
