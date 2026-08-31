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
                alt="Thay Silva - Especialista em Cabelos Cacheados, Crespos e Afros"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter grayscale-[10%] group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/70 backdrop-blur-md border border-zinc-800">
                <p className="font-serif text-base italic text-[#c9a96e] leading-relaxed">
                  &quot;Cada curvatura conta uma história única. O meu propósito é cuidar e valorizar a forma e o volume natural dos seus fios.&quot;
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content Column */}
          <AnimatedSection direction="left" className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#c9a96e] mb-4 font-medium">
              A Nossa Filosofia
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8">
              A Arte dos Cabelos Cacheados, Crespos & Afros
            </h2>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-6">
              Técnicas desenvolvidas especialmente para valorizar a curvatura natural dos cabelos cacheados, crespos e afros. Cada procedimento é realizado respeitando o formato dos cachos, o caimento, o volume e a individualidade de cada fio.
            </p>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-10">
              Desde o diagnóstico capilar minucioso aos rituais de clareamento, iluminação e reconstrução com tecnologia Photon Lizze, unimos ciência e arte para proporcionar resultados leves, definidos e saudáveis.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800/80">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] block font-light">100%</span>
                <span className="font-sans text-xs text-zinc-500 font-light">Personalizado</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] block font-light">Especialista</span>
                <span className="font-sans text-xs text-zinc-500 font-light">Cacheados & Afros</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] block font-light">Photon</span>
                <span className="font-sans text-xs text-zinc-500 font-light">Tecnologia Capilar</span>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
