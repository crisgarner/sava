'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CatalogueItem } from '@/data/catalogue';
import { formatPrice, whatsappLink } from '@/lib/contact';

type Props = {
  item: CatalogueItem;
};

export default function CatalogueCard({ item }: Props) {
  const [imgError, setImgError] = useState(false);
  const detailHref = `/catalogo/${item.id}`;
  const whatsAppMsg = `Hola! Me interesa el alquiler de: ${item.name}. ¿Está disponible?`;
  const primaryImage = item.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-brand-gold/15 bg-brand-ivory shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={detailHref}
        aria-label={`Ver detalles de ${item.name}`}
        className="relative block aspect-square w-full bg-brand-ivory"
      >
        {imgError || !primaryImage ? (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-ivory p-6 text-center">
            <span className="font-serif text-lg text-brand-muted">
              {item.name}
            </span>
          </div>
        ) : (
          <Image
            src={`/catalogue/${primaryImage}`}
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
          <h3 className="line-clamp-2 font-serif text-xl leading-tight text-brand-dark">
            <Link href={detailHref} className="transition-colors hover:text-brand-gold">
              {item.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-brand-muted">
            {item.rentalPrice > 0 ? (
              <>
                <span className="font-medium text-brand-gold">
                  {formatPrice(item.rentalPrice)}
                </span>{' '}
                · {item.unit}
              </>
            ) : (
              <span className="font-medium text-brand-gold">
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
            className="inline-flex flex-1 items-center justify-center rounded-sm border border-brand-gold bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
