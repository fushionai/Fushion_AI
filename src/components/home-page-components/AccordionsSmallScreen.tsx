"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Slider, { Settings } from "react-slick";
import assert from "@/assets/index";
// import featuresSectionContent from "@/contents/home-page-contents/features-section-content";
import { useTranslations } from "next-intl";

function FeaturesSmallScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const num = [1, 2, 3, 4, 5, 6];

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (i) => {
      setCurrentSlide(i);
    },
  };

  const handleNumberClick = (index: number) => {
    setCurrentSlide(index);
    sliderRef.current?.slickGoTo(index);
  };

  const t = useTranslations("features");

  return (
    <main className="mx-auto">
      <div className="flex justify-center mb-4 px-1">
        {num.map((n, index) => {
          const distance = Math.abs(currentSlide - index);
          const opacity = Math.max(0.2, 1 - distance * 0.15); // Minimum opacity of 0.2

          return (
            <p
              key={index}
              onClick={() => handleNumberClick(index)}
              className={`cursor-pointer px-6 max-sm:px-4 pb-1  font-roboto font-normal text-[20px] leading-[30px] border-b-[2px]  transition-all ease-linear ${
                currentSlide === index
                  ? "text-darkBlue border-primaryBlue"
                  : "text-secondaryGray border-primaryLightBlue"
              }`}
              style={{ opacity }}
            >
              0{n}
            </p>
          );
        })}
      </div>

      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <article className="px-4 mx-auto">
              <h3 className="font-ubuntu font-medium text-[24px] text-darkBlue leading-[36px] ">
                {/* Unmatched Expertise in{" "} */}
                {t("accordion.order1.titlePart1")}
                <span className="text-primaryBlue">
                  {/* AI */} {t("accordion.order1.titleColored1")}
                </span>{" "}
                {/* and{" "} */}
                {t("accordion.order1.titlePart2")}{" "}
                <span className="text-primaryBlue text-nowrap">
                  {" "}
                  {/* Real Estate{" "} */}
                  {t("accordion.order1.titleColored2")}
                </span>
              </h3>
              <p className="mt-3 font-roboto font-normal text-[20px] leading-[30px]">
                {/* {featuresSectionContent[0].description} */}
                {t("accordion.order1.description")}
              </p>
              <Image
                src={assert.statisticsWithBg}
                alt="Our feature"
                loading="eager"
                className="mt-3 mx-auto"
              />
            </article>
          </div>
          <div>
            <article className="px-4 mx-auto ">
              <h3 className="font-ubuntu font-medium text-[24px] text-darkBlue leading-[36px] ">
                {/* Comprehensive */}
                {t("accordion.order2.title")}{" "}
                <span className="text-primaryBlue">AI</span>{" "}
                {/* Data Analysis */}
                {t("accordion.order2.titleColored1")}
              </h3>
              <p className="mt-3 font-roboto font-normal text-[20px] leading-[30px]">
                {/* {featuresSectionContent[1].description} */}
                {t("accordion.order2.description")}
              </p>
              <Image
                src={assert.analysisWithBg}
                alt="Our feature"
                loading="eager"
                className="mt-3 mx-auto"
              />
            </article>
          </div>
          <div>
            <article className="px-4 mx-auto ">
              <h3 className="font-ubuntu font-medium text-[24px] text-darkBlue leading-[36px] ">
                {/* {featuresSectionContent[2].title} */}
                {t("accordion.order3.title")}
              </h3>
              <p className="mt-3 font-roboto font-normal text-[20px] leading-[30px]">
                {/* {featuresSectionContent[2].description} */}
                {t("accordion.order3.description")}
              </p>
              <Image
                src={assert.insightWithBg}
                alt="Our feature"
                loading="eager"
                className="mt-3 mx-auto"
              />
            </article>
          </div>
          <div>
            <article className="px-4 mx-auto ">
              <h3 className="font-ubuntu font-medium text-[24px] text-darkBlue leading-[36px] ">
                {/* {featuresSectionContent[3].title} */}
                {t("accordion.order4.title")}
              </h3>
              <p className="mt-3 font-roboto font-normal text-[20px] leading-[30px]">
                {/* {featuresSectionContent[3].description} */}
                {t("accordion.order4.description")}
              </p>
              <Image
                src={assert.personWithBg}
                alt="Our feature"
                loading="eager"
                className="mt-3 mx-auto"
              />
            </article>
          </div>
          <div>
            <article className="px-4 mx-auto ">
              <h3 className="font-ubuntu font-medium text-[24px] text-darkBlue leading-[36px] ">
                {/* {featuresSectionContent[4].title} */}
                {t("accordion.order5.title")}
              </h3>
              <p className="mt-3 font-roboto font-normal text-[20px] leading-[30px]">
                {/* {featuresSectionContent[4].description} */}
                {t("accordion.order5.description")}
              </p>
              <Image
                src={assert.docsWithBg}
                alt="Our feature"
                loading="eager"
                className="mt-3 mx-auto"
              />
            </article>
          </div>
          <div>
            <article className="px-4 mx-auto ">
              <h3 className="font-ubuntu font-medium text-[24px] text-darkBlue leading-[36px] ">
                {/* {featuresSectionContent[5].title} */}
                {t("accordion.order6.title")}
              </h3>
              <p className="mt-3 font-roboto font-normal text-[20px] leading-[30px]">
                {/* {featuresSectionContent[5].description} */}
                {t("accordion.order6.description")}
              </p>
              <Image
                src={assert.agreementWithBg}
                alt="Our feature"
                loading="eager"
                className="mt-3 mx-auto"
              />
            </article>
          </div>
        </Slider>
      </div>
    </main>
  );
}

export default FeaturesSmallScreen;
