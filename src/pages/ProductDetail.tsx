import MobileHeader from "@/components/pdp/MobileHeader";
import ProductGallery from "@/components/pdp/ProductGallery";
import ProductHeader from "@/components/pdp/ProductHeader";
import ProductVariants from "@/components/pdp/ProductVariants";
import ProductBuyBox from "@/components/pdp/ProductBuyBox";
import TrustBadges from "@/components/pdp/TrustBadges";
import ProductDetails from "@/components/pdp/ProductDetails";
import ProductReviews from "@/components/pdp/ProductReviews";
import StickyAddToCart from "@/components/pdp/StickyAddToCart";

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-background max-w-[480px] mx-auto relative">
      <MobileHeader />

      <main>
        <ProductGallery />

        <div className="divide-y">
          <ProductHeader />
          <ProductVariants />
          <ProductBuyBox />
        </div>

        <div className="h-2 bg-background" />

        <TrustBadges />

        <div className="h-2 bg-background" />

        <ProductDetails />

        <div className="h-2 bg-background" />

        <ProductReviews />
      </main>

      <StickyAddToCart />
    </div>
  );
};

export default ProductDetail;
