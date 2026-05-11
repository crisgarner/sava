import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import CatalogueGrid from './CatalogueGrid';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/contact';
import { getCatalogue } from '@/lib/getCatalogue';

export const revalidate = 60;

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

export default async function CataloguePage() {
  const items = await getCatalogue();
  return (
    <main id="main-content" className="bg-brand-ivory pt-28 md:pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <header className="mb-12 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
            Catálogo
          </span>
          <h1 className="mt-3 font-serif text-5xl font-light text-brand-forest md:text-6xl">
            Nuestro Catálogo
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Explora nuestra colección completa de artículos premium para eventos.
            Escríbenos por WhatsApp para consultar disponibilidad.
          </p>
        </header>

        <Suspense
          fallback={
            <div className="py-20 text-center text-brand-muted">
              Cargando catálogo…
            </div>
          }
        >
          <CatalogueGrid items={items} />
        </Suspense>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-brand-light pt-12 text-center">
          <h2 className="font-serif text-3xl font-light text-brand-forest">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="max-w-xl text-sm text-brand-muted">
            Escríbenos y te ayudamos a armar el paquete ideal.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-sm bg-brand-accent px-6 py-3 text-sm font-medium tracking-wider text-white transition-colors hover:bg-brand-forest"
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
