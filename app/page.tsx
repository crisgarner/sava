import Image from 'next/image';
import Link from 'next/link';
import CatalogueCard from '@/components/CatalogueCard';
import PackageCard from '@/components/PackageCard';
import ZoneCard from '@/components/ZoneCard';
import { catalogue } from '@/data/catalogue';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  whatsappLink,
} from '@/lib/contact';

// TODO: replace with real photos for the Instagram grid
const instagramPlaceholders = [
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
  'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800',
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
  'https://images.unsplash.com/photo-1513267048331-5611cad62e41?w=800',
];

export default function HomePage() {
  const previewItems = catalogue.slice(0, 6);

  return (
    <main id="inicio" className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <Image
          // TODO: replace with real photo
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920"
          alt="Mesa elegante con mantelería y cristalería"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/40" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-white">
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Elegancia para cada evento
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/90 md:text-lg">
            Alquiler de vajilla, cristalería y mantelería en Tegucigalpa
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center rounded-sm bg-brand-gold px-8 py-3.5 text-sm font-medium tracking-wider text-white transition-colors hover:bg-white hover:text-brand-dark"
            >
              Ver Catálogo
            </Link>
            <a
              href={whatsappLink('Hola! Me gustaría cotizar un alquiler para mi evento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-white bg-transparent px-8 py-3.5 text-sm font-medium tracking-wider text-white transition-colors hover:bg-white hover:text-brand-dark"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-brand-cream px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
          {[
            {
              title: 'Inventario elegante y moderno',
              body: 'Seleccionamos cada pieza para realzar la estética de tu evento.',
            },
            {
              title: 'Entrega en toda Tegucigalpa',
              body: 'Cobertura en Centro, Metro amplio y afueras del Valle.',
            },
            {
              title: 'Respuesta en menos de 2 horas',
              body: 'Te contestamos rápido por WhatsApp con tu cotización personalizada.',
            },
          ].map((v) => (
            <div key={v.title} className="flex flex-col gap-3 text-center">
              <div className="mx-auto h-px w-10 bg-brand-gold" />
              <h3 className="font-serif text-2xl text-brand-dark">{v.title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="paquetes" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Paquetes
            </span>
            <h2 className="mt-3 font-serif text-4xl text-brand-dark md:text-5xl">
              Diseñados para cada celebración
            </h2>
            <p className="mt-4 text-base text-brand-muted">
              Elige un paquete por invitado o combínalos según tus necesidades.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <PackageCard
              name="Esencial"
              includes="Mantel + 2 servilletas + copa de agua + cubiertos"
              price="Desde L. 55 / invitado"
              whatsAppMessage="Hola! Me interesa cotizar el Paquete Esencial."
            />
            <PackageCard
              name="Elegante"
              includes="Esencial + copa de vino + plato base + lazo de silla"
              price="Desde L. 100 / invitado"
              highlighted
              whatsAppMessage="Hola! Me interesa cotizar el Paquete Elegante."
            />
            <PackageCard
              name="Premium"
              includes="Elegante + copa de champaña + mantelería premium"
              price="Desde L. 170 / invitado"
              whatsAppMessage="Hola! Me interesa cotizar el Paquete Premium."
            />
          </div>
        </div>
      </section>

      {/* Catalogue preview */}
      <section className="bg-brand-cream px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
                Catálogo
              </span>
              <h2 className="mt-3 font-serif text-4xl text-brand-dark md:text-5xl">
                Nuestro Inventario
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="text-sm tracking-wide text-brand-dark transition-colors hover:text-brand-gold"
            >
              Ver catálogo completo →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewItems.map((item) => (
              <CatalogueCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Service zones */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Cobertura
            </span>
            <h2 className="mt-3 font-serif text-4xl text-brand-dark md:text-5xl">
              Entregamos en toda la ciudad
            </h2>
            <p className="mt-4 text-base text-brand-muted">
              Tarifas de envío según zona dentro de Tegucigalpa y área
              metropolitana.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ZoneCard
              zone="Zona 1"
              area="Centro"
              neighborhoods="Palmira, Lomas del Guijarro"
              price="L. 300"
            />
            <ZoneCard
              zone="Zona 2"
              area="Metro amplio"
              neighborhoods="Kennedy, Comayagüela"
              price="L. 500"
            />
            <ZoneCard
              zone="Zona 3"
              area="Afueras"
              neighborhoods="Valle de Ángeles, Santa Lucía"
              price="Desde L. 800"
            />
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-brand-cream px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Instagram
          </span>
          <h2 className="mt-3 font-serif text-4xl text-brand-dark md:text-5xl">
            Síguenos en Instagram
          </h2>
          <p className="mt-3 text-base text-brand-muted">
            @{INSTAGRAM_HANDLE}
          </p>
          <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-6">
            {instagramPlaceholders.map((src, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  // TODO: replace with real photo
                  src={src}
                  alt={`Publicación de Instagram ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 16vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/0 transition-colors group-hover:bg-brand-dark/20" />
              </a>
            ))}
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center justify-center rounded-sm border border-brand-dark px-8 py-3.5 text-sm font-medium tracking-wider text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
          >
            Ver @{INSTAGRAM_HANDLE} en Instagram
          </a>
        </div>
      </section>

      {/* Contact / CTA banner */}
      <section
        id="contacto"
        className="bg-brand-gold/10 px-6 py-24 md:py-32"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h2 className="font-serif text-4xl text-brand-dark md:text-6xl">
            ¿Lista para tu evento?
          </h2>
          <p className="max-w-xl text-base text-brand-muted">
            Cuéntanos la fecha y el número de invitados. Te respondemos por
            WhatsApp en menos de 2 horas.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(
                'Hola! Quiero cotizar el alquiler para mi evento.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-brand-gold px-8 py-3.5 text-sm font-medium tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Escríbenos por WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-brand-dark bg-transparent px-8 py-3.5 text-sm font-medium tracking-wider text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
            >
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark px-6 py-16 text-brand-cream">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-3xl text-white">Savá</span>
              <span className="text-sm uppercase tracking-[0.25em] text-brand-gold">
                Rentals
              </span>
            </div>
            <p className="mt-4 text-sm text-brand-cream/70">
              Elegancia para cada evento.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-white">Navegación</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-brand-cream/70">
              <li>
                <Link href="/" className="hover:text-brand-gold">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-brand-gold">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/#paquetes" className="hover:text-brand-gold">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-brand-gold">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-white">Cobertura</h4>
            <p className="mt-4 text-sm text-brand-cream/70">
              Tegucigalpa y área metropolitana
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-brand-cream/70 hover:text-brand-gold"
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-brand-cream/10 pt-6 text-center text-xs text-brand-cream/60">
          © 2026 Savá Rentals · Tegucigalpa, Honduras
        </div>
      </footer>
    </main>
  );
}
