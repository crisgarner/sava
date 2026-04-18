'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/#paquetes', label: 'Paquetes' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brand-gold/10 bg-brand-cream/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="font-serif text-3xl font-medium text-brand-dark">
            Savá
          </span>
          <span className="text-sm uppercase tracking-[0.25em] text-brand-gold">
            Rentals
          </span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-wide text-brand-dark transition-colors hover:text-brand-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-brand-dark md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-gold/10 bg-brand-cream md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-brand-dark hover:text-brand-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
