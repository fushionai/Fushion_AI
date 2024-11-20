import Image from "next/image";
import { Button } from "@nextui-org/react";

import TopNavBar from "@/components/layouts/TopNavBar";
import propertyAnalysis from "@/contents/our-products-contents/property-analysis";
import assets from "@/assets/index";
import heroBg from "@/assets/images/home-page-images/hero_bg.jpg";

const PropertyValuationAnalysisReportPage = () => {
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
            <div className="flex flex-row max-[1200px]:flex-col-reverse justify-between  max-[1200px]:justify-center  items-center gap-12">
              <header className="max-w-[542px] max-[1200px]:max-w-fit">
                <h1 className="font-ubuntu font-bold text-[64px] leading-[73px] text-primaryWhite max-[1200px]:text-center max-md:text-[32px] max-md:leading-[48px]">
                  Property Valuation Analysis Report
                </h1>
                <p className="mt-[26px] max-md:mt-[36px] font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite max-[1200px]:text-center">
                  {propertyAnalysis.propertyAnalysisHeroContent}
                </p>
              </header>

              <div className="bg-[#EDEEF9] rounded-[16px] p-12 max-sm:p-10 lg:mr-20">
                <Image
                  src={assets.propertyRobot}
                  alt="Property Valuation Analysis Report"
                  loading="eager"
                />
              </div>
            </div>
            <div className="max-[1200px]:flex justify-center items-center">
              <Button className="mt-[26px] w-[200px] max-md:w-full h-[60px] bg-primaryBlue rounded-none text-primaryWhite font-roboto font-bold text-[24px] leading-[28px] text-center">
                Buy now &euro;50.00
              </Button>
            </div>
          </main>
        </section>
      </section>

      <div className="bg-primaryWhite">
        <article className="max-container flex flex-wrap   max-lg:gap-6 py-8  px-32 max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[32px] leading-[48px] text-darkBlue max-md:text-center">
            Information Included
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            {propertyAnalysis.propertyAnalysisInformationIncludedList.map(
              (list, index) => (
                <li
                  key={index}
                  className="font-roboto font-normal text-[20px] leading-[30px] text-darkBlue"
                >
                  {list}
                </li>
              )
            )}
            <div className="max-w-[547px] p-3 mt-6 flex items-center gap-4 ml-[-16px] bg-[#FFF3F3] rounded">
              <Image src={assets.noteBlack} alt="note" />
              <p className="font-roboto font-normal text-[20px] leading-[22px] text-darkBlue">
                Please note that the Neighborhood Comparative Analysis Report
                may sometimes be unavailable, and not all elements may be
                included in every report.
              </p>
            </div>
          </ul>
        </article>
      </div>

      <div className="bg-[#F4F5FF] py-20">
        <article className="max-container flex items-center flex-wrap  max-lg:gap-6 py-8 px-32  max-md:px-4 ">
          <h2 className="md:min-w-[356px] font-ubuntu font-bold text-[32px] leading-[48px] ">
            Delivery Time:
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            <li className="font-roboto font-normal text-[20px] leading-[30px] ">
              {propertyAnalysis.propertyAnalysisDeliveryTime}
            </li>
          </ul>
        </article>
      </div>

      <div className="bg-primaryWhite">
        <article className="max-container flex flex-wrap  max-lg:gap-6 py-8  px-32  max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[32px] leading-[48px] text-darkBlue max-md:text-center">
            Benefits for Buyers:
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            {propertyAnalysis.propertyAnalysisBenefitOfBuyer.map(
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
    </div>
  );
};

export default PropertyValuationAnalysisReportPage;
