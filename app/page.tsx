import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Owner } from '@/components/Owner';
import { Values } from '@/components/Values';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { Reels } from '@/components/Reels';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)] overflow-x-hidden">
      {/* 1. Hero: fullscreen video dissolving into light */}
      <Hero />

      {/* 2. Manifesto: word-by-word reveal on light */}
      <About />

      {/* 3. A Fundadora: Hermelina Pinho story */}
      <Owner />

      {/* 4. Filosofia: the four values */}
      <Values />

      {/* 5. Serviços: editorial index + featured pan */}
      <Services />

      {/* 6. Portfólio: editorial gallery with slow parallax */}
      <Gallery />

      {/* 7. Processo: reels linking to Instagram */}
      <Reels />

      {/* 8. Contacto: calm footer */}
      <Footer />
    </main>
  );
}
