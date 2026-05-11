import { cache } from 'react';
import type { CatalogueItem } from '@/data/catalogue';

// React.cache deduplicates calls within a single render pass.
// Next.js fetch cache (revalidate: 60 in airtable.ts) handles cross-request caching.
export const getCatalogue = cache(async function (): Promise<CatalogueItem[]> {
  if (!process.env.AIRTABLE_TOKEN || !process.env.AIRTABLE_BASE_ID) {
    throw new Error('AIRTABLE_TOKEN and AIRTABLE_BASE_ID must be set in .env');
  }
  const { fetchCatalogue } = await import('@/lib/airtable');
  return fetchCatalogue();
});
