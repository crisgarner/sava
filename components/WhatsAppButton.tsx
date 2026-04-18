import { whatsappLink } from '@/lib/contact';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hola! Me gustaría cotizar un alquiler.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-lg transition-all hover:pr-6 hover:shadow-xl md:bottom-8 md:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative h-6 w-6 shrink-0"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.688 1.448h.005c9.893 0 16.812-11.008 10.5-19.08a11.821 11.821 0 00-2.008-1.267M12.03 21.786h-.004a9.86 9.86 0 01-5.03-1.378l-.36-.214-3.742.975 1.005-3.64-.235-.374a9.813 9.813 0 01-1.51-5.233c.003-8.76 10.695-13.144 16.882-6.957a9.73 9.73 0 012.867 6.937c-.006 5.434-4.425 9.884-9.875 9.884" />
      </svg>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[12rem] group-hover:opacity-100 md:inline">
        ¡Cotiza ahora!
      </span>
    </a>
  );
}
