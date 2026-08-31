'use client';

import { Play, Eye } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionTitle } from './ui/SectionTitle';

interface ReelItem {
  id: number;
  videoSrc: string;
  posterSrc: string;
  title: string;
  subtitle: string;
  views: string;
}

const reelsList: ReelItem[] = [
  {
    id: 1,
    videoSrc: '/videos/reel-1.mp4',
    posterSrc: '/images/gallery-2.jpg',
    title: 'Transformação Balayage Caramel',
    subtitle: 'Antes & Depois',
    views: '1.4k visualizações',
  },
  {
    id: 2,
    videoSrc: '/videos/reel-2.mp4',
    posterSrc: '/images/gallery-5.jpg',
    title: 'Bastidores: Penteado de Noiva',
    subtitle: 'Processo Criativo',
    views: '2.1k visualizações',
  },
];

export function Reels() {
  return (
    <section id="reels" className="py-28 md:py-40 bg-[#0a0a0a] text-[#fafaf8] relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <SectionTitle
          subtitle="Bastidores & Processo"
          title="Técnica em Movimento"
          description="Acompanhe o método artesanal por trás de cada visual criado no Atelier Bloom."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {reelsList.map((reel, idx) => (
            <AnimatedSection key={reel.id} delay={idx * 0.15}>
              <div className="group relative aspect-[9/16] sm:aspect-[4/5] w-full overflow-hidden border border-zinc-800/80 hover:border-[#c9a96e]/60 transition-all duration-500 bg-zinc-900">
                {/* Loop Video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={reel.posterSrc}
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                >
                  <source src={reel.videoSrc} type="video/mp4" />
                </video>

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="inline-flex items-center px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-sans uppercase tracking-widest text-[#c9a96e] border border-[#c9a96e]/30">
                    <Play className="w-3 h-3 mr-1.5 fill-[#c9a96e]" /> Reel
                  </span>
                  <span className="font-sans text-xs text-zinc-400 flex items-center bg-black/40 px-3 py-1 backdrop-blur-md">
                    <Eye className="w-3.5 h-3.5 mr-1.5 text-zinc-400" />
                    {reel.views}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#c9a96e] block mb-1">
                    {reel.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#fafaf8] font-light mb-4">
                    {reel.title}
                  </h3>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-sans uppercase tracking-wider text-zinc-300 hover:text-[#c9a96e] transition-colors"
                  >
                    Ver no Instagram &rarr;
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
