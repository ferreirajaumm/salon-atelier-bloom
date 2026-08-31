'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax on the full-width image
    gsap.fromTo(
      imageRef.current,
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Stagger reveal for the text content
    if (textRef.current) {
      const lines = textRef.current.querySelectorAll('.reveal-line');
      gsap.fromTo(
        lines,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Quote: fade in + slight slide from right
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="bg-[#0d0d0d] text-[#fafaf8] relative border-t border-zinc-900"
    >
      {/* Full-width image section (~60vh, aspect 16/9) */}
      <div
        ref={imageWrapRef}
        className="relative w-full h-[60vh] min-h-[420px] max-h-[760px] overflow-hidden border-b border-[#b1823c]"
      >
        <div ref={imageRef} className="absolute inset-0 w-full h-[115%] -top-[7%]">
          <Image
            src="/images/canva-img-3.jpg"
            alt="Tôdcachos — autenticidade em cada curvatura"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Subtle bottom gradient to anchor the transition into text */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none" />
      </div>

      {/* Text content — asymmetric layout: max-w-6xl, left column wider on desktop */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column — text */}
          <div ref={textRef} className="lg:col-span-8">
            <span className="reveal-line font-sans text-xs uppercase tracking-[0.2em] text-[#b1823c] mb-4 font-semibold block">
              Sobre Tôdcachos
            </span>

            <h2 className="reveal-line font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] mb-10">
              O poder de uma curvatura.
            </h2>

            <p className="reveal-line font-serif text-xl sm:text-2xl text-[#fafaf8]/90 font-light leading-relaxed mb-8">
              TÔDCACHOS NASCEU paRA MOSTRAR AO MUNDO O PODER DE UMA
              CURVATURA — nasceu para dar voz a algo que durante muito
              tempo ficou escondido.
            </p>

            <p className="reveal-line font-sans text-base text-zinc-400 font-light leading-relaxed mb-6">
              Em cada cacho existe uma identidade. Em cada curvatura, uma
              história. Por isso a Tôdcachos não é apenas um salão — é um
              movimento. Um espaço onde o cabelo cacheado, crespo e afro
              deixa de ser apenas textura e passa a ser linguagem.
            </p>

            <p className="reveal-line font-sans text-base text-zinc-400 font-light leading-relaxed mb-12">
              Aqui a curvatura é respeitada no corte, no cuidado, na
              finalização. Nada é domado, nada é apagado. Cada fio é
              tratado como aquilo que é: verdade. E é essa verdade —
              tantas vezes silenciada — que a Tôdcachos se propõe a
              devolver ao espelho.
            </p>

            <div
              ref={quoteRef}
              className="italic border-l-4 border-[#b1823c] pl-5 py-2 max-w-2xl"
            >
              <p className="font-serif text-lg sm:text-xl text-[#cda93c] leading-relaxed">
                &ldquo;Não é só curvatura. É história, é movimento, é
                autenticidade.&rdquo;
              </p>
            </div>
          </div>

          {/* Right column — intentional whitespace on desktop */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-32">
              <span className="block w-10 h-px bg-[#b1823c] mb-4" />
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#b1823c]">
                Movimento
              </p>
              <p className="font-serif text-base text-zinc-500 font-light leading-relaxed mt-3">
                Cada cacho carrega uma história que merece ser contada.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
