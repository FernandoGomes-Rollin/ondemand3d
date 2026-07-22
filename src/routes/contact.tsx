import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-grid px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="display mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[var(--lime)]">
            Fale connosco
          </p>
          <h1 className="display text-4xl font-bold text-[var(--paper)] md:text-5xl">
            Vamos orçamentar a sua peça
          </h1>
          <p className="mt-5 max-w-md text-[var(--paper-dim)]">
            Envie um desenho, uma fotografia, ou apenas uma descrição do que
            precisa. Normalmente respondemos dentro de um dia útil.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow label="Email">
              <a href="mailto:ondemand3d.portugal@gmail.com" className="hover:text-[var(--lime)]">
                ondemand3d.portugal@gmail.com
              </a>
            </ContactRow>
            <ContactRow label="WhatsApp">
              <a href="https://wa.me/351933677377" target="_blank" rel="noreferrer" className="hover:text-[var(--lime)]">
                +351 933 677 377
              </a>
            </ContactRow>
            <ContactRow label="Instagram">
              <a
                href="https://instagram.com/ondemand3d.pt"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--lime)]"
              >
                @ondemand3d.pt
              </a>
            </ContactRow>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--line)] bg-[var(--ink-raised)] p-8">
          {status === 'sent' ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--lime)] text-[var(--ink)]">
                ✓
              </div>
              <h2 className="display text-2xl font-bold text-[var(--paper)]">Mensagem enviada</h2>
              <p className="mt-2 text-[var(--paper-dim)]">
                Obrigado — entraremos em contacto em breve através de {fields.email || 'o seu email'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />
              <Field label="Nome" name="name" value={fields.name} onChange={handleChange} required />
              <Field label="Email" name="email" type="email" value={fields.email} onChange={handleChange} required />
              <Field label="Empresa" name="company" value={fields.company} onChange={handleChange} />
              <div>
                <label className="display mb-1.5 block text-xs font-bold uppercase tracking-widest text-[var(--paper-dim)]">
                  O que precisa de imprimir?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={fields.message}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-[var(--line)] bg-[var(--ink)] px-4 py-3 text-sm text-[var(--paper)] outline-none transition-colors focus:border-[var(--lime)]"
                  placeholder="Tipo de peça, quantidade, material, prazo..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="display w-full rounded-sm bg-[var(--lime)] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--ink)] transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === 'sending' ? 'A enviar…' : 'Enviar mensagem'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Ocorreu um erro — envie-nos um email diretamente para ondemand3d.portugal@gmail.com.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-[var(--line)] pb-4">
      <p className="display text-xs font-bold uppercase tracking-widest text-[var(--lime)]">{label}</p>
      <p className="mt-1 text-[var(--paper-dim)]">{children}</p>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div>
      <label className="display mb-1.5 block text-xs font-bold uppercase tracking-widest text-[var(--paper-dim)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-sm border border-[var(--line)] bg-[var(--ink)] px-4 py-3 text-sm text-[var(--paper)] outline-none transition-colors focus:border-[var(--lime)]"
      />
    </div>
  )
}
