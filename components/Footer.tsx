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
    <footer id="contactos" className="bg-[#0d0d0d] text-[#fafaf8] pt-24 pb-12 border-t border-[#b1823c]/20 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">

          {/* Column 1: Brand & Reserva */}
          <AnimatedSection direction="up" className="flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#fafaf8] tracking-wider mb-3 leading-none">
                TÔDCACHOS
              </h2>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#cda93c] mb-5 font-medium">
                Atelier · Lisboa
              </p>
              <p
                className="font-serif italic text-sm text-zinc-400 font-light leading-relaxed mb-6"
                style={{ fontStyle: 'italic' }}
              >
                &ldquo;não é só curvatura, é história, é movimento, é autenticidade&rdquo;
              </p>
              <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed mb-6">
                <span className="text-[#fafaf8]">Hermelina Pinho</span> — 25+ anos transformando curvaturas, celebrando a identidade de cada madeixa cacheada, crespa e afra.
              </p>
            </div>

            <div className="p-6 bg-[#141414] border border-[#b1823c]/30">
              <h3 className="font-serif text-base text-[#cda93c] mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> Agendar Consulta
              </h3>
              <p className="font-sans text-xs text-zinc-400 font-light mb-4">
                Diagnóstico capilar personalizado — agendamento prévio para atendimento exclusivo.
              </p>
              <a
                href="https://wa.me/351000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 bg-[#b1823c] text-[#fafaf8] font-sans text-xs uppercase tracking-[0.25em] hover:bg-[#cda93c] transition-colors font-medium"
              >
                Agendar via WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* Column 2: Contactos & Horário */}
          <AnimatedSection direction="up" delay={0.1} className="space-y-8">
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#cda93c] mb-4 font-medium">
                Atendimento & Localização
              </h3>
              <ul className="space-y-3 font-sans text-sm text-zinc-300 font-light">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 text-[#b1823c] mr-3 shrink-0 mt-1" />
                  <span>Atelier TÔDCACHOS<br />Lisboa, Portugal</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-[#b1823c] mr-3 shrink-0" />
                  <a href="tel:+351900000000" className="hover:text-[#cda93c] transition-colors">+351 900 000 000</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-[#b1823c] mr-3 shrink-0" />
                  <a href="mailto:contacto@todcachos.pt" className="hover:text-[#cda93c] transition-colors">contacto@todcachos.pt</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#cda93c] mb-3 font-medium">
                Horário de Atendimento
              </h3>
              <ul className="space-y-2 font-sans text-xs text-zinc-400 font-light">
                <li className="flex items-center justify-between pb-2 border-b border-[#b1823c]/15">
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 text-[#b1823c] mr-2" /> Terça — Sábado</span>
                  <span className="text-zinc-200">09:00 – 19:00</span>
                </li>
                <li className="flex items-center justify-between text-zinc-500">
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 text-zinc-600 mr-2" /> Domingo & Segunda</span>
                  <span>Encerrado</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#b1823c] mb-3 font-medium">
                Siga @todcachos.pt
              </h3>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/todcachos.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram TÔDCACHOS"
                  className="w-9 h-9 border border-[#b1823c]/30 flex items-center justify-center text-zinc-400 hover:border-[#cda93c] hover:text-[#cda93c] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com/@todcachos.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok TÔDCACHOS"
                  className="w-9 h-9 border border-[#b1823c]/30 flex items-center justify-center text-zinc-400 hover:border-[#cda93c] hover:text-[#cda93c] transition-colors"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/todcachos.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook TÔDCACHOS"
                  className="w-9 h-9 border border-[#b1823c]/30 flex items-center justify-center text-zinc-400 hover:border-[#cda93c] hover:text-[#cda93c] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Column 3: Map */}
          <AnimatedSection direction="up" delay={0.2} className="flex flex-col md:col-span-2 lg:col-span-1">
            <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#cda93c] mb-4 font-medium">
              Localização
            </h3>

            <div className="relative aspect-square w-full border border-[#b1823c]/30 overflow-hidden bg-[#141414]">
              <iframe
                title="Localização do Atelier TÔDCACHOS — Lisboa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.149206764516!2d-9.147863723467466!3d38.72081515679237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91bda3039d91f24d%3A0xf67305dfc5e00!2sAv.%20da%20Liberdade%2C%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-8 border-t border-[#b1823c]/15 flex flex-col sm:flex-row items-center justify-between font-sans text-xs text-zinc-500 font-light">
          <p>© {new Date().getFullYear()} TÔDCACHOS — Atelier de Hermelina Pinho. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#cda93c] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#cda93c] transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
