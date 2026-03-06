import { useState } from "react";
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react";

const ProductBuyBox = () => {
  const [qty, setQty] = useState(1);
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="px-4 py-4 space-y-3">
      {/* Stock status */}
      <div className="flex items-center justify-between">
        <span className="drmax-stock-label flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-drmax-success" />
          În stoc
        </span>
        <span className="text-xs text-muted-foreground">Cod EAN: 3337875816847</span>
      </div>

      {/* Price card */}
      <div className="bg-card rounded-xl border p-4 shadow-drmax-sm">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="drmax-price-current">74,49</span>
          <span className="text-base font-bold text-drmax-price">Lei</span>
        </div>
        <p className="text-xs text-muted-foreground">Preț / BUC: 74,49 Lei</p>
        <p className="text-[10px] text-muted-foreground mt-1">
          Prețul afișat este cu TVA și este valabil doar pentru comenzile online.
        </p>
      </div>

      {/* Qty + Add to cart */}
      <div className="flex gap-3">
        {/* Quantity */}
        <div className="flex items-center border rounded-lg overflow-hidden bg-card">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Scade cantitatea"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-10 text-center text-sm font-semibold text-foreground">{qty}</span>
          <button
            onClick={() => setQty(Math.min(6, qty + 1))}
            className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Crește cantitatea"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Add to cart button */}
        <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-3 rounded-lg hover:bg-drmax-green-dark active:scale-[0.98] transition-all shadow-drmax-sm">
          <ShoppingCart className="w-4 h-4" />
          Adaugă în coș
        </button>
      </div>

      {/* Wishlist */}
      <button
        onClick={() => setIsFav(!isFav)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors w-full justify-center py-1"
      >
        <Heart className={`w-4 h-4 ${isFav ? "fill-drmax-red text-drmax-red" : ""}`} />
        {isFav ? "Salvat la favorite" : "Adaugă la favorite"}
      </button>
    </div>
  );
};

export default ProductBuyBox;
