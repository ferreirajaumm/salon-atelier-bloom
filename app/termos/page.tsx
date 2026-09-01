import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos e Condições | TÔDCACHOS',
  description: 'Termos e condições de utilização e de prestação de serviços do atelier TÔDCACHOS, Lina Pinho.',
  robots: { index: true, follow: true },
};

export default function Termos() {
  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="max-w-3xl mx-auto px-6 sm:px-12 py-28 md:py-40">
        <Link
          href="/"
          className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--accent-deep)] hover:text-[var(--accent)] transition-colors mb-12 inline-flex items-center min-h-[44px]"
        >
          ← Voltar ao início
        </Link>

        <h1
          className="font-serif text-4xl sm:text-5xl font-light tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Termos e Condições
        </h1>
        <p className="font-sans text-sm text-[var(--ink-faint)] mb-14">
          Última atualização: setembro de 2026
        </p>

        <div className="space-y-10 font-sans text-base text-[var(--ink-soft)] font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Marcações</h2>
            <p>
              O atendimento no atelier TÔDCACHOS é feito por marcação prévia, por telefone ou WhatsApp. Recomendamos o
              agendamento antecipado para garantir um diagnóstico capilar personalizado e o horário pretendido.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Cancelamentos</h2>
            <p>
              Caso não possa comparecer, agradecemos que nos avise com pelo menos 24 horas de antecedência, permitindo
              reorganizar a agenda e disponibilizar o horário a outra cliente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Serviços e valores</h2>
            <p>
              Os valores indicados neste website são de referência e podem variar consoante a quantidade, o comprimento
              e a condição do cabelo. O valor final é confirmado no momento do diagnóstico, antes do início do serviço.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste website, incluindo textos, imagens, logótipo e identidade visual, é propriedade do
              atelier TÔDCACHOS e não pode ser reproduzido sem autorização prévia.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Contacto</h2>
            <p>
              Para esclarecer qualquer dúvida sobre estes termos, contacte o atelier TÔDCACHOS pelos números
              925 515 466 ou 960 061 813.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
