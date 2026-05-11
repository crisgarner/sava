import Image from 'next/image';
import Link from 'next/link';
import CatalogueCard from '@/components/CatalogueCard';
import { categoryLabels, categoryOrder } from '@/data/catalogue';
import { getCatalogue } from '@/lib/getCatalogue';
import { resolveImage } from '@/lib/resolveImage';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  whatsappLink,
  formatPrice,
} from '@/lib/contact';

export const revalidate = 60;

// TODO: replace with real Instagram photos
const instagramPlaceholders = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
  'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800',
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
  'https://images.unsplash.com/photo-1513267048331-5611cad62e41?w=800',
];

// TODO: replace with real client testimonials
const testimonials = [
  {
    name: 'María González',
    event: 'Boda',
    quote:
      'Los manteles y la cristalería transformaron completamente nuestra recepción. Todo fue impecable.',
  },
  {
    name: 'Carlos Ruiz',
    event: 'Aniversario Corporativo',
    quote:
      'Servicio excepcional y atención a cada detalle. Nuestros clientes quedaron encantados.',
  },
  {
    name: 'Ana Martínez',
    event: 'Cumpleaños',
    quote:
      'La calidad de cada pieza es extraordinaria. Savá hizo realidad la celebración de mis sueños.',
  },
];

// Unsplash backgrounds per category
const categoryImages: Record<string, string> = {
  'manteles-rectangulares':
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80',
  'manteles-redondos':
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80',
  servilletas:
    'https://images.unsplash.com/photo-1606744837616-56c9d0740d0e?w=600&q=80',
  cristaleria:
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
  vajilla:
    'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80',
  'platos-base':
    'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80',
  'cake-stand':
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
  mobiliario:
    'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
};

