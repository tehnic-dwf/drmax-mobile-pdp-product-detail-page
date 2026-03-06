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

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-background max-w-[480px] mx-auto relative">
      <MobileHeader />

      <main>
        <ProductHeader />
        <ProductGallery />

        <div className="divide-y">
          <ProductVariants />
          <ProductBuyBox />
        </div>

        <div className="h-2 bg-background" />

        <TrustBadges />

        <BrandBanner />

        <div className="h-2 bg-background" />

        <ProductDetails />

        <div className="h-2 bg-background" />

        <ProductCarousels />

        <div className="h-2 bg-background" />

        <ProductReviews />

        <MedicalDisclaimer />

        <Footer />

        <div className="h-20" /> {/* Space for sticky bar */}
      </main>

      <StickyAddToCart />
    </div>
  );
};

export default ProductDetail;
