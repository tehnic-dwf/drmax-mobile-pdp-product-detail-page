import { Droplets, ShieldCheck, Leaf, Pill, Zap, Brain } from "lucide-react";
import { type Product } from "@/data/products";

type Props = { product: Product };

const ingredientsBySlug: Record<string, { icon: typeof Droplets; name: string; desc: string }[]> = {
  "balsam-ultra-reparator-calmant-cicaplast-b5-100ml-la-roche-posay": [
    { icon: Droplets, name: "TRIBIOMA", desc: "Complex prebiotic patentat" },
    { icon: ShieldCheck, name: "PANTHENOL B5", desc: "Calmează și repară bariera" },
    { icon: Leaf, name: "MADECASSOSIDA", desc: "Reînnoire celulară naturală" },
  ],
  "sideral-forte-30-capsule-labormed": [
    { icon: Pill, name: "FIER SUCROSOMIAL", desc: "Absorbție superioară, fără efecte gastrice" },
    { icon: ShieldCheck, name: "VITAMINA C", desc: "Crește absorbția fierului" },
    { icon: Leaf, name: "VITAMINA B12", desc: "Formarea globulelor roșii" },
  ],
  "tonotil-n-10-flacoane-buvabile-vianex": [
    { icon: Brain, name: "FOSFOSERINĂ", desc: "Biosinteza fosfolipidelor nervoase" },
    { icon: Zap, name: "L-ARGININĂ", desc: "Energie celulară și hematopoieză" },
    { icon: Pill, name: "HIDROXOCOBALAMINĂ", desc: "Vitamina B12 activă" },
  ],
};

const BrandBanner = ({ product }: Props) => {
  const ingredients = ingredientsBySlug[product.slug] || ingredientsBySlug["sideral-forte-30-capsule-labormed"];

  return (
    <div className="mx-4 my-4 rounded-xl overflow-hidden border" style={{ background: "linear-gradient(135deg, hsl(210 40% 96%), hsl(210 50% 98%))" }}>
      <div className="px-4 pt-4 pb-2">
        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(var(--drmax-blue))" }}>
          {product.brand}
        </p>
        <h3 className="text-sm font-bold text-foreground mt-1">
          De ce {product.name}?
        </h3>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          {product.description}
        </p>
      </div>
      <div className="flex gap-2 px-4 pb-4 pt-2">
        {ingredients.map((item, i) => (
          <div key={i} className="flex-1 bg-card rounded-lg p-2.5 text-center border">
            <item.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
            <p className="text-[9px] font-bold text-foreground uppercase tracking-wide">{item.name}</p>
            <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandBanner;
