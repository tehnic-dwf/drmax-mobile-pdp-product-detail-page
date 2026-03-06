import { Star, ChevronLeft } from "lucide-react";

const ProductHeader = () => {
  return (
    <div className="px-4 pt-3 pb-3 space-y-2">
      {/* Compact mobile breadcrumb (audit fix: simplified navigation) */}
      <nav className="flex items-center gap-1.5 text-xs">
        <ChevronLeft className="w-4 h-4 text-primary" />
        <a href="#" className="text-primary font-medium hover:underline">Dermatocosmetice</a>
      </nav>

      {/* Brand first (audit: Brand > Title > Social Proof hierarchy) */}
      <a href="#" className="inline-block text-xs font-bold text-drmax-blue uppercase tracking-wider">
        LA ROCHE-POSAY
      </a>

      {/* Title */}
      <h1 className="text-lg font-bold leading-snug text-foreground">
        Balsam ultra-reparator calmant Cicaplast B5+, 100ml
      </h1>

      {/* Category + Gama */}
      <p className="text-xs text-muted-foreground">
        Frumusete si ingrijire · Gama: <a href="#" className="text-primary font-medium">Cicaplast</a>
      </p>

      {/* Rating + Social proof (audit: enhance trust when few reviews) */}
      <div className="flex items-center gap-3 flex-wrap">
        <button className="flex items-center gap-1.5 group" aria-label="Vezi recenzii">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 fill-drmax-yellow text-drmax-yellow"
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">5.0</span>
          <span className="text-xs text-primary font-medium group-hover:underline">
            (2 recenzii)
          </span>
        </button>
        {/* Additional trust signal for low review count */}
        <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
          ✓ Recomandat de dermatologi
        </span>
      </div>
    </div>
  );
};

export default ProductHeader;
