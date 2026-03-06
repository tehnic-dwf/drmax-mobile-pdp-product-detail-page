import { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";

const StickyAddToCart = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the main add-to-cart button in the page
      const mainBtn = document.getElementById("main-add-to-cart");
      if (mainBtn) {
        const rect = mainBtn.getBoundingClientRect();
        // Show sticky bar when main button is scrolled out of view
        setVisible(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`drmax-sticky-bar transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3 max-w-[480px] mx-auto">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground truncate">Cicaplast B5+ 100ml</p>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-extrabold text-drmax-price">74,49</span>
            <span className="text-sm font-bold text-drmax-price">Lei</span>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-3 px-6 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-drmax-sm">
          <ShoppingCart className="w-4 h-4" />
          Adaugă în coș
        </button>
      </div>
    </div>
  );
};

export default StickyAddToCart;
