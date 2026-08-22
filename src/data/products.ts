export interface ProductCategory {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  specs: Array<string>
}

const categories: Array<ProductCategory> = [
  {
    id: 'parts',
    name: 'Peças Funcionais',
    tagline: 'Componentes de nível de produção, impressos a pedido',
    description:
      'Suportes, invólucros, gabaritos e acessórios, e peças mecânicas personalizadas impressas em filamentos de grau de engenharia. Ajustamos as séries de um único protótipo a lotes de produção de curta duração para oficinas mecânicas e equipas de produto.',
    image: '/images/Pedal Honda Civic EK Nylon 12 CF.jfif',
    specs: ['PETG, ABS, Nylon, PA-CF', 'Tolerâncias até 0,1mm', 'Séries de 1 a 500+ unidades'],
    <p className="mt-4 text-sm leading-relaxed text-gray-600">
  {item.description}
</p>
  },
  {
    id: 'gears',
    name: 'Engrenagens & Transmissão',
    tagline: 'Engrenagens testadas sob carga para mecanismos reais',
    description:
      'Conjuntos de engrenagens retas, helicoidais e planetárias impressos em compósitos de alta resistência para robótica, transportadores e modernização de automação. Cada lote é verificado dimensionalmente antes de sair da oficina.',
    image: '/images/gears.svg',
    specs: ['Nylon com fibra de carbono', 'Módulo 0,5 a módulo 3', 'Conjuntos com folga ajustada'],
  },
  {
    id: 'supports',
    name: 'Suportes & Fixações',
    tagline: 'Fixações estruturais construídas à medida',
    description:
      'Suportes de parede, calhas de cabos, invólucros para sensores e suportes estruturais concebidos para carga. Trabalhamos a partir do seu CAD ou fazemos engenharia inversa a partir de uma amostra da peça.',
    image: '/images/supports.svg',
    specs: ['Documentação de carga nominal', 'Resinas estáveis aos UV disponíveis', 'Entrega na mesma semana'],
  },
  {
    id: 'branding',
    name: 'Logótipos & Sinalética de Empresa',
    tagline: 'Marca dimensional para showrooms e eventos',
    description:
      'Placas de logótipo multicolor, sinalética para feiras e emblemas de secretária impressos na paleta exata da sua marca, com ferragens de montagem incluídas.',
    image: '/images/branding.svg',
    specs: ['Correspondência de cor multi-material', 'Montagem de parede ou secretária', 'Preços em quantidade para franchisados'],
  },
]

export default categories
