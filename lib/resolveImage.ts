/** Supports both local paths (relative to /public/catalogue/) and full URLs (e.g. Airtable CDN). */
export function resolveImage(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `/catalogue/${path}`;
}
