import { Truck, RotateCcw, ShieldCheck, Store } from "lucide-react";

const trustItems = [
  {
    icon: Truck,
    label: "Livrare gratuită",
    detail: "peste 149 Lei",
  },
  {
    icon: Store,
    label: "Click & Collect",
    detail: "gratuit în farmacii",
  },
  {
    icon: RotateCcw,
    label: "Retur gratuit",
    detail: "în 14 zile",
  },
  {
    icon: ShieldCheck,
    label: "Produse originale",
    detail: "conforme UE",
  },
];

const TrustBadges = () => {
  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-2 gap-2">
        {trustItems.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-2.5 bg-secondary rounded-lg p-3"
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
