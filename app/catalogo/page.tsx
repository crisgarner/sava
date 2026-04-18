import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import CatalogueGrid from './CatalogueGrid';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Catálogo',
  description:
    'Explora el inventario completo de Savá Rentals: mantelería, cristalería, cubiertos, platos base y mobiliario para tu evento.',
  openGraph: {
    title: 'Catálogo · Savá Rentals',
    description:
      'Explora el inventario completo para tu evento en Tegucigalpa.',
    images: ['/hero.jpg'],
  },
};

export default function CataloguePage() {
  return (
    <main className="bg-brand-cream pt-28 md:pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <header className="mb-12 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Catálogo
          </span>
          <h1 className="mt-3 font-serif text-5xl text-brand-dark md:text-6xl">
            Inventario completo
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Filtra por categoría y escríbenos por WhatsApp para consultar
            disponibilidad en la fecha de tu evento.
          </p>
        </header>

        <Suspense
          fallback={
            <div className="py-20 text-center text-brand-muted">
              Cargando catálogo…
            </div>
          }
        >
          <CatalogueGrid />
        </Suspense>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-brand-gold/15 pt-12 text-center">
          <h2 className="font-serif text-3xl text-brand-dark">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="max-w-xl text-sm text-brand-muted">
            Escríbenos y te ayudamos a armar el paquete ideal.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-sm bg-brand-gold px-6 py-3 text-sm font-medium tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Contactar
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-brand-dark px-6 py-3 text-sm font-medium tracking-wider text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
