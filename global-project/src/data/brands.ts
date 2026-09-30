export interface Brand {
  name: string;
  slug: string;
  status: 'active' | 'coming-soon';
  specialization: string;
  logoUrl?: string;
}

export const activeBrands: Brand[] = [
  { name: 'Samsung', slug: 'samsung', status: 'active', specialization: 'QLED, Crystal UHD, Smart TV' },
  { name: 'LG', slug: 'lg', status: 'active', specialization: 'OLED, NanoCell, WebOS' },
  { name: 'Sony', slug: 'sony', status: 'active', specialization: 'Bravia, Android TV' },
  { name: 'Mi / Xiaomi', slug: 'mi', status: 'active', specialization: 'PatchWall, Mi TV' },
  { name: 'TCL', slug: 'tcl', status: 'active', specialization: 'QLED, Google TV' },
  { name: 'Vu', slug: 'vu', status: 'active', specialization: 'Premium Android TV' },
  { name: 'Panasonic', slug: 'panasonic', status: 'active', specialization: 'Viera, Smart TV' },
  { name: 'Haier', slug: 'haier', status: 'active', specialization: 'Bezelless, Google TV' },
  { name: 'Hisense', slug: 'hisense', status: 'active', specialization: 'ULED, VIDAA' },
  { name: 'Onida', slug: 'onida', status: 'active', specialization: 'LED, Smart TV' },
  { name: 'OnePlus', slug: 'oneplus', status: 'active', specialization: 'Q Series, Y Series' },
  { name: 'Philips', slug: 'philips', status: 'active', specialization: 'Ambilight, Android TV' },
  { name: 'Micromax', slug: 'micromax', status: 'active', specialization: 'LED, Smart TV' },
  { name: 'Realme', slug: 'realme', status: 'active', specialization: 'Smart TV, SLED' },
  { name: 'Sharp', slug: 'sharp', status: 'active', specialization: 'Aquos, Android TV' },
];

export const comingSoonBrands: Brand[] = [
  { name: 'Croma', slug: 'croma', status: 'coming-soon', specialization: 'Fire TV & Smart LED' },
  { name: 'BPL', slug: 'bpl', status: 'coming-soon', specialization: 'Smart LED Series' },
  { name: 'Iffalcon', slug: 'iffalcon', status: 'coming-soon', specialization: '4K UHD Android TV' },
  { name: 'Kodak', slug: 'kodak', status: 'coming-soon', specialization: 'Matrix & CA Pro Series' },
  { name: 'iPlus', slug: 'iplus', status: 'coming-soon', specialization: 'Smart LED Display' },
  { name: 'Acer', slug: 'acer', status: 'coming-soon', specialization: 'I-Series Google TV' },
  { name: 'Thomson', slug: 'thomson', status: 'coming-soon', specialization: 'OATHPRO 4K Smart TV' },
  { name: 'Intex', slug: 'intex', status: 'coming-soon', specialization: 'LED Smart Series' },
  { name: 'Lloyd', slug: 'lloyd', status: 'coming-soon', specialization: 'QLED & Android TV' },
  { name: 'Videocon', slug: 'videocon', status: 'coming-soon', specialization: 'Full HD LED TV' },
];

export const allBrands: Brand[] = [...activeBrands, ...comingSoonBrands];
