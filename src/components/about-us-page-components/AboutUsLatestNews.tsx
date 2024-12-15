"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LatestNew from "./LatestNew";
import assets from "@/assets/index";
import { useAppSelector } from "@/redux/hooks";
import { newsSelector } from "@/redux/store";
import { Spinner } from "@nextui-org/spinner";

const formattedDate = (date: string) => {
  if (date === undefined) return "date";
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

function truncateWords(text: string, maxWords: number) {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
}

const AboutUsLatestNews = () => {
  const { isLoading, data } = useAppSelector(newsSelector);
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

  let content;
  if (isLoading) {
    return (
      <div className="flex w-full justify-center items-center min-h-[400px]">
        <Spinner label="Loading..." labelColor="primary" />
      </div>
    );
  } else if (!isLoading && data?.length > 0) {
    content =
      data?.length > 0 &&
      data.map((items, index) => (
        <LatestNew
          key={index}
          date={formattedDate(items?.isoDate)}
          title={truncateWords(items?.title, 6)}
          description={truncateWords(items?.content, 25)}
          image={assets.rectangle}
          link={items?.link}
        />
      ));
  }

  return (
    <section className="bg-primaryWhite">
      <section className="max-container py-[80px] px-[143px] max-lg:py-[40px] max-lg:pb-[90px] max-lg:px-16 max-md:px-3">
        <header>
          <h2 className="font-ubuntu font-bold text-[40px] leading-[60px] text-center text-darkBlue">
            Latest News
          </h2>

          <main className="mt-12 max-md:mt-6">
            {/* For large screens */}
            <div className="max-sm:hidden flex flex-wrap justify-center gap-4 max-sm:gap-5">
              {content || <div>No news available</div>}
            </div>
          </main>

          {/* For small screens */}
          <section className="hidden max-sm:block justify-center items-center max-w-[700px] mx-auto">
            <Slider {...settings}>
              {content || <div>No news available</div>}
            </Slider>
          </section>
        </header>
      </section>
    </section>
  );
};

export default AboutUsLatestNews;
