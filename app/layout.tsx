import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://savarentals.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Savá Rentals — Elegancia para cada evento',
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
    title: 'Savá Rentals — Elegancia para cada evento',
    description:
      'Alquiler de vajilla, cristalería y mantelería en Tegucigalpa, Honduras.',
    images: ['/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savá Rentals — Elegancia para cada evento',
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
        className={`${cormorant.variable} ${inter.variable} font-sans bg-brand-cream text-brand-dark`}
      >
        <Nav />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
