export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--ink-raised)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src="/images/logo.png" alt="On Demand 3D" className="h-9 w-9 object-contain" />
            <span className="display text-lg font-bold text-[var(--paper)]">
              ON DEMAND <span className="text-[var(--lime)]">3D</span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--paper-dim)]">
            Fabrico aditivo a pedido para empresas — peças, engrenagens, suportes
            estruturais e sinalética personalizada, impressos e enviados a partir de Portugal.
          </p>
        </div>

        <div>
          <h3 className="display mb-4 text-sm font-bold uppercase tracking-widest text-[var(--lime)]">
            Contacto
          </h3>
          <ul className="space-y-2 text-sm text-[var(--paper-dim)]">
            <li>
              <a href="mailto:ondemand3d.portugal@gmail.com" className="hover:text-[var(--lime)]">
                ondemand3d.portugal@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/351933677377" target="_blank" rel="noreferrer" className="hover:text-[var(--lime)]">
                +351 933 677 377
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/ondemand3d.pt"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--lime)]"
              >
                @ondemand3d.pt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="display mb-4 text-sm font-bold uppercase tracking-widest text-[var(--lime)]">
            Navegar
          </h3>
          <ul className="space-y-2 text-sm text-[var(--paper-dim)]">
            <li><a href="/#products" className="hover:text-[var(--lime)]">Produtos</a></li>
            <li><a href="/portfolio" className="hover:text-[var(--lime)]">Portefólio</a></li>
            <li><a href="/contact" className="hover:text-[var(--lime)]">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)] px-5 py-5 text-center text-xs text-[var(--paper-dim)] md:px-8">
        © {new Date().getFullYear()} On Demand 3D. Todos os direitos reservados.
      </div>
    </footer>
  )
}
