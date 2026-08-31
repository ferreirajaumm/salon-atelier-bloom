'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const founderStory = [
  'Minha história na beleza começou na infância, em uma realidade simples, onde eu não tinha condições de frequentar salões ou investir em autocuidado. Mesmo assim, nasceu em mim o desejo de ajudar mulheres a se sentirem bonitas, cuidadas e confiantes.',
  'Comecei cuidando das pessoas ao meu redor e iniciei na cabeleireira aos 16 anos. Quando cheguei a Portugal, já tinha 20 anos de experiência, sendo 15 deles como especialista em loiros.',
  'Aqui, percebi a carência de um atendimento realmente especializado para cabelos afro, cacheados e loiros. Por isso, aprofundei meus conhecimentos e comecei a desenvolver tratamentos personalizados e hidratações específicas para cada tipo de cabelo.',
  'Hoje, dedico minha carreira a fortalecer a autoestima afro através de um atendimento humanizado, unindo técnica, cuidado e atenção individual para cada cliente.',
];

const specialties = [
  'Cortes para Cabelos Afro, Cacheados & Crespos',
  'Especialista em Loiros — 15 anos',
  'Madeixas & Iluminados de Autor',
  'Hidratações Personalizadas por Tipo de Cabelo',
  'Soltura de Cachos & Alinhamento',
  'Definição, Finalização & Diagnóstico Capilar',
];

export function Owner() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle parallax on the founder photo
    gsap.fromTo(
      photoRef.current,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: photoWrapRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Stagger reveal: heading + each paragraph of the founder story
    if (bioRef.current) {
      const lines = bioRef.current.querySelectorAll('.reveal-line');
      gsap.fromTo(
        lines,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.14,
          scrollTrigger: {
            trigger: bioRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Specialties grid: stagger from below with softer timing
    if (specialtiesRef.current) {
      const items = specialtiesRef.current.querySelectorAll('.specialty-item');
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: specialtiesRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="fundadora"
      className="py-28 md:py-40 bg-[#0d0d0d] text-[#fafaf8] relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Photo Column — left, parallax on scroll */}
          <div
            ref={photoWrapRef}
            className="lg:col-span-6 order-1 relative"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#b1823c]">
              <div ref={photoRef} className="absolute inset-0 w-full h-[115%] -top-[7%]">
                <Image
                  src="/images/owner-photo.jpg"
                  alt="Hermelina Pinho — fundadora da Tôdcachos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Bio Column — right, staggered reveal */}
          <div
            ref={bioRef}
            className="lg:col-span-6 order-2 relative pl-6 sm:pl-8 border-l-4 border-[#b1823c]"
          >
            <h2 className="reveal-line font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] mb-8 tracking-tight">
              HERMELINA PINHO
            </h2>

            {founderStory.map((paragraph, idx) => (
              <p
                key={idx}
                className="reveal-line font-sans text-base text-zinc-300 font-light leading-relaxed mb-6 max-w-[65ch]"
              >
                {paragraph}
              </p>
            ))}

            {/* Specialties list */}
            <div
              ref={specialtiesRef}
              className="mt-8 pt-8 border-t border-[#b1823c]/30"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {specialties.map((item, i) => (
                  <p
                    key={i}
                    className="specialty-item font-sans text-[11px] uppercase tracking-[0.18em] text-[#cda93c] font-medium"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
