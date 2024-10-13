import Image from "next/image";
import { Button } from "@nextui-org/react";

import TopNavBar from "@/components/layouts/TopNavBar";
import purchaseContents from "@/contents/our-products-contents/purchase-price-contents";
import heroBg from "@/assets/images/home-page-images/hero_bg.jpg";

const PurchasePriceInformationPage = () => {
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
                  Purchase Price Information
                </h1>
                <p className="mt-[26px] max-md:mt-[36px] font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite max-md:text-center">
                  Planning to buy or sell a house on a specific street? Our
                  Transaction Overview provides you with all recent and
                  historical sales and purchase prices of properties.
                </p>
              </header>
              <ul className="list-disc space-y-3 max-md:px-6">
                {purchaseContents.heroSectionList.map((list, index) => (
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
                Buy now &euro;34.95
              </Button>
            </div>
          </main>
        </section>
      </section>

      <div className="bg-[#171359]">
        <article className="max-container py-10 max-md:px-4 px-10 ">
          <p className="font-roboto font-normal text-[20px] leading-[30px] text-center text-primaryWhite">
            {purchaseContents.purchasePriceContents}
          </p>
        </article>
      </div>

      <div className="bg-primaryWhite">
        <article className="max-container flex flex-wrap   max-lg:gap-6 py-8  px-32 max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[32px] leading-[48px] text-darkBlue max-md:text-center">
            Information Included
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            {purchaseContents.informationIncludedList.map((list, index) => (
              <li
                key={index}
                className="font-roboto font-normal text-[20px] leading-[30px] text-darkBlue"
              >
                {list}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="bg-darkBlue">
        <article className="max-container flex items-center flex-wrap  max-lg:gap-6 py-8 px-32  max-md:px-4 ">
          <h2 className="md:min-w-[356px] font-ubuntu font-bold text-[32px] leading-[48px] text-primaryWhite ">
            Delivery Time:
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            <li className="font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite ">
              {purchaseContents.deliveryTime}
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
            {purchaseContents.benefitOfBuyersList.map((list, index) => (
              <li
                key={index}
                className="font-roboto font-normal text-[20px] leading-[30px] text-darkBlue"
              >
                {list}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default PurchasePriceInformationPage;
