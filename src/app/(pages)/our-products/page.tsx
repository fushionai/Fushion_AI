import ProductsHeroSection from "@/components/products-page-components/ProductsHeroSection";
import PropertySection from "@/components/products-page-components/PropertySection";
import ProductsOurServices from "@/components/products-page-components/ProductsOurServices";

const OurProductsPage = () => {
  return (
    <>
      <ProductsHeroSection />
      <PropertySection />
      <ProductsOurServices />

      {/* Footer Styling */}
      <div className={`bg-[#161527] h-28 relative`}>
        <div className="absolute w-full h-12 md:h-16 bg-white">
          <div
            className="absolute inset-0 w-full h-full bg-[#161527]"
            style={{
              clipPath:
                "polygon(95.31% 46.92%, 100.45% 46.92%, 100.45% 100%, 0% 100%, 0% 0%, 10.24% 0%, 65.8% 0%, 68.89% 73.85%, 93.99% 73.85%, 95.31% 46.92%)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default OurProductsPage;
