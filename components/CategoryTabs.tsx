import Link from 'next/link';
import { Category, categoryLabels, categoryOrder } from '@/data/catalogue';

type Props = {
  active: Category | 'all';
};

export default function CategoryTabs({ active }: Props) {
  const tabs: Array<{ key: Category | 'all'; label: string; href: string }> = [
    { key: 'all', label: 'Todos', href: '/catalogo' },
    ...categoryOrder.map((c) => ({
      key: c,
      label: categoryLabels[c],
      href: `/catalogo?categoria=${c}`,
    })),
  ];

  return (
    <nav aria-label="Categorías" className="border-b border-brand-gold/15">
      <ul className="flex flex-wrap gap-x-2 gap-y-1">
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <li key={tab.key}>
              <Link
                href={tab.href}
                className={`inline-flex items-center border-b-2 px-4 py-3 text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'border-brand-gold text-brand-dark'
                    : 'border-transparent text-brand-muted hover:text-brand-dark'
                }`}
                scroll={false}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
