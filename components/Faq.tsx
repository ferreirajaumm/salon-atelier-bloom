'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface QA {
  q: string;
  a: string;
}

// Mirrors the FAQPage JSON-LD in JsonLd.tsx for AI Overviews / featured snippets
const faqs: QA[] = [
  {
    q: 'A TÔDCACHOS atende cabelos cacheados, crespos e afros?',
    a: 'Sim. A TÔDCACHOS é um atelier especializado exclusivamente em cabelos cacheados, crespos e afros, com técnicas que respeitam a curvatura natural de cada fio.',
  },
  {
    q: 'Onde fica o atelier TÔDCACHOS?',
    a: 'O atelier fica em Lisboa, Portugal. O atendimento é por marcação prévia, de terça a sábado, das 09:00 às 19:00.',
  },
  {
    q: 'Quanto custa a Cachoterapia?',
    a: 'A Cachoterapia custa a partir de 40€ e dura cerca de 60 minutos. Os valores podem variar conforme a quantidade e o comprimento do cabelo.',
  },
  {
    q: 'Como marcar horário na TÔDCACHOS?',
    a: 'As marcações são feitas por telefone ou WhatsApp. Recomendamos agendamento prévio para garantir um diagnóstico capilar personalizado.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      className="bg-[var(--canvas)] text-[var(--ink)] border-t border-[var(--line)] py-28 md:py-40"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--accent-deep)] mb-4 block">
          Perguntas Frequentes
        </span>
        <h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] mb-14 sm:mb-20"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Tudo o que precisa de saber
        </h2>

        <div>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[var(--line)]">
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  >
                    <span
                      className="font-serif text-lg sm:text-2xl font-light text-[var(--ink)] group-hover:text-[var(--accent-deep)] transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 text-[var(--accent)] text-2xl font-light transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? undefined : { height: 0, opacity: 0 }}
                      animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-base text-[var(--ink-soft)] font-light leading-relaxed pb-7 max-w-2xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
