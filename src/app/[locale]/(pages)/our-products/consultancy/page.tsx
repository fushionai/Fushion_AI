"use client";
import Image from "next/image";

import TopNavBar from "@/components/layouts/TopNavBar";

import heroBg from "@/assets/images/products-page-images/our-products-hero.png";
// import { Button, Link } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { BlueButton } from "@/components/home-page-components/CustomeButton";
import { Link } from "@/i18n/routing";

const Consultancy = () => {
  const t = useTranslations("ProductsHeroSection.consultancy");
  const locale = useLocale();
  
  return (
    <section>
      <section className="relative bg-center bg-cover bg-no-repeat pb-36 max-sm:pb-28">
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
          <main className="mt-16 px-10 pb-20 md:mt-20 md:px-32 max-sm:px-2">
            <h2 className="font-ubuntu text-[64px] max-sm:text-[32px]  font-bold text-primaryWhite text-center leading-[73px] max-sm:leading-[48px]">
              {/* Consultancy */}
              {t("title")}
            </h2>
            <h6 className="max-w-[1158px] mx-auto mt-5 sm:mt-10 font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite text-center">
              {/* At Fushion AI, we offer tailored consultancy services to support
              our clients in navigating the complexities of the real estate
              market. As a tech-driven company, we combine our expertise in
              advanced analytics, artificial intelligence, and market trends to
              deliver actionable insights and customized solutions. Whether
              you&apos;re a property investor, developer, or real estate
              professional, our consultancy services are designed to empower you
              with data-driven strategies, enabling you to make informed
              decisions and maximize returns. Together, we ensure you stay ahead
              in the competitive real estate landscape. */}
              {t("subheading")}
            </h6>

            <Link
              href="/contact"
              className="flex items-center justify-center"
              locale={locale}
            >
              <BlueButton
                className="mt-12 rounded-sm bg-primaryBlue text-primaryLightBlue font-roboto font-medium text-lg leading-[28px] text-center"
                color="primary"
                // size="lg"
              >
                {/* Get in touch with us now */}
                {t("buttons.getInTouch")}

                <ArrowRight />
              </BlueButton>
            </Link>

            <div className="absolute -bottom-2 left-0 right-0 w-full bg-transparent h-24">
              {/* transparent */}
              <div
                className="absolute inset-0 w-full h-full bg-white/50"
                style={{
                  clipPath:
                    "polygon(94.95% 47.92%, 100% 47.92%, 100% 89.58%, 0% 99.58%, 0% 0%, 10.17% 0%, 57.5% 0%, 58.64% 20%, 93.98% 20%, 94.95% 47.92%)",
                }}
              ></div>

              {/* bold white */}
              <div className="absolute -bottom-2 left-0 w-full h-12 md:h-16 bg-transparent">
                <div
                  className="absolute inset-0 w-full h-full bg-white"
                  style={{
                    clipPath:
                      "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
                  }}
                ></div>
              </div>
            </div>
          </main>
        </section>
      </section>

      {/* Footer Styling */}
      <div className={`bg-[#161527] h-28 relative`}>
        <div className="relative w-full h-12 md:h-16 bg-white">
          <div
            className="absolute inset-0 w-full h-full bg-[#161527]"
            style={{
              clipPath:
                "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
