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

interface GalleryEntry {
  id: number;
  src: string;
  title: string;
  category: string;
  /** desktop column offset for an elegant staggered rhythm */
  offset: string;
  parallax: number;
}

const galleryImages: GalleryEntry[] = [
  // — Resultados / transformações reais —
  {
    id: 1,
    src: '/images/cliente-cachos-loiros.jpg',
    title: 'Cachos Loiros Definidos & Iluminados',
    category: 'Definição',
    offset: 'lg:mt-0',
    parallax: 24,
  },
  {
    id: 2,
    src: '/images/servico-cachoterapia.jpg',
    title: 'Cachoterapia',
    category: 'Ritual de Cachos',
    offset: 'lg:mt-16',
    parallax: -20,
  },
  {
    id: 3,
    src: '/images/servico-powerterapia.jpg',
    title: 'Powerterapia',
    category: 'Reconstrução',
    offset: 'lg:mt-32',
    parallax: 18,
  },
  {
    id: 4,
    src: '/images/servico-higienizacao.jpg',
    title: 'Higienização Profunda',
    category: 'Higienização',
    offset: 'lg:-mt-8',
    parallax: 24,
  },
  {
    id: 5,
    src: '/images/servico-ozonioterapia.jpg',
    title: 'Ozonioterapia',
    category: 'Terapia Capilar',
    offset: 'lg:mt-8',
    parallax: -20,
  },
  {
    id: 6,
    src: '/images/servico-photon-lizze.jpg',
    title: 'Photon Lizze',
    category: 'Fotobiomodulação',
    offset: 'lg:mt-24',
    parallax: 18,
  },
  {
    id: 7,
    src: '/images/servico-blends-oleos.jpg',
    title: 'Blends de Óleos',
    category: 'Nutrição',
    offset: 'lg:mt-0',
    parallax: 22,
  },
  {
    id: 8,
    src: '/images/servico-alta-frequencia.jpg',
    title: 'Alta Frequência',
    category: 'Estímulo do Couro',
    offset: 'lg:mt-16',
    parallax: -18,
  },
  {
    id: 9,
    src: '/images/servico-definicao.jpg',
    title: 'Definição & Finalização',
    category: 'Finalização',
    offset: 'lg:mt-28',
    parallax: 20,
  },
  {
    id: 10,
    src: '/images/servico-secagem.jpg',
    title: 'Secagem com Difusor',
    category: 'Secagem',
    offset: 'lg:-mt-4',
    parallax: 24,
  },
  {
    id: 11,
    src: '/images/texturas-curvaturas.jpg',
    title: 'Ondulado, Cacheado & Crespo',
    category: 'Curvaturas',
    offset: 'lg:mt-10',
    parallax: -20,
  },
  {
    id: 12,
    src: '/images/port-madeixas.jpg',
    title: 'Madeixas & Iluminados de Autor',
    category: 'Coloração',
    offset: 'lg:mt-24',
    parallax: 18,
  },
  {
    id: 13,
    src: '/images/cliente-cachos-castanhos.jpg',
    title: 'Cachos Castanhos & Movimento Natural',
    category: 'Finalização',
    offset: 'lg:mt-0',
    parallax: 22,
  },
  {
    id: 14,
    src: '/images/port-tratamento.jpg',
    title: 'Tratamentos & Cuidado Profundo',
    category: 'Tratamento',
    offset: 'lg:mt-16',
    parallax: -18,
  },
  {
    id: 15,
    src: '/images/port-coloracao.jpg',
    title: 'Coloração & Cor de Autor',
    category: 'Cor & Cuidado',
    offset: 'lg:mt-28',
    parallax: 20,
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
            Resultados reais de cortes, tratamentos e iluminação desenvolvidos para valorizar a textura natural, assinados por Lina Pinho.
          </p>
        </header>

        {/* Editorial 3-column grid with a gentle staggered rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-start">
          {galleryImages.map((item) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden ${item.offset}`}
            >
              <div
                className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--canvas-3)]"
                data-gallery-image=""
                data-parallax={item.parallax}
                style={{ willChange: 'transform' }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                />

                {/* Permanent base gradient for caption legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
                />

                {/* Always-visible caption in light text */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/80 block mb-2">
                    {item.category}
                  </span>
                  <h3
                    className="font-serif text-lg sm:text-xl text-white font-light leading-snug"
                    style={{ fontFamily: 'var(--font-display)', textShadow: '0 1px 14px rgba(0,0,0,0.35)' }}
                  >
                    {item.title}
                  </h3>
                </figcaption>

                {/* Hair-thin accent frame appearing on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500"
                />
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
