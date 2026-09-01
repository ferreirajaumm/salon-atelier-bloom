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
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-900"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                  >
                    <source src={reel.videoSrc} type="video/mp4" />
                  </video>
                </div>

                {/* Dark scrim at the base for legible captions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Bottom Details */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="font-serif text-2xl text-white font-light mb-1" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
                    {reel.title}
                  </h3>
                  <p className="font-sans text-sm text-white/85 mb-4 line-clamp-1" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
                    {reel.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-sans uppercase tracking-wider text-white/90 group-hover:text-[#c9a95f] transition-colors" style={{ transitionDuration: '0.9s' }}>
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
