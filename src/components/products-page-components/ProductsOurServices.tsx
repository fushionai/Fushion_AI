"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import assets from "@/assets/index";

import ProductsOurService from "./ProductsOurService";
import { useTranslations } from "next-intl";

const ProductsOurServices = () => {
  // const purchaseInfo = [
  //   "Most recent and historical transactions",
  //   "Asking price, transaction date, year built, and property type",
  //   "Purchase price per square meter (based on usable area)",
  // ];
  // const assessed = [
  //   "Latest purchase price & current model-based market value*",
  //   "Comparison with 10 reference properties (worth € 24.95)",
  //   "Cadastral map (worth € 19.95)",
  //   "Additional property information",
  // ];

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`py-4 absolute -bottom-[90px]  left-16 transform -translate-y-1/2  cursor-pointer`}
      >
        <Image src={assets.prevBlack} alt="Previous arrow" />
      </div>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className={` py-4 absolute -bottom-[90px]  right-16  transform -translate-y-1/2  cursor-pointer`}
      >
        <Image src={assets.nextBlack} alt="Next arrow" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [],

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    customPaging: function (i: any) {
      const totalSlides = 3;

      const activeDotIndex = (this as any).currentSlide % totalSlides;

      const isActiveDot = i === activeDotIndex;

      const backgroundColor = isActiveDot ? "bg-[#2B00FF]" : "bg-[#77818A]";

      return (
        <div key={i} className={`mt-16 max-md:mt-10 `}>
          <span
            className={`block h-2 w-2 rounded-full mx-auto ${backgroundColor}`}
          ></span>
        </div>
      );
    },
  };

  const t = useTranslations("ProductsOurServices");

  const purchaseInfo = [
    t("purchaseInfo.0"),
    t("purchaseInfo.1"),
    t("purchaseInfo.2"),
  ];

  const assessed = [
    t("assessed.0"),
    t("assessed.1"),
    t("assessed.2"),
    t("assessed.3"),
  ];

  return (
    <section className="py-[120px] bg-primaryWhite">
      <header className="mb-6">
        <h1 className="font-ubuntu font-bold text-[40px] leading-[45px] text-center text-darkBlue">
          {/* Our Service */}
          {t("title")}
        </h1>
      </header>

      {/* For small screens */}
      <section className="hidden max-[1149px]:block px-2 max-w-[700px] mx-auto">
        <Slider {...settings}>
          <ProductsOurService
            price="34.95"
            title={
              // "Purchase Price Information"
              t("products.0.title")
            }
            description={
              // "Planning to buy or sell a house on a specific street? Our Transaction Overview provides you with all recent and historical sales and purchase prices of properties"
              t("products.0.description")
            }
            lists={purchaseInfo}
            goToLink="/our-products/purchase-price-info"
          />
          <ProductsOurService
            price="24.95"
            title={
              // "Assessed Property Value"
              t("products.1.title")
            }
            description={
              // "Ideal for accurately estimating the value of a property."
              t("products.1.description")
            }
            lists={assessed}
            goToLink="/our-products/assessed-property-value"
          />
          <ProductsOurService
            price="29.95"
            title={
              // "Property Report"
              t("products.2.title")
            }
            description={
              // "The Comprehensive Property Report provides detailed information about a property, serving as a solid foundation for valuing a home. This report can be instrumental when deciding on an offer for a house you are interested in purchasing."
              t("products.2.description")
            }
            goToLink="/our-products/property-report"
          />
        </Slider>
      </section>

      <main className="flex justify-center items-center">
        {/* For large screens */}

        <div className="max-[1149px]:hidden flex max-[1150px]:flex-wrap justify-center items-center gap-12">
          <ProductsOurService
            price="34.95"
            title={
              // "Purchase Price Information"
              t("products.0.title")
            }
            description={
              // "Planning to buy or sell a house on a specific street? Our Transaction Overview provides you with all recent and historical sales and purchase prices of properties"
              t("products.0.description")
            }
            lists={purchaseInfo}
            goToLink="/our-products/purchase-price-info"
          />
          <ProductsOurService
            price="24.95"
            title={
              // "Assessed Property Value"
              t("products.1.title")
            }
            description={
              // "Ideal for accurately estimating the value of a property."
              t("products.1.description")
            }
            lists={assessed}
            goToLink="/our-products/assessed-property-value"
          />
          <ProductsOurService
            price="29.95"
            title={
              // "Property Report"
              t("products.2.title")
            }
            description={
              // "The Comprehensive Property Report provides detailed information about a property, serving as a solid foundation for valuing a home. This report can be instrumental when deciding on an offer for a house you are interested in purchasing."
              t("products.2.description")
            }
            goToLink="/our-products/property-report"
          />
        </div>
      </main>
    </section>
  );
};

export default ProductsOurServices;
