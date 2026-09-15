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
    title: 'Logótipo de decoração',
    client: 'Rollin Portugal',
    category: 'Marca',
    image: '/images/MVIMG_20260905_125217.jpg',
    description:
      'Logótipo dimensional de Empresa de Media automóvel para decoração',
  },
  {
    id: 2,
    title: 'Suporte de parede para Aparafusadora',
    client: 'Empresa de fabricação de paletes',
    category: 'Suportes',
    image: '/images/MVIMG_20260911_105351.jpg',
    description:
      'Suporte para fixação na parede de apafusadora impresso em PETG',
  },
  {
    id:3,
    title: 'Suporte de monitor',
    client: 'Fenix Craft',
    category: 'Suportes',
    image: '/images/MVIMG_20260906_171038.jpg',
    description:
      'Suporte para monitor Xiaomi com ângulo de 45° para utilização em setup de 2 monitores em uma mesa de escritório.',
  },
]

export default portfolio
