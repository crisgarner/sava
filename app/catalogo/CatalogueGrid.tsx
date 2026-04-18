'use client';

import { useSearchParams } from 'next/navigation';
import CatalogueCard from '@/components/CatalogueCard';
import CategoryTabs from '@/components/CategoryTabs';
import {
  Category,
  catalogue,
  categoryLabels,
  categoryOrder,
} from '@/data/catalogue';

function isCategory(value: string | null): value is Category {
  if (!value) return false;
  return (categoryOrder as string[]).includes(value);
}

export default function CatalogueGrid() {
  const params = useSearchParams();
  const raw = params.get('categoria');
  const active: Category | 'all' = isCategory(raw) ? raw : 'all';
  const items =
    active === 'all'
      ? catalogue
      : catalogue.filter((i) => i.category === active);

  return (
    <>
      <div className="mb-10">
        <CategoryTabs active={active} />
      </div>

      {active !== 'all' && (
        <p className="mb-6 text-sm text-brand-muted">
          Mostrando: <span className="text-brand-dark">{categoryLabels[active]}</span>
        </p>
      )}

      {items.length === 0 ? (
        <p className="py-20 text-center text-brand-muted">
          No hay artículos en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <CatalogueCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
