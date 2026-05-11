export type Category =
  | 'manteles-rectangulares'
  | 'manteles-redondos'
  | 'servilletas'
  | 'cristaleria'
  | 'vajilla'
  | 'platos-base'
  | 'cake-stand'
  | 'mobiliario';

export type CatalogueItem = {
  id: string;
  name: string;
  category: Category;
  /**
   * One or more image paths relative to /public/catalogue/.
   * The first image is the primary used in cards and previews.
   * Add more entries to populate the gallery on the detail page.
   */
  images: string[];
  /** Optional product description shown on the detail page. */
  description?: string;
  rentalPrice: number; // 0 = "Consultar precio"
  unit: string;
  available: boolean;
  /** How many units are available to rent at once. */
  stockQty?: number;
  /** Dimensions, e.g. "274 × 274 cm" or "Ø 30 cm". */
  dimensions?: string;
  /** Material or finish, e.g. "Lino", "Cristal soplado". */
  material?: string;
};

/**
 * Generic category-level descriptions used as a fallback on the detail
 * page when a product has no `description` of its own.
 */
export const categoryDescriptions: Record<Category, string> = {
  'manteles-rectangulares':
    'Mantel rectangular para mesas de banquete y eventos formales. Tela de calidad, lavada y planchada antes de cada entrega.',
  'manteles-redondos':
    'Mantel redondo para mesas de invitados. Caída completa al suelo para una presentación elegante.',
  servilletas:
    'Servilleta de tela para complementar la mesa. Disponible en varios colores y telas para combinar con tu mantelería.',
  cristaleria:
    'Cristalería fina para el servicio de mesa. Lavada y pulida antes de cada entrega.',
  vajilla:
    'Vajilla cuidadosamente seleccionada para realzar la presentación de tus platillos.',
  'platos-base':
    'Plato base de presentación para componer cada cubierto con elegancia.',
  'cake-stand':
    'Base elevada para tortas y mesa de postres, ideal para destacar el centro de la celebración.',
  mobiliario:
    'Pieza de mobiliario decorativo para complementar la ambientación de tu evento.',
};

export const categoryLabels: Record<Category, string> = {
  'manteles-rectangulares': 'Manteles Rectangulares',
  'manteles-redondos': 'Manteles Redondos',
  servilletas: 'Servilletas',
  cristaleria: 'Cristalería',
  vajilla: 'Vajilla',
  'platos-base': 'Platos Base',
  'cake-stand': 'Cake Stand',
  mobiliario: 'Mobiliario',
};

export const categoryOrder: Category[] = [
  'manteles-rectangulares',
  'manteles-redondos',
  'servilletas',
  'cristaleria',
  'vajilla',
  'platos-base',
  'cake-stand',
  'mobiliario',
];

