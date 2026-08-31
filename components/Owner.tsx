'use client';

import Image from 'next/image';
import { AnimatedSection } from './ui/AnimatedSection';

export function Owner() {
  return (
    <section id="dona" className="py-28 md:py-40 bg-[#0d0d0d] text-[#fafaf8] relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Bio Text Column */}
          <AnimatedSection direction="left" className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#c9a96e] mb-4 font-medium">
              Direção Criativa
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Sofia Bloom
            </h2>

            <p className="font-sans text-base text-zinc-300 font-light leading-relaxed mb-6">
              Com formação em grandes academias de Paris e Londres, Sofia traz uma visão contemporânea do hairstyling. A sua abordagem foca-se na naturalidade do movimento, no corte sob medida e no domínio de nuances de cor tridimensionais.
            </p>

            <p className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-8">
              &quot;Desenvolvi o Atelier Bloom como uma extensão da minha paixão pelo detalhe. Cada cliente tem uma identidade única que merece ser celebrada com sofisticação.&quot;
            </p>

            <div className="space-y-3 pt-6 border-t border-zinc-800/80">
              <h3 className="font-serif text-lg text-[#c9a96e] font-light">Especializações</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-zinc-400 font-light">
                <p>• Balayage & French Highlights</p>
                <p>• Visagismo & Corte Escultural</p>
                <p>• Tratamentos de Reconstrução</p>
                <p>• Styling de Noiva & Alta Costura</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Photo Column */}
          <AnimatedSection direction="right" className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-zinc-800 group">
              <Image
                src="/images/owner-photo.jpg"
                alt="Sofia Bloom - Fundadora e Master Stylist"
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
