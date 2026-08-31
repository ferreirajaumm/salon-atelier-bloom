'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Video with Dark Overlay */}
      <motion.div
        style={{ scale: shouldReduceMotion ? 1 : videoScale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/about-salon.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.1]"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-[#0a0a0a]/90" />
      </motion.div>

      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-12 py-6 flex items-center justify-between border-b border-white/10 backdrop-blur-sm bg-black/20">
        <a href="#" className="font-serif text-2xl sm:text-3xl tracking-widest text-[#fafaf8] uppercase hover:text-[#c9a96e] transition-colors">
          Atelier Bloom
        </a>
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-light text-zinc-300">
          <a href="#sobre" className="hover:text-[#c9a96e] transition-colors">Sobre</a>
          <a href="#dona" className="hover:text-[#c9a96e] transition-colors">A Dona</a>
          <a href="#servicos" className="hover:text-[#c9a96e] transition-colors">Serviços</a>
          <a href="#galeria" className="hover:text-[#c9a96e] transition-colors">Galeria</a>
          <a href="#contactos" className="hover:text-[#c9a96e] transition-colors">Contactos</a>
        </nav>
        <a
          href="#contactos"
          className="px-5 py-2 text-xs uppercase tracking-[0.18em] border border-[#c9a96e]/60 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all duration-300 rounded-none"
        >
          Reservar
        </a>
      </header>

      {/* Hero Content with Parallax */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : textY,
          opacity: shouldReduceMotion ? 1 : opacity,
        }}
        className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center pt-20"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[#c9a96e] mb-4 sm:mb-6 block"
        >
          Haute Coiffure & Esthétique — Lisboa
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#fafaf8] tracking-tight leading-[0.9] mb-6"
        >
          Atelier Bloom
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-base sm:text-lg md:text-xl text-zinc-300 font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Onde a simplicidade encontra o luxo. Uma experiência de beleza personalizada para quem valoriza a elegância intemporal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contactos"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#c9a96e] text-black font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#e5c98b] hover:shadow-[0_0_25px_rgba(201,169,110,0.4)]"
          >
            <Calendar className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
            Marcar Horário
          </a>

          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-[#fafaf8] font-sans text-xs uppercase tracking-[0.2em] font-light hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-300"
          >
            Explorar Serviços
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
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