export default async function HomePage() {
  const items = await getCatalogue();
  const previewItems = items.slice(0, 4);

  const seenCategories = new Set<string>();
  const cataloguePreview = items
    .filter((item) => {
      if (seenCategories.has(item.category)) return false;
      seenCategories.add(item.category);
      return true;
    })
    .slice(0, 6);

  return (
    <main id="main-content" className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        {/* Background image — very low opacity so cream tones dominate */}
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920"
          alt="Mesa elegante con mantelería y cristalería"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.18]"
        />
        {/* Light cream gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/90 via-brand-ivory/95 to-brand-cream/88" />
        {/* Subtle diagonal texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(26,58,46,0.015) 35px, rgba(26,58,46,0.015) 70px)',
          }}
        />
        {/* Ambient glow — gold, top-right */}
        <div
          className="pointer-events-none absolute right-[5%] top-[10%] h-96 w-96 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(136,98,20,0.10) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Ambient glow — green, bottom-left */}
        <div
          className="pointer-events-none absolute bottom-[15%] left-[8%] h-72 w-72 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(26,58,46,0.09) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <span className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-brand-muted">
            Tegucigalpa, Honduras
          </span>
          <h1 className="font-serif text-5xl font-light leading-tight text-brand-forest md:text-7xl">
            El arte de celebrar con estilo
          </h1>
          <p className="mt-6 max-w-xl text-base font-light text-brand-muted md:text-lg">
            Renta exclusiva de manteles, cristalería, vajilla y mobiliario para
            eventos inolvidables
          </p>
          <div className="mt-10">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center rounded-sm bg-brand-accent px-10 py-4 text-sm font-medium tracking-wider text-white shadow-lg shadow-brand-accent/20 transition-all hover:-translate-y-px hover:bg-brand-forest hover:shadow-xl"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Piezas destacadas ─────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        {/* Ambient blobs — give glass cards something to blur over */}
        <div
          className="pointer-events-none absolute left-[10%] top-[20%] h-80 w-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(45,122,95,0.10) 0%, transparent 70%)', filter: 'blur(70px)' }}
        />
        <div
          className="pointer-events-none absolute bottom-[15%] right-[8%] h-96 w-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,169,97,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
              Inventario
            </span>
            <h2 className="mt-3 font-serif text-4xl font-light text-brand-forest md:text-5xl">
              Piezas Destacadas
            </h2>
            <p className="mt-4 text-base font-light text-brand-muted">
              Selección curada de nuestras piezas más solicitadas
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
            {previewItems.map((item) => (
              <Link
                key={item.id}
                href={`/catalogo/${item.id}`}
                className="group overflow-hidden rounded-xl border border-white/20 bg-white/30 shadow-sm backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-2 hover:bg-white/40 hover:shadow-md"
              >
                <div className="relative h-56 overflow-hidden bg-brand-cream/50 md:h-64">
                  {item.images[0] ? (
                    <Image
                      src={resolveImage(item.images[0])}
                      alt={item.name}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-4 text-center">
                      <span className="font-serif text-base text-brand-muted">
                        {item.name}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-1 font-serif text-xl leading-tight text-brand-forest">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-brand-accent">
                    {item.rentalPrice > 0
                      ? formatPrice(item.rentalPrice)
                      : 'Consultar precio'}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center rounded-sm border border-brand-dark px-8 py-3.5 text-sm font-medium tracking-wider text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
            >
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Explorar por categoría ────────────────────────────────── */}
      <section className="bg-brand-cream px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
              Categorías
            </span>
            <h2 className="mt-3 font-serif text-4xl font-light text-brand-forest md:text-5xl">
              Explora por Categoría
            </h2>
            <p className="mt-4 text-base font-light text-brand-muted">
              Encuentra exactamente lo que necesitas para tu evento
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryOrder.slice(0, 6).map((cat) => {
              const count = items.filter((i) => i.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/catalogo?categoria=${cat}`}
                  className="group relative h-64 overflow-hidden rounded-md border border-brand-light transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lg"
                >
                  {categoryImages[cat] && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-25 transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${categoryImages[cat]})`,
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ivory/95 via-brand-ivory/55 to-brand-ivory/15" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-serif text-2xl font-light text-brand-forest">
                      {categoryLabels[cat]}
                    </h3>
                    <p className="mt-2 text-xs text-brand-muted">
                      {count} {count === 1 ? 'artículo' : 'artículos'}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonios ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(26,58,46,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
              Clientes
            </span>
            <h2 className="mt-3 font-serif text-4xl font-light text-brand-forest md:text-5xl">
              Experiencias
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-white/20 bg-white/30 p-8 shadow-sm backdrop-blur-[10px]"
              >
                <span className="block font-serif text-5xl leading-none text-brand-gold/25">
                  &ldquo;
                </span>
                <p className="mt-3 text-sm italic leading-relaxed text-brand-dark/75">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-brand-gold/10 pt-5">
                  <p className="text-sm font-medium text-brand-dark">{t.name}</p>
                  <p className="mt-0.5 text-xs text-brand-muted">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram ───────────────────────────────────────────── */}
      <section className="bg-brand-cream px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
            Instagram
          </span>
          <h2 className="mt-3 font-serif text-4xl font-light text-brand-forest md:text-5xl">
            Síguenos
          </h2>
          <p className="mt-3 text-base text-brand-muted">
            @{INSTAGRAM_HANDLE}
          </p>
          <div className="mt-12 grid grid-cols-3 gap-2 md:grid-cols-6">
            {instagramPlaceholders.map((src, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={src}
                  alt={`Publicación de Instagram ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 16vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/0 transition-colors group-hover:bg-brand-dark/20" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ──────────────────────────────────────────────── */}
      <section id="contacto" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-light text-brand-forest md:text-5xl">
            ¿Lista para tu evento?
          </h2>
          <p className="mt-6 text-base font-light text-brand-muted">
            Cuéntanos la fecha y el número de invitados. Te respondemos por
            WhatsApp en menos de 2 horas.
          </p>
          <a
            href={whatsappLink(
              'Hola! Quiero cotizar el alquiler para mi evento.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-sm bg-[#25D366] px-10 py-4 text-sm font-medium tracking-wider text-white shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-px hover:shadow-xl hover:shadow-[#25D366]/30"
          >
            Chatear en WhatsApp
          </a>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="bg-brand-forest px-6 py-12 text-brand-cream">
        <div className="mx-auto max-w-6xl text-center">
          <Image
            src="/logos/logo-wordmark.png"
            alt="Savá Rentals"
            width={286}
            height={224}
            className="mx-auto h-10 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm text-brand-cream/70">
            El arte de celebrar con estilo
          </p>
          <nav
            aria-label="Pie de página"
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-brand-cream/70"
          >
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <Link href="/catalogo" className="hover:text-white">
              Catálogo
            </Link>
            <Link href="/#contacto" className="hover:text-white">
              Contacto
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </nav>
          <div className="mx-auto mt-8 max-w-6xl border-t border-brand-cream/10 pt-6 text-xs text-brand-cream/70">
            © 2026 Savá Rentals · Tegucigalpa, Honduras
          </div>
        </div>
      </footer>
    </main>
  );
}
