"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import assets from "@/assets/index";

import ProductsOurService from "./ProductsOurService";
import { localization } from "@/data/localization";
import { useAppSelector } from "@/redux/hooks";
import { langSelector } from "@/redux/store";

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

  const { language } = useAppSelector(langSelector) as { language: "en" | "nl" };

  const purchaseInfo = [
    localization.ProductsOurServices.purchaseInfo[language][0],
    localization.ProductsOurServices.purchaseInfo[language][1],
    localization.ProductsOurServices.purchaseInfo[language][2],
  ];

  const assessed = [
    localization.ProductsOurServices.assessed[language][0],
    localization.ProductsOurServices.assessed[language][1],
    localization.ProductsOurServices.assessed[language][2],
    localization.ProductsOurServices.assessed[language][3],
  ];
  
  return (
    <section className="py-[120px] bg-primaryWhite">
      <header className="mb-6">
        <h1 className="font-ubuntu font-bold text-[40px] leading-[45px] text-center text-darkBlue">
          {/* Our Service */}
          {localization.ProductsOurServices.title[language]}
        </h1>
      </header>

      {/* For small screens */}
      <section className="hidden max-[1149px]:block px-2 max-w-[700px] mx-auto">
        <Slider {...settings}>
          <ProductsOurService
            price="34.95"
            title={
              // "Purchase Price Information"
              localization.ProductsOurServices.products[0].title[language]
            }
            description={
              // "Planning to buy or sell a house on a specific street? Our Transaction Overview provides you with all recent and historical sales and purchase prices of properties"
              localization.ProductsOurServices.products[0].description[language]
            }
            lists={purchaseInfo}
            goToLink="/our-products/purchase-price-info"
          />
          <ProductsOurService
            price="24.95"
            title={
              // "Assessed Property Value"
              localization.ProductsOurServices.products[1].title[language]
            }
            description={
              // "Ideal for accurately estimating the value of a property."
              localization.ProductsOurServices.products[1].description[language]
            }
            lists={assessed}
            goToLink="/our-products/assessed-property-value"
          />
          <ProductsOurService
            price="29.95"
            title={
              // "Property Report"
              localization.ProductsOurServices.products[2].title[language]
            }
            description={
              // "The Comprehensive Property Report provides detailed information about a property, serving as a solid foundation for valuing a home. This report can be instrumental when deciding on an offer for a house you are interested in purchasing."
              localization.ProductsOurServices.products[2].description[language]
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
              localization.ProductsOurServices.products[0].title[language]
            }
            description={
              // "Planning to buy or sell a house on a specific street? Our Transaction Overview provides you with all recent and historical sales and purchase prices of properties"
              localization.ProductsOurServices.products[0].description[language]
            }
            lists={purchaseInfo}
            goToLink="/our-products/purchase-price-info"
          />
          <ProductsOurService
            price="24.95"
            title={
              // "Assessed Property Value"
              localization.ProductsOurServices.products[1].title[language]
            }
            description={
              // "Ideal for accurately estimating the value of a property."
              localization.ProductsOurServices.products[1].description[language]
            }
            lists={assessed}
            goToLink="/our-products/assessed-property-value"
          />
          <ProductsOurService
            price="29.95"
            title={
              // "Property Report"
              localization.ProductsOurServices.products[2].title[language]
            }
            description={
              // "The Comprehensive Property Report provides detailed information about a property, serving as a solid foundation for valuing a home. This report can be instrumental when deciding on an offer for a house you are interested in purchasing."
              localization.ProductsOurServices.products[2].description[language]
            }
            goToLink="/our-products/property-report"
          />
        </div>
      </main>
    </section>
  );
};

export default ProductsOurServices;
