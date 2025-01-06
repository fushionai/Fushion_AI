"use client";

import { useTranslations } from "next-intl";
import AboutMission from "./AboutMission";

const AboutUsMissionVision = () => {
  const t = useTranslations("AboutUsMissionVision");

  return (
    <section className="bg-primaryWhite">
      <section className="max-container pb-[100px] px-[143px] max-lg:pb-[40px] max-lg:px-16 max-md:px-4">
        <header>
          <h2 className="font-ubuntu font-bold leading-[50px] text-[40px] sm:leading-[60px] text-center text-darkBlue">
            {/* Mission and Vision for Fushion AI */}
            {t("title")}
          </h2>

          <main className="mt-12 max-md:mt-6">
            <div className="flex max-lg:flex-wrap justify-center gap-4 max-sm:gap-5">
              <AboutMission
                title={t("mission.title")}
                description={t("mission.description")}
                bgColor="bg-[#161527]"
              />
              <AboutMission
                title={t("vision.title")}
                description={t("vision.description")}
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
