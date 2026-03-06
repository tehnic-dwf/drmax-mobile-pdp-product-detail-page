import { useState, useRef } from "react";
import productMain from "@/assets/product-cicaplast-main.webp";
import product4 from "@/assets/product-cicaplast-4.webp";
import product2 from "@/assets/product-cicaplast-2.webp";
import product3 from "@/assets/product-cicaplast-3.webp";
import product5 from "@/assets/product-cicaplast-5.webp";

// Reordered: main, product3 (pos 4 → pos 2), then rest
const images = [productMain, product3, product4, product2, product5];

const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const itemWidth = scrollRef.current.offsetWidth * 0.8; // 80% width per image
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative bg-card">
      {/* Badge promo */}
      <div className="absolute top-3 left-3 z-10">
        <span className="drmax-badge-promo">-15% REDUCERE</span>
      </div>

      {/* Horizontal scroll gallery — 80% width so next image peeks */}
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
            style={{ width: "80%" }}
          >
            <img
              src={img}
              alt={`Cicaplast B5+ imagine ${i + 1}`}
              className="max-h-[260px] w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
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
    </div>
  );
};

export default ProductGallery;
