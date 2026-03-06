import { Droplets, ShieldCheck, Leaf } from "lucide-react";

const ingredients = [
  { icon: Droplets, name: "TRIBIOMA", desc: "Complex prebiotic patentat" },
  { icon: ShieldCheck, name: "PANTHENOL B5", desc: "Calmează și repară bariera" },
  { icon: Leaf, name: "MADECASSOSIDA", desc: "Reînnoire celulară naturală" },
];

const BrandBanner = () => (
  <div className="mx-4 my-4 rounded-xl overflow-hidden border" style={{ background: "linear-gradient(135deg, hsl(210 40% 96%), hsl(210 50% 98%))" }}>
    <div className="px-4 pt-4 pb-2">
      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(var(--drmax-blue))" }}>
        LA ROCHE-POSAY
      </p>
      <h3 className="text-sm font-bold text-foreground mt-1">
        De ce Cicaplast Baume B5+?
      </h3>
      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
        Formula multi-reparatoare testată clinic, cu 3 ingrediente active care accelerează regenerarea pielii de la prima aplicare.
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

export default BrandBanner;
