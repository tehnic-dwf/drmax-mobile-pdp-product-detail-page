import { useState } from "react";
import { Heart, ShoppingCart, Minus, Plus, Clock, Truck, Bell } from "lucide-react";
import { type Product } from "@/data/products";

type Props = { product: Product };

const ProductBuyBox = ({ product }: Props) => {
  const [qty, setQty] = useState(1);
  const [isFav, setIsFav] = useState(false);

  const hoursLeft = 3;
  const minutesLeft = 42;
  const savings = product.oldPrice ? (product.oldPrice - product.price).toFixed(2).replace(".", ",") : null;
  const discountPct = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null;

  return (
    <div className="px-4 py-4 space-y-3">
      {/* Stock status + urgency */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="drmax-stock-label flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${product.stockStatus === "out-of-stock" ? "bg-drmax-red" : "bg-drmax-success"} ${product.stockStatus === "low-stock" ? "animate-pulse" : ""}`} />
            {product.stockStatus === "out-of-stock" ? "Stoc epuizat" : "În stoc"}
          </span>
          {product.stockStatus === "low-stock" && product.stockCount && (
            <span className="text-[10px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
              ⚡ Ultimele {product.stockCount} bucăți
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <Truck className="w-3.5 h-3.5 text-primary" />
          <span className="text-muted-foreground">
            Comandă în <strong className="text-foreground">{hoursLeft}h {minutesLeft}min</strong> pentru livrare <strong className="text-primary">Mâine</strong>
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <Clock className="w-3.5 h-3.5 text-primary" />
          <span className="text-muted-foreground">
            Ridicare din farmacie: <strong className="text-foreground">Azi, după 14:00</strong>
          </span>
        </div>
      </div>

      {/* Price card */}
      <div className="bg-card rounded-xl border p-4 shadow-drmax-sm">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-baseline gap-2">
            {product.oldPrice && (
              <span className="drmax-price-old">{product.oldPrice.toFixed(2).replace(".", ",")}</span>
            )}
            <span className="drmax-price-current">{product.price.toFixed(2).replace(".", ",")}</span>
            <span className="text-base font-bold text-drmax-price">Lei</span>
          </div>
        </div>
        {savings && discountPct && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold text-white bg-accent px-2 py-0.5 rounded-full">
              -{discountPct}% · Economisești {savings} Lei
            </span>
          </div>
        )}
        <p className="text-xs text-muted-foreground">Preț: {product.pricePerUnit} · incl. TVA</p>

        {/* Loyalty points */}
        <div className="mt-2 flex items-center gap-2 bg-drmax-yellow/10 rounded-lg px-3 py-2 border border-drmax-yellow/30">
          <span className="text-sm">🎁</span>
          <span className="text-xs text-foreground">
            Câștigi <strong className="text-drmax-orange">+{product.loyaltyPoints} puncte DrMax</strong> la această comandă
          </span>
        </div>

        {/* Loyalty price */}
        {product.loyaltyPrice && (
          <div className="mt-2 flex items-center gap-2 bg-drmax-green-light rounded-lg px-3 py-2">
            <span className="text-[10px] font-bold text-primary bg-card px-1.5 py-0.5 rounded">CARD</span>
            <span className="text-xs text-foreground">
              Cu card Dr.Max: <strong className="text-primary">{product.loyaltyPrice.toFixed(2).replace(".", ",")} Lei</strong>
              {product.loyaltyDiscount && (
                <span className="text-muted-foreground ml-1">({product.loyaltyDiscount})</span>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Qty + Add to cart */}
      <div className="flex gap-3">
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

        <button id="main-add-to-cart" className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-drmax-sm">
          <ShoppingCart className="w-4 h-4" />
          Adaugă în coș
        </button>
      </div>

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
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
          <Bell className="w-4 h-4" />
          Alertă de preț
        </button>
      </div>
    </div>
  );
};

export default ProductBuyBox;
