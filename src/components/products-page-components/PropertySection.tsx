"use client";
import assets from "@/assets/index";
import { useLocale, useTranslations } from "next-intl";
// import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { BlueButton, WhiteButton } from "../home-page-components/CustomeButton";

const PropertySection = () => {
  const locale = useLocale();
  const t = useTranslations("PropertySection");

  return (
    <section className="p-[120px] max-md:px-[16px] max-md:py-[40px] bg-primaryWhite">
      <header>
        <h2 className="font-ubuntu font-bold text-[30px] sm:text-[40px] leading-[45px] text-center text-darkBlue">
          {/* Property Valuation */}
          {t("title")}
        </h2>
        <p className="mt-6 font-roboto font-normal text-[20px] leading-[30px] text-center text-darkBlue">
          {/* Our Property Valuation product leverages advanced technology to
          provide accurate property value assessments. */}
          {t("description")}
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
                {/* Property Valuation Analysis */}
                {t("sections.0.title")}
              </h2>
              <p className="mt-9 max-sm:mt-6 font-roboto font-normal text-[20px] leading-[30px] text-secondaryGray">
                {/* Compare similar properties to determine accurate pricing,
                ensuring you stay competitive in the market. */}
                {t("sections.0.description")}
              </p>
              <div className="mt-9 max-sm:mt-6 flex items-center gap-6">
                <Link
                  href="our-products/property-valuation-analysis-report"
                  locale={locale}
                >
                  {/* <Button
                    as="link"
                    className="py-2 px-4 border border-darkBlue bg-primaryWhite font-roboto font-bold text-[24px] text-center text-darkBlue rounded-none"
                  > */}
                  {/* Learn more */}
                  <WhiteButton className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover py-2 px-4 border border-darkBlue bg-primaryWhite font-roboto font-bold text-[24px] text-center text-darkBlue rounded-none">
                    {t("sections.0.buttons.learnMore")}
                  </WhiteButton>
                </Link>
                <Link href="/contact" locale={locale}>
                  <BlueButton className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover py-2 px-4 bg-primaryBlue font-roboto font-bold text-[24px] text-center text-primaryWhite rounded-none">
                    {/* Contact Us */}
                    {t("sections.0.buttons.contactUs")}
                  </BlueButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col-reverse items-center gap-6">
            <div className="max-w-[473px]">
              <h2 className="font-ubuntu font-bold max-md:font-medium  text-[40px] max-md:text-[24px] leading-[45px] max-md:leading-[36px] text-darkBlue">
                {/* AI-Powered Valuation and Predictions */}
                {t("sections.1.title")}
              </h2>
              <p className="mt-9 max-sm:mt-6 font-roboto font-normal text-[20px] leading-[30px] text-secondaryGray">
                {/* Compare similar properties to determine accurate pricing,
                ensuring you stay competitive in the market. */}
                {t("sections.1.description")}
              </p>
              <div className="mt-9 max-sm:mt-6 flex items-center gap-6">
                <Link href="our-products/ai-powered" locale={locale}>
                  <WhiteButton>
                    {/* Learn more */}
                    {t("sections.1.buttons.learnMore")}
                  </WhiteButton>
                </Link>
                <Link href="/contact" locale={locale}>
                  <BlueButton >
                    {/* Contact Us */}
                    {t("sections.1.buttons.contactUs")}
                  </BlueButton>
                </Link>
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
                {/* Dashboard (Launching Soon) */}
                {t("sections.2.title")}
              </h2>
              <p className="mt-9 max-sm:mt-6 font-roboto font-normal text-[20px] leading-[30px] text-secondaryGray">
                {/* Stay ahead with our intuitive dashboard, designed to bring raw
                data and actionable insights right to your fingertips. */}
                {t("sections.2.description")}
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col-reverse items-center gap-6">
            <div className="max-w-[473px]">
              <h2 className="font-ubuntu font-bold max-md:font-medium  text-[40px] max-md:text-[24px] leading-[45px] max-md:leading-[36px] text-darkBlue">
                {/* Data at Your Fingertips */}
                {t("sections.3.title")}
              </h2>
              <p className="mt-9 max-sm:mt-6 font-roboto font-normal text-[20px] leading-[30px] text-secondaryGray">
                {/* Access raw data and insights effortlessly, allowing you to make
                data-driven decisions quickly and efficiently. */}
                {t("sections.3.description")}
              </p>
            </div>
            <div className="bg-[#EDEEF9] rounded-[16px] p-12">
              <Image
                src={assets.propertyFingerPrint}
                alt={t("title")}
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
