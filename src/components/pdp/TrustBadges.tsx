import { Truck, RotateCcw, ShieldCheck, Store, BadgeCheck } from "lucide-react";

const trustItems = [
  {
    icon: Truck,
    label: "Livrare gratuită",
    detail: "la comenzi peste 149 Lei",
  },
  {
    icon: Store,
    label: "Click & Collect",
    detail: "gratuit din 900+ farmacii",
  },
  {
    icon: RotateCcw,
    label: "Retur gratuit",
    detail: "în 14 zile, fără întrebări",
  },
  {
    icon: ShieldCheck,
    label: "Produse originale",
    detail: "verificate, conforme UE",
  },
];

const TrustBadges = () => {
  return (
    <div className="px-4 py-4">
      {/* Authority badges (audit: dermato-cosmetic specific trust) */}
      <div
        className="flex gap-2 mb-3 overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {["Testat dermatologic", "Fără parabeni", "Produs original"].map((badge, i) => (
          <span
            key={i}
            className="flex items-center gap-1 whitespace-nowrap text-[11px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
            style={{
              backgroundColor: "hsl(var(--drmax-orange) / 0.12)",
              color: "hsl(var(--drmax-orange))",
            }}
          >
            <BadgeCheck className="w-3.5 h-3.5" />
            {badge}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {trustItems.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-2.5 bg-card border rounded-lg p-3"
          >
            <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-foreground leading-tight">{item.label}</p>
              <p className="text-[10px] text-muted-foreground">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
