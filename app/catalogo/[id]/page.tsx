import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
import CatalogueCard from '@/components/CatalogueCard';
import { categoryDescriptions, categoryLabels } from '@/data/catalogue';
import { formatPrice, whatsappLink } from '@/lib/contact';
import { getCatalogue } from '@/lib/getCatalogue';

export const revalidate = 60;
export const dynamicParams = true;

type RouteParams = { params: { id: string } };

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const items = await getCatalogue();
  const item = items.find((i) => i.id === params.id);
  if (!item) return { title: 'Producto no encontrado' };
  const description = item.description ?? categoryDescriptions[item.category];
  return {
    title: item.name,
    description,
    openGraph: {
      title: `${item.name} · Savá Rentals`,
      description,
      images: [item.images[0] ?? ''],
    },
  };
}

export default async function ProductDetailPage({ params }: RouteParams) {
  const items = await getCatalogue();
  const item = items.find((i) => i.id === params.id);
  if (!item) notFound();

  const description = item.description ?? categoryDescriptions[item.category];
  const whatsAppMsg = `Hola! Me interesa el alquiler de: ${item.name}. ¿Está disponible?`;
  const related = items
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  return (
    <main id="main-content" className="bg-brand-ivory pt-28 md:pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <nav aria-label="Migas de pan" className="mb-8 text-sm text-brand-muted">
          <Link href="/catalogo" className="hover:text-brand-dark">
            Catálogo
          </Link>
          <span className="mx-2 text-brand-light">/</span>
          <Link
            href={`/catalogo?categoria=${item.category}`}
            className="hover:text-brand-dark"
          >
            {categoryLabels[item.category]}
          </Link>
          <span className="mx-2 text-brand-light">/</span>
          <span className="text-brand-dark">{item.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={item.images} alt={item.name} />

          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
              {categoryLabels[item.category]}
            </span>
            <h1 className="mt-3 font-serif text-4xl font-light text-brand-forest md:text-5xl">
              {item.name}
            </h1>

            <div className="mt-6">
              {item.rentalPrice > 0 ? (
                <p className="font-serif text-3xl text-brand-accent">
                  {formatPrice(item.rentalPrice)}
                </p>
              ) : (
                <p className="font-serif text-2xl text-brand-accent">
                  Consultar precio
                </p>
              )}
            </div>

            <div className="mt-8 border-t border-brand-light pt-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
                Descripción
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-dark/80">
                {description}
              </p>
            </div>

            {(item.stockQty != null || item.dimensions || item.material) && (
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-brand-light pt-6 sm:grid-cols-3">
                {item.stockQty != null && (
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted">
                      Disponibles
                    </dt>
                    <dd className="mt-1 text-sm text-brand-dark">
                      {item.stockQty} unidades
                    </dd>
                  </div>
                )}
                {item.dimensions && (
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted">
                      Medidas
                    </dt>
                    <dd className="mt-1 text-sm text-brand-dark">{item.dimensions}</dd>
                  </div>
                )}
                {item.material && (
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted">
                      Material
                    </dt>
                    <dd className="mt-1 text-sm text-brand-dark">{item.material}</dd>
                  </div>
                )}
              </dl>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappLink(whatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm bg-[#25D366] px-8 py-3.5 text-sm font-medium tracking-wider text-white transition-all hover:-translate-y-px hover:shadow-lg"
              >
                Consultar por WhatsApp
              </a>
              <Link
                href={`/catalogo?categoria=${item.category}`}
                className="inline-flex items-center gap-1.5 text-sm text-brand-muted transition-colors hover:text-brand-dark"
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
            <h2 className="font-serif text-3xl font-light text-brand-forest md:text-4xl">
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
