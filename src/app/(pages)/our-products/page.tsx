import Image from "next/image";

import ProductsHeroSection from "@/components/products-page-components/ProductsHeroSection";
import PropertySection from "@/components/products-page-components/PropertySection";
import ProductsOurServices from "@/components/products-page-components/ProductsOurServices";

import assets from "@/assets";

const OurProductsPage = () => {
  return (
    <>
      <ProductsHeroSection />
      <PropertySection />
      <ProductsOurServices />

      {/* Footer Styling */}
      <div className={`bg-[#161527] h-28 relative`}>
        <Image
          src={assets.productFooterStyingImg}
          alt="Styling image"
          loading="eager"
          height={30}
          className="absolute top-0 left-0 right-0 w-full"
        />
      </div>

    </>
  );
};

export default OurProductsPage;
