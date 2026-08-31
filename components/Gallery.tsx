'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  /** Tailwind aspect-ratio utility, e.g. aspect-[3/4] */
  aspect: string;
  /** Visual emphasis on desktop: 'tall' = tall portrait, 'wide' = wide landscape */
  span: string;
  /** Vertical parallax magnitude in pixels (positive moves up on scroll) */
  parallax: number;
}

const galleryImages: GalleryItem[] = [
  {
    id: 1,
    src: '/images/port-corte.jpg',
    title: 'Corte para Cacheados, Crespos & Afros',
    category: 'Corte',
    aspect: 'aspect-[3/4]',
    span: 'lg:row-span-2',
    parallax: -45,
  },
  {
    id: 2,
    src: '/images/port-madeixas.jpg',
    title: 'Madeixas & Iluminados de Autor',
    category: 'Coloração',
    aspect: 'aspect-[4/3]',
    span: 'lg:col-span-2',
    parallax: 30,
  },
  {
    id: 3,
    src: '/images/port-definicao.jpg',
    title: 'Definição & Finalização',
    category: 'Finalização',
    aspect: 'aspect-[1/1]',
    span: '',
    parallax: 15,
  },
  {
    id: 4,
    src: '/images/port-finalizacao.jpg',
    title: 'Soltura & Movimento Natural',
    category: 'Finalização',
    aspect: 'aspect-[3/4]',
    span: 'lg:row-span-2',
    parallax: 45,
  },
  {
    id: 5,
    src: '/images/port-tratamento.jpg',
    title: 'Powerterapia & Tratamentos',
    category: 'Tratamento',
    aspect: 'aspect-[3/4]',
    span: '',
    parallax: -15,
  },
  {
    id: 6,
    src: '/images/port-coloracao.jpg',
    title: 'Coloração & Cachoterapia',
    category: 'Cor & Cuidado',
    aspect: 'aspect-[4/3]',
    span: '',
    parallax: 30,
  },
];

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return;

      const items = sectionRef.current?.querySelectorAll<HTMLDivElement>('[data-gallery-image]');
      if (!items || items.length === 0) return;

      items.forEach((item) => {
        // Gentle parallax: dampen stored magnitudes for a soft, luxe drift
        const magnitude = Number(item.dataset.parallax ?? 0) * 0.55;
        if (!magnitude) return;

        gsap.fromTo(
          item,
          { y: -magnitude },
          {
            y: magnitude,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="py-28 md:py-40 bg-[var(--canvas-2)] text-[var(--ink)] relative border-t border-[var(--line)]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Header — simple, no generic eyebrow */}
        <header className="mb-14 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[var(--ink)]">
            Portfólio
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--ink-soft)] font-light max-w-[60ch] leading-relaxed mt-5">
            Resultados reais de cortes, tratamentos e iluminação desenvolvidos para valorizar a textura natural, assinados por Hermelina Pinho.
          </p>
        </header>

        {/* Asymmetric masonry grid: mobile = 1 col tall stack, lg = asymmetric 3-col */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:auto-rows-auto">
          {galleryImages.map((item) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden border border-[var(--line)] hover:border-[var(--accent)] transition-colors duration-500 ${item.span}`}
              data-gallery-image=""
              data-parallax={item.parallax}
              style={{ willChange: 'transform' }}
            >
              <div className={`relative w-full ${item.aspect} bg-[var(--canvas-3)] overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-[transform,filter] duration-[700ms] ease-out"
                />

                {/* Soft light scrim: slides up on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(43,37,33,0.12)] via-[rgba(43,37,33,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Caption: slides up from bottom on hover */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-deep)] block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[var(--ink)] font-light leading-snug">
                    {item.title}
                  </h3>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-16 text-center">
          <a
            href="https://instagram.com/todcachos.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-sans uppercase tracking-[0.25em] text-[var(--ink-soft)] hover:text-[var(--accent-deep)] transition-colors duration-300"
          >
            Acompanhe mais transformações no Instagram &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
