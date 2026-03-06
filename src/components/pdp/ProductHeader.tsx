import { Star } from "lucide-react";

const ProductHeader = () => {
  return (
    <div className="px-4 pt-4 pb-3 space-y-2">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
        <a href="#" className="hover:text-primary transition-colors">Farmacie</a>
        <span>/</span>
        <a href="#" className="hover:text-primary transition-colors">Frumusețe și îngrijire</a>
        <span>/</span>
        <a href="#" className="hover:text-primary transition-colors">Dermatocosmetice</a>
        <span>/</span>
        <span className="text-foreground font-medium truncate">Cicaplast B5+</span>
      </nav>

      {/* Brand */}
      <a href="#" className="inline-block text-xs font-semibold text-primary uppercase tracking-wide">
        LA ROCHE-POSAY
      </a>

      {/* Title */}
      <h1 className="text-lg font-bold leading-snug text-foreground">
        Balsam ultra-reparator calmant Cicaplast B5+, 100ml
      </h1>

      {/* Gama */}
      <p className="text-xs text-muted-foreground">
        Gama: <a href="#" className="text-primary font-medium">Cicaplast</a>
      </p>

      {/* Rating */}
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
        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
          (2 recenzii)
        </span>
      </button>
    </div>
  );
};

export default ProductHeader;
