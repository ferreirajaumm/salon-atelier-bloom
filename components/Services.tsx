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
  highlights: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'corte-cachos',
    category: 'Corte',
    title: 'Corte Especializado em Cachos & Afros',
    description: 'Técnica desenvolvida especialmente para valorizar a curvatura natural dos cabelos cacheados, crespos e afros. O corte é realizado respeitando o formato dos cachos, o caimento, o volume e a individualidade de cada fio.',
    price: 'Sob Consulta',
    duration: '60 min',
    highlights: ['Análise de caimento e volume', 'Respeito pela curvatura natural', 'Finalização inclusa'],
  },
  {
    id: 'madeixas-iluminados',
    category: 'Coloração',
    title: 'Madeixas & Iluminados de Autor',
    description: 'Técnica de clareamento desenvolvida para criar pontos de luz e realçar a beleza natural dos cabelos cacheados, crespos e afros. As mechas proporcionam mais dimensão, brilho e movimento aos fios, valorizando a definição e o volume.',
    price: 'Desde 120€',
    duration: '180 min',
    highlights: ['Pontos de luz tridimensionais', 'Preservação da saúde da fibra', 'Brilho e movimento'],
  },
  {
    id: 'coloracao-completa',
    category: 'Coloração',
    title: 'Coloração em Cabelos Cacheados',
    description: 'Procedimento realizado para transformar, realçar ou renovar a cor dos cabelos, respeitando a saúde e a estrutura dos fios cacheados, crespos e afros. Cobertura de brancos, mudança de tom ou realce da cor natural.',
    price: 'Desde 60€ / 90€',
    duration: '90 min',
    highlights: ['Renovação de cor e cobertura', 'Respeito pela estrutura do fio', 'Tonalização protetora'],
  },
  {
    id: 'soltura-cachos',
    category: 'Transformação',
    title: 'Soltura de Cachos',
    description: 'Técnica desenvolvida para proporcionar cachos mais leves, soltos e com movimento natural. Ajuda a reduzir o excesso de volume, facilitar a finalização e valorizar a beleza natural da curvatura dos fios.',
    price: 'Sob Consulta',
    duration: '120 min',
    highlights: ['Movimento e leveza natural', 'Facilidade na finalização diária', 'Controlo equilibrado de volume'],
  },
  {
    id: 'photon-lizze',
    category: 'Tratamentos',
    title: 'Photon Lizze (Tecnologia Capilar)',
    description: 'Tecnologia que potencializa a absorção dos ativos nos fios, promovendo hidratação profunda, redução do frizz, brilho, maciez e alinhamento capilar. Ideal para recuperar cabelos cacheados e crespos, mantendo a definição.',
    price: 'Sob Consulta',
    duration: '75 min',
    highlights: ['Fototerapia para penetração de ativos', 'Hidratação profunda e alinhamento', 'Redução do frizz e brilho espelhado'],
  },
  {
    id: 'higienizacao-capilar',
    category: 'Tratamentos',
    title: 'Higienização Capilar Profunda',
    description: 'Procedimento responsável pela limpeza do couro cabeludo e dos fios, removendo resíduos, oleosidade e impurezas sem agredir a fibra capilar. Ajuda a manter os cabelos cacheados leves e preparados para tratamentos.',
    price: 'Sob Consulta',
    duration: '45 min',
    highlights: ['Desintoxicação do couro cabeludo', 'Remoção de resíduos de produtos', 'Preparação para rituais de nutrição'],
  },
  {
    id: 'definicao-finalizacao',
    category: 'Finalização',
    title: 'Definição & Finalização de Cachos',
    description: 'Técnica realizada após a lavagem para ativar e organizar a curvatura natural dos cabelos cacheados e crespos. Garante mais definição, controle de frizz e durabilidade da forma dos cachos, valorizando a beleza natural.',
    price: '30€',
    duration: '45 min',
    highlights: ['Ativação e organização da curvatura', 'Controlo de frizz de longa duração', 'Definição com toque suave'],
  },
  {
    id: 'secagem-difusor',
    category: 'Finalização',
    title: 'Secagem Controlada com Difusor',
    description: 'Técnica de secagem controlada que utiliza difusor ou fonte de calor para acelerar a secagem dos cabelos cacheados e crespos sem desmanchar a definição dos cachos.',
    price: '10€ / 20€',
    duration: '30 min',
    highlights: ['Secagem com fonte de calor difusa', 'Preservação da definição', 'Sem desmanchar a curvatura'],
  },
  {
    id: 'diagnostico-capilar',
    category: 'Avaliação',
    title: 'Diagnóstico Capilar Completo',
    description: 'Avaliação profissional minuciosa da curvatura, porosidade, elasticidade e necessidades específicas do seu cabelo antes de qualquer procedimento.',
    price: 'Incluído na Consulta',
    duration: '20 min',
    highlights: ['Análise de porosidade e elasticidade', 'Plano personalizado de cuidados', 'Recomendação de produtos adequados'],
  },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Corte', 'Coloração', 'Transformação', 'Tratamentos', 'Finalização'];

  const filteredServices = activeCategory === 'Todos'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="servicos" className="py-28 md:py-40 bg-[#0a0a0a] text-[#fafaf8] relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionTitle
            subtitle="Tabela do Portfólio Canva"
            title="Serviços Especializados para Cacheados, Crespos & Afros"
            description="Todos os procedimentos são desenhados exclusivamente para valorizar a saúde e a curvatura natural dos fios."
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
            <AnimatedSection key={service.id} delay={idx * 0.04} direction="none">
              <div className="group py-8 sm:py-10 transition-all duration-500 hover:px-4 hover:bg-zinc-900/40">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  
                  {/* Service Title & Details */}
                  <div className="md:col-span-8">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="font-mono text-[11px] text-zinc-500 tracking-wider">
                        {service.duration}
                      </span>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl mb-4">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500">
                      {service.highlights.map((h, i) => (
                        <span key={i} className="flex items-center">
                          <span className="w-1 h-1 rounded-full bg-[#c9a96e]/60 mr-2" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="md:col-span-4 flex md:flex-col items-center md:items-end justify-between md:justify-center pt-4 md:pt-0 gap-4">
                    <div className="text-left md:text-right">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
                        Valor
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl text-[#c9a96e] font-light">
                        {service.price}
                      </span>
                    </div>

                    <a
                      href="#contactos"
                      className="inline-flex items-center px-5 py-2.5 border border-[#c9a96e]/40 text-[#c9a96e] text-xs uppercase tracking-widest hover:bg-[#c9a96e] hover:text-black transition-all duration-300 shrink-0"
                    >
                      Agendar
                    </a>
                  </div>

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-light gap-4">
          <p>• Valores do catálogo original Thay Silva. Sujeitos a avaliação da extensão e densidade capilar.</p>
          <a href="#contactos" className="text-[#c9a96e] hover:underline uppercase tracking-wider">
            Agendar Diagnóstico &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
