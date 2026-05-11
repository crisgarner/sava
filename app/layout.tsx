import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Nav from '@/components/Nav';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

const siteUrl = 'https://savarentals.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Savá Rentals — El arte de celebrar con estilo',
    template: '%s · Savá Rentals',
  },
  description:
    'Alquiler de vajilla, cristalería y mantelería en Tegucigalpa, Honduras. Inventario elegante y moderno para bodas y eventos.',
  keywords: [
    'alquiler de vajilla Tegucigalpa',
    'cristalería eventos Honduras',
    'mantelería bodas',
    'Savá Rentals',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_HN',
    siteName: 'Savá Rentals',
    title: 'Savá Rentals — El arte de celebrar con estilo',
    description:
      'Alquiler de vajilla, cristalería y mantelería en Tegucigalpa, Honduras.',
    images: ['/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savá Rentals — El arte de celebrar con estilo',
    description:
      'Alquiler de vajilla, cristalería y mantelería en Tegucigalpa.',
    images: ['/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${montserrat.variable} font-sans bg-brand-ivory text-brand-dark`}
      >
        <a href="#main-content" className="sr-only">
          Saltar al contenido
        </a>
        <Nav />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
