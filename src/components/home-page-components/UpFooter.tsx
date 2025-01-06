"use client";

import Image from "next/image";

import { Button } from "@nextui-org/react";

import heroBg from "@/assets/images/home-page-images/hero_bg.svg";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const UpFooter = () => {
  const locale = useLocale();
  const t = useTranslations("UpFooter");

  return (
    <section className="relative py-[120px] px-[143px] max-md:py-[40px] max-[950px]:px-[20px] max-md:px-[16px]">
      <Image
        src={heroBg}
        alt="Background image"
        layout="fill"
        loading="eager"
        className="-z-10 object-cover"
      />
      <main className="max-container">
        <h2 className="font-ubuntu font-bold text-[64px] max-md:text-[32px] leading-[73px] max-md:leading-[48px]  text-primaryWhite max-md:text-center pr-[460px] max-[1280px]:pr-0">
          {/* Ready to Simplify Your Real Estate process? */}
          {t("title")}
        </h2>
        <p className="mt-6 font-roboto font-normal text-[20px] leading-[30px] text-primaryLightBlue max-md:text-center">
          {/* Contact us and try it now */}
          {t("subheading")}
        </p>
        <div className="max-md:flex justify-center">
          <Link href="/contact" className="max-md:w-full" locale={locale}>
            <Button className="mt-9 max-md:mt-6 flex px-[23px] max-md:w-full mx-auto h-[60px] rounded-none bg-primaryBlue text-primaryLightBlue font-roboto font-bold text-[24px] max-md:text-lg leading-[28px] text-center">
              {/* Contact Us */}
              {t("buttons.contactUs")}
            </Button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default UpFooter;
