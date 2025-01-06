"use client";

import aboutUsValues from "@/contents/about-us-contents/about-us-values";

import AboutValue from "./AboutValue";
import { useTranslations } from "next-intl";

const AboutUsOurValues = () => {
  const t = useTranslations("AboutUsValues");

  return (
    <section className="bg-primaryWhite">
      <section className="max-container py-[100px] px-[143px] max-lg:py-[40px] max-lg:px-16 max-md:px-4">
        <header>
          <h2 className="font-ubuntu font-bold text-[40px] leading-[60px] text-center text-darkBlue">
            {/* Our Values */}
            {t("title")}
          </h2>

          <main className="mt-12 max-md:mt-6">
            <div className="flex max-lg:flex-wrap justify-center gap-4 max-sm:gap-5">
              <AboutValue
                icon={aboutUsValues[0].icon}
                title={t(
                  // {aboutUsValues[0].title}
                  "values.0.title"
                )}
                description={t(
                  // {aboutUsValues[0].description}
                  "values.0.description"
                )}
                bgColor="bg-[#161527]"
              />
              <AboutValue
                icon={aboutUsValues[1].icon}
                title={t( // {aboutUsValues[1].title}
                  "values.1.title"
                )}
                description={t( // {aboutUsValues[1].description}
                  "values.1.description"
                )}
                bgColor="bg-[#2B00FF]"
              />
              <AboutValue
                icon={aboutUsValues[2].icon}
                title=// {aboutUsValues[2].title}
                {t("values.2.title")}
                description=// {aboutUsValues[2].description}
                {t("values.2.description")}
                bgColor="bg-[#77818A]"
              />
            </div>
          </main>
        </header>
      </section>
    </section>
  );
};

export default AboutUsOurValues;
