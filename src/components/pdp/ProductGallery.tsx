import { useState } from "react";
import productMain from "@/assets/product-cicaplast-main.webp";
import product2 from "@/assets/product-cicaplast-2.webp";
import product3 from "@/assets/product-cicaplast-3.webp";
import product4 from "@/assets/product-cicaplast-4.webp";
import product5 from "@/assets/product-cicaplast-5.webp";

const images = [productMain, product2, product3, product4, product5];

const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
    setTouchStart(null);
  };

  return (
    <div className="relative bg-card">
      {/* Badge promo */}
      <div className="absolute top-3 left-3 z-10">
        <span className="drmax-badge-promo">-15% REDUCERE</span>
      </div>

      {/* Main image */}
      <div
        className="flex items-center justify-center px-8 py-6 min-h-[300px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[activeIndex]}
          alt="Cicaplast B5+ 100ml"
          className="max-h-[280px] w-auto object-contain animate-fade-in"
          key={activeIndex}
        />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 pb-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex
                ? "bg-primary w-5"
                : "bg-border"
            }`}
            aria-label={`Imagine ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 px-4 pb-4 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 w-14 h-14 rounded-md border-2 overflow-hidden transition-all ${
              i === activeIndex
                ? "border-primary"
                : "border-border"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-contain p-1" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
