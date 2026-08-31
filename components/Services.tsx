'use client';

import { useState } from 'react';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionTitle } from './ui/SectionTitle';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  details: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'corte-styling',
    category: 'Corte & Styling',
    title: 'Corte & Styling Personalizado',
    description: 'Diagnóstico de visagismo, lavagem com massagem craniana, corte escultural e finalização com produtos sustentáveis.',
    price: '45€',
    duration: '60 min',
    details: ['Visagismo individualizado', 'Tratamento de couro cabeludo', 'Brushing de alta fixação'],
  },
  {
    id: 'balayage-coloracao',
    category: 'Coloração',
    title: 'Balayage & Iluminação de Autor',
    description: 'Técnica francesa de iluminação tridimensional, respeitando a fibra capilar com tonalização de brilho espelhado.',
    price: '110€',
    duration: '180 min',
    details: ['Diagnóstico de cor', 'Tonalizador de alto brilho', 'Máscara selante pós-cor'],
  },
  {
    id: 'tratamentos-profundos',
    category: 'Tratamentos',
    title: 'Ritual de Reconstrução Capilar',
    description: 'Tratamento intensivo de queratina vegetal e aminoácidos que devolve a elasticidade, força e densidade natural.',
    price: '55€',
    duration: '75 min',
    details: ['Cauterização molecular', 'Vapor de ozono', 'Selagem de cutículas'],
  },
  {
    id: 'penteados-noivas',
    category: 'Penteados',
    title: 'Apanhados & Penteados de Gala',
    description: 'Criações exclusivas para casamentos e eventos especiais. Inclui consultoria de imagem e teste prévio opcional.',
    price: '80€',
    duration: '90 min',
    details: ['Fixação invisível', 'Preparação com textura de seda', 'Acessórios sob medida'],
  },
  {
    id: 'manicure-nailart',
    category: 'Estética',
    title: 'Manicure Russa & Gelinho',
    description: 'Cuidado minucioso da cutícula, nivelamento da placa ungueal e esmaltação de alta durabilidade com brilho gel.',
    price: '30€',
    duration: '50 min',
    details: ['Limpeza de cutícula a seco', 'Fortalecedor com proteína', 'Hidratação de cutículas com óleos'],
  },
  {
    id: 'maquilhagem-editorial',
    category: 'Make-up',
    title: 'Maquilhagem Social & Editorial',
    description: 'Pele blindada de acabamento luminoso natural, realce do olhar e maquilhagem adaptada à luz do seu evento.',
    price: '65€',
    duration: '60 min',
    details: ['Preparação de pele com sérum', 'Pestanas individuais', 'Batom de longa duração'],
  },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Corte & Styling', 'Coloração', 'Tratamentos', 'Penteados', 'Estética'];

  const filteredServices = activeCategory === 'Todos'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory || (activeCategory === 'Estética' && (s.category === 'Estética' || s.category === 'Make-up')));

  return (
    <section id="servicos" className="py-28 md:py-40 bg-[#0a0a0a] text-[#fafaf8] relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionTitle
            subtitle="Menu de Serviços"
            title="Tabela de Rituais & Cuidados"
            description="Atendimento exclusivo sob marcação. Todos os rituais incluem consulta inicial e produtos de alta cosmética."
            className="mb-0"
          />

          {/* Filter categories */}
          <div className="flex flex-wrap gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-wider uppercase font-sans transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#c9a96e] text-black font-medium'
                    : 'text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial List Layout */}
        <div className="divide-y divide-zinc-800/80 border-t border-b border-zinc-800/80">
          {filteredServices.map((service, idx) => (
            <AnimatedSection key={service.id} delay={idx * 0.05} direction="none">
              <div className="group py-8 sm:py-10 transition-all duration-500 hover:px-4 hover:bg-zinc-900/40">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  
                  {/* Service Title & Details */}
                  <div className="md:col-span-7">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="font-mono text-[11px] text-zinc-500 tracking-wider">
                        {service.duration}
                      </span>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-xl mb-4">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500">
                      {service.details.map((detail, i) => (
                        <span key={i} className="flex items-center">
                          <span className="w-1 h-1 rounded-full bg-[#c9a96e]/60 mr-2" />
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="md:col-span-5 flex md:flex-col items-center md:items-end justify-between md:justify-center pt-4 md:pt-0 gap-4">
                    <div className="text-left md:text-right">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
                        A partir de
                      </span>
                      <span className="font-serif text-3xl sm:text-4xl text-[#c9a96e] font-light">
                        {service.price}
                      </span>
                    </div>

                    <a
                      href="#contactos"
                      className="inline-flex items-center px-5 py-2.5 border border-[#c9a96e]/40 text-[#c9a96e] text-xs uppercase tracking-widest hover:bg-[#c9a96e] hover:text-black transition-all duration-300 shrink-0"
                    >
                      Reservar
                    </a>
                  </div>

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-light gap-4">
          <p>• Valores sujeitos a avaliação técnica inicial de acordo com o comprimento e densidade do cabelo.</p>
          <a href="#contactos" className="text-[#c9a96e] hover:underline uppercase tracking-wider">
            Consultar tabela completa &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
