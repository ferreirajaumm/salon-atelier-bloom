'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
}

const servicesList: ServiceItem[] = [
  {
    id: 'cachoterapia',
    category: 'Tratamentos',
    title: 'Cachoterapia',
    description:
      'Ritual exclusivo dedicado aos fios cacheados e crespos. Hidratação profunda, definição e respeito integral à curvatura natural.',
    price: '40',
    priceSuffix: '€',
    duration: '60 min',
    image: '/images/canva-img-1.jpg',
  },
  {
    id: 'powerterapia',
    category: 'Terapia',
    title: 'Powerterapia',
    description:
      'Tratamento intensivo de recuperação para fios desvitalizados. Reposição de massa, força e brilho em sessão única.',
    price: '70',
    priceSuffix: '€',
    duration: '90 min',
    image: '/images/canva-img-2.jpg',
    featured: true,
  },
  {
    id: 'chaterapia',
    category: 'Rituais',
    title: 'Chaterapia',
    description:
      'Terapia herbal infundida com chás nobres e ativos botânicos. Nutrição calmante para couro cabeludo e fios.',
    price: '45',
    priceSuffix: '€',
    duration: '60 min',
    image: '/images/canva-img-3.jpg',
  },
  {
    id: 'ozonioterapia',
    category: 'Terapia',
    title: 'Ozonioterapia',
    description:
      'Aplicação de ozono medicinal para oxigenação do couro cabeludo. Estimula crescimento, fortalece a raiz e revitaliza.',
    price: '55',
    priceSuffix: '€',
    duration: '50 min',
    image: '/images/canva-img-4.jpg',
  },
  {
    id: 'blends-oleos',
    category: 'Rituais',
    title: 'Blends de Óleos',
    description:
      'Misturas personalizadas de óleos vegetais prensados a frio. Nutrição ancestral, brilho espelhado e selagem dos fios.',
    price: '35',
    priceSuffix: '€',
    duration: '40 min',
    image: '/images/canva-img-5.jpg',
  },
  {
    id: 'alta-frequencia',
    category: 'Terapia',
    title: 'Alta Frequência',
    description:
      'Eletroterapia que estimula a circulação e auxilia no tratamento de quedas e oleosidade excessiva.',
    price: '60',
    priceSuffix: '€',
    duration: '45 min',
    image: '/images/canva-img-6.jpg',
    featured: true,
  },
  {
    id: 'definicao',
    category: 'Finalização',
    title: 'Definição',
    description:
      'Ativação técnica da curvatura com finalização profissional. Cachos definidos, sem frizz, com duração prolongada.',
    price: '30',
    priceSuffix: '€',
    duration: '45 min',
    image: '/images/canva-img-7.jpg',
  },
  {
    id: 'secagem',
    category: 'Finalização',
    title: 'Secagem com Difusor',
    description:
      'Secagem técnica com difusor profissional. Cabelo seco rapidamente sem comprometer a definição dos cachos.',
    price: '10',
    priceSuffix: '€',
    duration: '30 min',
    image: '/images/canva-img-8.jpg',
  },
];

