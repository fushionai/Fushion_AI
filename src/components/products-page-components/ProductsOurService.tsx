"use client";

import { useLocale, useTranslations } from "next-intl";
// import { Button } from "@nextui-org/react";
import { Link } from "@/i18n/routing";
import { BlueButton, WhiteButton } from "../home-page-components/CustomeButton";

const ProductsOurService = ({
  price,
  title,
  description,
  lists,
  goToLink,
}: {
  price: string;
  title: string;
  description: string;
  lists?: string[];
  goToLink?: string;
}) => {
  const locale = useLocale();
  const t = useTranslations("ProductsOurServices");

  return (
    <section className="bg-primaryLightBlue py-12 px-6 !h-full sm:h-[736px] max-w-[382px] max-xl:max-w-[360px] max-[1149px]:max-w-[95%] max-[1149px]:mx-auto">
      <header className="h-full sm:h-[320px]">
        <h2 className="relative w-fit mx-auto font-ubuntu font-bold text-[64px] leading-[73px] text-primaryBlue text-center">
          {price}
          <span className="absolute top-0 -left-4 font-roboto font-medium text-[28px] leading-[42px]">
            &euro;
          </span>
        </h2>
        <h3 className="px-2 sm:px-16 mt-9 font-ubuntu font-medium text-[24px] leading-[36px] text-center text-darkBlue ">
          {title}
        </h3>
        <p className="mt-6 text-center font-roboto font-normal text-base leading-[24px]  text-secondaryGray">
          {description}
        </p>
      </header>

      <main className="h-full sm:h-[210px] mt-9">
        {lists && (
          <ul className="space-y-[10px] list-disc px-2">
            {lists.map((list, index) => (
              <li
                key={index}
                className="font-roboto font-normal text-[20px] leading-[30px] text-darkBlue"
              >
                {list}
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer>
        <div className="mt-9 max-sm:mt-6 flex items-center justify-center gap-2">
          <Link href={goToLink || ""} locale={locale}>
            <WhiteButton
              className="py-4 px-2 border border-darkBlue bg-transparent font-roboto font-bold text-[24px] text-center text-darkBlue rounded-none
            max-xl:text-base max-xl:px-4
            "
            >
              {/* Learn more */}
              {t("buttons.learnMore")}
            </WhiteButton>
          </Link>
          <Link href="/contact" locale={locale}>
            <BlueButton
              className="py-4 px-2 bg-primaryBlue font-roboto font-bold text-[24px] text-center text-primaryWhite  rounded-none
               max-xl:text-base max-xl:px-4
            "
            >
              {/* Contact Us */}
              {t("buttons.contactUs")}
            </BlueButton>
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default ProductsOurService;
