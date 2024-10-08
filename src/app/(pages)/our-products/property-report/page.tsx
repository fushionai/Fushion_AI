import Image from "next/image";

import TopNavBar from "@/components/TopNavBar";
import propertyReportContents from "@/contents/our-products-contents/property-report";
import heroBg from "@/assets/images/home-page-images/hero_bg.jpg";
import { Button } from "@nextui-org/react";

const PropertyReportPage = () => {
  return (
    <div>
      <section className="relative pb-36 max-sm:pb-20">
        <Image
          src={heroBg}
          alt="Background image"
          layout="fill"
          loading="eager"
          className="-z-10 object-cover "
        />
        <section className="max-container">
          <header>
            <TopNavBar />
          </header>
          <main className="mt-16 px-10 md:mt-24 md:px-32 max-sm:px-2 ">
            <div className="flex flex-wrap max-md:justify-center justify-between  items-center gap-12">
              <header className="max-w-[542px]">
                <h1 className="font-ubuntu font-bold text-[64px] leading-[73px] text-primaryWhite max-md:text-center max-md:text-[32px] max-md:leading-[48px]">
                  Property Report
                </h1>
                <p className="mt-[26px] max-md:mt-[36px] font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite max-md:text-center">
                  {propertyReportContents.propertyHeroContent}
                </p>
              </header>
              <ul className="list-disc space-y-3 max-md:px-6">
                {propertyReportContents.propertyHeroList.map((list, index) => (
                  <li
                    key={index}
                    className="font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-md:flex justify-center items-center">
              <Button className="mt-[26px] w-[200px] max-md:w-full h-[60px] bg-primaryBlue rounded-none text-primaryWhite font-roboto font-bold text-[24px] leading-[28px] text-center">
                Buy now &euro;29.95
              </Button>
            </div>
          </main>
        </section>
      </section>

      <div className="bg-primaryWhite">
        <article className="max-container flex flex-wrap   max-lg:gap-6 py-8  px-32 max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[32px] leading-[48px] text-darkBlue max-md:text-center">
            Benefit for Buyers:
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            {propertyReportContents.propertyBenefitOfBuyer.map(
              (list, index) => (
                <li
                  key={index}
                  className="font-roboto font-normal text-[20px] leading-[30px] text-darkBlue"
                >
                  {list}
                </li>
              )
            )}
          </ul>
        </article>
      </div>

      <div className="bg-darkBlue">
        <article className="max-container flex flex-wrap   max-lg:gap-6 py-8  px-32 max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[32px] leading-[48px] text-primaryWhite max-md:text-center">
            Information Included
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            {propertyReportContents.propertyInformationIncludedList.map(
              (list, index) => (
                <li
                  key={index}
                  className="font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite"
                >
                  {list}
                </li>
              )
            )}
          </ul>
        </article>
      </div>
      <div className="bg-primaryWhite">
        <article className="max-container flex flex-wrap  max-lg:gap-6 py-8 px-32  max-md:px-4 ">
          <h2 className="md:min-w-[356px] font-ubuntu font-bold text-[32px] leading-[48px] text-darkBlue ">
            Delivery Time:
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            <li className="font-roboto font-normal text-[20px] leading-[30px] text-darkBlue ">
              {propertyReportContents.propertyDeliveryTime}
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default PropertyReportPage;
