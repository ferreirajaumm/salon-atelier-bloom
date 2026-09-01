'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const values = [
  {
    word: 'Delicadeza',
    description: 'Cuidado atento em cada gesto, do diagnóstico à finalização.',
  },
  {
    word: 'Naturalidade',
    description: 'Respeitar a curvatura, nunca domar. Realçar o que já é seu.',
  },
  {
    word: 'Praticidade',
    description: 'Técnica que se traduz em rotina simples no seu dia a dia.',
  },
  {
    word: 'Autenticidade',
    description: 'Cada cabelo conta uma história, e nós honramos a sua.',
  },
];

export function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.18,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 1.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="filosofia"
      className="relative overflow-hidden py-32 md:py-48"
      style={{ backgroundColor: 'var(--canvas-2)', color: 'var(--ink)' }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: reduceMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
          className="block font-sans text-[10px] uppercase tracking-[0.35em] mb-16 md:mb-24"
          style={{ color: 'var(--accent-deep)' }}
        >
          Filosofia
        </motion.span>

        {/* Typographic Index */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="flex flex-col"
        >
          {values.map((value, i) => (
            <motion.li
              key={value.word}
              variants={itemVariants}
              className="grid grid-cols-12 gap-6 items-baseline py-10 md:py-14"
              style={{
                borderBottom: i === values.length - 1 ? 'none' : '1px solid var(--line)',
                borderTop: i === 0 ? '1px solid var(--line)' : 'none',
              }}
            >
              <span
                className="col-span-1 font-sans text-[11px] uppercase tracking-[0.25em] tabular-nums"
                style={{ color: 'var(--accent-deep)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="col-span-11 md:col-span-7">
                <h3
                  className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight"
                  style={{ color: 'var(--ink)' }}
                >
                  {value.word}
                </h3>
              </div>
              <p
                className="col-span-11 md:col-span-4 md:col-start-9 font-sans text-sm font-light leading-relaxed"
                style={{ color: 'var(--ink-soft)' }}
              >
                {value.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}