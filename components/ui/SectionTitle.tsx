'use client';

import { AnimatedSection } from './AnimatedSection';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  goldAccent?: boolean;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
  goldAccent = true,
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <AnimatedSection className={`flex flex-col mb-16 md:mb-20 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c9a96e] mb-3">
          {subtitle}
        </span>
      )}
      
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#fafaf8] tracking-tight leading-tight">
        {title}
      </h2>

      {goldAccent && (
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent my-6" />
      )}

      {description && (
        <p className="font-sans text-base md:text-lg text-zinc-400 font-light max-w-[60ch] leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
