import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Section = {
  title: string;
  content: React.ReactNode;
};

const sections: Section[] = [
  {
    title: "Descriere și prospect",
    content: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">CICAPLAST BAUME B5+</strong> — Balsam reparator cu indicații multiple,
          ce accelerează repararea de la prima utilizare, calmează și protejează pielea iritată.
        </p>
        <p>
          Este testat pentru 15 indicații, fiind potrivit pentru întreaga familie, de la bebeluși la seniori.
          Formula sa complexă este special creată pentru a răspunde nevoilor pielii iritate sau fragilizate.
        </p>
        <p className="font-medium text-foreground">Testat pentru 15 probleme ale pielii:</p>
        <ul className="grid grid-cols-1 gap-1 pl-4">
          {[
            "Post-tatuare", "Iritații superficiale", "Mușcături insecte",
            "Semne post-acnee", "Post-epilare", "Post-proceduri dermatologice",
            "Post-laser", "Post-peeling", "Xeroza",
          ].map((item, i) => (
            <li key={i} className="list-disc text-xs">{item}</li>
          ))}
        </ul>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-primary font-semibold text-xs hover:underline mt-2"
          onClick={(e) => e.preventDefault()}
        >
          📄 Citește aici prospectul CICAPLAST BAUME B5+
        </a>
      </div>
    ),
  },
  {
    title: "Eficacitate dovedită",
    content: (
      <div className="space-y-3">
        {[
          { pct: "100%", text: "bebeluși au pielea calmată", note: "utilizare 2x/zi, 4 săptămâni" },
          { pct: "97%", text: "confort după tratament laser", note: "42 persoane, 7 zile" },
          { pct: "-90%", text: "senzație de durere și mâncărime", note: "54 persoane, după o utilizare" },
          { pct: "-74%", text: "crăpături superficiale", note: "54 persoane, 7 zile" },
        ].map((stat, i) => (
          <div key={i} className="flex gap-3 items-start bg-card border rounded-lg p-3">
            <span className="text-xl font-extrabold text-primary flex-shrink-0 min-w-[60px]">
              {stat.pct}
            </span>
            <div>
              <p className="text-sm font-medium text-foreground leading-tight">{stat.text}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{stat.note}</p>
            </div>
          </div>
        ))}
        <a
          href="#"
          className="inline-flex items-center gap-1 text-primary font-semibold text-xs hover:underline mt-2"
          onClick={(e) => e.preventDefault()}
        >
          📊 Vezi toate rezultatele clinice pentru CICAPLAST BAUME B5+
        </a>
      </div>
    ),
  },
  {
    title: "Ingrediente & inovație",
    content: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <div className="bg-secondary rounded-lg p-3">
          <p className="font-bold text-foreground text-xs uppercase tracking-wide mb-1">TRIBIOMA</p>
          <p className="text-xs leading-relaxed">
            Complex prebiotic patentat ce conține zaharuri, extracte vegetale și fermenți. 
            Ajută la reechilibrarea microbiomului pielii fragilizate.
          </p>
        </div>
        <div className="bg-secondary rounded-lg p-3">
          <p className="font-bold text-foreground text-xs uppercase tracking-wide mb-1">PANTHENOL (B5)</p>
          <p className="text-xs leading-relaxed">
            Ingredient activ renumit pentru beneficiile sale de calmare și reparare a barierei cutanate.
          </p>
        </div>
        <div className="bg-secondary rounded-lg p-3">
          <p className="font-bold text-foreground text-xs uppercase tracking-wide mb-1">MADECASSOSIDA</p>
          <p className="text-xs leading-relaxed">
            Extras din planta medicinală Centella Asiatica, accelerează reînnoirea celulară cu efect calmant.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-primary font-semibold text-xs hover:underline mt-2"
          onClick={(e) => e.preventDefault()}
        >
          🧪 Descoperă toate ingredientele active din CICAPLAST BAUME B5+
        </a>
      </div>
    ),
  },
  {
    title: "Specificații",
    content: (
      <div className="space-y-2">
        {[
          { label: "Brand", value: "La Roche-Posay" },
          { label: "Gamă", value: "Cicaplast" },
          { label: "EAN", value: "3337875816847" },
          { label: "Pentru cine", value: "Unisex" },
          { label: "Producător", value: "L'Oréal România SRL" },
        ].map((spec, i) => (
          <div key={i} className="flex justify-between py-2 border-b last:border-0">
            <span className="text-xs text-muted-foreground">{spec.label}</span>
            <span className="text-xs font-medium text-foreground">{spec.value}</span>
          </div>
        ))}
        <a
          href="#"
          className="inline-flex items-center gap-1 text-primary font-semibold text-xs hover:underline mt-2"
          onClick={(e) => e.preventDefault()}
        >
          📋 Vezi fișa completă a produsului CICAPLAST BAUME B5+
        </a>
      </div>
    ),
  },
];

const ProductDetails = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  return (
    <div className="px-4 py-4">
      <div className="space-y-2">
        {sections.map((section, i) => (
          <div key={i} className="border rounded-xl overflow-hidden bg-card">
            <button
              onClick={() => setOpenIndexes(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
              className="flex items-center justify-between w-full px-4 py-3.5 text-left"
            >
              <span className="drmax-section-title">{section.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform ${
                  openIndexes.includes(i) ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndexes.includes(i) && (
              <div className="px-4 pb-4 animate-fade-in">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
