import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atelier Bloom | Salão de Beleza & Estética de Luxo',
  description: 'Espaço de beleza minimalista e elegante dedicado ao cuidado capilar, estética e bem-estar. Descubra uma experiência única de transformação.',
  keywords: ['salão de beleza', 'cabelo', 'cabeleireiro', 'manicure', 'estética', 'tratamentos capilares', 'balayage', 'lisboa'],
  openGraph: {
    title: 'Atelier Bloom | Salão de Beleza & Estética de Luxo',
    description: 'Espaço de beleza minimalista e elegante dedicado ao cuidado capilar, estética e bem-estar.',
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
    <html lang="pt" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-[#fafaf8] antialiased selection:bg-[#c9a96e] selection:text-black">
        {children}
      </body>
    </html>
  );
}
