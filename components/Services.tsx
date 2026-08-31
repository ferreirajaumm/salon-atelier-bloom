'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: 'corte-cachos',
    category: 'Cortes',
    title: 'Corte Tridimensional Cacheados & Afros',
    subtitle: 'Assinatura Thay Silva',
    description: 'Técnica de corte a seco desenhada exclusivamente para valorizar a curvatura natural dos cabelos cacheados, crespos e afros. O formato é esculpido respeitando o caimento, volume e densidade dos fios.',
    price: 'Sob Consulta',
    duration: '60 min',
    image: '/images/gallery-1.jpg',
    features: ['Análise de visagismo & curvatura', 'Corte tridimensional a seco', 'Higienização e finalização inclusa'],
  },
  {
    id: 'madeixas-iluminados',
    category: 'Coloração',
    title: 'Madeixas & Iluminados de Autor',
    subtitle: 'Brilho & Dimensão',
    description: 'Técnica de clareamento personalizada para criar pontos de luz estratégicos sem comprometer a saúde da fibra capilar. Confere dimensão, profundidade e movimento aos caracóis.',
    price: 'Desde 120€',
    duration: '180 min',
    image: '/images/gallery-2.jpg',
    features: ['Tonalização de alto brilho', 'Proteção da estrutura do fio', 'Tratamento selante pós-cor'],
  },
  {
    id: 'coloracao-completa',
    category: 'Coloração',
    title: 'Coloração Orgânica & Cobertura',
    subtitle: 'Cor Intensa & Proteção',
    description: 'Procedimento de renovação de cor ou cobertura de fios brancos com fórmulas enriquecidas em óleos nutritivos, preservando a elasticidade dos cabelos cacheados.',
    price: 'Desde 60€',
    duration: '90 min',
    image: '/images/gallery-4.jpg',
    features: ['Fórmulas com óleos botânicos', 'Cobertura uniforme de brancos', 'Brilho acetinado e duradouro'],
  },
  {
    id: 'photon-lizze',
    category: 'Tratamentos',
    title: 'Photon Lizze — Fototerapia Capilar',
    subtitle: 'Tecnologia de Aceleração',
    description: 'Tecnologia de luz que potencializa a absorção celular dos ativos nos fios, promovendo nutrição profunda, eliminação do frizz, alinhamento de cutículas e brilho espelhado.',
    price: 'Sob Consulta',
    duration: '75 min',
    image: '/images/gallery-5.jpg',
    features: ['Aceleração fotónica de nutrientes', 'Recuperação intensiva de danos', 'Redução drástica de frizz'],
  },
  {
    id: 'soltura-cachos',
    category: 'Tratamentos',
    title: 'Soltura de Cachos & Alinhamento',
    subtitle: 'Fluidez & Leveza',
    description: 'Procedimento exclusivo para aliviar a tração e proporcionar caracóis mais leves, soltos e definidos, reduzindo o excesso de volume para um caimento fluido.',
    price: 'Sob Consulta',
    duration: '120 min',
    image: '/images/gallery-3.jpg',
    features: ['Controlo de volume sem perder a forma', 'Finalização facilitada no dia a dia', 'Toque sedoso e movimento'],
  },
  {
    id: 'higienizacao-capilar',
    category: 'Tratamentos',
    title: 'Higienização Capilar Profunda',
    subtitle: 'Limpeza & Cuidados',
    description: 'Procedimento responsável pela limpeza do couro cabeludo e dos fios, removendo resíduos, oleosidade e impurezas sem agredir a fibra capilar. Prepara os cabelos cacheados para rituais.',
    price: 'Sob Consulta',
    duration: '45 min',
    image: '/images/gallery-5.jpg',
    features: ['Desintoxicação do couro cabeludo', 'Remoção de resíduos de produtos', 'Preparação para rituais de nutrição'],
  },
  {
    id: 'definicao-finalizacao',
    category: 'Finalização',
    title: 'Definição & Finalização de Cachos',
    subtitle: 'Ativação de Curvatura',
    description: 'Técnica realizada após a lavagem para ativar e organizar a curvatura natural dos cabelos cacheados e crespos. Garante mais definição, controle de frizz e durabilidade.',
    price: '30€',
    duration: '45 min',
    image: '/images/gallery-6.jpg',
    features: ['Ativação e organização da curvatura', 'Controlo de frizz de longa duração', 'Definição com toque suave'],
  },
  {
    id: 'secagem-difusor',
    category: 'Finalização',
    title: 'Secagem Controlada com Difusor',
    subtitle: 'Técnica de Secagem',
    description: 'Técnica de secagem controlada que utiliza difusor ou fonte de calor para acelerar a secagem dos cabelos cacheados e crespos sem desmanchar a definição dos cachos.',
    price: '10€ / 20€',
    duration: '30 min',
    image: '/images/gallery-1.jpg',
    features: ['Secagem com fonte de calor difusa', 'Preservação da definição', 'Sem desmanchar a curvatura'],
  },
];

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Cortes', 'Coloração', 'Tratamentos', 'Finalização'];

  const filtered = selectedCategory === 'Todos'
    ? servicesList
    : servicesList.filter(s => s.category === selectedCategory);

  return (
    <section id="servicos" className="py-28 md:py-40 bg-[#0a0a0a] text-[#fafaf8] relative border-t border-zinc-900 overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header - American Boutique Salon Style */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#c9a96e]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#c9a96e] font-semibold">
                Menu de Especialidades
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#fafaf8] tracking-tight">
              Serviços & Rituais
            </h2>
          </div>

          <p className="font-sans text-sm text-zinc-400 font-light max-w-md leading-relaxed">
            Atendimento exclusivo focado no diagnóstico e na saúde dos cabelos cacheados, crespos e afros.
          </p>
        </AnimatedSection>

        {/* Category Pills Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-6 py-3 rounded-full text-xs uppercase font-sans tracking-widest transition-all duration-300 ${
                  isActive
                    ? 'bg-[#c9a96e] text-black font-semibold shadow-[0_0_20px_rgba(201,169,110,0.3)]'
                    : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of American Salon Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between bg-zinc-900/60 border border-zinc-800/80 hover:border-[#c9a96e]/60 transition-all duration-500 overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Image Header with Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-black/30" />
                  
                  {/* Category Pill Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-[#c9a96e]">
                    {service.subtitle}
                  </span>

                  {/* Duration Badge */}
                  <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-black/70 backdrop-blur-md text-[10px] uppercase tracking-wider text-zinc-300 border border-white/10">
                    <Clock className="w-3 h-3 text-[#c9a96e]" />
                    {service.duration}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-[#fafaf8] mb-3 group-hover:text-[#c9a96e] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-zinc-800/60">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center text-xs text-zinc-300 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a96e] mr-2 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Price & CTA */}
                  <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between mt-auto">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-500 block">
                        Valor do Serviço
                      </span>
                      <span className="font-serif text-2xl text-[#c9a96e] font-normal">
                        {service.price}
                      </span>
                    </div>

                    <a
                      href="#contactos"
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-[#c9a96e] text-black font-sans text-xs uppercase tracking-widest font-medium hover:bg-[#e5c98b] transition-all duration-300 shadow-md group-hover:translate-x-1"
                    >
                      Agendar <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Professional Consultation Banner */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="relative p-8 sm:p-12 bg-gradient-to-r from-zinc-900 via-[#141414] to-zinc-900 border border-[#c9a96e]/30 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <div className="flex items-center gap-2 text-[#c9a96e] text-xs font-sans uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" /> Diagnóstico Personalizado
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-2">
                Não sabe qual é o tratamento ideal para o seu cabelo?
              </h3>
              <p className="font-sans text-sm text-zinc-400 font-light">
                Agende uma consulta de avaliação presencial para analisarmos a porosidade, elasticidade e curvatura exata do seu fio.
              </p>
            </div>

            <a
              href="#contactos"
              className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-[#c9a96e] text-black font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#e5c98b] transition-colors shrink-0 shadow-lg"
            >
              <Calendar className="w-4 h-4 mr-2" /> Agendar Diagnóstico
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
