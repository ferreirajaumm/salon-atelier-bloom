'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalPanProps {
  children: React.ReactNode;
  className?: string;
  triggerStart?: string;
}

export function HorizontalPan({
  children,
  className = '',
  triggerStart = 'top top'
}: HorizontalPanProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !wrapRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const distance = trackRef.current!.scrollWidth - window.innerWidth;

      if (distance <= 0) return;

      gsap.to(trackRef.current, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: triggerStart,
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [reduceMotion, triggerStart]);

  return (
    <section ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex h-[100dvh] items-center gap-12"
      >
        {children}
      </div>
    </section>
  );
}
