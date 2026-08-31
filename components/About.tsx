'use client';

import Image from 'next/image';
import { AnimatedSection } from './ui/AnimatedSection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-28 md:py-40 bg-[#0d0d0d] text-[#fafaf8] relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Column matching salaodobairro.pt */}
          <AnimatedSection direction="right" className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-800 group shadow-2xl">
              <Image
                src="/images/about-salon.jpg"
                alt="Thay Silva - Hairstylist com +12 Anos de Experiência"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter grayscale-[10%] group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/70 backdrop-blur-md border border-[#c9a96e]/30">
                <p className="font-serif text-lg italic text-[#c9a96e] leading-relaxed">
                  &quot;Apaixonados por realçar a sua beleza com um toque personalizado.&quot;
                </p>
                <span className="font-sans text-xs uppercase tracking-widest text-zinc-400 mt-2 block">
                  — Thay Silva • Hair Specialist
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content Column matching salaodobairro.pt */}
          <AnimatedSection direction="left" className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#c9a96e] mb-3 font-semibold">
              Sobre a Especialista
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
              Thay Silva
            </h2>
            <h3 className="font-sans text-base sm:text-lg text-[#c9a96e] font-light mb-6">
              Hairstylist com +12 Anos de Experiência em Cabelos Cacheados, Crespos & Afros
            </h3>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-6">
              Técnica desenvolvida especialmente para valorizar a curvatura natural dos cabelos cacheados, crespos e afros. O corte é realizado respeitando o formato dos cachos, o caimento, o volume e a individualidade de cada fio.
            </p>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-8">
              Utilizamos fórmulas com óleos botânicos e a tecnologia inovadora de fototerapia Photon Lizze para garantir hidratação profunda, definição de longa duração e brilho espelhado.
            </p>

            <div className="space-y-3 mb-10">
              <div className="flex items-center text-sm text-zinc-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-[#c9a96e] mr-3 shrink-0" />
                <span>Corte tridimensional a seco para caracóis perfeitos</span>
              </div>
              <div className="flex items-center text-sm text-zinc-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-[#c9a96e] mr-3 shrink-0" />
                <span>Madeixas e iluminados com proteção total da fibra</span>
              </div>
              <div className="flex items-center text-sm text-zinc-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-[#c9a96e] mr-3 shrink-0" />
                <span>Tratamentos de fototerapia capilar com Photon Lizze</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#c9a96e] text-black font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#e5c98b] transition-all duration-300 shadow-lg"
              >
                VER SERVIÇOS <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#contactos"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-zinc-800 text-zinc-300 font-sans text-xs uppercase tracking-[0.2em] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
              >
                Fazer Marcação
              </a>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
