'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionTitle } from './ui/SectionTitle';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  aspect: string;
}

const galleryImages: GalleryItem[] = [
  { id: 1, src: '/images/gallery-1.jpg', title: 'Corte Tridimensional Cacheados', category: 'Corte', aspect: 'aspect-[3/4]' },
  { id: 2, src: '/images/gallery-2.jpg', title: 'Madeixas Iluminadas em Cachos', category: 'Coloração', aspect: 'aspect-[3/4]' },
  { id: 3, src: '/images/gallery-3.jpg', title: 'Definição & Ativação de Curvatura', category: 'Finalização', aspect: 'aspect-[4/3]' },
  { id: 4, src: '/images/gallery-4.jpg', title: 'Soltura & Leveza de Cachos', category: 'Transformação', aspect: 'aspect-[3/4]' },
  { id: 5, src: '/images/gallery-5.jpg', title: 'Tratamento com Photon Lizze', category: 'Tecnologia Capilar', aspect: 'aspect-[1/1]' },
  { id: 6, src: '/images/gallery-6.jpg', title: 'Higienização & Brilho Espelhado', category: 'Cuidado Capilar', aspect: 'aspect-[4/3]' },
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section id="galeria" ref={containerRef} className="py-28 md:py-40 bg-[#0d0d0d] text-[#fafaf8] relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <SectionTitle
          subtitle="Portfólio Original"
          title="Galeria de Trabalhos — Thay Silva"
          description="Resultados reais de cortes, tratamentos e iluminação desenvolvidos para valorizar a textura natural."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, idx) => {
            const isOdd = idx % 2 === 1;
            const yMotion = isOdd ? parallaxY1 : parallaxY2;

            return (
              <AnimatedSection key={item.id} delay={idx * 0.06}>
                <motion.div
                  style={{ y: shouldReduceMotion ? 0 : yMotion }}
                  className="group relative overflow-hidden border border-zinc-800/80 hover:border-[#c9a96e]/50 transition-all duration-500 cursor-pointer"
                >
                  <div className={`relative w-full ${item.aspect} bg-zinc-900`}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="font-sans text-xs uppercase tracking-widest text-[#c9a96e] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl text-[#fafaf8] font-light">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.3} className="mt-16 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-sans uppercase tracking-widest text-zinc-400 hover:text-[#c9a96e] transition-colors"
          >
            Acompanhe mais transformações no Instagram &rarr;
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
