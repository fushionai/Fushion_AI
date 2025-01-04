"use client";
import { useState, useEffect, useMemo, useContext } from "react";

import Image from "next/image";

import Accordions from "./Accordions";
import SlidingAccordion from "./AccordionsSmallScreen";
import assets from "@/assets/index";
import { LanguageContext } from "@/context/useLanguage";
import { localization } from "@/data/localization";

const FeaturesSection = () => {
  const [selectedOrder, setSelectedOrder] = useState(new Set(["1"]));

  const [currentImage, setCurrentImage] = useState(assets.statisticsWithBg); // Initial image

  const imageMap: { [key: string]: any } = useMemo(
    () => ({
      "1": assets.statisticsWithBg,
      "2": assets.analysisWithBg,
      "3": assets.insightWithBg,
      "4": assets.personWithBg,
      "5": assets.docsWithBg,
      "6": assets.agreementWithBg,
    }),
    []
  );

  useEffect(() => {
    const orderArray = Array.from(selectedOrder);
    if (orderArray.length > 0) {
      setCurrentImage(imageMap[orderArray[0]]);
    }
  }, [selectedOrder, imageMap]);

  const { language } = useContext(LanguageContext) as { language: "en" | "nl" };

  return (
    <section className="max-container bg-primaryWhite py-20 max-md:pb-0">
      <header>
        <h2 className="px-10 font-bold font-ubuntu text-[40px] max-md:text-[32px] text-center text-darkBlue leading-[32px]">
          {/* Why Choose{" "} */}
          {localization.Features.title[language]}
          <span className="max-md:text-primaryBlue">
            {/* Fushion AI  */}
            {localization.Features.subtitle[language]}
          </span>
          ?
        </h2>
        <p className="max-w-[1003px] mx-auto mt-12 px-6 max-md:mt-8 font-roboto font-normal text-[20px] text-center leading-[30px]">
          {/* At Fushion AI, we believe in the transformative power of data to
          revolutionize the real estate market. Our core mission is to empower
          our clients with advanced artificial intelligence (AI) models that
          deliver essential insights, helping them make informed investment
          decisions based on accurate and up-to-date information. */}
          {localization.Features.description[language]}
        </p>
      </header>
      <main className="mt-20 max-md:mt-10 ">
        <div className="max-lg:hidden px-28 flex justify-between transition-all h-[200lvh]">
          <article className="max-w-[556px] relative">
            <div className="sticky top-0 ">
              <Accordions setSelectedOrder={setSelectedOrder} />
            </div>
          </article>
          <div className="relative">
            <div className="sticky top-0">
              <Image
                src={currentImage}
                alt="Our features"
                loading="eager"
                className="transition-opacity duration-500 ease-in-out"
                style={{ opacity: 1 }}
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <SlidingAccordion />
        </div>
      </main>
    </section>
  );
};

export default FeaturesSection;
