import type { Metadata, Viewport } from 'next';
import { Imbue, Arimo, Radley } from 'next/font/google';
import './globals.css';
import { JsonLd, SITE_URL } from '@/components/JsonLd';

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f4efe9',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'TÔDCACHOS | Especialista em Cabelos Cacheados, Crespos & Afros em Lisboa',
  description: 'Atelier TÔDCACHOS em Lisboa: especialista em cabelos cacheados, crespos e afros. Corte, madeixas iluminadas, cachoterapia, powerterapia e finalização que respeitam a sua curvatura. Por Hermelina Pinho, 25+ anos de experiência.',
  keywords: ['tôdcachos', 'hermelina pinho', 'cabeleireiro cacheados lisboa', 'salão cabelos crespos lisboa', 'corte cacheados', 'corte afro lisboa', 'madeixas cacheados', 'cachoterapia', 'tratamento capilar cacheados', 'especialista cachos portugal'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'TÔDCACHOS | Especialista em Cabelos Cacheados, Crespos & Afros',
    description: 'Não é só curvatura, é história, é movimento, é autenticidade. Hermelina Pinho, 25+ anos transformando curvaturas em Lisboa.',
    type: 'website',
    locale: 'pt_PT',
    url: SITE_URL,
    siteName: 'TÔDCACHOS',
    images: [{ url: '/images/hero-poster.jpg', width: 1920, height: 1080, alt: 'Atelier TÔDCACHOS em Lisboa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TÔDCACHOS | Especialista em Cabelos Cacheados, Crespos & Afros',
    description: 'Atelier especializado em cachos, crespos e afros em Lisboa. Por Hermelina Pinho.',
    images: ['/images/hero-poster.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${imbue.variable} ${arimo.variable} ${radley.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#f4efe9] text-[#2b2521] antialiased">
        {children}
      </body>
    </html>
  );
}
