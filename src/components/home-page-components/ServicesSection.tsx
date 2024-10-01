"use client";

import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import assets from "@/assets/index";
import Image from "next/image";

import servicesSectionContents from "@/contents/home-page-contents/services-section-contents";
import Service from "./Service";

const ServicesSection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={currentSlideIndex === 0 ? undefined : onClick}
        className={`${
          currentSlideIndex === 0
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        } py-4 max-medium:py-2  px-6 max-medium:px-4 max-medium-leading-4 font-thin text-slate-300 bg-474747 absolute top-1/2 -left-[4rem] medium:-left-[8rem] transform -translate-y-1/2 text-3xl medium:text-4xl   cursor-pointer`}
      >
        <Image src={assets.prevArrow} alt="Previous arrow" />
      </div>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={
          currentSlideIndex === servicesSectionContents.length - 1
            ? undefined
            : onClick
        }
        className={`${
          currentSlideIndex === servicesSectionContents.length - 1
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }  py-4 max-medium:py-2  px-6 max-medium:px-4 max-medium-leading-4 font-thin text-slate-300 bg-474747 absolute top-1/2 -right-[4rem] medium:-right-[8rem] transform -translate-y-1/2 text-3xl medium:text-4xl   cursor-pointer`}
      >
        <Image src={assets.nextArrow} alt="Next arrow" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    customPaging: function (i: any) {
      const totalSlides = servicesSectionContents.length;

      // Calculate the index of the active dot to show
      const activeDotIndex = (this as any).currentSlide % totalSlides;

      setCurrentSlideIndex(activeDotIndex);

      // Determine whether the current dot is the active one
      const isActiveDot = i === activeDotIndex;

      // Set the background color based on the active state
      const backgroundColor = isActiveDot ? "bg-white" : "bg-gray-500";

      return (
        <div key={i} className={` mt-16 max-md:mt-10`}>
          <span
            className={`block h-2 w-2 rounded-full  ${backgroundColor}`}
          ></span>
        </div>
      );
    },
  };

  return (
    <section className="relative bg-hero-bg bg-slate-400 bg-center bg-cover bg-no-repeat  px-32 max-md:px-12 pt-32 max-md:pt-20 pb-40 max-md:pb-32">
      <div className="-z-10 before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-[#161527] before:opacity-[80%]"></div>
      <main className="relative z-20">
        <div className="flex items-center gap-20 font-bold font-ubuntu text-[40px] max-md:text-[32px] text-primaryWhite leading-[45px]">
          <h1 className="text-primaryWhite text-nowrap">Service We Offer</h1>
          <span className="max-md:hidden block bg-primaryWhite h-[1px] w-[65%]" />
        </div>

        <article className="pt-28 max-md:pt-12">
          <Slider {...settings}>
            {servicesSectionContents.map((service, index) => (
              <div key={index}>
                <Service
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </Slider>
        </article>
      </main>
    </section>
  );
};

export default ServicesSection;
