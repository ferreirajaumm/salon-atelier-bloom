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
  title: 'Thay Silva | Especialista em Cabelos Cacheados, Crespos & Afros',
  description: 'Atelier de especialista em cabelos cacheados, crespos e afros. Cortes a seco, madeixas iluminadas, soltura de cachos, tecnologia Photon Lizze e tratamentos de alta performance.',
  keywords: ['Thay Silva', 'cabelos cacheados', 'crespos', 'afro', 'corte em caracóis', 'soltura de cachos', 'madeixas cacheadas', 'lisboa'],
  openGraph: {
    title: 'Thay Silva | Especialista em Cabelos Cacheados, Crespos & Afros',
    description: 'Realce a sua beleza natural com cuidados especializados para curvaturas cacheadas, crespas e afros.',
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
