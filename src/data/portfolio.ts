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
    title: 'Suportes de roletes para transportador',
    client: 'Ferraria Metalworks',
    category: 'Peças',
    image: '/images/portfolio-1.svg',
    description:
      'Lote de 84 suportes de roletes em PETG a substituir uma peça OEM descontinuada numa linha de embalagem, entregue em quatro dias.',
  },
  {
    id: 2,
    title: 'Modernização de engrenagem planetária',
    client: 'Nortech Robotics',
    category: 'Engrenagens',
    image: '/images/portfolio-2.svg',
    description:
      'Conjunto planetário em nylon com fibra de carbono para um protótipo de AMR de armazém, com folga ajustada numa série de 12 unidades.',
  },
  {
    id: 3,
    title: 'Conjunto de suportes para sensores',
    client: 'Vale Agro Systems',
    category: 'Suportes',
    image: '/images/portfolio-3.svg',
    description:
      'Suportes de montagem resistentes às intempéries para sensores de humidade de campo, com classificação para exposição UV exterior ao longo de três estações.',
  },
  {
    id: 4,
    title: 'Conjunto de emblemas para showroom',
    client: 'Carvalho Motors',
    category: 'Marca',
    image: '/images/portfolio-4.svg',
    description:
      'Logótipo dimensional de concessionário e sinalética direcional nas cores da marca para o relançamento de um showroom.',
  },
  {
    id: 5,
    title: 'Gabaritos para linha de montagem',
    client: 'Lisboa Fabrication Co.',
    category: 'Peças',
    image: '/images/portfolio-5.svg',
    description:
      'Gabaritos de alinhamento personalizados que reduziram o tempo de montagem numa linha de pequenos eletrodomésticos em cerca de um terço.',
  },
  {
    id: 6,
    title: 'Placas de logótipo de secretária',
    client: 'Braga Software House',
    category: 'Marca',
    image: '/images/portfolio-6.svg',
    description:
      'Placas de secretária bicolores para a mudança de instalações de um escritório de 40 pessoas, adaptadas ao guia de estilo do cliente.',
  },
]

export default portfolio
