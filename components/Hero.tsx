'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Calendar, ChevronDown, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion) return;

      gsap.to(videoRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#0d0d0d]"
    >
      {/* Asymmetric Split Layout: Video LEFT (60%) + Text RIGHT (40%) */}
      <div className="relative flex flex-col lg:flex-row min-h-[100dvh] w-full">
        {/* LEFT: Video Column (60% on desktop, full width on mobile) */}
        <div
          ref={videoRef}
          className="relative w-full lg:w-[60%] h-[55vh] lg:h-[100dvh] overflow-hidden will-change-transform"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/about-salon.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15]"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for mobile readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/60" />
        </div>

        {/* RIGHT: Text Column (40% on desktop, full width on mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full lg:w-[40%] flex items-center justify-center px-6 sm:px-10 lg:px-14 py-12 lg:py-0 bg-[#0d0d0d] lg:bg-gradient-to-l lg:from-[#0d0d0d] lg:via-[#0d0d0d]/80 lg:to-transparent z-10"
        >
          <div className="w-full max-w-xl flex flex-col items-start text-left">
            {/* Eyebrow / Mission Statement */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#b1823c]/40 text-[#cda93c] text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-6 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#cda93c] animate-pulse" />
              Especialista em Cachos, Crespos & Afros
            </motion.div>

            {/* TÔDCACHOS Wordmark */}
            <motion.h1
              variants={itemVariants}
              className="font-[var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-bold text-[#fafaf8] leading-[0.9] mb-6 tracking-tight"
            >
              TÔDCACHOS
            </motion.h1>

            {/* Founder Line */}
            <motion.p
              variants={itemVariants}
              className="font-[var(--font-body)] text-xs sm:text-sm uppercase tracking-[0.3em] text-[#b1823c] font-medium mb-6"
            >
              Por Hermelina Pinho
            </motion.p>

            {/* Italic Tagline */}
            <motion.p
              variants={itemVariants}
              className="font-[var(--font-accent)] italic text-xl sm:text-2xl md:text-3xl text-zinc-200 font-normal mb-10 leading-snug"
            >
              não é só curvatura, é história, é movimento, é autenticidade
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#contactos"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#b1823c] text-white font-[var(--font-body)] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-[#cda93c]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Fazer Marcação
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-[#fafaf8] font-[var(--font-body)] text-xs uppercase tracking-[0.2em] font-light hover:border-[#cda93c] hover:text-[#cda93c] transition-colors duration-300"
              >
                Ver Serviços <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-zinc-400 hover:text-[#cda93c] transition-colors"
      >
        <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#cda93c]" />
        </motion.div>
      </motion.a>
    </section>
  );
}