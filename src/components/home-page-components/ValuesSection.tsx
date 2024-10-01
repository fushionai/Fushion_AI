import Value from "./Value";
import valuesSectionContent from "@/contents/home-page-contents/values-section-content";

const ValuesSection = () => {
  return (
    <section className="bg-primaryWhite py-20">
      <header>
        <h2 className="px-10 font-bold font-ubuntu text-[40px] max-md:text-[32px] text-center text-darkBlue leading-[32px]">
          Core Values of Fushion AI
        </h2>
        <p className="max-w-[930px] mx-auto mt-12 px-6 max-md:mt-8 font-roboto font-normal text-[20px] text-center leading-[30px]">
          At Fushion AI, your success is our priority. We are dedicated to
          delivering high-quality services that help you make smart, data-driven
          decisions. Whether you are a consumer, real estate agent, or real
          estate professional, we are here to support you with our expertise
        </p>
      </header>
      <main className="flex items-center justify-center mt-16 px-10 max-sm:px-5">
        <div>
          <div className="flex max-lg:flex-col gap-10 max-sm:gap-5">
            <Value
              icon={valuesSectionContent[0].icon}
              title={valuesSectionContent[0].title}
              description={valuesSectionContent[0].description}
              bgColor="bg-[#161527]"
            />
            <Value
              icon={valuesSectionContent[1].icon}
              title={valuesSectionContent[1].title}
              description={valuesSectionContent[1].description}
              bgColor="bg-[#2B00FF]"
            />
          </div>
          <div className="flex  max-lg:flex-col mt-10 max-sm: gap-10 max-sm:gap-5">
            <Value
              icon={valuesSectionContent[2].icon}
              title={valuesSectionContent[2].title}
              description={valuesSectionContent[2].description}
              bgColor="bg-[#77818A]"
            />
            <Value
              icon={valuesSectionContent[3].icon}
              title={valuesSectionContent[3].title}
              description={valuesSectionContent[3].description}
              bgColor="bg-[#222222]"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default ValuesSection;
