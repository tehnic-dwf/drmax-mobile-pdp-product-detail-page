import { Star, ChevronLeft } from "lucide-react";
import { type Product } from "@/data/products";

type Props = { product: Product; dynamicTitle?: string };

const ProductHeader = ({ product, dynamicTitle }: Props) => {
  const title = dynamicTitle || product.fullTitle;
  return (
    <div className="px-4 pt-3 pb-3 space-y-2.5">
      <nav className="flex items-center gap-1.5 text-sm">
        <ChevronLeft className="w-5 h-5 text-primary" />
        <a href="#" className="text-primary font-medium hover:underline">{product.subcategory}</a>
      </nav>

      <a href="#" className="inline-block text-sm font-bold text-drmax-blue uppercase tracking-wider">
        {product.brand}
      </a>

      <h1 className="text-[22px] font-bold leading-normal text-foreground">
        {title}
      </h1>

      {product.indications && product.indications.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap">
          {product.indications.map((ind, i) => (
            <span key={i} className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {ind}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        {product.category}
        {product.gammaName && (
          <> · Gama: <a href="#" className="text-primary font-medium">{product.gammaName}</a></>
        )}
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        <button className="flex items-center gap-1.5 group" aria-label="Vezi recenzii">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${
                  star <= Math.round(product.rating)
                    ? "fill-drmax-yellow text-drmax-yellow"
                    : "text-border"
                }`}
              />
            ))}
          </div>
          <span className="text-base font-semibold text-foreground">{product.rating}</span>
          <span className="text-sm text-primary font-medium group-hover:underline">
            ({product.reviewCount} recenzii)
          </span>
        </button>
        <span className="text-xs text-muted-foreground">·</span>
        <span className="text-xs text-muted-foreground font-medium">
          {product.purchasedCount} cumpărat luna asta
        </span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
          {product.trustBadge}
        </span>
        <span className="text-xs text-white bg-drmax-green px-2.5 py-1 rounded-full font-medium">
          ✓ Farmacie autorizată
        </span>
      </div>
    </div>
  );
};

export default ProductHeader;
