import Image from "next/image";
import { Button } from "@nextui-org/react";

import TopNavBar from "@/components/layouts/TopNavBar";
import assessedPropertyContents from "@/contents/our-products-contents/assessed-property-value";
import heroBg from "@/assets/images/home-page-images/hero_bg.svg";
import Link from "next/link";

const AssessedPropertyValuePage = () => {
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
            <div className="flex flex-wrap max-md:justify-center  items-center gap-12">
              <header className="max-w-[542px]">
                <h1 className="font-ubuntu font-bold text-[64px] leading-[73px] text-primaryWhite max-md:text-center max-md:text-[32px] max-md:leading-[48px]">
                  Assessed Property Value
                </h1>
                <p className="mt-[26px] max-md:mt-[36px] font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite max-md:text-center">
                  Ideal for accurately estimating the value of a property.
                </p>
              </header>
              <ul className="list-disc space-y-3 max-md:px-6">
                {assessedPropertyContents.assessedHeroSectionList.map(
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
            </div>
            <div className="max-md:flex justify-center items-center">
              <Link href="/contact">
                <Button className="mt-[26px] w-[200px] max-md:w-full h-[60px] bg-primaryBlue rounded-none text-primaryWhite font-roboto font-bold text-[24px] leading-[28px] text-center">
                  Contact Us
                </Button>
              </Link>
            </div>
          </main>
        </section>

        <div className="absolute -bottom-2 left-0 w-full h-12 md:h-16 bg-transparent">
          <div
            className="absolute inset-0 w-full h-full bg-white"
            style={{
              clipPath:
                "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
            }}
          ></div>
        </div>
      </section>

      <div className="relative bg-primaryWhite py-20">
        <article className="max-container flex flex-wrap   max-lg:gap-6 py-8  px-32 max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[32px] leading-[48px] text-darkBlue max-md:text-center">
            What is it?
          </h2>
          <div className="list-disc space-y-3 px-6 max-w-[800px]">
            <p className="font-roboto font-normal text-[20px] leading-[30px] text-darkBlue">
              {assessedPropertyContents.whatIsIt}{" "}
              <a href="#" className={`text-primaryBlue`}>
                click here.
              </a>
            </p>
          </div>
        </article>

        <div className="absolute bottom-0 w-full h-12 md:h-16 bg-trnasparent">
          <div
            className="absolute inset-0 w-full h-full bg-[#F4F5FF]"
            style={{
              clipPath:
                "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
            }}
          ></div>
        </div>
      </div>

      <div className="relative bg-[#F4F5FF] pb-20">
        <article className="max-container flex flex-wrap   max-lg:gap-6 py-8  px-32 max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[32px] leading-[48px] text-[#161527] max-md:text-center">
            Information Included
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            {assessedPropertyContents.assessedHeroSectionList.map(
              (list, index) => (
                <li
                  key={index}
                  className="font-roboto font-normal text-[20px] leading-[30px] text-[#161527]"
                >
                  {list}
                </li>
              )
            )}
          </ul>
        </article>

        <div className="absolute bottom-0 w-full h-12 md:h-16 bg-trnasparent">
          <div
            className="absolute inset-0 w-full h-full bg-white"
            style={{
              clipPath:
                "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
            }}
          ></div>
        </div>
      </div>

      <div className="bg-primaryWhite py-20">
        <article className="max-container flex items-center flex-wrap  max-lg:gap-6 py-8 px-32  max-md:px-4 ">
          <h2 className="md:min-w-[356px] font-ubuntu font-bold text-[32px] leading-[48px]">
            Delivery Time:
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            <li className="font-roboto font-normal text-[20px] leading-[30px]">
              {assessedPropertyContents.assessedDeliveryTime}
            </li>
          </ul>
        </article>
      </div>

      <div className="relative bg-[#F4F5FF] py-20">
        <div className="absolute -top-1 left-0 right-0 w-full h-12 md:h-16 bg-white">
          <div
            className="absolute inset-0 w-full h-full bg-[#F4F5FF]"
            style={{
              clipPath:
                "polygon(94.88% 46.92%, 100% 46.92%, 100% 100%, 0% 100%, 0% 0%, 10.2% 0%, 65.5% 0%, 68.58% 73.85%, 93.57% 73.85%, 94.88% 46.92%)",
            }}
          ></div>
        </div>

        <article className="max-container flex flex-wrap  max-lg:gap-6 py-8  px-32  max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[32px] leading-[48px] text-[#161527] max-md:text-center">
            Benefits for Buyers:
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px] text-[#161527]">
            {assessedPropertyContents.assessedBenefitOfBuyer.map(
              (list, index) => (
                <li
                  key={index}
                  className="font-roboto font-normal text-[20px] leading-[30px] text-[#161527]"
                >
                  {list}
                </li>
              )
            )}
          </ul>
        </article>
      </div>

      {/* Footer Styling */}
      <div className={`bg-[#161527] h-28 relative`}>
        <div className="absolute w-full h-12 md:h-16 bg-white">
          <div
            className="absolute inset-0 w-full h-full bg-[#161527]"
            style={{
              clipPath:
                "polygon(95.31% 46.92%, 100.45% 46.92%, 100.45% 100%, 0% 100%, 0% 0%, 10.24% 0%, 65.8% 0%, 68.89% 73.85%, 93.99% 73.85%, 95.31% 46.92%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AssessedPropertyValuePage;
