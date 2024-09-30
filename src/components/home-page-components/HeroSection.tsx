import { Button } from "@nextui-org/react";

import TopNavBar from "@/components/TopNavBar";

const HeroSection = () => {
  return (
    <section className="bg-hero-bg bg-center bg-cover bg-no-repeat max-h-screen pb-20 max-sm:pb-28">
      <header>
        <TopNavBar />
      </header>
      <main className="mt-16 px-10 md:mt-24 md:px-32 max-sm:px-6">
        <h2 className="md:w-[600px] font-ubuntu text-[64px] max-sm:text-[32px]  font-bold text-secondaryWhite leading-[73px] max-sm:leading-[48px]">
          Innovating Real Estate with AI Precision
        </h2>
        <h6 className="sm:mt-10 font-roboto font-normal text-[20px] leading-[30px]">
          Transform real estate with the power of data
        </h6>
        <div className="flex items-center gap-6 mt-20 max-sm:flex-col w-full">
          <Button className="h-[60px] w-[185px] max-sm:w-full bg-primaryBlue text-primaryWhite rounded-none font-bold text-2xl leading-[28px] font-roboto">
            Discover More
          </Button>
          <Button className="h-[60px] w-[185px] max-sm:w-full bg-primaryWhite text-darkBlue rounded-none font-bold text-2xl leading-[28px] font-roboto ">
            Contact Us
          </Button>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
