'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

// Avaliações reais do Google Business (TÔDCACHOS - Quinta do Conde)
// Para adicionar mais: copie nome + texto do Google e acrescente um objeto abaixo.
const reviews: Review[] = [
  {
    name: 'Liliana Correia',
    rating: 5,
    text: 'Profissionais 5 estrelas e muito simpáticas. Fiquei muito orgulhosa dos meus cachos pela primeira vez em muitos anos! Tanto a cor como o corte como a finalização ficaram perfeitos, tal como idealizei. Irei definitivamente voltar!',
    date: 'há 7 meses',
  },
  {
    name: 'Pamela Santana',
    rating: 5,
    text: 'Atendimento excelente e resultado impecável. A profissional me deu todo um direcionamento de como lidar com o meu cabelo e isso fez toda a diferença no meu dia a dia. Amei muito ❤️',
    date: 'há 2 meses',
  },
  {
    name: 'Rita P.',
    rating: 5,
    text: 'Adorei a experiência no salão, foi uma mudança radical no meu cabelo. Finalmente tenho os meus cachos de volta e mais saudáveis que nunca. Super atenciosa e com dicas ótimas para cuidar do meu cabelo em casa. Já recomendei para todas as minhas amigas!',
    date: 'há 1 ano',
  },
  {
    name: 'Fabiana Silva',
    rating: 5,
    text: 'Sempre foi uma preocupação grande encontrar profissionais para entregar meus cachos com confiança. Até conhecer as profissionais da TÔDCACHOS. Eu apenas digo o meu objetivo, mas elas entendem o meu cabelo melhor do que eu. São perfeitas no profissionalismo, algo que Portugal já merecia para as mulheres de cabelo cacheado.',
    date: 'há 2 meses',
  },
  {
    name: 'Priscila',
    rating: 5,
    text: 'Ambiente acolhedor, ótimas profissionais, amei o resultado nos cabelos: macio e o tom maravilhoso, e as unhas lindas. Super recomendo esse salão.',
    date: 'há 7 meses',
  },
  {
    name: 'Marina Vieira',
    rating: 5,
    text: 'Vivo em Setúbal e desloquei-me até Quinta do Conde para conhecer o espaço TÔDCACHOS. Tive uma ótima experiência no serviço! O corte de cabelo ficou exatamente como eu queria. Recomendo muito.',
    date: 'há 1 ano',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Avaliação ${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="w-4 h-4"
          fill={i < rating ? 'var(--accent)' : 'none'}
          stroke="var(--accent)"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.8 3.2-7.8z" />
      <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1-3.6 1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M6 14.3a6.6 6.6 0 0 1 0-4.2V7.3H2.3a11 11 0 0 0 0 9.8z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7.3L6 10.1c.9-2.5 3.2-4.4 6-4.4z" />
    </svg>
  );
}

export function Reviews() {
  const reduce = useReducedMotion();

  return (
    <section
      id="avaliacoes"
      className="py-28 md:py-40 bg-[var(--canvas)] text-[var(--ink)] border-t border-[var(--line)]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <header className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--accent-deep)] mb-4 block">
              O que dizem as clientes
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-[var(--ink)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Histórias de confiança
            </h2>
          </div>

          {/* Google rating badge */}
          <a
            href="https://www.google.com/search?q=TÔDCACHOS+-+Quinta+do+Conde"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 border border-[var(--line)] rounded-2xl px-6 py-4 bg-[var(--canvas-2)] hover:border-[var(--accent)] transition-colors shrink-0"
            style={{ transitionDuration: '0.6s' }}
          >
            <GoogleGlyph />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-light text-[var(--ink)] leading-none tabular-nums">4,5</span>
                <Stars rating={5} />
              </div>
              <span className="font-sans text-[11px] text-[var(--ink-soft)] mt-1">
                42 avaliações no Google
              </span>
            </div>
          </a>
        </header>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.name}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 0.9,
                delay: reduce ? 0 : i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col border border-[var(--line)] rounded-2xl p-7 sm:p-8 bg-[var(--canvas-2)]"
            >
              <Stars rating={review.rating} />
              <blockquote className="font-sans text-sm text-[var(--ink-soft)] font-light leading-relaxed mt-5 mb-8 flex-1">
                {review.text}
              </blockquote>
              <figcaption className="flex items-center justify-between pt-5 border-t border-[var(--line)]">
                <div className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm text-[var(--canvas)] shrink-0"
                    style={{ backgroundColor: 'var(--accent-deep)' }}
                    aria-hidden="true"
                  >
                    {review.name.charAt(0)}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-sans text-sm text-[var(--ink)] font-medium leading-tight">
                      {review.name}
                    </span>
                    <span className="font-sans text-[11px] text-[var(--ink-faint)]">
                      {review.date}
                    </span>
                  </div>
                </div>
                <GoogleGlyph />
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
