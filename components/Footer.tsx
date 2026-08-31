'use client';

import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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
    <footer id="contactos" className="bg-[#050505] text-[#fafaf8] pt-24 pb-12 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand & Reserva */}
          <AnimatedSection direction="up" className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#fafaf8] tracking-wider mb-2">
                Thay Silva
              </h2>
              <p className="font-sans text-xs uppercase tracking-widest text-[#c9a96e] mb-4">
                Especialista em Cacheados, Crespos & Afros
              </p>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed mb-6">
                Atendimento personalizado focado na saúde e na beleza natural da curvatura do seu cabelo.
              </p>
            </div>

            <div className="p-6 bg-zinc-900/60 border border-zinc-800">
              <h3 className="font-serif text-base text-[#c9a96e] mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> Agendar Consulta
              </h3>
              <p className="font-sans text-xs text-zinc-400 font-light mb-4">
                Agende previamente para garantir o diagnóstico capilar e atendimento exclusivo.
              </p>
              <a
                href="https://wa.me/351000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 bg-[#c9a96e] text-black font-sans text-xs uppercase tracking-widest hover:bg-[#e5c98b] transition-colors font-medium"
              >
                Agendar via WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* Column 2: Contactos & Horário */}
          <AnimatedSection direction="up" delay={0.1} className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#c9a96e] mb-4 font-medium">
                Atendimento & Localização
              </h3>
              <ul className="space-y-3 font-sans text-sm text-zinc-300 font-light">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 text-[#c9a96e] mr-3 shrink-0 mt-1" />
                  <span>Atelier Thay Silva<br />Lisboa, Portugal</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-[#c9a96e] mr-3 shrink-0" />
                  <a href="tel:+351900000000" className="hover:text-[#c9a96e] transition-colors">+351 900 000 000</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-[#c9a96e] mr-3 shrink-0" />
                  <a href="mailto:contacto@thaysilva.pt" className="hover:text-[#c9a96e] transition-colors">contacto@thaysilva.pt</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#c9a96e] mb-3 font-medium">
                Horário de Atendimento
              </h3>
              <ul className="space-y-2 font-sans text-xs text-zinc-400 font-light">
                <li className="flex items-center justify-between pb-1 border-b border-zinc-900">
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 text-[#c9a96e] mr-2" /> Terça — Sábado:</span>
                  <span className="text-zinc-200">09:00 – 19:00</span>
                </li>
                <li className="flex items-center justify-between text-zinc-500">
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 text-zinc-600 mr-2" /> Domingo & Segunda:</span>
                  <span>Encerrado</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Thay Silva"
                  className="w-9 h-9 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Thay Silva"
                  className="w-9 h-9 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Column 3: Map */}
          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-4 flex flex-col">
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#c9a96e] mb-4 font-medium">
              Localização
            </h3>
            
            <div className="relative aspect-square w-full border border-zinc-800 overflow-hidden bg-zinc-900">
              <iframe
                title="Localização do Atelier Thay Silva"
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
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between font-sans text-xs text-zinc-500 font-light">
          <p>© {new Date().getFullYear()} Thay Silva — Cabelos Cacheados, Crespos & Afros. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
