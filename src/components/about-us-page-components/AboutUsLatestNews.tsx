"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LatestNew from "./LatestNew";
import assets from "@/assets/index";

const AboutUsLatestNews = () => {
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
    <section className="bg-primaryWhite">
      <section className="max-container py-[80px] px-[143px] max-lg:py-[40px] max-lg:pb-[90px] max-lg:px-16 max-md:px-3">
        <header>
          <h2 className="font-ubuntu font-bold text-[40px] leading-[60px] text-center text-darkBlue">
            Latest News
          </h2>

          <main className="mt-12 max-md:mt-6">
            {/* For large screens */}
            <div className="max-[800px]:hidden flex flex-wrap justify-center gap-4 max-sm:gap-5">
              <LatestNew
                date="1 week ago"
                title="Lorem ipsun dolor sit amrnt consectur"
                description="Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
                image={assets.rectangle}
              />
              <LatestNew
                date="1 week ago"
                title="Lorem ipsun dolor sit amrnt consectur"
                description="Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
                image={assets.rectangle}
              />
              <LatestNew
                date="1 week ago"
                title="Lorem ipsun dolor sit amrnt consectur"
                description="Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
                image={assets.rectangle}
              />
            </div>
          </main>

          {/* For small screens */}
          <section className="hidden max-[800px]:block  max-w-[700px] mx-auto">
            <Slider {...settings}>
              <LatestNew
                date="1 week ago"
                title="Lorem ipsun dolor sit amrnt consectur"
                description="Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
                image={assets.rectangle}
              />
              <LatestNew
                date="1 week ago"
                title="Lorem ipsun dolor sit amrnt consectur"
                description="Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
                image={assets.rectangle}
              />
              <LatestNew
                date="1 week ago"
                title="Lorem ipsun dolor sit amrnt consectur"
                description="Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
                image={assets.rectangle}
              />
            </Slider>
          </section>
        </header>
      </section>
    </section>
  );
};

export default AboutUsLatestNews;