// TODO: Update rentalPrice for each item once final pricing is set.
// Items with rentalPrice: 0 display "Consultar precio" instead of a price.
export const catalogue: CatalogueItem[] = [
  // ── Manteles Rectangulares ──────────────────────────────────────
  {
    id: 'mantel-amelia',
    name: 'Mantel Amelia',
    category: 'manteles-rectangulares',
    images: ['manteles-rectangulares/mantel-amelia.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-champan',
    name: 'Mantel Champán',
    category: 'manteles-rectangulares',
    images: ['manteles-rectangulares/mantel-champan.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-ecler-blush',
    name: 'Mantel Ecler Blush',
    category: 'manteles-rectangulares',
    images: ['manteles-rectangulares/mantel-ecler-blush.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-ecler-verde-olivo',
    name: 'Mantel Ecler Verde Olivo',
    category: 'manteles-rectangulares',
    images: ['manteles-rectangulares/mantel-ecler-verde-olivo.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-ecler-verde',
    name: 'Mantel Ecler Verde',
    category: 'manteles-rectangulares',
    images: ['manteles-rectangulares/mantel-ecler-verde.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-marie-rectangular',
    name: 'Mantel Marie Rectangular',
    category: 'manteles-rectangulares',
    images: ['manteles-rectangulares/mantel-marie-rectangular.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-renata',
    name: 'Mantel Renata',
    category: 'manteles-rectangulares',
    images: ['manteles-rectangulares/mantel-renata.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },

  // ── Manteles Redondos ───────────────────────────────────────────
  {
    id: 'mantel-charlotte',
    name: 'Mantel Charlotte',
    category: 'manteles-redondos',
    images: ['manteles-redondos/mantel-charlotte.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-eloise-azul',
    name: 'Mantel Eloise Azul',
    category: 'manteles-redondos',
    images: ['manteles-redondos/mantel-eloise-azul.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-eloise-lavanda',
    name: 'Mantel Eloise Lavanda',
    category: 'manteles-redondos',
    images: ['manteles-redondos/mantel-eloise-lavanda.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-eloise-rosado',
    name: 'Mantel Eloise Rosado',
    category: 'manteles-redondos',
    images: ['manteles-redondos/mantel-eloise-rosado.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-eloise-verde',
    name: 'Mantel Eloise Verde',
    category: 'manteles-redondos',
    images: ['manteles-redondos/mantel-eloise-verde.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-marie-blanco-redondo',
    name: 'Mantel Marie Blanco Redondo',
    category: 'manteles-redondos',
    images: ['manteles-redondos/mantel-marie-blanco-redondo.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },
  {
    id: 'mantel-perla-de-mar',
    name: 'Mantel Perla de Mar',
    category: 'manteles-redondos',
    images: ['manteles-redondos/mantel-perla-de-mar.png'],
    rentalPrice: 0,
    unit: 'por mesa',
    available: true,
  },

  // ── Servilletas ─────────────────────────────────────────────────
  {
    id: 'servilleta-atenea',
    name: 'Servilleta Atenea',
    category: 'servilletas',
    images: ['servilletas/servilleta-atenea.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'servilleta-bessette-navy',
    name: 'Servilleta Bessette Navy',
    category: 'servilletas',
    images: ['servilletas/servilleta-bessette-navy.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'servilleta-cecilia-verde-sage',
    name: 'Servilleta Cecilia Verde Sage',
    category: 'servilletas',
    images: ['servilletas/servilleta-cecilia-verde-sage.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'servilleta-fiore-azul',
    name: 'Servilleta Fioré Azul',
    category: 'servilletas',
    images: ['servilletas/servilleta-fiore-azul.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'servilleta-fiore-verde',
    name: 'Servilleta Fioré Verde',
    category: 'servilletas',
    images: ['servilletas/servilleta-fiore-verde.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'servilleta-sophie-baby-blue',
    name: 'Servilleta Sophie Baby Blue',
    category: 'servilletas',
    images: ['servilletas/servilleta-sophie-baby-blue.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'servilleta-sophie-blush',
    name: 'Servilleta Sophie Blush',
    category: 'servilletas',
    images: ['servilletas/servilleta-sophie-blush.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'servilleta-sophie-sage',
    name: 'Servilleta Sophie Sage',
    category: 'servilletas',
    images: ['servilletas/servilleta-sophie-sage.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },

  // ── Cristalería (Copas) ─────────────────────────────────────────
  {
    id: 'copa-aurora',
    name: 'Copa Aurora',
    category: 'cristaleria',
    images: ['cristaleria/copa-aurora.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'copa-champan-serena',
    name: 'Copa Champán Serena',
    category: 'cristaleria',
    images: ['cristaleria/copa-champan-serena.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'copa-champan-clair',
    name: 'Copa Champán Clair',
    category: 'cristaleria',
    images: ['cristaleria/copa-champan-clair.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'copa-charlotte',
    name: 'Copa Charlotte',
    category: 'cristaleria',
    images: ['cristaleria/copa-charlotte.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'copa-clarisse',
    name: 'Copa Clarisse',
    category: 'cristaleria',
    images: ['cristaleria/copa-clarisse.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'copa-elena',
    name: 'Copa Elena',
    category: 'cristaleria',
    images: ['cristaleria/copa-elena.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'copa-renaldi',
    name: 'Copa Renaldi',
    category: 'cristaleria',
    images: ['cristaleria/copa-renaldi.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },

  // ── Vajilla ─────────────────────────────────────────────────────
  {
    id: 'plato-sophia',
    name: 'Plato Sophia',
    category: 'vajilla',
    images: ['vajilla/plato-sophia.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },

  // ── Platos Base ─────────────────────────────────────────────────
  {
    id: 'individual-alejandra',
    name: 'Individual Alejandra',
    category: 'platos-base',
    images: ['platos-base/individual-alejandra.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'plato-mia-azul',
    name: 'Plato Mia Azul',
    category: 'platos-base',
    images: ['platos-base/plato-mia-azul.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'plato-mia-rosado',
    name: 'Plato Mia Rosado',
    category: 'platos-base',
    images: ['platos-base/plato-mia-rosado.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'plato-mia-silver',
    name: 'Plato Mia Silver',
    category: 'platos-base',
    images: ['platos-base/plato-mia-silver.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },

  // ── Cake Stand ──────────────────────────────────────────────────
  {
    id: 'clear-stand-cake',
    name: 'Clear Stand Cake',
    category: 'cake-stand',
    images: ['cake-stand/clear-stand-cake.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },

  // ── Mobiliario ──────────────────────────────────────────────────
  {
    id: 'columnas-acrilico',
    name: 'Columnas de Acrílico',
    category: 'mobiliario',
    images: ['mobiliario/columnas-acrilico.jpg'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'sombrilla-emily-verde-sage',
    name: 'Sombrilla Emily Verde Sage',
    category: 'mobiliario',
    images: ['mobiliario/sombrilla-emily-verde-sage.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'lampara-clair',
    name: 'Lámpara Clair',
    category: 'mobiliario',
    images: ['mobiliario/lampara-clair.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'lampara-lucille-dorada',
    name: 'Lámpara Lucille Dorada',
    category: 'mobiliario',
    images: ['mobiliario/lampara-lucille-dorada.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'lampara-lucille-plateada',
    name: 'Lámpara Lucille Plateada',
    category: 'mobiliario',
    images: ['mobiliario/lampara-lucille-plateada.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'lampara-nour',
    name: 'Lámpara Nour',
    category: 'mobiliario',
    images: ['mobiliario/lampara-nour.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
  {
    id: 'lampara-raquel',
    name: 'Lámpara Raquel',
    category: 'mobiliario',
    images: ['mobiliario/lampara-raquel.png'],
    rentalPrice: 0,
    unit: 'por unidad',
    available: true,
  },
];
