'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type ServiceSize = 'sm' | 'md' | 'lg' | 'xl';
type ServiceCategory = 'Tratamentos' | 'Finalização' | 'Rituais' | 'Terapia';

interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  price: string;
  priceSuffix?: string;
  duration: string;
  image: string;
  featured?: boolean;
  size: ServiceSize;
}

const servicesList: ServiceItem[] = [
  {
    id: 'cachoterapia',
    category: 'Tratamentos',
    title: 'Cachoterapia',
    description:
      'Ritual exclusivo dedicado aos fios cacheados e crespos. Hidratação profunda, definição e respeito integral à curvatura natural.',
    price: '40€',
    duration: '60 min',
    image: '/images/canva-img-1.jpg',
    size: 'lg',
  },
  {
    id: 'powerterapia',
    category: 'Terapia',
    title: 'Powerterapia',
    description:
      'Tratamento intensivo de recuperação para fios desvitalizados. Reposição de massa, força e brilho em sessão única.',
    price: '70€',
    duration: '90 min',
    image: '/images/canva-img-2.jpg',
    featured: true,
    size: 'xl',
  },
  {
    id: 'chaterapia',
    category: 'Rituais',
    title: 'Chaterapia',
    description:
      'Terapia herbal infundida com chás nobres e ativos botânicos. Nutrição calmante para couro cabeludo e fios.',
    price: '45€',
    duration: '60 min',
    image: '/images/canva-img-3.jpg',
    size: 'md',
  },
  {
    id: 'ozonioterapia',
    category: 'Terapia',
    title: 'Ozonioterapia',
    description:
      'Aplicação de ozono medicinal para oxigenação do couro cabeludo. Estimula crescimento, fortalece a raiz e revitaliza.',
    price: '55€',
    duration: '50 min',
    image: '/images/canva-img-4.jpg',
    size: 'md',
  },
  {
    id: 'blends-oleos',
    category: 'Rituais',
    title: 'Blends de Óleos',
    description:
      'Misturas personalizadas de óleos vegetais prensados a frio. Nutrição ancestral, brilho espelhado e selagem dos fios.',
    price: '35€',
    duration: '40 min',
    image: '/images/canva-img-5.jpg',
    size: 'sm',
  },
  {
    id: 'alta-frequencia',
    category: 'Terapia',
    title: 'Alta Frequência',
    description:
      'Eletroterapia que estimula a circulação e auxilia no tratamento de quedas e oleosidade excessiva.',
    price: '60€',
    duration: '45 min',
    image: '/images/canva-img-6.jpg',
    featured: true,
    size: 'lg',
  },
  {
    id: 'definicao',
    category: 'Finalização',
    title: 'Definição',
    description:
      'Ativação técnica da curvatura com finalização profissional. Cachos definidos, sem frizz, com duração prolongada.',
    price: '30€',
    duration: '45 min',
    image: '/images/canva-img-7.jpg',
    size: 'sm',
  },
  {
    id: 'secagem',
    category: 'Finalização',
    title: 'Secagem com Difusor',
    description:
      'Secagem técnica com difusor profissional. Cabelo seco rapidamente sem comprometer a definição dos cachos.',
    price: '10€',
    priceSuffix: '/ 20€',
    duration: '30 min',
    image: '/images/canva-img-8.jpg',
    size: 'sm',
  },
];

const categories: Array<'Todos' | ServiceCategory> = [
  'Todos',
  'Tratamentos',
  'Finalização',
  'Rituais',
  'Terapia',
];

// Bento span classes (asymmetric distribution across 12-col grid)
const sizeToColSpan: Record<ServiceSize, string> = {
  sm: 'md:col-span-4',
  md: 'md:col-span-6',
  lg: 'md:col-span-8',
  xl: 'md:col-span-12',
};

const sizeToRowSpan: Record<ServiceSize, string> = {
  sm: 'md:row-span-1',
  md: 'md:row-span-1',
  lg: 'md:row-span-2',
  xl: 'md:row-span-1',
};

const sizeToHeight: Record<ServiceSize, string> = {
  sm: 'h-[420px]',
  md: 'h-[460px]',
  lg: 'h-[580px]',
  xl: 'h-[520px]',
};

