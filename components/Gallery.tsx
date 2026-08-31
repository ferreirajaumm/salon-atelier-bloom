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
  speed: number;
}

const galleryImages: GalleryItem[] = [
  { id: 1, src: '/images/gallery-1.jpg', title: 'Blowout Volumoso', category: 'Styling', aspect: 'aspect-[1/1]', speed: -20 },
  { id: 2, src: '/images/gallery-2.jpg', title: 'Balayage Dourado', category: 'Coloração', aspect: 'aspect-[3/4]', speed: 25 },
  { id: 3, src: '/images/gallery-3.jpg', title: 'Nail Art com Ouro', category: 'Manicure', aspect: 'aspect-[4/3]', speed: -15 },
  { id: 4, src: '/images/gallery-4.jpg', title: 'Maquilhagem de Festa', category: 'Make-up', aspect: 'aspect-[3/4]', speed: 30 },
  { id: 5, src: '/images/gallery-5.jpg', title: 'Apanhado Sofisticado', category: 'Noivas', aspect: 'aspect-[1/1]', speed: -25 },
  { id: 6, src: '/images/gallery-6.jpg', title: 'Ritual Spa Capilar', category: 'Tratamento', aspect: 'aspect-[4/3]', speed: 20 },
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="galeria" ref={containerRef} className="py-24 md:py-36 bg-[#121212] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionTitle
          subtitle="Portfolio & Transformações"
          title="Galeria de Trabalhos"
          description="Explore os nossos trabalhos mais recentes, onde a precisão técnica se une à sensibilidade estética."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, idx) => {
            const isOdd = idx % 2 === 1;
            const yMotion = isOdd ? parallaxY1 : parallaxY2;

            return (
              <AnimatedSection key={item.id} delay={idx * 0.08}>
                <motion.div
                  style={{ y: shouldReduceMotion ? 0 : yMotion }}
                  className="group relative overflow-hidden border border-zinc-800 hover:border-[#c9a96e]/50 transition-colors duration-500 cursor-pointer"
                >
                  <div className={`relative w-full ${item.aspect} bg-zinc-900`}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-out"
                    />
                    
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

                    {/* Content Hover Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#c9a96e] block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-xl text-[#fafaf8] font-light">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Instagram Follow Prompt */}
        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <p className="font-sans text-sm text-zinc-400 font-light mb-4">
            Acompanhe o nosso trabalho diário e inspirações no Instagram
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#c9a96e] hover:text-[#e5c98b] underline underline-offset-8 transition-colors"
          >
            @atelierbloom.lisboa &rarr;
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
