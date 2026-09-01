'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion) return;

      // Video gentle scale as you scroll away
      gsap.fromTo(
        videoRef.current,
        { scale: 1 },
        {
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Wordmark drifts up gently
      gsap.to(wordmarkRef.current, {
        yPercent: -25,
        opacity: 0.6,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '70% top',
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  const line = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.4 + i * 0.15,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden"
    >
      {/* Fullscreen video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gentle warm wash — softer, less crushed-black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(244,239,233,0.08) 0%, rgba(169,128,90,0.10) 40%, rgba(43,37,33,0.18) 100%)',
        }}
      />

      {/* Subtle top shadow for rule legibility */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            'linear-gradient(180deg, rgba(43,37,33,0.30) 0%, transparent 100%)',
        }}
      />

      {/* Soft dark scrim behind the bottom content for text legibility */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] z-[1]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(43,37,33,0.35) 60%, rgba(43,37,33,0.55) 100%)',
        }}
      />

      {/* Quiet luxury transition: dissolve video edges into light canvas at the very bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-[18%] z-[1]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, var(--canvas) 100%)',
        }}
      />

      {/* Thin brand rule top */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-7">
        <span
          className="font-[var(--font-body)] text-[10px] sm:text-[11px] uppercase tracking-[0.4em]"
          style={{ color: 'rgba(244,239,233,0.75)' }}
        >
          Hermelina Pinho
        </span>
        <span
          className="font-[var(--font-body)] text-[10px] sm:text-[11px] uppercase tracking-[0.4em]"
          style={{ color: 'rgba(244,239,233,0.75)' }}
        >
          Lisboa
        </span>
      </div>

      {/* Content: bottom-anchored, editorial */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 sm:pb-20 lg:pb-28 px-6 sm:px-10 lg:px-16">
        {/* Giant wordmark — delicate, airy */}
        <motion.h1
          ref={wordmarkRef}
          custom={0}
          variants={line}
          initial="hidden"
          animate="visible"
          className="font-[var(--font-display)] text-[clamp(2.75rem,15.5vw,14rem)] leading-[0.82] tracking-[-0.03em] font-normal mb-8 sm:mb-10 -ml-1 sm:-ml-2"
          style={{
            color: '#f4efe9',
            textShadow: '0 2px 60px rgba(43,37,33,0.25)',
          }}
        >
          TÔDCACHOS
        </motion.h1>

        {/* Tagline + CTA row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-t border-white/20 pt-8">
          <motion.p
            custom={1}
            variants={line}
            initial="hidden"
            animate="visible"
            className="font-[var(--font-accent)] italic text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.2] max-w-2xl"
            style={{ color: 'rgba(244,239,233,0.92)' }}
          >
            não é só curvatura, é história, é movimento, é autenticidade.
          </motion.p>

          <motion.div
            custom={2}
            variants={line}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-8 shrink-0"
          >
            <a
              href="#servicos"
              className="font-[var(--font-body)] text-[11px] uppercase tracking-[0.3em] pb-1 border-b transition-colors duration-300"
              style={{
                color: 'rgba(244,239,233,0.85)',
                borderColor: 'rgba(244,239,233,0.40)',
              }}
            >
              Ver Serviços
            </a>
            <a
              href="#contactos"
              className="font-[var(--font-body)] text-[11px] uppercase tracking-[0.3em] px-7 py-4 transition-colors duration-300"
              style={{
                color: '#2b2521',
                backgroundColor: '#e8dcc8',
              }}
            >
              Marcar Horário
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
