"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";

import TopNavBar from "@/components/layouts/TopNavBar";
// import purchaseContents from "@/contents/our-products-contents/purchase-price-contents";
import heroBg from "@/assets/images/home-page-images/hero_bg.svg";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const PurchasePriceInformationPage = () => {
  const locale = useLocale();
  const t = useTranslations("ProductsPurchasePriceInformation");

  const heroSectionList = [t("list.0"), t("list.1"), t("list.2")];

  const purchasePriceContents = t("note");

  const informationIncludedList = [
    t("InformationIncluded.list.0"),
    t("InformationIncluded.list.1"),
    t("InformationIncluded.list.2"),
    t("InformationIncluded.list.3"),
    t("InformationIncluded.list.4"),
    t("InformationIncluded.list.5"),
    t("InformationIncluded.list.6"),
    t("InformationIncluded.list.7"),
    t("InformationIncluded.list.8"),
  ];

  const deliveryTime = t("DeliveryTime.description");

  const benefitOfBuyersList = [
    t("BenefitsForBuyers.list.0"),
    t("BenefitsForBuyers.list.1"),
    t("BenefitsForBuyers.list.2"),
  ];

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
                  {/* Purchase Price Information */}
                  {t("title")}
                </h1>
                <p className="mt-[26px] max-md:mt-[36px] font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite max-md:text-center">
                  {/* Planning to buy or sell a house on a specific street? Our
                  Transaction Overview provides you with all recent and
                  historical sales and purchase prices of properties. */}
                  {t("subtitle")}
                </p>
              </header>
              <ul className="list-disc space-y-3 max-md:px-6">
                {heroSectionList.map((list, index) => (
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
              <Link href="/contact" locale={locale}>
                <Button className="mt-[26px] w-[200px] max-md:w-full h-[60px] bg-primaryBlue rounded-none text-primaryWhite font-roboto font-bold text-[24px] leading-[28px] text-center">
                  {/* Contact Us */}
                  {t("buttons.contactUs")}
                </Button>
              </Link>
            </div>
          </main>
        </section>

        <div className="absolute -bottom-2 left-0 right-0 w-full h-12 md:h-16 bg-transparent">
          <div
            className="absolute inset-0 w-full h-full bg-white"
            style={{
              clipPath:
                "polygon(100.45% 46.92%, 100.45% 100%, 0% 100%, 0% 0%, 10.24% 0%, 65.8% 0%, 68.89% 73.85%, 93.99% 73.85%, 95.31% 46.92%)",
            }}
          ></div>
        </div>
      </section>

      <div className="bg-primaryWhite relative pb-16">
        <article className="max-container flex flex-wrap   max-lg:gap-6 py-8  px-32 max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[30px] leading-[48px] text-darkBlue max-md:text-center">
            {" "}
            {/* text-[32px] */}
            {/* Information Included */}
            {t("InformationIncluded.heading")}
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            {informationIncludedList.map((list, index) => (
              <li
                key={index}
                className="font-roboto font-normal text-[20px] leading-[30px] text-darkBlue"
              >
                {list}
              </li>
            ))}
          </ul>
        </article>

        <div className="absolute -bottom-2 left-0 right-0 w-full h-12 md:h-16 bg-transparent">
          <div
            className="absolute inset-0 w-full h-full bg-[#161527]"
            style={{
              clipPath:
                "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
            }}
          ></div>
        </div>
      </div>

      <div className="bg-[#161527] pb-20 relative">
        <article className="max-container py-10 max-md:px-4 px-10 ">
          <p className="font-roboto font-normal text-[20px] leading-[30px] text-center text-primaryWhite">
            {purchasePriceContents}
          </p>
        </article>

        <div className="absolute -bottom-2 left-0 right-0 w-full h-12 md:h-16 bg-transparent">
          <div
            className="absolute inset-0 w-full h-full bg-[#F4F5FF] "
            style={{
              clipPath:
                "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
            }}
          ></div>
        </div>
      </div>

      <div className="relative bg-[#F4F5FF] pb-20">
        <article className="max-container flex items-center flex-wrap  max-lg:gap-6 py-8 px-32  max-md:px-4 ">
          <h2 className="md:min-w-[356px] font-ubuntu font-bold text-[30px] leading-[48px]">
            {" "}
            {/* text-[32px] */}
            {/* Delivery Time: */}
            {t("DeliveryTime.heading")}
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            <li className="font-roboto font-normal text-[20px] leading-[30px]">
              {deliveryTime}
            </li>
          </ul>
        </article>

        <div className="absolute -bottom-2 left-0 right-0 w-full h-12 md:h-16 bg-transparent">
          <div
            className="absolute inset-0 w-full h-full bg-white"
            style={{
              clipPath:
                "polygon(100.45% 46.92%, 100.45% 100%, 0% 100%, 0% 0%, 10.24% 0%, 65.8% 0%, 68.89% 73.85%, 93.99% 73.85%, 95.31% 46.92%)",
            }}
          ></div>
        </div>
      </div>

      <div className="bg-primaryWhite">
        <article className="max-container flex flex-wrap  max-lg:gap-6 py-8  px-32  max-md:px-4 ">
          <h2 className="md:min-w-[356px]  font-ubuntu font-bold text-[30px] leading-[48px] text-darkBlue max-md:text-center">
            {" "}
            {/* text-[32px] */}
            {/* Benefits for Buyers: */}
            {t("BenefitsForBuyers.heading")}
          </h2>
          <ul className="list-disc space-y-3 px-6 max-w-[800px]">
            {benefitOfBuyersList.map((list, index) => (
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

      {/* Footer Styling */}
      <div className="relative bg-white w-full h-12 md:h-16 ">
        <div
          className="absolute inset-0 w-full h-full bg-[#161527]"
          style={{
            clipPath:
              "polygon(100.45% 46.92%, 100.45% 100%, 0% 100%, 0% 0%, 10.24% 0%, 65.8% 0%, 68.89% 73.85%, 93.99% 73.85%, 95.31% 46.92%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default PurchasePriceInformationPage;