import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Início' },
  { to: '/#products', label: 'Produtos' },
  { to: '/portfolio', label: 'Portefólio' },
  { to: '/contact', label: 'Contacto' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--ink)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="On Demand 3D" className="h-10 w-10 object-contain" />
          <span className="display text-xl font-bold tracking-wide text-[var(--paper)]">
            ON DEMAND <span className="text-[var(--lime)]">3D</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className={`display text-sm font-semibold uppercase tracking-widest transition-colors hover:text-[var(--lime)] ${
                pathname === link.to ? 'text-[var(--lime)]' : 'text-[var(--paper-dim)]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="display rounded-sm border border-[var(--lime)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[var(--lime)] transition-colors hover:bg-[var(--lime)] hover:text-[var(--ink)]"
          >
            Pedir orçamento
          </a>
        </nav>

        <button
          aria-label="Alternar menu"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-[2px] w-6 bg-[var(--lime)] transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`block h-[2px] w-6 bg-[var(--lime)] transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-[2px] w-6 bg-[var(--lime)] transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-[var(--line)] px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.to}
              onClick={() => setOpen(false)}
              className="display py-3 text-base font-semibold uppercase tracking-widest text-[var(--paper-dim)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