const categories: Array<'Todos' | ServiceCategory> = [
  'Todos',
  'Tratamentos',
  'Finalização',
  'Rituais',
  'Terapia',
];

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
      className="relative overflow-hidden bg-[#0a0806] border-y border-zinc-900"
      aria-label="Serviços em destaque"
    >
      <div className="absolute top-12 left-6 sm:left-12 z-10 pointer-events-none">
        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#b1823c] font-medium">
          Em Destaque
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#fafaf8] mt-3 tracking-tight">
          Rituais de Autor
        </h3>
      </div>

      <div
        ref={trackRef}
        className="flex h-[100dvh] items-center pl-[55vw] pr-[20vw] gap-12 will-change-transform"
      >
        {services.map((service) => (
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
                {service.category}
              </span>
              <h4 className="font-serif text-4xl font-light text-[#fafaf8] leading-tight mb-4">
                {service.title}
              </h4>
              <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed mb-6 max-w-md">
                {service.description}
              </p>
              <div className="pt-6 border-t border-zinc-700/60">
                <span className="font-serif text-5xl text-[#b1823c] font-light tabular-nums">
                  {service.price}
                  <span className="text-2xl">{service.priceSuffix}</span>
                </span>
                <span className="block font-sans text-[11px] uppercase tracking-[0.25em] text-zinc-500 mt-2">
                  {service.duration}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [imageVisible, setImageVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = rowRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={rowRef}
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.04, 0.3),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !reduceMotion && setImageVisible(true)}
      onMouseLeave={() => setImageVisible(false)}
      className="group relative border-t border-zinc-800/60 last:border-b last:border-zinc-800/60"
    >
      <div className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-8 sm:py-10 px-2 sm:px-4 transition-colors duration-300 group-hover:bg-zinc-900/30">
        {/* Number + Category */}
        <div className="col-span-12 sm:col-span-2 flex items-baseline gap-3">
          <span className="font-serif text-xs sm:text-sm text-zinc-600 tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#b1823c]">
            {service.category}
          </span>
        </div>

        {/* Title + Description */}
        <div className="col-span-12 sm:col-span-7">
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#fafaf8] leading-tight tracking-tight">
            {service.title}
          </h3>
          <p className="font-sans text-sm text-zinc-500 font-light leading-relaxed mt-2 max-w-xl">
            {service.description}
          </p>
        </div>

        {/* Duration + Price */}
        <div className="col-span-12 sm:col-span-3 sm:text-right flex sm:block items-baseline justify-between">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            {service.duration}
          </span>
          <div className="flex items-baseline gap-1 sm:justify-end">
            <span className="font-serif text-3xl sm:text-4xl text-[#b1823c] font-light tabular-nums leading-none">
              {service.price}
            </span>
            {service.priceSuffix && (
              <span className="font-serif text-xl text-[#cda93c] font-light">
                {service.priceSuffix}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover image reveal */}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          initial={false}
          animate={{
            opacity: imageVisible ? 1 : 0,
            scale: imageVisible ? 1 : 0.92,
          }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="pointer-events-none hidden md:block absolute top-1/2 -translate-y-1/2 right-[28%] z-20 w-[260px] h-[320px] overflow-hidden border border-zinc-800"
          style={{
            x: useTransform(mouseX, (v) => v - 130),
            y: useTransform(mouseY, (v) => v - 160),
          }}
        >
          <Image
            src={service.image}
            alt=""
            fill
            sizes="260px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      )}
    </motion.div>
  );
}

export function Services() {
  const [selectedCategory, setSelectedCategory] =
    useState<'Todos' | ServiceCategory>('Todos');

  const filtered =
    selectedCategory === 'Todos'
      ? servicesList
      : servicesList.filter((s) => s.category === selectedCategory);

  const featured = servicesList.filter((s) => s.featured);

  return (
    <section
      id="servicos"
      className="bg-[#0d0d0d] text-[#fafaf8] relative border-t border-zinc-900"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-28 md:pt-40 pb-10">
        <div className="pb-10 border-b border-zinc-800/80">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#fafaf8] tracking-tight">
            Serviços
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative font-sans text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 py-1 ${
                  isActive
                    ? 'text-[#b1823c]'
                    : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {cat}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-[#b1823c]" />
                )}
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

      {/* Service Index */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-28">
        <div className="mb-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#fafaf8] tracking-tight">
            Carta Completa
          </h3>
        </div>

        <motion.div layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <ServiceRow key={service.id} service={service} index={i} />
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
        <div className="relative p-8 sm:p-12 bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#b1823c] font-medium block mb-3">
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
            className="inline-flex items-center justify-center px-8 py-4 bg-[#b1823c] text-black font-sans text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[#cda93c] transition-colors shrink-0"
          >
            Fazer Marcação
          </a>
        </div>
      </div>
    </section>
  );
}