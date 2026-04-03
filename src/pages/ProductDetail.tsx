import { useState } from "react";
import { useParams } from "react-router-dom";
import MobileHeader from "@/components/pdp/MobileHeader";
import ProductGallery from "@/components/pdp/ProductGallery";
import ProductHeader from "@/components/pdp/ProductHeader";
import ProductVariants from "@/components/pdp/ProductVariants";
import ProductBuyBox from "@/components/pdp/ProductBuyBox";
import TrustBadges from "@/components/pdp/TrustBadges";
import ProductDetails from "@/components/pdp/ProductDetails";
import ProductReviews from "@/components/pdp/ProductReviews";
import StickyAddToCart from "@/components/pdp/StickyAddToCart";
import ProductCarousels from "@/components/pdp/ProductCarousels";
import BrandBanner from "@/components/pdp/BrandBanner";
import MedicalDisclaimer from "@/components/pdp/MedicalDisclaimer";
import Footer from "@/components/pdp/Footer";
import RecentlyViewed from "@/components/pdp/RecentlyViewed";
import { getProductBySlug, getOtherProducts, products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const currentSlug = slug || products[0].slug;
  const product = getProductBySlug(currentSlug);
  const otherProducts = getOtherProducts(currentSlug);

  const defaultVariant = product?.variants?.findIndex((v) => v.available) ?? 0;
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant >= 0 ? defaultVariant : 0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background max-w-[480px] mx-auto flex items-center justify-center">
        <p className="text-muted-foreground">Produsul nu a fost găsit.</p>
      </div>
    );
  }

  // Dynamically replace size in title based on selected variant
  const selectedLabel = product.variants?.[selectedVariant]?.label;
  const dynamicTitle = selectedLabel
    ? product.fullTitle.replace(/\d+ml/i, selectedLabel)
    : product.fullTitle;

  return (
    <div className="min-h-screen bg-background max-w-[480px] mx-auto relative" key={currentSlug}>
      <MobileHeader />

      <main>
        <ProductHeader product={product} dynamicTitle={dynamicTitle} />
        <ProductGallery product={product} />

        <div className="divide-y">
          {product.hasVariants && product.variants && (
            <ProductVariants
              variants={product.variants}
              selected={selectedVariant}
              onSelect={setSelectedVariant}
            />
          )}
          <ProductBuyBox product={product} />
        </div>

        <div className="h-2 bg-background" />

        <TrustBadges />

        <BrandBanner product={product} />

        <div className="h-2 bg-background" />

        <ProductDetails product={product} />

        <div className="h-2 bg-background" />

        <ProductCarousels />

        <div className="h-2 bg-background" />

        <ProductReviews product={product} />

        <div className="h-2 bg-background" />

        <RecentlyViewed products={otherProducts} />

        <MedicalDisclaimer />

        <Footer />

        <div className="h-20" />
      </main>

      <StickyAddToCart product={product} />
    </div>
  );
};

export default ProductDetail;
