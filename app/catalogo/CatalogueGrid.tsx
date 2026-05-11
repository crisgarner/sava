'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CatalogueCard from '@/components/CatalogueCard';
import CategoryTabs from '@/components/CategoryTabs';
import {
  Category,
  CatalogueItem,
  categoryLabels,
  categoryOrder,
} from '@/data/catalogue';

function isCategory(value: string | null): value is Category {
  if (!value) return false;
  return (categoryOrder as string[]).includes(value);
}

type Props = { items: CatalogueItem[] };

export default function CatalogueGrid({ items }: Props) {
  const params = useSearchParams();
  const raw = params.get('categoria');
  const active: Category | 'all' = isCategory(raw) ? raw : 'all';
  const [search, setSearch] = useState('');

  const filtered = items.filter((item) => {
    const matchesCategory = active === 'all' || item.category === active;
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      (item.description ?? '').toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="mb-8">
        <CategoryTabs active={active} />
      </div>

      <div className="mb-8">
        <input
          type="search"
          placeholder="Buscar artículos…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-sm border-2 border-brand-light bg-brand-ivory px-5 py-3 text-sm text-brand-dark placeholder:text-brand-muted focus:border-brand-accent focus:outline-none"
        />
      </div>

      {active !== 'all' && !search && (
        <p className="mb-6 text-sm text-brand-muted">
          Mostrando:{' '}
          <span className="text-brand-dark">{categoryLabels[active]}</span>
        </p>
      )}

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-brand-muted">
          No se encontraron artículos con esos criterios.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <CatalogueCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
