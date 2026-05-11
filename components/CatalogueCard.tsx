'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CatalogueItem } from '@/data/catalogue';
import { formatPrice, whatsappLink } from '@/lib/contact';
import { resolveImage } from '@/lib/resolveImage';

type Props = {
  item: CatalogueItem;
};

export default function CatalogueCard({ item }: Props) {
  const [imgError, setImgError] = useState(false);
  const detailHref = `/catalogo/${item.id}`;
  const whatsAppMsg = `Hola! Me interesa el alquiler de: ${item.name}. ¿Está disponible?`;
  const primaryImage = item.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/20 bg-white/30 shadow-sm backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-md">
      <Link
        href={detailHref}
        aria-label={`Ver detalles de ${item.name}`}
        className="relative block aspect-square w-full bg-brand-cream"
      >
        {imgError || !primaryImage ? (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-cream p-6 text-center">
            <span className="font-serif text-lg text-brand-muted">
              {item.name}
            </span>
          </div>
        ) : (
          <Image
            src={resolveImage(primaryImage)}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex-1">
          <h3 className="line-clamp-2 font-serif text-xl leading-tight text-brand-forest">
            <Link href={detailHref} className="transition-colors hover:text-brand-accent">
              {item.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-brand-muted">
            {item.rentalPrice > 0 ? (
              <>
                <span className="font-medium text-brand-accent">
                  {formatPrice(item.rentalPrice)}
                </span>{' '}
                · {item.unit}
              </>
            ) : (
              <span className="font-medium text-brand-accent">
                Consultar precio
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href={detailHref}
            className="inline-flex flex-1 items-center justify-center rounded-sm border border-brand-dark bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
          >
            Ver detalle
          </Link>
          <a
            href={whatsappLink(whatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-sm border border-brand-accent bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-brand-accent transition-colors hover:bg-brand-accent hover:text-white"
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
