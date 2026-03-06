import { useState } from "react";

const variants = [
  { label: "15ml", available: false, image: null },
  { label: "40ml", available: true, image: null },
  { label: "100ml", available: true, image: null },
];

const ProductVariants = () => {
  const [selected, setSelected] = useState(2); // 100ml selected

  return (
    <div className="px-4 py-3">
      <p className="text-sm font-medium text-foreground mb-2">Alege cantitatea:</p>
      <div className="flex gap-2">
        {variants.map((v, i) => (
          <button
            key={i}
            disabled={!v.available}
            onClick={() => v.available && setSelected(i)}
            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold border-2 transition-all ${
              i === selected
                ? "border-primary bg-secondary text-secondary-foreground"
                : v.available
                ? "border-border bg-card text-foreground hover:border-primary/50"
                : "border-border bg-muted text-muted-foreground opacity-50 line-through cursor-not-allowed"
            }`}
          >
            {v.label}
            {!v.available && (
              <span className="block text-[10px] font-normal no-underline" style={{ textDecoration: "none" }}>
                Stoc epuizat
              </span>
            )}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-1.5">2 variante disponibile din 3</p>
    </div>
  );
};

export default ProductVariants;
