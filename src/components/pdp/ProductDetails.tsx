import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { type Product } from "@/data/products";

type Section = {
  title: string;
  content: React.ReactNode;
};

type Props = { product: Product };

const ProductDetails = ({ product }: Props) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const sections: Section[] = [
    {
      title: "Descriere și prospect",
      content: (
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">{product.name}</strong> — {product.description}
          </p>
          {product.bulletPoints && (
            <>
              <p className="font-medium text-foreground">Beneficii principale:</p>
              <ul className="grid grid-cols-1 gap-1 pl-4">
                {product.bulletPoints.map((item, i) => (
                  <li key={i} className="list-disc text-xs">{item}</li>
                ))}
              </ul>
            </>
          )}
          <a
            href="#"
            className="inline-flex items-center gap-1 text-primary font-semibold text-xs hover:underline mt-2"
            onClick={(e) => e.preventDefault()}
          >
            📄 Citește aici prospectul {product.name}
          </a>
        </div>
      ),
    },
    {
      title: "Specificații",
      content: (
        <div className="space-y-2">
          {product.specifications.map((spec, i) => (
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
            📋 Vezi fișa completă a produsului {product.name}
          </a>
        </div>
      ),
    },
  ];

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
