import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Owner } from '@/components/Owner';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { Reels } from '@/components/Reels';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#fafaf8] overflow-x-hidden">
      {/* 1. Hero Full-Screen com Vídeo de Fundo */}
      <Hero />

      {/* 2. Secção "Sobre o Salão" */}
      <About />

      {/* 3. Secção "Sobre a Dona" */}
      <Owner />

      {/* 4. Secção "Serviços" */}
      <Services />

      {/* 5. Galeria com Parallax */}
      <Gallery />

      {/* 6. Secção de Vídeos / Reels */}
      <Reels />

      {/* 7. Footer com Contactos, Horário, Redes e Mapa */}
      <Footer />
    </main>
  );
}
