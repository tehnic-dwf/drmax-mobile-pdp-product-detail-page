import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { type Product } from "@/data/products";

type RecentlyViewedProps = {
  products: Product[];
};

const RecentlyViewed = ({ products }: RecentlyViewedProps) => {
  const navigate = useNavigate();

  if (products.length === 0) return null;

  return (
    <div className="py-4">
      <div className="px-4 mb-3">
        <div className="flex items-center justify-between">
          <h3 className="drmax-section-title">Vizualizate recent</h3>
          <button className="flex items-center gap-0.5 text-xs font-semibold text-primary">
            Vezi tot <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">Produse pe care le-ai răsfoit</p>
      </div>
      <div
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {products.map((product) => (
          <button
            key={product.slug}
            onClick={() => {
              navigate(`/product/${product.slug}`);
              window.scrollTo(0, 0);
            }}
            className="flex-shrink-0 w-[140px] snap-start text-left"
          >
            <div className="bg-card border rounded-xl overflow-hidden hover:shadow-drmax-md transition-shadow">
              <div className="relative aspect-square bg-muted flex items-center justify-center p-3">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
                {product.promoBadge && (
                  <span className="absolute top-1.5 left-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                    {product.promoBadge}
                  </span>
                )}
              </div>
              <div className="p-2.5">
                <p className="text-[10px] text-muted-foreground">{product.brand}</p>
                <p className="text-xs font-semibold text-foreground leading-tight line-clamp-2 min-h-[2rem]">
                  {product.name}
                </p>
                <div className="flex items-baseline gap-1 mt-1.5">
                  <span className="text-xs font-bold" style={{ color: "hsl(var(--drmax-price))" }}>
                    {product.price.toFixed(2).replace(".", ",")} Lei
                  </span>
                  {product.oldPrice && (
                    <span className="text-[10px] line-through text-muted-foreground">
                      {product.oldPrice.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
