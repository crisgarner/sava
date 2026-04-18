'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CatalogueItem } from '@/data/catalogue';
import { formatPrice, whatsappLink } from '@/lib/contact';

type Props = {
  item: CatalogueItem;
};

export default function CatalogueCard({ item }: Props) {
  const [imgError, setImgError] = useState(false);
  const message = `Hola! Me interesa el alquiler de: ${item.name}. ¿Está disponible?`;
  const href = whatsappLink(message);

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-brand-gold/15 bg-brand-ivory shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square w-full bg-stone-100">
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100 p-6 text-center">
            <span className="font-serif text-lg text-brand-muted">
              {item.name}
            </span>
          </div>
        ) : (
          <Image
            src={`/catalogue/${item.filename}`}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex-1">
          <h3 className="font-serif text-xl leading-tight text-brand-dark">
            {item.name}
          </h3>
          <p className="mt-2 text-sm text-brand-muted">
            <span className="font-medium text-brand-gold">
              {formatPrice(item.rentalPrice)}
            </span>{' '}
            · {item.unit}
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm border border-brand-gold bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
        >
          Consultar
        </a>
      </div>
    </article>
  );
}
