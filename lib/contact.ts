export const WHATSAPP_NUMBER_DISPLAY = '+504 3238-2346';
export const WHATSAPP_NUMBER_RAW = '50432382346';
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
