import Image from "next/image";

import TopNavBar from "@/components/TopNavBar";

import heroBg from "@/assets/images/home-page-images/hero_bg.jpg";

const ProductsHeroSection = () => {
  return (
    <section className="relative bg-center bg-cover bg-no-repeat pb-36 max-sm:pb-28">
      <Image
        src={heroBg}
        alt="Background image"
        layout="fill"
        loading="eager"
        className="-z-10 object-cover "
      />
      <section className="max-container">
        <header>
          <TopNavBar />
        </header>
        <main className="mt-16 px-10 md:mt-20 md:px-32 max-sm:px-2">
          <h2 className="font-ubuntu text-[64px] max-sm:text-[32px]  font-bold text-primaryWhite text-center leading-[73px] max-sm:leading-[48px]">
            Our Products
          </h2>
          <h6 className="max-w-[1158px] mx-auto mt-5 sm:mt-10 font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite text-center">
            Unlock comprehensive market information with our Market Info
            package. Get detailed insights into market trends, property values,
            and more to make informed decisions.
          </h6>

          <div className="mt-12 max-md:mt-10 flex flex-wrap justify-center items-center  gap-6 max-md:gap-4">
            <div className="flex justify-center items-center max-w-[369px] h-[200px] p-6 border border-primaryWhite rounded-[5px]">
              <article>
                <h3 className="font-ubuntu font-bold text-[24px] leading-[36px] text-center text-primaryWhite ">
                  Purchase Price Information
                </h3>
                <p className="mt-4 font-roboto font-normal text-[16px] leading-[24px] text-center text-primaryWhite opacity-[80%]">
                  Detailed purchase price information to help you understand
                  real estate market dynamics.
                </p>
              </article>
            </div>
            <div className="flex justify-center items-center max-w-[369px] h-[200px] p-6 border border-primaryWhite rounded-[5px]">
              <article>
                <h3 className="font-ubuntu font-bold text-[24px] leading-[36px] text-center text-primaryWhite">
                  Assessed Property Value
                </h3>
                <p className="mt-4 font-roboto font-normal text-[16px] leading-[24px] text-center text-primaryWhite opacity-[80%]">
                  Access the assessed value of properties to gauge market value
                  accurately.
                </p>
              </article>
            </div>
            <div className="flex justify-center items-center max-w-[369px] h-[200px] p-6 border border-primaryWhite rounded-[5px]">
              <article>
                <h3 className="font-ubuntu font-bold text-[24px] leading-[36px] text-center text-primaryWhite">
                  Property Report
                </h3>
                <p className="mt-4 font-roboto font-normal text-[16px] leading-[24px] text-center text-primaryWhite opacity-[80%]">
                  An extensive property report combining purchase price info,
                  assessed value, mortgage details, and more. We also include
                  Cadastre data to ensure the most reliable and comprehensive
                  insights.
                </p>
              </article>
            </div>
          </div>
        </main>
      </section>
    </section>
  );
};

export default ProductsHeroSection;
