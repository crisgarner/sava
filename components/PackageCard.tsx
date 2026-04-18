import { whatsappLink } from '@/lib/contact';

type Props = {
  name: string;
  includes: string;
  price: string;
  highlighted?: boolean;
  whatsAppMessage: string;
};

export default function PackageCard({
  name,
  includes,
  price,
  highlighted = false,
  whatsAppMessage,
}: Props) {
  return (
    <div
      className={`relative flex flex-col rounded-sm border p-8 transition-shadow hover:shadow-lg ${
        highlighted
          ? 'border-brand-gold bg-brand-ivory shadow-md'
          : 'border-brand-gold/20 bg-white'
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-gold px-4 py-1 text-xs font-medium uppercase tracking-widest text-white">
          Más popular
        </span>
      )}
      <h3 className="font-serif text-3xl text-brand-dark">{name}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-muted">
        {includes}
      </p>
      <p className="mt-6 font-serif text-2xl text-brand-gold">{price}</p>
      <a
        href={whatsappLink(whatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-medium tracking-wide transition-colors ${
          highlighted
            ? 'bg-brand-gold text-white hover:bg-brand-dark'
            : 'border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
        }`}
      >
        Cotizar este paquete
      </a>
    </div>
  );
}
