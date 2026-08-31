'use client';

import { Scissors, Sparkles, Heart, Crown, Droplets, Smile } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionTitle } from './ui/SectionTitle';

interface ServiceItem {
  icon: typeof Scissors;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
}

const servicesList: ServiceItem[] = [
  {
    icon: Scissors,
    title: 'Corte & Styling Personalizado',
    subtitle: 'Haute Coiffure',
    description: 'Diagnóstico de visagismo, lavagem com massagem craniana, corte escultural e finalização com produtos premium.',
    price: 'a partir de 45€',
    duration: '60 min',
  },
  {
    icon: Sparkles,
    title: 'Balayage & Iluminação',
    subtitle: 'Coloração Orgânica',
    description: 'Técnica francesa de iluminação personalizada respeitando a integridade do fio, tonalização e ritual de nutrição.',
    price: 'a partir de 110€',
    duration: '180 min',
  },
  {
    icon: Droplets,
    title: 'Tratamentos de Reconstrução',
    subtitle: 'Cuidado Capilar Profundo',
    description: 'Rituais intensivos de queratina, colagénio e óleos essenciais para devolver força, brilho e sedosidade aos fios.',
    price: 'a partir de 55€',
    duration: '75 min',
  },
  {
    icon: Crown,
    title: 'Penteados & Noivas',
    subtitle: 'Ocasiões Especiais',
    description: 'Criação de apanhados elegantes e penteados sofisticados com prova prévia para casamentos, galas e eventos.',
    price: 'a partir de 80€',
    duration: '90 min',
  },
  {
    icon: Heart,
    title: 'Manicure & Nail Art',
    subtitle: 'Estética de Unhas',
    description: 'Cuidado completo das mãos com manicure russa, gelinho de alta durabilidade e Nail Art sob medida.',
    price: 'a partir de 30€',
    duration: '50 min',
  },
  {
    icon: Smile,
    title: 'Maquilhagem Editorial & Social',
    subtitle: 'Make-up Artistry',
    description: 'Maquilhagem profissional de longa duração que realça os seus traços com acabamento natural e pele radiante.',
    price: 'a partir de 65€',
    duration: '60 min',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-36 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionTitle
          subtitle="Menu de Experiências"
          title="Os Nossos Serviços Exclusivos"
          description="Cada serviço é concebido como um ritual de beleza, combinando técnicas avançadas com o mais elevado padrão de atendimento."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection
                key={service.title}
                delay={index * 0.1}
                direction="up"
              >
                <div className="group h-full p-8 glass-card border border-zinc-800 hover:border-[#c9a96e]/60 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-none bg-[#18181b] border border-[#c9a96e]/30 flex items-center justify-center group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/10 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#c9a96e]" />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                        {service.duration}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] block mb-1">
                      {service.subtitle}
                    </span>

                    <h3 className="font-serif text-2xl font-light text-[#fafaf8] mb-3 group-hover:text-[#c9a96e] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer with Price */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="font-serif text-lg text-[#c9a96e] font-normal">
                      {service.price}
                    </span>
                    <a
                      href="#contactos"
                      className="font-sans text-xs uppercase tracking-wider text-zinc-400 hover:text-white group-hover:translate-x-1 transition-all duration-300 flex items-center"
                    >
                      Reservar &rarr;
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA Banner inside services */}
        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between p-8 glass-panel border border-[#c9a96e]/30 max-w-3xl w-full mx-auto gap-6">
            <div className="text-left">
              <h4 className="font-serif text-xl text-[#fafaf8]">Deseja um diagnóstico personalizado?</h4>
              <p className="font-sans text-sm text-zinc-400 font-light">Agende uma consulta de avaliação sem compromisso com os nossos especialistas.</p>
            </div>
            <a
              href="#contactos"
              className="px-6 py-3 bg-[#c9a96e] text-black font-sans text-xs uppercase tracking-widest hover:bg-[#e5c98b] transition-colors shrink-0"
            >
              Falar Connosco
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
