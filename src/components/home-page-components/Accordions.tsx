"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import featuresSectionContent from "@/contents/home-page-contents/features-section-content";
import { localization } from "@/data/localization";
import { useAppSelector } from "@/redux/hooks";
import { langSelector } from "@/redux/store";

const Accordions = ({ setSelectedOrder }: { setSelectedOrder: any }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));
  const [lastScrollY, setLastScrollY] = useState(0);

  const initialOffset = 1800;

  const thresholds = useMemo(
    () => [
      initialOffset,
      initialOffset + 200,
      initialOffset + 400,
      initialOffset + 600,
      initialOffset + 800,
      initialOffset + 1000,
    ],
    [initialOffset]
  );

  const handleSelectionChange = useCallback(
    (keys: any) => {
      setSelectedKeys(new Set(keys));
      setSelectedOrder(new Set(keys));
    },
    [setSelectedOrder]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const index = thresholds.findIndex((threshold) => scrollY < threshold);
      if (index === -1) {
        handleSelectionChange(new Set(["6"]));
      } else {
        handleSelectionChange(new Set([`${index + 1}`]));
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, thresholds, handleSelectionChange]);

  const { language } = useAppSelector(langSelector) as { language: "en" | "nl" };

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={handleSelectionChange}
      showDivider={false}
      hideIndicator={true}
      disallowEmptySelection={true}
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        className={`border-l-[3px] pl-9 transition-all end-auto ease-linear  ${
          selectedKeys.has("1")
            ? "border-primaryBlue"
            : "border-primaryLightBlue"
        }`}
        title={
          <span
            className={`font-roboto font-bold leading-[20px] transition-all ease-out ${
              selectedKeys.has("1")
                ? "text-primaryBlue text-[24px]"
                : "text-secondaryGray text-[18px]"
            }`}
          >
            01
          </span>
        }
        subtitle={
          <h5
            className={`font-ubuntu transition-all ease-in-out ${
              selectedKeys.has("1")
                ? "font-bold text-[32px] leading-[48px] text-darkBlue"
                : "font-medium text-[24px] leading-[36px] text-secondaryGray"
            }`}
          >
            {/* Unmatched Expertise in{" "} */}
            {localization.Features.accordion.order1.titlePart1[language]}
            <span
              className={`${
                selectedKeys.has("1")
                  ? "text-primaryBlue"
                  : "text-secondaryGray"
              }`}
            >
              {/* AI */}
              {localization.Features.accordion.order1.titleColored1[language]}
            </span>{" "}
            {/* and{" "} */}
            {localization.Features.accordion.order1.titlePart2[language]}
            <span
              className={`text-nowrap ${
                selectedKeys.has("1")
                  ? "text-primaryBlue"
                  : "text-secondaryGray"
              }`}
            >
              {/* Real Estate */}
              {localization.Features.accordion.order1.titleColored2[language]}
            </span>
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[0].description} */}
          {localization.Features.accordion.order1.description[language]}
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        className={`border-l-[3px] pl-9 transition-all end-auto ease-linear ${
          selectedKeys.has("2")
            ? "border-primaryBlue"
            : "border-primaryLightBlue"
        }`}
        title={
          <span
            className={`font-roboto font-bold leading-[20px] transition-all ease-out ${
              selectedKeys.has("2")
                ? "text-primaryBlue text-[24px]"
                : "text-secondaryGray text-[18px]"
            }`}
          >
            02
          </span>
        }
        subtitle={
          <h5
            className={`font-ubuntu transition-all ease-in-out ${
              selectedKeys.has("2")
                ? "font-bold text-[32px] leading-[48px] text-darkBlue"
                : "font-medium text-[24px] leading-[36px] text-secondaryGray"
            }`}
          >
            {/* Comprehensive */}
            {localization.Features.accordion.order2.title[language]}
            <span
              className={`${
                selectedKeys.has("2")
                  ? "text-primaryBlue"
                  : "text-secondaryGray"
              }`}
            >
              {" "}
              {/* Data Analysis */}
              {localization.Features.accordion.order2.titleColored1[language]}
            </span>{" "}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[1].description} */}
          {localization.Features.accordion.order2.description[language]}
        </p>
      </AccordionItem>

      <AccordionItem
        key={featuresSectionContent[2].order}
        aria-label={`Accordion ${featuresSectionContent[2].order}`}
        className={`border-l-[3px] pl-9 transition-all end-auto ease-linear ${
          selectedKeys.has(featuresSectionContent[2].order)
            ? "border-primaryBlue"
            : "border-primaryLightBlue"
        }`}
        title={
          <span
            className={`font-roboto font-bold leading-[20px] transition-all ease-out ${
              selectedKeys.has(featuresSectionContent[2].order)
                ? "text-primaryBlue text-[24px]"
                : "text-secondaryGray text-[18px]"
            }`}
          >
            {featuresSectionContent[2].number}
          </span>
        }
        subtitle={
          <h5
            className={`font-ubuntu transition-all ease-in-out ${
              selectedKeys.has(featuresSectionContent[2].order)
                ? "font-bold text-[32px] leading-[48px] text-darkBlue"
                : "font-medium text-[24px] leading-[36px] text-secondaryGray"
            }`}
          >
            {/* {featuresSectionContent[2].title} */}
            {localization.Features.accordion.order3.title[language]}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[2].description} */}
          {localization.Features.accordion.order3.description[language]}
        </p>
      </AccordionItem>

      <AccordionItem
        key={featuresSectionContent[3].order}
        aria-label={`Accordion ${featuresSectionContent[3].order}`}
        className={`border-l-[3px] pl-9 transition-all end-auto ease-linear ${
          selectedKeys.has(featuresSectionContent[3].order)
            ? "border-primaryBlue"
            : "border-primaryLightBlue"
        }`}
        title={
          <span
            className={`font-roboto font-bold leading-[20px] transition-all ease-out ${
              selectedKeys.has(featuresSectionContent[3].order)
                ? "text-primaryBlue text-[24px]"
                : "text-secondaryGray text-[18px]"
            }`}
          >
            {featuresSectionContent[3].number}
          </span>
        }
        subtitle={
          <h5
            className={`font-ubuntu transition-all ease-in-out ${
              selectedKeys.has(featuresSectionContent[3].order)
                ? "font-bold text-[32px] leading-[48px] text-darkBlue"
                : "font-medium text-[24px] leading-[36px] text-secondaryGray"
            }`}
          >
            {/* {featuresSectionContent[3].title} */}
            {localization.Features.accordion.order4.title[language]}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[3].description} */}
          {localization.Features.accordion.order4.description[language]}
        </p>
      </AccordionItem>

      <AccordionItem
        key={featuresSectionContent[4].order}
        aria-label={`Accordion ${featuresSectionContent[4].order}`}
        className={`border-l-[3px] pl-9 transition-all end-auto ease-linear ${
          selectedKeys.has(featuresSectionContent[4].order)
            ? "border-primaryBlue"
            : "border-primaryLightBlue"
        }`}
        title={
          <span
            className={`font-roboto font-bold leading-[20px] transition-all ease-out ${
              selectedKeys.has(featuresSectionContent[4].order)
                ? "text-primaryBlue text-[24px]"
                : "text-secondaryGray text-[18px]"
            }`}
          >
            {featuresSectionContent[4].number}
          </span>
        }
        subtitle={
          <h5
            className={`font-ubuntu transition-all ease-in-out ${
              selectedKeys.has(featuresSectionContent[4].order)
                ? "font-bold text-[32px] leading-[48px] text-darkBlue"
                : "font-medium text-[24px] leading-[36px] text-secondaryGray"
            }`}
          >
            {/* {featuresSectionContent[4].title} */}
            {localization.Features.accordion.order5.title[language]}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[4].description} */}
          {localization.Features.accordion.order5.description[language]}
        </p>
      </AccordionItem>

      <AccordionItem
        key={featuresSectionContent[5].order}
        aria-label={`Accordion ${featuresSectionContent[5].order}`}
        className={`border-l-[3px] pl-9 transition-all end-auto ease-linear ${
          selectedKeys.has(featuresSectionContent[5].order)
            ? "border-primaryBlue"
            : "border-primaryLightBlue"
        }`}
        title={
          <span
            className={`font-roboto font-bold leading-[20px] transition-all ease-out ${
              selectedKeys.has(featuresSectionContent[5].order)
                ? "text-primaryBlue text-[24px]"
                : "text-secondaryGray text-[18px]"
            }`}
          >
            {featuresSectionContent[5].number}
          </span>
        }
        subtitle={
          <h5
            className={`font-ubuntu transition-all ease-in-out ${
              selectedKeys.has(featuresSectionContent[5].order)
                ? "font-bold text-[32px] leading-[48px] text-darkBlue"
                : "font-medium text-[24px] leading-[36px] text-secondaryGray"
            }`}
          >
            {/* {featuresSectionContent[5].title} */}
            {localization.Features.accordion.order6.title[language]}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[5].description} */}
          {localization.Features.accordion.order6.description[language]}
        </p>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordions;
