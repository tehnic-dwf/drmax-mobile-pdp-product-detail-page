import { useState } from "react";
import { Heart, ShoppingCart, Minus, Plus, Clock, Truck, Bell } from "lucide-react";

const ProductBuyBox = () => {
  const [qty, setQty] = useState(1);
  const [isFav, setIsFav] = useState(false);

  // Simulated urgency timer
  const hoursLeft = 3;
  const minutesLeft = 42;

  return (
    <div className="px-4 py-4 space-y-3">
      {/* Stock status + delivery estimate (audit fix) */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="drmax-stock-label flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-drmax-success" />
            În stoc
          </span>
          <span className="text-xs text-muted-foreground">EAN: 3337875816847</span>
        </div>
        {/* Delivery urgency microcopy (audit: reduces procrastination) */}
        <div className="flex items-center gap-1.5 text-xs">
          <Truck className="w-3.5 h-3.5 text-primary" />
          <span className="text-muted-foreground">
            Comandă în <strong className="text-foreground">{hoursLeft}h {minutesLeft}min</strong> pentru livrare <strong className="text-primary">Mâine</strong>
          </span>
        </div>
      </div>

      {/* Price card */}
      <div className="bg-card rounded-xl border p-4 shadow-drmax-sm">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-baseline gap-2">
            <span className="drmax-price-current">74,49</span>
            <span className="text-base font-bold text-drmax-price">Lei</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Preț / BUC: 74,49 Lei · incl. TVA</p>

        {/* Loyalty price (audit: make loyalty benefit visible) */}
        <div className="mt-2 flex items-center gap-2 bg-drmax-green-light rounded-lg px-3 py-2">
          <span className="text-[10px] font-bold text-primary bg-card px-1.5 py-0.5 rounded">CARD</span>
          <span className="text-xs text-foreground">
            Cu card Dr.Max: <strong className="text-primary">66,99 Lei</strong>
            <span className="text-muted-foreground ml-1">(-10%)</span>
          </span>
        </div>
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
        <button id="main-add-to-cart" className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-drmax-sm">
          <ShoppingCart className="w-4 h-4" />
          Adaugă în coș
        </button>
      </div>

      {/* Loyalty points gamification (audit: gamification) */}
      <p className="text-center text-[11px] text-muted-foreground">
        🎁 Câștigi <strong className="text-primary">74 puncte</strong> de loialitate la această comandă
      </p>

      {/* Secondary actions */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => setIsFav(!isFav)}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
        >
          <Heart className={`w-4 h-4 ${isFav ? "fill-drmax-red text-drmax-red" : ""}`} />
          {isFav ? "Salvat" : "Favorite"}
        </button>
        <div className="w-px h-4 bg-border" />
        <button
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
        >
          <Bell className="w-4 h-4" />
          Alertă de preț
        </button>
      </div>
    </div>
  );
};

export default ProductBuyBox;
