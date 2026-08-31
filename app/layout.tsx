import type { Metadata } from 'next';
import { Imbue, Arimo, Radley } from 'next/font/google';
import './globals.css';

const imbue = Imbue({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
});

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const radley = Radley({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TÔDCACHOS | Hermelina Pinho — Especialista em Cabelos Cacheados, Crespos & Afros',
  description: 'TÔDCACHOS: Especialista em cabelos cacheados, crespos e afros. Cortes tridimensionais, madeixas iluminadas, soltura de cachos, fototerapia Photon Lizze e tratamentos de alta performance. Há mais de 25 anos renovando autoestimas.',
  keywords: ['tôdcachos', 'hermelina pinho', 'cabelos cacheados', 'cacheados', 'crespos', 'afro', 'corte caracóis', 'soltura cachos', 'madeixas', 'lisboa', 'portugal'],
  openGraph: {
    title: 'TÔDCACHOS | Não é só curvatura, é história, é movimento, é autenticidade',
    description: 'Hermelina Pinho — 25+ anos transformando e cuidando de curvaturas únicas. Técnica, atenção individual, humanidade.',
    type: 'website',
    locale: 'pt_PT',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${imbue.variable} ${arimo.variable} ${radley.variable}`}>
      <body className="bg-[#f4efe9] text-[#2b2521] antialiased">
        {children}
      </body>
    </html>
  );
}
