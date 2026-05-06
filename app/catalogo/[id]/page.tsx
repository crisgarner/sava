import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
import CatalogueCard from '@/components/CatalogueCard';
import {
  catalogue,
  categoryDescriptions,
  categoryLabels,
} from '@/data/catalogue';
import { formatPrice, whatsappLink } from '@/lib/contact';

type RouteParams = { params: { id: string } };

export function generateStaticParams() {
  return catalogue.map((item) => ({ id: item.id }));
}

export function generateMetadata({ params }: RouteParams): Metadata {
  const item = catalogue.find((i) => i.id === params.id);
  if (!item) return { title: 'Producto no encontrado' };
  const description = item.description ?? categoryDescriptions[item.category];
  return {
    title: item.name,
    description,
    openGraph: {
      title: `${item.name} · Savá Rentals`,
      description,
      images: [`/catalogue/${item.images[0]}`],
    },
  };
}

export default function ProductDetailPage({ params }: RouteParams) {
  const item = catalogue.find((i) => i.id === params.id);
  if (!item) notFound();

  const description = item.description ?? categoryDescriptions[item.category];
  const whatsAppMsg = `Hola! Me interesa el alquiler de: ${item.name}. ¿Está disponible?`;
  const related = catalogue
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  return (
    <main id="main-content" className="bg-brand-cream pt-28 md:pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <nav aria-label="Migas de pan" className="mb-8 text-sm text-brand-muted">
          <Link href="/catalogo" className="hover:text-brand-dark">
            Catálogo
          </Link>
          <span className="mx-2 text-brand-gold">/</span>
          <Link
            href={`/catalogo?categoria=${item.category}`}
            className="hover:text-brand-dark"
          >
            {categoryLabels[item.category]}
          </Link>
          <span className="mx-2 text-brand-gold">/</span>
          <span className="text-brand-dark">{item.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={item.images} alt={item.name} />

          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
              {categoryLabels[item.category]}
            </span>
            <h1 className="mt-3 font-serif text-4xl text-brand-dark md:text-5xl">
              {item.name}
            </h1>

            <div className="mt-6">
              {item.rentalPrice > 0 ? (
                <p className="font-serif text-3xl text-brand-gold">
                  {formatPrice(item.rentalPrice)}{' '}
                  <span className="text-base font-sans text-brand-muted">
                    · {item.unit}
                  </span>
                </p>
              ) : (
                <p className="font-serif text-2xl text-brand-gold">
                  Consultar precio
                </p>
              )}
            </div>

            <div className="mt-8 border-t border-brand-gold/15 pt-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
                Descripción
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-dark/80">
                {description}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(whatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-brand-gold px-8 py-3.5 text-sm font-medium tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Consultar por WhatsApp
              </a>
              <Link
                href={`/catalogo?categoria=${item.category}`}
                className="inline-flex items-center justify-center rounded-sm border border-brand-dark px-8 py-3.5 text-sm font-medium tracking-wider text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
              >
                Ver más {categoryLabels[item.category].toLowerCase()}
              </Link>
            </div>

            {!item.available && (
              <p className="mt-6 text-sm text-brand-muted">
                Actualmente no disponible: escríbenos para conocer fechas.
              </p>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-3xl text-brand-dark md:text-4xl">
              También en {categoryLabels[item.category]}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <CatalogueCard key={r.id} item={r} />
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
