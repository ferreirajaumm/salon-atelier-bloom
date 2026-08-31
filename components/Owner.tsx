'use client';

import Image from 'next/image';
import { AnimatedSection } from './ui/AnimatedSection';

export function Owner() {
  return (
    <section id="especialista" className="py-28 md:py-40 bg-[#0d0d0d] text-[#fafaf8] relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Bio Text Column */}
          <AnimatedSection direction="left" className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#c9a96e] mb-4 font-medium">
              A Especialista
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Thay Silva
            </h2>

            <p className="font-sans text-base text-zinc-300 font-light leading-relaxed mb-6">
              Thay Silva é especialista dedicada à saúde, beleza e valorização dos cabelos cacheados, crespos e afros. Desenvolveu um método de trabalho focado na curvatura natural, combinando diagnóstico capilar cuidadoso, cortes tridimensionais e colorações seguras.
            </p>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-8">
              &quot;O meu objetivo é entregar não apenas um serviço, mas sim autonomia e amor-próprio para cada pessoa que confia os seus caracóis nas minhas mãos.&quot;
            </p>

            <div className="space-y-3 pt-6 border-t border-zinc-800/80">
              <h3 className="font-serif text-lg text-[#c9a96e] font-light">Especialidades do Atelier</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-zinc-400 font-light">
                <p>• Corte para Cacheados, Crespos & Afros</p>
                <p>• Madeixas & Iluminados de Autor</p>
                <p>• Soltura de Cachos & Alinhamento</p>
                <p>• Tratamentos com Photon Lizze</p>
                <p>• Definição, Finalização & Difusor</p>
                <p>• Higienização & Diagnóstico Capilar</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Photo Column */}
          <AnimatedSection direction="right" className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-zinc-800 group">
              <Image
                src="/images/owner-photo.jpg"
                alt="Thay Silva - Especialista em Cabelos Cacheados, Crespos e Afros"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
