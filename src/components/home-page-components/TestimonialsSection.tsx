"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonialSectionContents from "@/contents/home-page-contents/testimonial-section-contents";
import assets from "@/assets/index";
import Testimonial from "./Testimonial";

const TestimonialsSection = () => {
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`py-4 absolute md:top-1/2 max-md:bottom-[-91px] -left-[4rem] max-md:left-7 transform -translate-y-1/2  cursor-pointer`}
      >
        <Image src={assets.prevArrow} alt="Previous arrow" />
      </div>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className={` py-4 absolute md:top-1/2 max-md:bottom-[-90px] -right-[4rem] max-md:right-7 transform -translate-y-1/2  cursor-pointer`}
      >
        <Image src={assets.nextArrow} alt="Next arrow" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 200,
        },
      },
    ],

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    customPaging: function (i: any) {
      const totalSlides = testimonialSectionContents.length;

      // Calculate the index of the active dot to show
      const activeDotIndex = (this as any).currentSlide % totalSlides;

      // Determine whether the current dot is the active one
      const isActiveDot = i === activeDotIndex;

      // Set the background color based on the active state
      const backgroundColor = isActiveDot ? "bg-[#58BAD0]" : "bg-[#646464]";

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
    <section className=" bg-[#161527] relative py-20 pt-40 pb-32 max-md:py-12 max-md:pb-20 px-20 max-md:px-5 overflow-x-hidden">
      <div className="absolute -top-1 left-0 right-0 w-full h-12 md:h-16 bg-white">
        <div
          className="absolute inset-0 w-full h-full bg-[#161527]"
          style={{
            clipPath:
              "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
          }}
        ></div>
      </div>

      <section className="max-container relative">
        <header>
          <div className="flex items-center max-md:justify-center gap-7 font-bold font-ubuntu text-[40px] max-md:text-[32px] text-primaryWhite leading-[45px]">
            <h1 className="text-primaryWhite md:text-nowrap max-md:text-center ">
              Committed to Your Success
            </h1>
            <span className="max-md:hidden block bg-primaryWhite h-[1px] w-[65%]" />
          </div>
          <p className="max-w-[1154px] mt-10 max-md:mt-8 font-roboto font-normal text-[20px] text-primaryWhite leading-[30px] max-md:text-center">
            At Fushion AI, your success is our priority. We are dedicated to
            delivering high-quality services that help you make smart,
            data-driven decisions. Whether you are a consumer, real estate
            agent, or real estate professional, we are here to support you with
            our expertise.
          </p>
        </header>

        <div className="w-full relative mt-20 max-md:mt-12 before:absolute before:w-24 before:bg-white/10 before:-left-28 before:h-full before:bottom-0 after:absolute after:w-24 after:bg-white/10 after:-right-28 after:h-full after:bottom-0">
          <main className="mx-20">
            <article className="">
              <Slider {...settings}>
                {testimonialSectionContents.map((testimonial, index) => (
                  <div key={index}>
                    <Testimonial
                      key={index}
                      description={testimonial.testimonial}
                      fullName={testimonial.fullName}
                      position={testimonial.position}
                    />
                  </div>
                ))}
              </Slider>
            </article>{" "}
          </main>
        </div>
      </section>
    </section>
  );
};

export default TestimonialsSection;
