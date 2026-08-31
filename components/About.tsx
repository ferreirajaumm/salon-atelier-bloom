'use client';

import Image from 'next/image';
import { AnimatedSection } from './ui/AnimatedSection';

export function About() {
  return (
    <section id="sobre" className="py-28 md:py-40 bg-[#0a0a0a] text-[#fafaf8] relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <AnimatedSection direction="right" className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-800 group">
              <Image
                src="/images/about-salon.jpg"
                alt="Interior do Salão Atelier Bloom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter grayscale-[15%] group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md border border-zinc-800">
                <p className="font-serif text-base italic text-[#c9a96e] leading-relaxed">
                  &quot;A verdadeira beleza é intemporal e nasce da harmonia entre técnica, cuidado e atenção ao detalhe.&quot;
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content Column */}
          <AnimatedSection direction="left" className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#c9a96e] mb-4 font-medium">
              Conceito Atelier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8">
              Um Santuário Dedicado ao Seu Bem-Estar
            </h2>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-6">
              O Atelier Bloom nasceu com o propósito de proporcionar uma experiência onde o tempo desacelera. Cada atendimento inicia-se com uma consulta individual, avaliando não apenas a saúde capilar, mas a harmonia estética de cada cliente.
            </p>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-10">
              Trabalhamos exclusivamente com fórmulas botânicas de alta performance e métodos sustentáveis, garantindo resultados vibrantes sem comprometer a integridade natural do seu cabelo.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800/80">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] block font-light">12+</span>
                <span className="font-sans text-xs text-zinc-500 font-light">Anos de Experiência</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] block font-light">100%</span>
                <span className="font-sans text-xs text-zinc-500 font-light">Produtos Orgânicos</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] block font-light">4.9</span>
                <span className="font-sans text-xs text-zinc-500 font-light">Avaliação Geral</span>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
