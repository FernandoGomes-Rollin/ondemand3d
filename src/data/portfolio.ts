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
    client: 'Rollin' Portugal',
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


export default portfolio
