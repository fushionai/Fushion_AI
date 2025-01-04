"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/useLanguage";
import { localization } from "@/data/localization";
import AboutMission from "./AboutMission";

const AboutUsMissionVision = () => {
  const { language } = useContext(LanguageContext) as { language: "en" | "nl" };

  return (
    <section className="bg-primaryWhite">
      <section className="max-container pb-[100px] px-[143px] max-lg:pb-[40px] max-lg:px-16 max-md:px-4">
        <header>
          <h2 className="font-ubuntu font-bold text-[40px] leading-[60px] text-center text-darkBlue">
            {/* Mission and Vision for Fushion AI */}
            {localization.AboutUsMissionVision.title[language]}
          </h2>

          <main className="mt-12 max-md:mt-6">
            <div className="flex max-lg:flex-wrap justify-center gap-4 max-sm:gap-5">
              <AboutMission
                title={
                  localization.AboutUsMissionVision.mission.title[language]
                }
                description={
                 
                  localization.AboutUsMissionVision.mission.description[language]
                }
                bgColor="bg-[#161527]"
              />
              <AboutMission
                title={localization.AboutUsMissionVision.vision.title[language]}
                description={
                  localization.AboutUsMissionVision.vision.description[language]
                }
                bgColor="bg-[#2B00FF]"
              />
            </div>
          </main>
        </header>
      </section>
    </section>
  );
};

export default AboutUsMissionVision;
