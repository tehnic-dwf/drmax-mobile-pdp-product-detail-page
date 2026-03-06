import { ShoppingCart } from "lucide-react";

const StickyAddToCart = () => {
  return (
    <div className="drmax-sticky-bar">
      <div className="flex items-center justify-between gap-3 max-w-[480px] mx-auto">
        <div className="flex-shrink-0">
          <span className="drmax-price-current text-xl">74,49</span>
          <span className="text-sm font-bold text-drmax-price ml-1">Lei</span>
        </div>
        <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-3 rounded-lg hover:bg-drmax-green-dark active:scale-[0.98] transition-all shadow-drmax-sm max-w-[220px]">
          <ShoppingCart className="w-4 h-4" />
          Adaugă în coș
        </button>
      </div>
    </div>
  );
};

export default StickyAddToCart;
