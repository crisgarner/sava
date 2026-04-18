export type Category =
  | 'manteleria'
  | 'cristaleria'
  | 'cubiertos'
  | 'platos-base'
  | 'mobiliario';

export type CatalogueItem = {
  id: string;
  name: string;
  category: Category;
  filename: string;
  rentalPrice: number;
  unit: string;
  available: boolean;
};

export const categoryLabels: Record<Category, string> = {
  manteleria: 'Mantelería',
  cristaleria: 'Cristalería',
  cubiertos: 'Cubiertos',
  'platos-base': 'Platos Base',
  mobiliario: 'Mobiliario',
};

export const categoryOrder: Category[] = [
  'manteleria',
  'cristaleria',
  'cubiertos',
  'platos-base',
  'mobiliario',
];

export const catalogue: CatalogueItem[] = [
  {
    id: 'mantel-blanco-90x132',
    name: 'Mantel Blanco 90x132',
    category: 'manteleria',
    filename: 'manteleria/mantel-blanco-90x132.jpg',
    rentalPrice: 55,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-marfil-90x132',
    name: 'Mantel Marfil 90x132',
    category: 'manteleria',
    filename: 'manteleria/mantel-marfil-90x132.jpg',
    rentalPrice: 55,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'camino-mesa-dorado',
    name: 'Camino de Mesa Dorado',
    category: 'manteleria',
    filename: 'manteleria/camino-mesa-dorado.jpg',
    rentalPrice: 30,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'servilleta-blanca',
    name: 'Servilleta de Tela Blanca',
    category: 'manteleria',
    filename: 'manteleria/servilleta-blanca.jpg',
    rentalPrice: 12,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'lazo-silla-organza',
    name: 'Lazo de Silla Organza',
    category: 'manteleria',
    filename: 'manteleria/lazo-silla-organza.jpg',
    rentalPrice: 15,
    unit: 'por silla',
    available: true,
  },
  {
    id: 'copa-agua',
    name: 'Copa de Agua',
    category: 'cristaleria',
    filename: 'cristaleria/copa-agua.jpg',
    rentalPrice: 12,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'copa-vino',
    name: 'Copa de Vino',
    category: 'cristaleria',
    filename: 'cristaleria/copa-vino.jpg',
    rentalPrice: 18,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'copa-champana',
    name: 'Copa de Champaña',
    category: 'cristaleria',
    filename: 'cristaleria/copa-champana.jpg',
    rentalPrice: 20,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'juego-cubiertos-plateado',
    name: 'Juego de Cubiertos (4 pzas)',
    category: 'cubiertos',
    filename: 'cubiertos/juego-cubiertos-plateado.jpg',
    rentalPrice: 25,
    unit: 'por set',
    available: true,
  },
  {
    id: 'plato-base-dorado',
    name: 'Plato Base Dorado',
    category: 'platos-base',
    filename: 'platos-base/plato-base-dorado.jpg',
    rentalPrice: 30,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'plato-base-plateado',
    name: 'Plato Base Plateado',
    category: 'platos-base',
    filename: 'platos-base/plato-base-plateado.jpg',
    rentalPrice: 30,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'mesa-plegable-6pies',
    name: 'Mesa Plegable 6 Pies',
    category: 'mobiliario',
    filename: 'mobiliario/mesa-plegable-6pies.jpg',
    rentalPrice: 120,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'silla-plegable',
    name: 'Silla Plegable Acolchada',
    category: 'mobiliario',
    filename: 'mobiliario/silla-plegable.jpg',
    rentalPrice: 35,
    unit: 'por silla',
    available: true,
  },
];
