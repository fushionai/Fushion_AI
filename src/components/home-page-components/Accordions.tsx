"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import featuresSectionContent from "@/contents/home-page-contents/features-section-content";
import { useTranslations } from "next-intl";

const Accordions = ({ setSelectedOrder }: { setSelectedOrder: any }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));
  const [lastScrollY, setLastScrollY] = useState(0);

  const initialOffset = 1800;

  const thresholds = useMemo(
    () => [
      initialOffset,
      initialOffset + 70,
      initialOffset + 140,
      initialOffset + 210,
      initialOffset + 290,
      initialOffset + 360,
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

  const t = useTranslations("features");

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
            {t("accordion.order1.titlePart1")}
            <span
              className={`${
                selectedKeys.has("1")
                  ? "text-primaryBlue"
                  : "text-secondaryGray"
              }`}
            >
              {/* AI */} {t("accordion.order1.titleColored1")}
            </span>{" "}
            {/* and{" "} */}
            {t("accordion.order1.titlePart2")}{" "}
            <span
              className={`text-nowrap ${
                selectedKeys.has("1")
                  ? "text-primaryBlue"
                  : "text-secondaryGray"
              }`}
            >
              {/* Real Estate */}
              {t("accordion.order1.titleColored2")}
            </span>
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[0].description} */}
          {t("accordion.order1.description")}
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
            {t("accordion.order2.title")}
            <span
              className={`${
                selectedKeys.has("2")
                  ? "text-primaryBlue"
                  : "text-secondaryGray"
              }`}
            >
              {" "}
              {/* Data Analysis */}
              {t("accordion.order2.titleColored1")}
            </span>{" "}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[1].description} */}
          {t("accordion.order2.description")}
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
            {t("accordion.order3.title")}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[2].description} */}
          {t("accordion.order3.description")}
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
            {t("accordion.order4.title")}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[3].description} */}
          {t("accordion.order4.description")}
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
            {t("accordion.order5.title")}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[4].description} */}
          {t("accordion.order5.description")}
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
            {t("accordion.order6.title")}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {/* {featuresSectionContent[5].description} */}
          {t("accordion.order6.description")}
        </p>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordions;
