'use client';

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionTitle } from './ui/SectionTitle';

interface ReelItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  href: string;
}

const reelsList: ReelItem[] = [
  {
    id: 1,
    imageSrc: '/images/gallery-2.jpg',
    title: 'Transformação Balayage Caramel',
    description: 'Antes e depois em 30 segundos.',
    href: 'https://instagram.com/todcachos.pt',
  },
  {
    id: 2,
    imageSrc: '/images/gallery-5.jpg',
    title: 'Bastidores: Penteado de Noiva',
    description: 'O processo artesanal por trás do visual.',
    href: 'https://instagram.com/todcachos.pt',
  },
  {
    id: 3,
    imageSrc: '/images/canva-img-1.jpg',
    title: 'Corte Curly em Movimento',
    description: 'Técnica respeitando cada cacho.',
    href: 'https://instagram.com/todcachos.pt',
  },
  {
    id: 4,
    imageSrc: '/images/canva-img-3.jpg',
    title: 'Coloração Tonalizada',
    description: 'Resultado natural com brilho profundo.',
    href: 'https://instagram.com/todcachos.pt',
  },
];

export function Reels() {
  return (
    <section
      id="reels"
      className="py-28 md:py-40 bg-[#0a0a0a] text-[#fafaf8] relative border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <SectionTitle
          subtitle="Bastidores & Processo"
          title="Técnica em Movimento"
          description="Acompanhe o método artesanal por trás de cada visual criado no Atelier Bloom."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {reelsList.map((reel, idx) => (
            <AnimatedSection key={reel.id} delay={idx * 0.15}>
              <a
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${reel.title} no Instagram`}
                className="group relative block aspect-[4/5] w-full overflow-hidden border border-zinc-800/80 hover:border-[#b1823c] transition-colors duration-500 bg-zinc-900"
              >
                {/* Static Image */}
                <div className="absolute inset-0">
                  <img
                    src={reel.imageSrc}
                    alt={reel.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Play Button Badge - Centered */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Pulse Ring */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-full border-2 border-[#b1823c]"
                      animate={{ scale: [1, 1.35], opacity: [0.7, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                      style={{ width: 60, height: 60 }}
                    />
                    {/* Solid Badge */}
                    <div
                      className="relative flex items-center justify-center rounded-full"
                      style={{
                        backgroundColor: '#b1823c',
                        width: 60,
                        height: 60,
                      }}
                    >
                      <Play
                        className="w-6 h-6 text-[#0a0a0a] fill-[#0a0a0a] ml-0.5"
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="font-serif text-2xl text-[#fafaf8] font-light mb-1">
                    {reel.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-300 mb-4 line-clamp-1">
                    {reel.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-sans uppercase tracking-wider text-zinc-300 group-hover:text-[#b1823c] transition-colors">
                    Ver no Instagram &rarr;
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
