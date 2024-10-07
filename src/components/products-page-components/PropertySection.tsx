import assets from "@/assets/index";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const PropertySection = () => {
  return (
    <section className="p-[120px] max-md:px-[16px] max-md:py-[40px]">
      <header>
        <h2 className="font-ubuntu font-bold text-[40px] leading-[45px] text-center text-darkBlue">
          Property Valuation
        </h2>
        <p className="mt-6 font-roboto font-normal text-[20px] leading-[30px] text-center text-darkBlue">
          Our Property Valuation product leverages advanced technology to
          provide accurate property value assessments.
        </p>
      </header>

      <main className="mt-[60px]">
        <article className="flex flex-col gap-20 justify-center items-center">
          <div className="flex max-sm:flex-col items-center gap-6">
            <div className="bg-[#EDEEF9] rounded-[16px] p-12">
              <Image
                src={assets.propertyRobot}
                alt="Property Valuation"
                loading="eager"
              />
            </div>
            <div className="max-w-[473px]">
              <h2 className="font-ubuntu font-bold max-md:font-medium  text-[40px] max-md:text-[24px] leading-[45px] max-md:leading-[36px] text-darkBlue">
                Property Valuation Analysis
              </h2>
              <p className="mt-9 max-sm:mt-6 font-roboto font-normal text-[20px] leading-[30px] text-secondaryGray">
                Compare similar properties to determine accurate pricing,
                ensuring you stay competitive in the market.
              </p>
              <div className="mt-9 max-sm:mt-6 flex items-center gap-6">
                <Button className="py-2 px-4 border border-darkBlue bg-primaryWhite font-roboto font-bold text-[24px] text-center text-darkBlue rounded-none">
                  Learn more
                </Button>
                <Button className="py-2 px-4 bg-primaryBlue font-roboto font-bold text-[24px] text-center text-primaryWhite  rounded-none">
                  Buy now &euro;50
                </Button>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col-reverse items-center gap-6">
            <div className="max-w-[473px]">
              <h2 className="font-ubuntu font-bold max-md:font-medium  text-[40px] max-md:text-[24px] leading-[45px] max-md:leading-[36px] text-darkBlue">
                AI-Powered Valuation and Predictions
              </h2>
              <p className="mt-9 max-sm:mt-6 font-roboto font-normal text-[20px] leading-[30px] text-secondaryGray">
                Compare similar properties to determine accurate pricing,
                ensuring you stay competitive in the market.
              </p>
              <div className="mt-9 max-sm:mt-6 flex items-center gap-6">
                <Button className="py-2 px-4 border border-darkBlue bg-primaryWhite font-roboto font-bold text-[24px] text-center text-darkBlue rounded-none">
                  Learn more
                </Button>
                <Button className="py-2 px-4 bg-primaryBlue font-roboto font-bold text-[24px] text-center text-primaryWhite  rounded-none">
                  Buy now &euro;80
                </Button>
              </div>
            </div>
            <div className="bg-[#EDEEF9] rounded-[16px] p-12">
              <Image
                src={assets.propertyAI}
                alt="Property Valuation"
                loading="eager"
              />
            </div>
          </div>
          <div className="flex max-sm:flex-col items-center gap-6">
            <div className="bg-[#EDEEF9] rounded-[16px] p-12">
              <Image
                src={assets.propertyDashboard}
                alt="Property Valuation"
                loading="eager"
              />
            </div>
            <div className="max-w-[473px]">
              <h2 className="font-ubuntu font-bold max-md:font-medium  text-[40px] max-md:text-[24px] leading-[45px] max-md:leading-[36px] text-darkBlue">
                Dashboard (Launching Soon)
              </h2>
              <p className="mt-9 max-sm:mt-6 font-roboto font-normal text-[20px] leading-[30px] text-secondaryGray">
                Stay ahead with our intuitive dashboard, designed to bring raw
                data and actionable insights right to your fingertips.
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col-reverse items-center gap-6">
            <div className="max-w-[473px]">
              <h2 className="font-ubuntu font-bold max-md:font-medium  text-[40px] max-md:text-[24px] leading-[45px] max-md:leading-[36px] text-darkBlue">
                Data at Your Fingertips
              </h2>
              <p className="mt-9 max-sm:mt-6 font-roboto font-normal text-[20px] leading-[30px] text-secondaryGray">
                Access raw data and insights effortlessly, allowing you to make
                data-driven decisions quickly and efficiently.
              </p>
            </div>
            <div className="bg-[#EDEEF9] rounded-[16px] p-12">
              <Image
                src={assets.propertyFingerPrint}
                alt="Property Valuation"
                loading="eager"
              />
            </div>
          </div>
        </article>
        <article></article>
      </main>
    </section>
  );
};

export default PropertySection;
