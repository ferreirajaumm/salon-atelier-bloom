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

      // Video slow zoom-out as you scroll away
      gsap.to(videoRef.current, {
        scale: 1.18,
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Giant wordmark drifts up faster than the video (depth)
      gsap.to(wordmarkRef.current, {
        yPercent: -40,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '60% top',
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
        duration: 1,
        delay: 0.3 + i * 0.12,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-[#0a0806]"
    >
      {/* Fullscreen video, covers everything */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/about-salon.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Cinematic grade: warm the shadows, deepen the corners, keep the center readable */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_35%,transparent_0%,rgba(10,8,6,0.35)_55%,rgba(10,8,6,0.85)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-transparent to-[#0a0806]/40" />
      <div className="absolute inset-0 bg-[#4a2f12] mix-blend-color opacity-[0.12]" />

      {/* Thin brand rule top */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-7">
        <span className="font-[var(--font-body)] text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-white/70">
          Hermelina Pinho
        </span>
        <span className="font-[var(--font-body)] text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-white/70">
          Lisboa
        </span>
      </div>

      {/* Content: bottom-anchored, editorial */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-10 lg:px-16">
        {/* Giant wordmark that bleeds edge-to-edge */}
        <motion.h1
          ref={wordmarkRef}
          custom={0}
          variants={line}
          initial="hidden"
          animate="visible"
          className="font-[var(--font-display)] font-bold text-white leading-[0.82] tracking-[-0.03em] text-[clamp(3.2rem,17vw,15rem)] mb-6 sm:mb-8"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.45)' }}
        >
          TÔDCACHOS
        </motion.h1>

        {/* Tagline + CTA row, split baseline */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-t border-white/15 pt-8">
          <motion.p
            custom={1}
            variants={line}
            initial="hidden"
            animate="visible"
            className="font-[var(--font-accent)] italic text-white/90 text-2xl sm:text-3xl lg:text-4xl leading-[1.15] max-w-2xl"
          >
            não é só curvatura, é história, é movimento, é autenticidade.
          </motion.p>

          <motion.div
            custom={2}
            variants={line}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-6 shrink-0"
          >
            <a
              href="#servicos"
              className="font-[var(--font-body)] text-[11px] uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-1"
            >
              Ver Serviços
            </a>
            <a
              href="#contactos"
              className="group relative font-[var(--font-body)] text-[11px] uppercase tracking-[0.3em] text-[#0a0806] bg-[#e8c789] px-7 py-4 overflow-hidden transition-colors"
            >
              <span className="relative z-10">Marcar Horário</span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
