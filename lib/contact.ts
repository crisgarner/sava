// TODO: Replace with real WhatsApp number (also update app/layout.tsx metadata if needed)
export const WHATSAPP_NUMBER_DISPLAY = '+504 0000-0000';
export const WHATSAPP_NUMBER_RAW = '50400000000';
export const INSTAGRAM_HANDLE = 'savarentals';
export const INSTAGRAM_URL = 'https://www.instagram.com/savarentals/';

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER_RAW}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(lempiras: number): string {
  return `L. ${lempiras.toLocaleString('es-HN')}`;
}
