# Savá Rentals

Marketing website for **Savá Rentals** — event tableware, linen, and glassware
rental service in Tegucigalpa, Honduras.

Tagline: _Elegancia para cada evento_

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.
Deploys as a fully static site via `next build` + `output: 'export'`.

---

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

---

## Folder structure

```
/app
  layout.tsx          Root layout, fonts, Nav + floating WhatsApp button
  page.tsx            Home page (all sections)
  globals.css         Tailwind entry + base styles
  catalogo/
    page.tsx          Catalogue page (server wrapper + metadata)
    CatalogueGrid.tsx Client component reading ?categoria= from URL

/components
  Nav.tsx             Sticky nav with mobile hamburger
  WhatsAppButton.tsx  Floating WhatsApp CTA (used in layout)
  CatalogueCard.tsx   Single item card with image + Consultar button
  PackageCard.tsx     Pricing package card
  ZoneCard.tsx        Delivery zone card
  CategoryTabs.tsx    Category filter tabs for /catalogo

/data
  catalogue.ts        Typed catalogue array (source of truth)

/lib
  contact.ts          WhatsApp + Instagram helpers, price formatting

/public
  catalogue/          Catalogue item images (see below)
    manteleria/
    cristaleria/
    cubiertos/
    platos-base/
    mobiliario/
  robots.txt
  sitemap.xml
```

---

## How to add or update catalogue items

1. Drop the image into the matching folder under `/public/catalogue/[category]/`.
   Use a descriptive filename in kebab-case, e.g. `mantel-rojo-redondo.jpg`.
2. Open `data/catalogue.ts` and add or edit an entry:

   ```ts
   {
     id: 'mantel-rojo-redondo',
     name: 'Mantel Rojo Redondo',
     category: 'manteleria',
     filename: 'manteleria/mantel-rojo-redondo.jpg',
     rentalPrice: 60,
     unit: 'por mesa',
     available: true,
   }
   ```

3. The card will appear automatically on `/catalogo` and in the home preview
   if it's within the first six items.

If an image file is missing, the card gracefully shows a soft gray
placeholder with the item name. Nothing else breaks.

---

## Updating the WhatsApp number

The placeholder number is `+504 0000-0000` (raw form `50400000000`).
Search the codebase for `TODO` and update:

1. `lib/contact.ts` — `WHATSAPP_NUMBER_DISPLAY` and `WHATSAPP_NUMBER_RAW`
2. Check any other spots marked `TODO` (hero photo, Instagram grid photos)

All WhatsApp links on the site (hero, packages, catalogue cards, floating
button, contact banner) resolve through `whatsappLink()` in `lib/contact.ts`,
so a single update propagates everywhere.

---

## Replacing placeholder photos

Anywhere you see `// TODO: replace with real photo` in the source:

- `app/page.tsx` — hero background image (Unsplash URL)
- `app/page.tsx` — Instagram grid (six Unsplash URLs)

Steps:

1. Drop the real photo into `/public/` (e.g. `/public/hero.jpg`).
2. Update the `src` to `/hero.jpg` (or the correct relative path).
3. Remove the `TODO` comment.

For the hero, the OG image in `app/layout.tsx` references `/hero.jpg` —
placing a real file at that path will activate the OG preview.

---

## Deploying to Vercel

This project is configured for fully static output (`output: 'export'` in
`next.config.ts`) and works with Vercel's default settings.

1. Push the repo to GitHub.
2. Go to <https://vercel.com/new> and import the repository.
3. Click **Deploy**. No environment variables or build overrides required.
4. Vercel runs `npm run build`, which produces `/out`, and serves it.

You can also deploy locally with the Vercel CLI:

```bash
vercel deploy
```

---

## Tech notes

- `images.unoptimized: true` is set in `next.config.mjs` because static
  export cannot run the Next.js image optimizer. `next/image` still works
  — it just serves the original file. (Next.js 14 does not support
  `next.config.ts`, so `.mjs` is used.)
- The catalogue filter uses client-side `useSearchParams()` so URLs like
  `/catalogo?categoria=cristaleria` are shareable and work on reload.
- Fonts (Cormorant Garamond + Inter) are loaded through `next/font/google`
  and wired up as Tailwind CSS variables (`font-serif`, `font-sans`).
- Brand colors are defined in `tailwind.config.ts` as `brand-cream`,
  `brand-ivory`, `brand-gold`, `brand-dark`, `brand-muted`.
