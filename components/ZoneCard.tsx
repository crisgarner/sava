type Props = {
  zone: string;
  area: string;
  neighborhoods: string;
  price: string;
};

export default function ZoneCard({ zone, area, neighborhoods, price }: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-sm border border-brand-gold/20 bg-brand-ivory p-8">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
        {zone}
      </span>
      <h3 className="font-serif text-2xl text-brand-dark">{area}</h3>
      <p className="text-sm text-brand-muted">{neighborhoods}</p>
      <p className="mt-auto pt-4 font-serif text-xl text-brand-dark">{price}</p>
    </div>
  );
}
