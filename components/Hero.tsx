'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Calendar, ChevronDown, ArrowRight } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#0d0d0d]"
    >
      {/* Background Video directly from Salão do Bairro */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/about-salon.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15]"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays matching salaodobairro.pt */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-[#0d0d0d]/90" />
      </div>

      {/* Header Navigation matching salaodobairro.pt */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-12 py-6 flex items-center justify-between border-b border-white/10 backdrop-blur-md bg-black/40">
        <a href="#" className="flex flex-col">
          <span className="font-serif text-2xl sm:text-3xl tracking-widest text-[#fafaf8] uppercase font-light">
            THAY SILVA
          </span>
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#c9a96e] font-medium -mt-1">
            HAIR & BEAUTY • CACHEADOS & AFROS
          </span>
        </a>

        <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-light text-zinc-300">
          <a href="#sobre" className="hover:text-[#c9a96e] transition-colors">Início</a>
          <a href="#sobre" className="hover:text-[#c9a96e] transition-colors">A Especialista</a>
          <a href="#servicos" className="hover:text-[#c9a96e] transition-colors">Serviços</a>
          <a href="#galeria" className="hover:text-[#c9a96e] transition-colors">Portfólio</a>
          <a href="#contactos" className="hover:text-[#c9a96e] transition-colors">Contactos</a>
        </nav>

        <a
          href="#contactos"
          className="px-6 py-2.5 text-xs uppercase tracking-[0.2em] bg-[#c9a96e] text-black font-semibold hover:bg-[#e5c98b] transition-all duration-300 shadow-[0_0_20px_rgba(201,169,110,0.3)]"
        >
          Fazer Marcação
        </a>
      </header>

      {/* Hero Content matching salaodobairro.pt */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : textY,
          opacity: shouldReduceMotion ? 1 : opacity,
        }}
        className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#c9a96e]/40 text-[#c9a96e] text-xs font-sans uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
          Não é só um cabeleireiro. É o especialista em cachos do seu bairro.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#fafaf8] tracking-tight leading-[0.95] mb-6"
        >
          Thay Silva
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          &quot;Realce a sua beleza natural.&quot;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contactos"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#c9a96e] text-black font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-[#e5c98b] shadow-[0_0_25px_rgba(201,169,110,0.4)]"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Fazer Marcação
          </a>

          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-[#fafaf8] font-sans text-xs uppercase tracking-[0.2em] font-light hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-300"
          >
            Ver Serviços <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-zinc-400 hover:text-[#c9a96e] transition-colors"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#c9a96e]" />
        </motion.div>
      </motion.a>
    </section>
  );
}
