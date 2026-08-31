'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const MANIFESTO_HEADLINE =
  'não é só curvatura. é história, é movimento, é autenticidade.';

const MANIFESTO_WORDS = MANIFESTO_HEADLINE.split(' ');

const MISSION_PARAGRAPH =
  'TÔDCACHOS nasceu para mostrar ao mundo o poder de uma curvatura, nasceu para dar voz a algo que durante muito tempo ficou escondido no meio da sociedade. Aqui a prioridade é renovar, cuidar e transformar curvaturas únicas.';

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="bg-[var(--canvas)] text-[var(--ink)] relative border-t border-[var(--line)]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-32 md:py-48">
        {/* Tiny eyebrow label */}
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease }}
          className="block text-[10px] uppercase tracking-[0.35em] text-[var(--accent)] mb-16 md:mb-24 text-center font-light"
        >
          O Manifesto
        </motion.span>

        {/* Headline: word-by-word reveal */}
        <h2
          className="font-serif text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.08] tracking-[-0.02em] text-center mb-20 md:mb-28"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-label={MANIFESTO_HEADLINE}
        >
          {MANIFESTO_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 0.9,
                ease,
                delay: reduceMotion ? 0 : i * 0.08,
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Hairline divider */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease, delay: reduceMotion ? 0 : 0.2 }}
          className="w-12 h-px bg-[var(--accent)] mx-auto mb-16 md:mb-20 origin-center"
        />

        {/* Mission paragraph */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.1, ease, delay: reduceMotion ? 0 : 0.15 }}
          className="font-body text-base sm:text-lg text-[var(--ink-soft)] font-light leading-[1.85] max-w-2xl mx-auto text-center"
        >
          {MISSION_PARAGRAPH}
        </motion.p>

        {/* Founder mark */}
        <motion.span
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease, delay: reduceMotion ? 0 : 0.3 }}
          className="block font-accent italic text-sm text-[var(--ink-soft)] text-center mt-16 md:mt-20 tracking-wide"
        >
          Hermelina Pinho, Lisboa
        </motion.span>
      </div>
    </section>
  );
}