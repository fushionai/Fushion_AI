"use client";

import { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import featuresSectionContent from "@/contents/home-page-contents/features-section-content";

const Accordions = ({ setSelectedOrder }: { setSelectedOrder: any }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));
  const [lastScrollY, setLastScrollY] = useState(0);

  // Adjust this value based on your layout
  const initialOffset = 1800; // Example offset for the top of the accordion section

  // Define scroll thresholds for each accordion
  const thresholds = [
    initialOffset, // For the first accordion
    initialOffset + 300, // For the second accordion
    initialOffset + 600, // For the third accordion
    initialOffset + 900, // For the fourth accordion
    initialOffset + 1200, // For the fifth accordion
    initialOffset + 1500, // For the sixth accordion
  ];

  const handleSelectionChange = (keys: any) => {
    setSelectedKeys(new Set(keys));
    setSelectedOrder(new Set(keys));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Determine which accordion to open based on scroll position
      const index = thresholds.findIndex((threshold) => scrollY < threshold);
      if (index === -1) {
        setSelectedKeys(new Set(["6"])); // Open the last accordion if below the last threshold
      } else {
        setSelectedKeys(new Set([`${index + 1}`])); // Open the corresponding accordion
      }

      // Update last scroll position
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, thresholds]);

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={handleSelectionChange}
      showDivider={false}
      hideIndicator={true}
      disallowEmptySelection={true}
      className=""
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
            Unmatched Expertise in{" "}
            <span
              className={`${
                selectedKeys.has("1")
                  ? "text-primaryBlue"
                  : "text-secondaryGray"
              }`}
            >
              AI
            </span>{" "}
            and{" "}
            <span
              className={`text-nowrap ${
                selectedKeys.has("1")
                  ? "text-primaryBlue"
                  : "text-secondaryGray"
              }`}
            >
              Real Estate
            </span>
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {featuresSectionContent[0].description}
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
            Comprehensive
            <span
              className={`${
                selectedKeys.has("2")
                  ? "text-primaryBlue"
                  : "text-secondaryGray"
              }`}
            >
              {" "}
              Data Analysis
            </span>{" "}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {featuresSectionContent[1].description}
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
            {featuresSectionContent[2].title}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {featuresSectionContent[2].description}
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
            {featuresSectionContent[3].title}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {featuresSectionContent[3].description}
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
            {featuresSectionContent[4].title}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {featuresSectionContent[4].description}
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
            {featuresSectionContent[5].title}
          </h5>
        }
      >
        <p className="font-roboto text-[20px] leading-[30px] text-darkGray">
          {featuresSectionContent[5].description}
        </p>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordions;
