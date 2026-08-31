'use client';

import { AnimatedSection } from './ui/AnimatedSection';
import { SectionTitle } from './ui/SectionTitle';

interface ReelItem {
  id: number;
  videoSrc: string;
  poster: string;
  title: string;
  description: string;
  href: string;
}

const reelsList: ReelItem[] = [
  {
    id: 1,
    videoSrc: '/videos/reel-1.mp4',
    poster: '/images/reel-1-poster.jpg',
    title: 'O Gesto do Cuidado',
    description: 'Cada cacho definido à mão, com calma e intenção.',
    href: 'https://instagram.com/todcachos.pt',
  },
  {
    id: 2,
    videoSrc: '/videos/reel-2.mp4',
    poster: '/images/reel-2-poster.jpg',
    title: 'Movimento Natural',
    description: 'A leveza dos cachos à luz do dia.',
    href: 'https://instagram.com/todcachos.pt',
  },
];

export function Reels() {
  return (
    <section
      id="reels"
      className="py-28 md:py-40 bg-[var(--canvas-2)] text-[var(--ink)] relative border-t border-[var(--line)]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <SectionTitle
          subtitle="Processo"
          title="Técnica em Movimento"
          description="O método artesanal por trás de cada curvatura. Acompanhe o dia a dia no Instagram."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {reelsList.map((reel, idx) => (
            <AnimatedSection key={reel.id} delay={idx * 0.15}>
              <a
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${reel.title} no Instagram`}
                className="group relative block aspect-[4/5] w-full overflow-hidden border border-[var(--line)] hover:border-[var(--accent)] transition-colors duration-500 bg-[var(--canvas)]"
              >
                {/* Looping video */}
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={reel.poster}
                    className="w-full h-full object-cover object-center brightness-105 group-hover:brightness-100 group-hover:scale-105 transition-all duration-900"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                  >
                    <source src={reel.videoSrc} type="video/mp4" />
                  </video>
                </div>

                {/* Gentle Warm Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#a9805a]/25 via-[#a9805a]/8 to-transparent" />

                {/* Bottom Details */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="font-serif text-2xl text-[var(--ink)] font-light mb-1">
                    {reel.title}
                  </h3>
                  <p className="font-sans text-sm text-[var(--ink-soft)] mb-4 line-clamp-1">
                    {reel.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-sans uppercase tracking-wider text-[var(--ink-soft)] group-hover:text-[var(--accent)] transition-colors" style={{ transitionDuration: '0.9s' }}>
                    Ver no Instagram
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
