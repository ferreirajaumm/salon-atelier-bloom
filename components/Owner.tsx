'use client';

import Image from 'next/image';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionTitle } from './ui/SectionTitle';

export function Owner() {
  return (
    <section id="dona" className="py-24 md:py-36 bg-[#121212] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionTitle
          subtitle="Fundadora & Master Stylist"
          title="A Visão por Detrás do Salão"
          description="Conheça a mestria e a paixão que transformaram o Atelier Bloom numa referência de beleza."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Bio Text Column */}
          <AnimatedSection direction="left" className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c9a96e] mb-3">
              Master Stylist & Creative Director
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#fafaf8] leading-tight mb-6">
              Sofia Bloom
            </h3>

            <p className="font-sans text-base text-zinc-300 font-light leading-relaxed mb-6">
              Com formação internacional em Paris e Londres, Sofia dedicou os últimos 15 anos a aperfeiçoar técnicas de coloração orgânica, corte escultural e Styling editorial para desfiles e capas de revista.
            </p>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-8">
              &quot;O meu objetivo com o Atelier Bloom foi criar um espaço onde cada cliente não só se sinta mais bonita, mas verdadeiramente renovada. A beleza é uma jornada pessoal, e cada detalhe importa.&quot;
            </p>

            <div className="p-6 glass-card border border-[#c9a96e]/20 mb-8">
              <h4 className="font-serif text-lg text-[#c9a96e] mb-2 font-medium">Especialidades</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-300 font-light">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mr-2" /> Balayage & French Highlights
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mr-2" /> Visagismo & Corte Escultural
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mr-2" /> Tratamentos de Reconstrução
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mr-2" /> Penteados de Noiva & Eventos
                </li>
              </ul>
            </div>

            {/* Signature styling */}
            <div className="pt-4 flex items-center justify-between border-t border-zinc-800">
              <div>
                <p className="font-serif text-xl italic text-[#c9a96e]">Sofia Bloom</p>
                <p className="font-sans text-xs uppercase tracking-widest text-zinc-500">Fundadora Atelier Bloom</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Photo Column */}
          <AnimatedSection direction="right" className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#c9a96e]/30 group">
              <Image
                src="/images/owner-photo.jpg"
                alt="Sofia Bloom - Fundadora e Master Stylist"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Gold Frame accent */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-full h-full border border-[#c9a96e]/20 -z-10" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
