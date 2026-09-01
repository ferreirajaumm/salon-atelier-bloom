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
  'Especialista em Loiros, 15 anos',
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
      { yPercent: -3 },
      {
        yPercent: 3,
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
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.16,
          scrollTrigger: {
            trigger: bioRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Specialties: slow, soft stagger
    if (specialtiesRef.current) {
      const items = specialtiesRef.current.querySelectorAll('.specialty-item');
      gsap.fromTo(
        items,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.1,
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
      className="relative overflow-hidden py-32 md:py-48"
      style={{ backgroundColor: 'var(--canvas)', color: 'var(--ink)' }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Photo Column — left, subtle parallax */}
          <div
            ref={photoWrapRef}
            className="lg:col-span-5 order-1 lg:sticky lg:top-32"
          >
            <div
              className="relative aspect-[3/4] w-full overflow-hidden"
              style={{ border: '1px solid var(--line)' }}
            >
              <div ref={photoRef} className="absolute inset-0 w-full h-[110%] -top-[5%]">
                <Image
                  src="/images/canva-img-1.jpg"
                  alt="Hermelina Pinho, fundadora da Tôdcachos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bio Column — right, generous whitespace */}
          <div ref={bioRef} className="lg:col-span-7 order-2 lg:pl-4">
            {/* Section label */}
            <span
              className="reveal-line block font-sans text-[10px] uppercase tracking-[0.35em] mb-8"
              style={{ color: 'var(--accent-deep)' }}
            >
              A Fundadora
            </span>

            <h2
              className="reveal-line font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[0.95] mb-12 tracking-tight"
              style={{ color: 'var(--ink)' }}
            >
              HERMELINA PINHO
            </h2>

            <div className="max-w-[60ch]">
              {founderStory.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="reveal-line font-sans text-base font-light leading-relaxed mb-6 last:mb-0"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Specialties */}
            <div
              ref={specialtiesRef}
              className="mt-16 pt-10"
              style={{ borderTop: '1px solid var(--line)' }}
            >
              <span
                className="specialty-item block font-sans text-[10px] uppercase tracking-[0.35em] mb-8"
                style={{ color: 'var(--accent-deep)' }}
              >
                Especialidades
              </span>
              <ul className="flex flex-col">
                {specialties.map((item, i) => (
                  <li
                    key={i}
                    className="specialty-item py-4 font-sans text-[11px] uppercase tracking-[0.22em] font-medium"
                    style={{
                      color: 'var(--accent-deep)',
                      borderBottom: i === specialties.length - 1 ? 'none' : '1px solid var(--line)',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}