import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import portfolio from '@/data/portfolio'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

const filters = ['Todos', 'Peças', 'Engrenagens', 'Suportes', 'Marca']

function Portfolio() {
  const [active, setActive] = useState('Todos')
  const items = active === 'Todos' ? portfolio : portfolio.filter((p) => p.category === active)

  return (
    <section className="bg-grid px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="display mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[var(--lime)]">
          Portefólio
        </p>
        <h1 className="display text-4xl font-bold text-[var(--paper)] md:text-6xl">
          Trabalhos que já entregámos
        </h1>
        <p className="mt-4 max-w-xl text-[var(--paper-dim)]">
          Uma amostra de trabalhos realizados para oficinas mecânicas, equipas de
          robótica, operadores agro-tecnológicos e showrooms em todo Portugal.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`display rounded-sm border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                active === f
                  ? 'border-[var(--lime)] bg-[var(--lime)] text-[var(--ink)]'
                  : 'border-[var(--line)] text-[var(--paper-dim)] hover:border-[var(--lime)] hover:text-[var(--lime)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--ink-raised)] transition-colors hover:border-[var(--lime)]/50"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mono text-xs uppercase tracking-widest text-[var(--lime)]">
                  {item.category}
                </span>
                <h3 className="display mt-1 text-xl font-bold text-[var(--paper)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--paper-dim)]">{item.client}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-12 text-center text-[var(--paper-dim)]">Ainda não há trabalhos nesta categoria.</p>
        )}
      </div>
    </section>
  )
}
