'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  images: string[];
  alt: string;
};

export default function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  const [errors, setErrors] = useState<Record<number, boolean>>({});
  const current = images[active];
  const showThumbs = images.length > 1;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-brand-ivory">
        {current && !errors[active] ? (
          <Image
            key={current}
            src={`/catalogue/${current}`}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            onError={() =>
              setErrors((prev) => ({ ...prev, [active]: true }))
            }
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <span className="font-serif text-2xl text-brand-muted">{alt}</span>
          </div>
        )}
      </div>

      {showThumbs && (
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-6">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1} de ${images.length}`}
              aria-pressed={i === active}
              className={`relative aspect-square overflow-hidden rounded-sm border bg-brand-ivory transition-opacity ${
                i === active
                  ? 'border-brand-gold opacity-100'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              {!errors[i] ? (
                <Image
                  src={`/catalogue/${img}`}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                  onError={() =>
                    setErrors((prev) => ({ ...prev, [i]: true }))
                  }
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center text-xs text-brand-muted">
                  {i + 1}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
