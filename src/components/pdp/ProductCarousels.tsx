import { ChevronRight } from "lucide-react";

type CarouselProduct = {
  name: string;
  brand: string;
  price: string;
  oldPrice?: string;
  image: string;
  tag?: string;
  step?: string;
};

const routineProducts: CarouselProduct[] = [
  {
    step: "Pas 1 – Curățare",
    name: "Toleriane Dermo-Cleanser",
    brand: "La Roche-Posay",
    price: "62,99 Lei",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop",
    tag: "Rutină",
  },
  {
    step: "Pas 2 – Reparare",
    name: "Cicaplast Baume B5+",
    brand: "La Roche-Posay",
    price: "74,49 Lei",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop",
    tag: "Produsul curent",
  },
  {
    step: "Pas 3 – Protecție SPF",
    name: "Anthelios UV-MUNE 400 SPF50+",
    brand: "La Roche-Posay",
    price: "89,99 Lei",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
    tag: "Rutină",
  },
  {
    step: "Pas 4 – Hidratare noapte",
    name: "Cicaplast B5 Serum",
    brand: "La Roche-Posay",
    price: "109,99 Lei",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=200&h=200&fit=crop",
    tag: "Rutină",
  },
];

const crossSellProducts: CarouselProduct[] = [
  {
    name: "Serozinc Spray calmant",
    brand: "La Roche-Posay",
    price: "45,99 Lei",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop",
  },
  {
    name: "Pansamente sterile Cosmopor",
    brand: "Hartmann",
    price: "18,49 Lei",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=200&h=200&fit=crop",
  },
  {
    name: "Vitamina D3 2000UI",
    brand: "Solgar",
    price: "54,99 Lei",
    oldPrice: "64,99 Lei",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=200&h=200&fit=crop",
  },
  {
    name: "Apă termală 150ml",
    brand: "Avène",
    price: "39,99 Lei",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop",
  },
];

const upSellProducts: CarouselProduct[] = [
  {
    name: "Cicaplast Baume B5+ 100ml",
    brand: "La Roche-Posay",
    price: "74,49 Lei",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop",
    tag: "Cel mai vândut",
  },
  {
    name: "Cicaplast Gel B5 40ml",
    brand: "La Roche-Posay",
    price: "58,99 Lei",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
  },
  {
    name: "Bepanthen Plus cremă",
    brand: "Bayer",
    price: "42,99 Lei",
    oldPrice: "49,99 Lei",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop",
  },
  {
    name: "Bioderma Cicabio Crème",
    brand: "Bioderma",
    price: "65,99 Lei",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=200&h=200&fit=crop",
  },
];

const ProductCard = ({ product }: { product: CarouselProduct }) => (
  <div className="flex-shrink-0 w-[140px] snap-start">
    <div className="bg-card border rounded-xl overflow-hidden">
      <div className="relative aspect-square bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {product.tag && (
          <span
            className="absolute top-1.5 left-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full"
            style={{
              backgroundColor: product.tag === "Produsul curent" ? "hsl(var(--primary))" : "hsl(var(--drmax-orange))",
              color: "white",
            }}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-2.5">
        {product.step && (
          <p className="text-[9px] font-bold text-primary uppercase tracking-wide mb-0.5">{product.step}</p>
        )}
        <p className="text-[10px] text-muted-foreground">{product.brand}</p>
        <p className="text-xs font-semibold text-foreground leading-tight line-clamp-2 min-h-[2rem]">{product.name}</p>
        <div className="flex items-baseline gap-1 mt-1.5">
          <span className="text-xs font-bold" style={{ color: "hsl(var(--drmax-price))" }}>{product.price}</span>
          {product.oldPrice && (
            <span className="text-[10px] line-through text-muted-foreground">{product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

type CarouselSectionProps = {
  title: string;
  subtitle?: string;
  products: CarouselProduct[];
};

const CarouselSection = ({ title, subtitle, products }: CarouselSectionProps) => (
  <div className="py-4">
    <div className="px-4 mb-3">
      <div className="flex items-center justify-between">
        <h3 className="drmax-section-title">{title}</h3>
        <button className="flex items-center gap-0.5 text-xs font-semibold text-primary">
          Vezi tot <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
      {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
    </div>
    <div
      className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 pb-2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
    >
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  </div>
);

const ProductCarousels = () => {
  return (
    <div className="divide-y">
      <CarouselSection
        title="Schemă de folosire"
        subtitle="Rutina completă recomandată de dermatologi"
        products={routineProducts}
      />
      <CarouselSection
        title="Se potrivesc cu acest produs"
        subtitle="Clienții care au cumpărat acest produs au luat și"
        products={crossSellProducts}
      />
      <CarouselSection
        title="Alternative similare"
        subtitle="Creme reparatoare din aceeași categorie"
        products={upSellProducts}
      />
    </div>
  );
};

export default ProductCarousels;
