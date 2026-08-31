'use client';

import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.51"></line>
    </svg>
  );
}

function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contactos" className="bg-[var(--canvas-3)] text-[var(--ink)] pt-24 pb-12 border-t border-[var(--line)] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">

          {/* Column 1: Brand & Reserva */}
          <AnimatedSection direction="up" className="flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[var(--ink)] tracking-wider mb-3 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                TÔDCACHOS
              </h2>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-5 font-medium">
                Atelier, Lisboa
              </p>
              <p
                className="font-serif italic text-sm text-[var(--ink-soft)] font-light leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                Não é só curvatura, é história, é movimento, é autenticidade.
              </p>
              <p className="font-sans text-sm text-[var(--ink-soft)] font-light leading-relaxed mb-6">
                <span className="text-[var(--ink)]">Hermelina Pinho</span>. Mais de 25 anos transformando curvaturas, celebrando a identidade de cada madeixa cacheada, crespa e afra.
              </p>
            </div>

            <div className="p-6 bg-[var(--canvas-2)] border border-[var(--line)]">
              <h3 className="font-serif text-base text-[var(--accent)] mb-2 font-light">
                Marcar Horário
              </h3>
              <p className="font-sans text-xs text-[var(--ink-soft)] font-light mb-4">
                Diagnóstico capilar personalizado. Agendamento prévio para atendimento exclusivo.
              </p>
              <a
                href="https://wa.me/351000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 bg-[var(--accent)] text-[var(--canvas)] font-sans text-xs uppercase tracking-[0.25em] hover:bg-[var(--accent-deep)] transition-colors font-medium"
                style={{ transitionDuration: '0.9s', transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
              >
                Agendar via WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* Column 2: Contactos & Horário */}
          <AnimatedSection direction="up" delay={0.1} className="space-y-8">
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4 font-medium">
                Atendimento, Localização
              </h3>
              <ul className="space-y-3 font-sans text-sm text-[var(--ink-soft)] font-light">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 text-[var(--accent-deep)] mr-3 shrink-0 mt-1" />
                  <span>Atelier TÔDCACHOS<br />Lisboa, Portugal</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-[var(--accent-deep)] mr-3 shrink-0" />
                  <a href="tel:+351900000000" className="hover:text-[var(--accent)] transition-colors" style={{ transitionDuration: '0.9s' }}>+351 900 000 000</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-[var(--accent-deep)] mr-3 shrink-0" />
                  <a href="mailto:contacto@todcachos.pt" className="hover:text-[var(--accent)] transition-colors" style={{ transitionDuration: '0.9s' }}>contacto@todcachos.pt</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-3 font-medium">
                Horário de Atendimento
              </h3>
              <ul className="space-y-2 font-sans text-xs text-[var(--ink-soft)] font-light">
                <li className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 text-[var(--accent-deep)] mr-2" /> Terça a Sábado</span>
                  <span className="text-[var(--ink)]">09:00 às 19:00</span>
                </li>
                <li className="flex items-center justify-between text-[var(--ink-faint)]">
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 text-[var(--ink-faint)] mr-2" /> Domingo, Segunda</span>
                  <span>Encerrado</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-3 font-medium">
                Siga @todcachos.pt
              </h3>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/todcachos.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram TÔDCACHOS"
                  className="w-9 h-9 border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  style={{ transitionDuration: '0.9s' }}
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com/@todcachos.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok TÔDCACHOS"
                  className="w-9 h-9 border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  style={{ transitionDuration: '0.9s' }}
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/todcachos.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook TÔDCACHOS"
                  className="w-9 h-9 border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  style={{ transitionDuration: '0.9s' }}
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Column 3: Map */}
          <AnimatedSection direction="up" delay={0.2} className="flex flex-col md:col-span-2 lg:col-span-1">
            <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4 font-medium">
              Localização
            </h3>

            <div className="relative aspect-square w-full border border-[var(--line)] overflow-hidden bg-[var(--canvas)]">
              <iframe
                title="Localização do Atelier TÔDCACHOS, Lisboa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.149206764516!2d-9.147863723467466!3d38.72081515679237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91bda3039d91f24d%3A0xf67305dfc5e00!2sAv.%20da%20Liberdade%2C%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between font-sans text-xs text-[var(--ink-faint)] font-light">
          <p>© {new Date().getFullYear()} TÔDCACHOS · Atelier de Hermelina Pinho. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[var(--accent)] transition-colors" style={{ transitionDuration: '0.9s' }}>Privacidade</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors" style={{ transitionDuration: '0.9s' }}>Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
