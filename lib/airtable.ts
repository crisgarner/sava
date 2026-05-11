import type { CatalogueItem, Category } from '@/data/catalogue';

type AirtableAttachment = { url: string };

type AirtableFields = {
  Name?: string;
  'Item ID (Slug)'?: string;
  Category?: string;
  Images?: AirtableAttachment[];
  Description?: string;
  'Rental Price'?: number;
  Unit?: string;
  'Availability Status'?: string;
  'Stock Quantity'?: number;
  Dimensions?: string;
  Material?: string;
};

type AirtableRecord = { id: string; fields: AirtableFields };
type AirtableResponse = { records: AirtableRecord[]; offset?: string };

export async function fetchCatalogue(): Promise<CatalogueItem[]> {
  const token = process.env.AIRTABLE_TOKEN!;
  const baseId = process.env.AIRTABLE_BASE_ID!;
  const tableName = process.env.AIRTABLE_TABLE ?? 'Inventory Items';
  const allRecords: AirtableRecord[] = [];
  let offset: string | undefined;

  do {
    const url = new URL(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    );
    if (offset) url.searchParams.set('offset', offset);

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error(`Airtable error ${res.status}: ${await res.text()}`);
    }
    const data: AirtableResponse = await res.json();
    allRecords.push(...data.records);
    offset = data.offset;
  } while (offset);

  return allRecords
    .filter((r) => r.fields.Name && r.fields['Item ID (Slug)'] && r.fields.Category)
    .map((r) => {
      const f = r.fields;
      const status = f['Availability Status'];
      return {
        id: f['Item ID (Slug)']!,
        name: f.Name!,
        category: f.Category as Category,
        images: (f.Images ?? []).map((a) => a.url),
        description: f.Description,
        rentalPrice: f['Rental Price'] ?? 0,
        unit: f.Unit ?? 'por unidad',
        available: !status || status === 'Available',
        stockQty: f['Stock Quantity'],
        dimensions: f.Dimensions,
        material: f.Material,
      };
    });
}
