'use client';

import Image from 'next/image';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionTitle } from './ui/SectionTitle';

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-36 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionTitle
          subtitle="O Nosso Conceito"
          title="Um Refúgio de Calma e Elegância"
          description="Desenhado para ser mais do que um salão de beleza — um santuário de bem-estar onde cada detalhe foi pensado para elevar a sua auto-estima."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <AnimatedSection direction="right" className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#c9a96e]/20 group">
              <Image
                src="/images/about-salon.jpg"
                alt="Interior do Salão Atelier Bloom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel border border-[#c9a96e]/30">
                <p className="font-serif text-sm italic text-[#c9a96e]">
                  &quot;A beleza autêntica nasce da atenção aos detalhes e do respeito pela individualidade.&quot;
                </p>
              </div>
            </div>

            {/* Decorative Gold Box */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 border border-[#c9a96e]/30 -z-10" />
          </AnimatedSection>

          {/* Text Content Column */}
          <AnimatedSection direction="left" className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#fafaf8] leading-snug mb-6">
              A Arte de Realçar a Sua Beleza Natural
            </h3>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-6">
              No Atelier Bloom, acreditamos que o cabelo e a estética pessoal são formas de expressão artística. Cada atendimento inicia-se com uma consulta personalizada, onde analisamos a textura, formato do rosto e estilo de vida para criar um visual sob medida.
            </p>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-8">
              Utilizamos exclusivamente produtos de alta gama orgânicos e sustentáveis, garantindo resultados deslumbrantes sem comprometer a saúde do seu cabelo e pele.
            </p>

            {/* Key Highlights / Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] block font-light">12+</span>
                <span className="font-sans text-xs uppercase tracking-wider text-zinc-500 font-light">Anos de História</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] block font-light">100%</span>
                <span className="font-sans text-xs uppercase tracking-wider text-zinc-500 font-light">Cruelty-Free</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] block font-light">4.9★</span>
                <span className="font-sans text-xs uppercase tracking-wider text-zinc-500 font-light">Avaliação Clientes</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
