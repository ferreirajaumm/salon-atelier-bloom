import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade | TÔDCACHOS',
  description: 'Política de privacidade e proteção de dados do atelier TÔDCACHOS, Lina Pinho.',
  robots: { index: true, follow: true },
};

export default function Privacidade() {
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
          Política de Privacidade
        </h1>
        <p className="font-sans text-sm text-[var(--ink-faint)] mb-14">
          Última atualização: setembro de 2026
        </p>

        <div className="space-y-10 font-sans text-base text-[var(--ink-soft)] font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Quem somos</h2>
            <p>
              O atelier TÔDCACHOS, dirigido por Lina Pinho, é responsável pelo tratamento dos dados pessoais recolhidos
              através deste website e no âmbito da prestação dos seus serviços de cabeleireiro especializado em cabelos
              cacheados, crespos e afros.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Dados que recolhemos</h2>
            <p>
              Recolhemos apenas os dados que nos fornece voluntariamente ao entrar em contacto connosco por telefone,
              WhatsApp ou email, nomeadamente o seu nome, contacto telefónico e informações relevantes para o
              agendamento e diagnóstico capilar. Não recolhemos dados sensíveis sem o seu consentimento explícito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Como usamos os seus dados</h2>
            <p>
              Os dados são utilizados exclusivamente para gerir marcações, prestar o serviço contratado e comunicar
              consigo sobre o seu atendimento. Não partilhamos, vendemos nem cedemos os seus dados a terceiros para
              fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Os seus direitos</h2>
            <p>
              Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD), tem o direito de aceder, retificar,
              apagar ou limitar o tratamento dos seus dados pessoais, bem como de se opor ao mesmo. Para exercer estes
              direitos, contacte-nos através dos meios indicados na página inicial.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-[var(--ink)] mb-4">Contacto</h2>
            <p>
              Para qualquer questão relacionada com a sua privacidade, contacte o atelier TÔDCACHOS pelos números
              925 515 466 ou 960 061 813.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
