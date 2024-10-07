"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import assets from "@/assets/index";

import ProductsOurService from "./ProductsOurService";

const ProductsOurServices = () => {
  const purchaseInfo = [
    "Most recent and historical transactions",
    "Asking price, transaction date, year built, and property type",
    "Purchase price per square meter (based on usable area)",
  ];
  const assessed = [
    "Latest purchase price & current model-based market value*",
    "Comparison with 10 reference properties (worth € 24.95)",
    "Cadastral map (worth € 19.95)",
    "Additional property information",
  ];

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

  return (
    <section className="py-[120px] bg-primaryWhite">
      <header className="mb-6">
        <h1 className="font-ubuntu font-bold text-[40px] leading-[45px] text-center text-darkBlue">
          Our Service
        </h1>
      </header>

      {/* For small screens */}
      <section className="hidden max-[800px]:block px-2 max-w-[700px] mx-auto">
        <Slider {...settings}>
          <ProductsOurService
            price="34.95"
            title="Purchase Price Information"
            description="Planning to buy or sell a house on a specific street? Our Transaction Overview provides you with all recent and historical sales and purchase prices of properties"
            lists={purchaseInfo}
          />
          <ProductsOurService
            price="24.95"
            title="Assessed Property Value"
            description="Ideal for accurately estimating the value of a property."
            lists={assessed}
          />
          <ProductsOurService
            price="29.95"
            title="Property Report"
            description="The Comprehensive Property Report provides detailed information about a property, serving as a solid foundation for valuing a home. This report can be instrumental when deciding on an offer for a house you are interested in purchasing."
          />
        </Slider>
      </section>

      <main className="flex justify-center items-center">
        {/* For large screens */}

        <div className="max-[800px]:hidden flex flex-wrap justify-center items-center gap-12">
          <ProductsOurService
            price="34.95"
            title="Purchase Price Information"
            description="Planning to buy or sell a house on a specific street? Our Transaction Overview provides you with all recent and historical sales and purchase prices of properties"
            lists={purchaseInfo}
          />
          <ProductsOurService
            price="24.95"
            title="Assessed Property Value"
            description="Ideal for accurately estimating the value of a property."
            lists={assessed}
          />
          <ProductsOurService
            price="29.95"
            title="Property Report"
            description="The Comprehensive Property Report provides detailed information about a property, serving as a solid foundation for valuing a home. This report can be instrumental when deciding on an offer for a house you are interested in purchasing."
          />
        </div>
      </main>
    </section>
  );
};

export default ProductsOurServices;
