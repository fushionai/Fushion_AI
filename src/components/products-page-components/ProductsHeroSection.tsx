"use client";
import Image from "next/image";

import TopNavBar from "@/components/layouts/TopNavBar";

import heroBg from "@/assets/images/products-page-images/our-products-hero.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ProductsHeroSection = () => {
  const t = useTranslations("ProductsHeroSection");

  return (
    <section className="relative bg-center bg-cover bg-no-repeat pb-36 max-sm:pb-28">
      <Image
        src={heroBg}
        alt="Background image"
        layout="fill"
        loading="eager"
        className="-z-10 object-cover "
      />
      <section className="max-container pb-20">
        <header>
          <TopNavBar />
        </header>
        <main className="mt-16 px-10 md:mt-20 xl:px-32   max-sm:px-2">
          <h2 className="font-ubuntu text-[64px] max-sm:text-[32px]  font-bold text-primaryWhite text-center leading-[73px] max-sm:leading-[48px]">
            {/* Our Products */}
            {t("title")}
          </h2>
          <h6 className="max-w-[1158px] mx-auto mt-5 sm:mt-10 font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite text-center">
            {/* Unlock comprehensive market information with our Market Info
            package. Get detailed insights into market trends, property values,
            and more to make informed decisions. */}
            {t("subheading")}
          </h6>

          <div className="mt-12 max-md:mt-10 flex max-lg:flex-wrap justify-center items-center  gap-6 max-md:gap-4">
            <Link
              className="flex justify-center items-center max-w-[369px]  h-[250px] p-6 border-[2px] border-primaryWhite rounded-[5px] hover:scale-[1.06] transition-all ease-in
              hover:bg-blue-950 hover:text-primaryBlue
              "
              href="our-products/purchase-price-info"
            >
              <article>
                <h3 className="font-ubuntu font-bold text-[24px] leading-[36px] text-center text-primaryWhite ">
                  {/* Purchase Price Information */}
                  {t("buttons.purchasePriceInfo")}
                </h3>
                <p className="mt-4 font-roboto font-normal text-[16px] leading-[24px] text-center text-primaryWhite opacity-[80%]">
                  {/* Detailed purchase price information to help you understand
                  real estate market dynamics. */}
                  {t("buttons.purchasePriceInfoDescription")}
                </p>
              </article>
            </Link>

            <Link
              className="flex justify-center items-center max-w-[369px] h-[250px] p-6 border-[2px] border-primaryWhite rounded-[5px] hover:scale-[1.06] transition-all ease-in
              hover:bg-blue-950 hover:text-primaryBlue
              "
              href="our-products/assessed-property-value"
            >
              <article>
                <h3 className="font-ubuntu font-bold text-[24px] leading-[36px] text-center text-primaryWhite">
                  {/* Assessed Property Value */}
                  {t("buttons.assessedPropertyValue")}
                </h3>
                <p className="mt-4 font-roboto font-normal text-[16px] leading-[24px] text-center text-primaryWhite opacity-[80%]">
                  {/* Access the assessed value of properties to gauge market value
                  accurately. */}
                  {t("buttons.assessedPropertyValueDescription")}
                </p>
              </article>
            </Link>
            <Link
              className="flex justify-center items-center max-w-[369px] h-[250px] p-6 border-[2px] border-primaryWhite rounded-[5px] hover:scale-[1.06] transition-all ease-in
              hover:bg-blue-950 hover:text-primaryBlue
              "
              href="our-products/property-report"
            >
              <article>
                <h3 className="font-ubuntu font-bold text-[24px] leading-[36px] text-center text-primaryWhite">
                  {/* Property Report */}
                  {t("buttons.propertyReport")}
                </h3>
                <p className="mt-4 font-roboto font-normal text-[16px] leading-[24px] text-center text-primaryWhite opacity-[80%]">
                  {/* An extensive property report combining purchase price info,
                  assessed value, mortgage details, and more. We also include
                  Cadastre data to ensure the most reliable and comprehensive
                  insights. */}
                  {t("buttons.propertyReportDescription")}
                </p>
              </article>
            </Link>
          </div>

          <Link
            href="our-products/consultancy"
            className="block mt-12 md:mt-14 max-w-[1158px] mx-auto border-[3px] border-primaryWhite p-6 hover:scale-[1.03] transition-all ease-in
              hover:bg-blue-950 hover:cursor-pointer"
          >
            <h3 className="py-1 font-ubuntu font-bold text-[24px] leading-[36px] text-center text-primaryWhite border-b border-secondaryGray">
              {/* Consultancy */}
              {t("buttons.consultancy")}
            </h3>
            <p className="mt-2 text-center  font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite ">
              {/* Our AI-powered consultancy services empower real estate
              professionals with data-driven insights to make smarter, faster
              decisions. Tailored to your needs, we revolutionize the way you
              navigate the real estate market. */}
              {t("buttons.consultancyDescription")}
            </p>
          </Link>
        </main>

        <div className="absolute -bottom-2 left-0 right-0 w-full bg-transparent h-24">
          {/* transparent */}
          <div
            className="absolute inset-0 w-full h-full bg-white/50"
            style={{
              clipPath:
                "polygon(94.95% 47.92%, 100% 47.92%, 100% 89.58%, 0% 99.58%, 0% 0%, 10.17% 0%, 57.5% 0%, 58.64% 20%, 93.98% 20%, 94.95% 47.92%)",
            }}
          ></div>

          {/* bold white */}
          <div className="absolute -bottom-2 left-0 w-full h-12 md:h-16 bg-transparent">
            <div
              className="absolute inset-0 w-full h-full bg-white"
              style={{
                clipPath:
                  "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
              }}
            ></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductsHeroSection;
