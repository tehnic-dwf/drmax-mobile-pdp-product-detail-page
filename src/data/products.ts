export type Product = {
  slug: string;
  name: string;
  fullTitle: string;
  brand: string;
  brandSlug: string;
  category: string;
  subcategory: string;
  gammaName?: string;
  gammaSlug?: string;
  rating: number;
  reviewCount: number;
  purchasedCount: string;
  price: number;
  oldPrice?: number;
  pricePerUnit: string;
  loyaltyPrice?: number;
  loyaltyDiscount?: string;
  loyaltyPoints: number;
  stockStatus: "in-stock" | "low-stock" | "out-of-stock";
  stockCount?: number;
  ean: string;
  categoryBadge: string;
  promoBadge?: string;
  mainImage: string;
  images: string[];
  hasVariants: boolean;
  variants?: { label: string; available: boolean }[];
  description: string;
  bulletPoints?: string[];
  specifications: { label: string; value: string }[];
  trustBadge: string;
  indications?: string[];
};

// Lazy image imports
import productCicaplastMain from "@/assets/product-cicaplast-main.webp";
import productCicaplast2 from "@/assets/product-cicaplast-2.webp";
import productCicaplast3 from "@/assets/product-cicaplast-3.webp";
import productCicaplast4 from "@/assets/product-cicaplast-4.webp";
import productCicaplast5 from "@/assets/product-cicaplast-5.webp";
import productSideralMain from "@/assets/product-sideral-main.webp";
import productTonotilMain from "@/assets/product-tonotil-main.webp";

export const products: Product[] = [
  {
    slug: "balsam-ultra-reparator-calmant-cicaplast-b5-100ml-la-roche-posay",
    name: "Cicaplast Baume B5+",
    fullTitle: "Balsam ultra-reparator calmant Cicaplast B5+, 100ml, La Roche-Posay",
    brand: "LA ROCHE-POSAY",
    brandSlug: "la-roche-posay",
    category: "Frumusete si ingrijire",
    subcategory: "Dermatocosmetice",
    gammaName: "Cicaplast",
    gammaSlug: "cicaplast",
    rating: 5.0,
    reviewCount: 2,
    purchasedCount: "1.2k",
    price: 74.49,
    oldPrice: 87.99,
    pricePerUnit: "74,49 Lei / BUC",
    loyaltyPrice: 66.99,
    loyaltyDiscount: "-24%",
    loyaltyPoints: 74,
    stockStatus: "low-stock",
    stockCount: 5,
    ean: "3337875816847",
    categoryBadge: "Dermato Cosmetice",
    promoBadge: "-15% REDUCERE",
    mainImage: productCicaplastMain,
    images: [productCicaplastMain, productCicaplast3, productCicaplast4, productCicaplast2, productCicaplast5],
    hasVariants: true,
    variants: [
      { label: "15ml", available: false },
      { label: "40ml", available: true },
      { label: "100ml", available: true },
    ],
    indications: ["Iritații ale pielii", "Cicatrici", "Post-proceduri dermatologice"],
    description: "Balsam reparator cu indicații multiple, ce accelerează repararea de la prima utilizare, calmează și protejează pielea iritată.",
    bulletPoints: [
      "Post-tatuare", "Iritații superficiale", "Mușcături insecte",
      "Semne post-acnee", "Post-epilare", "Post-proceduri dermatologice",
      "Post-laser", "Post-peeling", "Xeroza",
    ],
    specifications: [
      { label: "Brand", value: "La Roche-Posay" },
      { label: "Gamă", value: "Cicaplast" },
      { label: "EAN", value: "3337875816847" },
      { label: "Pentru cine", value: "Unisex" },
      { label: "Producător", value: "L'Oréal România SRL" },
    ],
    trustBadge: "✓ Recomandat de dermatologi",
  },
  {
    slug: "sideral-forte-30-capsule-labormed",
    name: "Sideral Forte",
    fullTitle: "Sideral Forte, 30 capsule, Labormed",
    brand: "LABORMED",
    brandSlug: "labormed",
    category: "Suplimente alimentare",
    subcategory: "Multivitamine și minerale",
    rating: 3.7,
    reviewCount: 3,
    purchasedCount: "850",
    price: 148.49,
    pricePerUnit: "4,95 Lei / CPS",
    loyaltyPoints: 148,
    stockStatus: "in-stock",
    ean: "5944719011337",
    categoryBadge: "Supliment alimentar",
    mainImage: productSideralMain,
    images: [productSideralMain],
    hasVariants: false,
    description: "Fierul este un mineral prezent în fiecare celulă a organismului, având concentrația maximă în sânge. Fierul contribuie la formarea normală a globulelor roșii și a hemoglobinei, precum și la transportul normal al oxigenului în corp, precum și la funcția cognitivă și la dezvoltarea cognitivă normală a copiilor.",
    bulletPoints: [
      "Contribuie la formarea normală a globulelor roșii",
      "Transport normal al oxigenului în corp",
      "Funcție cognitivă normală",
      "Reducerea oboselii și extenuării",
      "Funcționarea normală a sistemului imunitar",
    ],
    specifications: [
      { label: "Brand", value: "Labormed" },
      { label: "EAN", value: "5944719011337" },
      { label: "Formă", value: "Capsule" },
      { label: "Cantitate", value: "30 capsule" },
      { label: "Categorie", value: "Multivitamine adulți" },
    ],
    trustBadge: "✓ Supliment alimentar notificat",
  },
  {
    slug: "tonotil-n-10-flacoane-buvabile-vianex",
    name: "Tonotil-N",
    fullTitle: "Tonotil-N, 10 flacoane buvabile, Vianex",
    brand: "VIANEX",
    brandSlug: "vianex",
    category: "Medicamente fara reteta",
    subcategory: "Vitamine și minerale",
    rating: 4.5,
    reviewCount: 12,
    purchasedCount: "2.1k",
    price: 57.49,
    pricePerUnit: "5,75 Lei / FL",
    loyaltyPoints: 57,
    stockStatus: "in-stock",
    ean: "5200126100011",
    categoryBadge: "OTC – Fără rețetă",
    mainImage: productTonotilMain,
    images: [productTonotilMain],
    hasVariants: false,
    description: "Tonifică organismul, stimulează apetitul, înlătură oboseala fizică și psihică, combate surmenajul, elimină stresul și ajută la recuperarea după intervenții chirurgicale și în convalescență.",
    bulletPoints: [
      "Tonifiant general al organismului",
      "Stimulează apetitul",
      "Combate oboseala fizică și psihică",
      "Ajută în convalescență",
      "Aminoacizi esențiali + Hidroxocobalamină",
      "Sigur pentru copii, adulți și vârstnici",
    ],
    specifications: [
      { label: "Brand", value: "Vianex" },
      { label: "EAN", value: "5200126100011" },
      { label: "Formă", value: "Flacoane buvabile" },
      { label: "Cantitate", value: "10 flacoane x 10ml" },
      { label: "Categorie", value: "Medicamente OTC" },
    ],
    trustBadge: "✓ Medicament fără rețetă (OTC)",
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getOtherProducts = (currentSlug: string): Product[] =>
  products.filter((p) => p.slug !== currentSlug);
