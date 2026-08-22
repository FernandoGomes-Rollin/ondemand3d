import { createFileRoute } from '@tanstack/react-router'
import categories from '@/data/products'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <Products />
      <Process />
      <CtaBand />
    </div>
  )
}

function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden border-b border-[var(--line)] px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12">
        <div className="rise md:col-span-7">
          <p className="display mb-5 inline-block rounded-sm border border-[var(--lime)]/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--lime)]">
            Fabrico aditivo, Porto e a nível nacional
          </p>
          <h1 className="display text-5xl font-bold leading-[0.95] text-[var(--paper)] md:text-7xl">
            As peças que a sua
            <br />
            empresa precisa,
            <br />
            <span className="text-[var(--lime)]">impressas esta semana.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--paper-dim)]">
            A On Demand 3D produz peças funcionais, engrenagens, suportes
            estruturais e marca dimensional para oficinas mecânicas, equipas de
            robótica e showrooms em todo Portugal — do ficheiro CAD até ao seu cais de carga.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="display rounded-sm bg-[var(--lime)] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--ink)] transition-transform hover:scale-[1.03]"
            >
              Pedir orçamento
            </a>
            <a
              href="/portfolio"
              className="display rounded-sm border border-[var(--line)] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--paper)] transition-colors hover:border-[var(--lime)] hover:text-[var(--lime)]"
            >
              Ver trabalhos anteriores
            </a>
          </div>
        </div>

        <div className="rise relative md:col-span-5" style={{ animationDelay: '0.15s' }}>
          <div className="absolute -inset-6 -z-10 rounded-full bg-[var(--lime)]/10 blur-3xl" />
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--ink-raised)] p-10">
            <img
              src="/images/logo.png"
              alt="Logótipo On Demand 3D"
              className="mx-auto h-56 w-56 object-contain"
            />
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[var(--line)] pt-8 text-center">
              <div>
                <dt className="text-xs uppercase tracking-widest text-[var(--paper-dim)]">Prazo de entrega</dt>
                <dd className="display text-2xl font-bold text-[var(--lime)]">2–5 dias</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[var(--paper-dim)]">Materiais</dt>
                <dd className="display text-2xl font-bold text-[var(--lime)]">12+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  const items = ['OFICINAS MECÂNICAS', 'EQUIPAS DE ROBÓTICA', 'GESTÃO DE INSTALAÇÕES', 'SHOWROOMS', 'AGRO-TECNOLOGIA', 'AUTOMAÇÃO']
  return (
    <div className="overflow-hidden border-b border-[var(--line)] bg-[var(--ink-raised)] py-4">
      <div className="flex animate-[scroll_28s_linear_infinite] gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="display text-sm font-semibold tracking-[0.3em] text-[var(--paper-dim)]">
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  )
}

function Products() {
  return (
    <section id="products" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[var(--lime)]">
              O que imprimimos
            </p>
            <h2 className="display text-4xl font-bold text-[var(--paper)] md:text-5xl">
              Quatro linhas de produto necessárias para a sua empresa não parar.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[var(--paper-dim)]">
            Cada categoria é entregue com certificados de material e verificações
            dimensionais. Envie um desenho ou uma amostra da peça e orçamentamos
            dentro de um dia útil.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--ink-raised)] transition-colors hover:border-[var(--lime)]/50 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`flex flex-col ${index === 0 ? 'md:flex-row' : ''}`}>
                <div className={`${index === 0 ? 'md:w-1/2' : ''} aspect-[8/6] overflow-hidden`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={`${index === 0 ? 'md:w-1/2' : ''} p-8`}>
                  <h3 className="display text-2xl font-bold text-[var(--paper)]">{category.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--lime)]">{category.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--paper-dim)]">
                    {category.description}
                  </p>
                  <ul className="mt-5 space-y-1.5">
                    {category.specs.map((spec) => (
                      <li key={spec} className="mono flex items-center gap-2 text-xs text-[var(--paper-dim)]">
                        <span className="h-1 w-1 rounded-full bg-[var(--lime)]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { n: '01', title: 'Envie o ficheiro', body: 'STEP, STL, ou uma fotografia da peça na sua bancada — trabalhamos com o que tiver.' },
    { n: '02', title: 'Orçamentamos e confirmamos', body: 'Material, tolerância e prazo de entrega respondidos dentro de um dia útil.' },
    { n: '03', title: 'Imprimir e inspecionar', body: 'Cada série é verificada dimensionalmente antes de sair da oficina.' },
    { n: '04', title: 'Enviar ou levantar', body: 'Envio a nível nacional, ou levantamento local na zona do Porto.' },
  ]
  return (
    <section className="border-y border-[var(--line)] bg-[var(--ink-raised)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="display mb-14 text-4xl font-bold text-[var(--paper)] md:text-5xl">
          Do ficheiro à <span className="text-[var(--lime)]">peça entregue</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="border-t-2 border-[var(--lime)] pt-5">
              <span className="mono text-sm text-[var(--paper-dim)]">{step.n}</span>
              <h3 className="display mt-2 text-xl font-bold text-[var(--paper)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBand() {
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl border border-[var(--lime)]/30 bg-gradient-to-br from-[var(--ink-raised)] to-[var(--ink)] p-10 md:flex-row md:items-center md:p-14">
        <div>
          <h2 className="display text-3xl font-bold text-[var(--paper)] md:text-4xl">
            Tem um desenho que precisa de se tornar uma peça?
          </h2>
          <p className="mt-3 max-w-lg text-[var(--paper-dim)]">
            Envie-nos uma mensagem no WhatsApp ou o ficheiro através do formulário
            de contacto — a maioria dos orçamentos sai no mesmo dia.
          </p>
        </div>
        <a
          href="/contact"
          className="display shrink-0 rounded-sm bg-[var(--lime)] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[var(--ink)] transition-transform hover:scale-[1.03]"
        >
          Pedir orçamento
        </a>
      </div>
    </section>
  )
}
