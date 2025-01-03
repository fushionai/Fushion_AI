import aboutUsValues from "@/contents/about-us-contents/about-us-values";

import AboutValue from "./AboutValue";
import { localization } from "@/data/localization";
import { useAppSelector } from "@/redux/hooks";
import { langSelector } from "@/redux/store";

const AboutUsOurValues = () => {
  const { language } = useAppSelector(langSelector) as { language: "en" | "nl" };

  return (
    <section className="bg-primaryWhite">
      <section className="max-container py-[100px] px-[143px] max-lg:py-[40px] max-lg:px-16 max-md:px-4">
        <header>
          <h2 className="font-ubuntu font-bold text-[40px] leading-[60px] text-center text-darkBlue">
            {/* Our Values */}
            {localization.AboutUsValues.title[language]}
          </h2>

          <main className="mt-12 max-md:mt-6">
            <div className="flex max-lg:flex-wrap justify-center gap-4 max-sm:gap-5">
              <AboutValue
                icon={aboutUsValues[0].icon}
                title=// {aboutUsValues[0].title}
                {localization.AboutUsValues.values[0].title[language]}
                description=// {aboutUsValues[0].description}
                {localization.AboutUsValues.values[0].description[language]}
                bgColor="bg-[#161527]"
              />
              <AboutValue
                icon={aboutUsValues[1].icon}
                title=// {aboutUsValues[1].title}
                {localization.AboutUsValues.values[1].title[language]}
                description=// {aboutUsValues[1].description}
                {localization.AboutUsValues.values[1].description[language]}
                bgColor="bg-[#2B00FF]"
              />
              <AboutValue
                icon={aboutUsValues[2].icon}
                title=// {aboutUsValues[2].title}
                {localization.AboutUsValues.values[2].title[language]}
                description=// {aboutUsValues[2].description}
                {localization.AboutUsValues.values[2].description[language]}
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
