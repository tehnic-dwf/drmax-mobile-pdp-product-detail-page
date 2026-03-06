import { useState, useRef } from "react";
import { type Product } from "@/data/products";

type Props = { product: Product };

const ProductGallery = ({ product }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const images = product.images;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const itemWidth = scrollRef.current.offsetWidth * (images.length > 1 ? 0.8 : 1);
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative bg-card">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.promoBadge && (
          <span className="drmax-badge-promo">{product.promoBadge}</span>
        )}
        <span className="drmax-badge bg-drmax-blue text-white">{product.categoryBadge}</span>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start flex items-center justify-center px-6 py-6 min-h-[280px]"
            style={{ width: images.length > 1 ? "80%" : "100%" }}
          >
            <img
              src={img}
              alt={`${product.name} imagine ${i + 1}`}
              className="max-h-[260px] w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 pb-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (scrollRef.current) {
                  const itemWidth = scrollRef.current.offsetWidth * 0.8;
                  scrollRef.current.scrollTo({ left: itemWidth * i, behavior: "smooth" });
                }
              }}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? "bg-primary w-5" : "bg-border w-2"
              }`}
              aria-label={`Imagine ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
