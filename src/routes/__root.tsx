import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'On Demand 3D — Fabrico Aditivo para Empresas' },
      {
        name: 'description',
        content:
          'A On Demand 3D imprime peças, engrenagens, suportes estruturais e sinalética personalizada para empresas em Portugal. Peça já o seu orçamento.',
      },
    ],
    links: [{ rel: 'icon', href: '/images/logo.png' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[var(--ink)] text-[var(--paper)]">
        <div className="noise-overlay" />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Scripts />
      </body>
    </html>
  )
}