function FeaturedHorizontalPan({ services }: { services: ServiceItem[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !wrapRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const distance = () => trackRef.current!.scrollWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden bg-[#0a0a0a] border-y border-zinc-900"
      aria-label="Serviços em destaque"
    >
      <div className="absolute top-12 left-6 sm:left-12 z-10 pointer-events-none">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#b1823c] font-semibold">
          Em Destaque
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#fafaf8] mt-2">
          Rituais de Autor
        </h3>
      </div>

      <div
        ref={trackRef}
        className="flex h-[100dvh] items-center pl-[55vw] pr-[20vw] gap-12 will-change-transform"
      >
        {services.map((service, i) => (
          <article
            key={service.id}
            className="relative shrink-0 w-[480px] h-[600px] bg-zinc-900/60 border border-zinc-800 hover:border-[#b1823c] transition-colors duration-500 overflow-hidden group"
          >
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="relative h-full p-10 flex flex-col justify-end">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#b1823c] mb-3">
                {String(i + 1).padStart(2, '0')} — {service.category}
              </span>
              <h4 className="font-serif text-4xl font-light text-[#fafaf8] leading-tight mb-4">
                {service.title}
              </h4>
              <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed mb-6 max-w-md">
                {service.description}
              </p>
              <div className="flex items-end justify-between pt-6 border-t border-zinc-700/60">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">
                    A partir de
                  </span>
                  <span className="font-serif text-5xl text-[#b1823c] font-light">
                    {service.price}
                    {service.priceSuffix && (
                      <span className="text-2xl text-zinc-400">{service.priceSuffix}</span>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-sans">
                  <Clock className="w-3.5 h-3.5 text-[#b1823c]" />
                  {service.duration}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BentoCard({ service, index }: { service: ServiceItem; index: number }) {
  const isLarge = service.size === 'lg' || service.size === 'xl';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ scale: 1.005 }}
      className={`group relative flex flex-col bg-zinc-900/50 border border-zinc-800 hover:border-[#b1823c] transition-colors duration-500 overflow-hidden ${sizeToColSpan[service.size]} ${sizeToRowSpan[service.size]} ${sizeToHeight[service.size]}`}
    >
      {/* Image */}
      <div className={`relative w-full overflow-hidden bg-zinc-950 ${isLarge ? 'h-2/3' : 'h-1/2'}`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        <span className="absolute top-5 left-5 px-3 py-1.5 bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#b1823c] font-sans">
          {service.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-7 sm:p-8 flex flex-col justify-between">
        <div>
          <h3 className={`font-serif font-light text-[#fafaf8] leading-tight mb-3 ${isLarge ? 'text-3xl' : 'text-2xl'}`}>
            {service.title}
          </h3>
          <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        <div className="pt-5 mt-5 border-t border-zinc-800/80 flex items-end justify-between gap-4">
          <div>
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-500 block mb-1">
              Valor
            </span>
            <span className="font-serif text-3xl text-[#b1823c] font-light leading-none">
              {service.price}
              {service.priceSuffix && (
                <span className="text-lg text-zinc-500 ml-1">{service.priceSuffix}</span>
              )}
            </span>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500 font-sans">
              <Clock className="w-3 h-3 text-[#b1823c]" />
              {service.duration}
            </div>
            <a
              href="#contactos"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#b1823c] text-black font-sans text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#c8994d] transition-colors"
            >
              Marcar <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | ServiceCategory>('Todos');

  const filtered = selectedCategory === 'Todos'
    ? servicesList
    : servicesList.filter((s) => s.category === selectedCategory);

  const featured = servicesList.filter((s) => s.featured);

  return (
    <section id="servicos" className="bg-[#0d0d0d] text-[#fafaf8] relative border-t border-zinc-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-28 md:pt-40 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-zinc-800/80">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#fafaf8] tracking-tight">
              Serviços
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 font-light max-w-md leading-relaxed">
            Procedimentos autorais para cacheados, crespos e afros. Cada ritual é desenhado para
            respeitar a curvatura, a textura e a identidade de cada fio.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-3 mt-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 text-[11px] uppercase font-sans tracking-[0.2em] transition-colors duration-300 ${
                  isActive
                    ? 'bg-[#b1823c] text-black font-semibold'
                    : 'bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Horizontal Pan */}
      {featured.length > 0 && (
        <div className="mb-24">
          <FeaturedHorizontalPan services={featured} />
        </div>
      )}

      {/* Asymmetric Bento Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-28">
        <div className="flex items-center justify-between mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#fafaf8] flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#b1823c]" />
            Carta Completa
          </h3>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            {filtered.length} {filtered.length === 1 ? 'serviço' : 'serviços'}
          </span>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-min"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <BentoCard key={service.id} service={service} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-24 text-center border border-dashed border-zinc-800">
            <p className="font-sans text-sm text-zinc-500 uppercase tracking-widest">
              Nenhum serviço nesta categoria
            </p>
          </div>
        )}
      </div>

      {/* Booking Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-28">
        <div className="relative p-8 sm:p-12 bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#b1823c] font-semibold block mb-3">
              Marcações
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-2">
              Agende a sua transformação
            </h3>
            <p className="font-sans text-sm text-zinc-400 font-light">
              Atendimento personalizado por marcação prévia via telefone ou WhatsApp.
            </p>
          </div>
          <a
            href="#contactos"
            className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-[#b1823c] text-black font-sans text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[#c8994d] transition-colors shrink-0"
          >
            Fazer Marcação <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
