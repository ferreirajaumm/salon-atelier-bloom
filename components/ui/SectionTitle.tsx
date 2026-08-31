'use client';

import { AnimatedSection } from './AnimatedSection';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  };

  return (
    <AnimatedSection className={`flex flex-col mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#c9a96e] mb-3 font-medium">
          {subtitle}
        </span>
      )}
      
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#fafaf8] tracking-tight leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p className="font-sans text-base sm:text-lg text-zinc-400 font-light max-w-[65ch] leading-relaxed mt-4">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
