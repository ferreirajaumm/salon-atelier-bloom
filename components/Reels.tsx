'use client';

import { Play } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionTitle } from './ui/SectionTitle';

function InstagramIcon({ className = 'w-3.5 h-3.5 mr-1.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

interface ReelItem {
  id: number;
  videoSrc: string;
  posterSrc: string;
  title: string;
  subtitle: string;
  likes: string;
}

const reelsList: ReelItem[] = [
  {
    id: 1,
    videoSrc: '/videos/reel-1.mp4',
    posterSrc: '/images/gallery-2.jpg',
    title: 'Transformação Balayage Caramel',
    subtitle: 'Antes & Depois',
    likes: '1.4k',
  },
  {
    id: 2,
    videoSrc: '/videos/reel-2.mp4',
    posterSrc: '/images/gallery-5.jpg',
    title: 'Bastidores: Penteado de Noiva',
    subtitle: 'Processo Criativo',
    likes: '2.1k',
  },
];

export function Reels() {
  return (
    <section id="reels" className="py-24 md:py-36 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionTitle
          subtitle="Em Ação & Bastidores"
          title="Vídeos & Reels"
          description="Assista ao processo artesanal por trás dos nossos cortes, colorações e tratamentos exclusivos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {reelsList.map((reel, idx) => (
            <AnimatedSection key={reel.id} delay={idx * 0.15}>
              <div className="group relative aspect-[9/16] sm:aspect-[4/5] w-full overflow-hidden border border-zinc-800 hover:border-[#c9a96e]/60 transition-all duration-500 bg-zinc-900">
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

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center px-3 py-1 glass-panel text-[10px] font-mono uppercase tracking-widest text-[#c9a96e] border border-[#c9a96e]/30">
                    <Play className="w-3 h-3 mr-1 fill-[#c9a96e]" /> Reel
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    ♥ {reel.likes}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] block mb-1">
                    {reel.subtitle}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#fafaf8] font-light mb-3">
                    {reel.title}
                  </h4>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-[#c9a96e] transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 mr-1.5" /> Ver no Instagram &rarr;
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
