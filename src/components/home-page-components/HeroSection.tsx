import Image from "next/image";

import { Button, Link } from "@nextui-org/react";

import TopNavBar from "@/components/layouts/TopNavBar";

import heroBg from "@/assets/images/home-page-images/hero_bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-center bg-cover bg-no-repeat pb-36 max-sm:pb-28 h-[100vh]">
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
        <main className="mt-16 px-10 md:mt-24 md:px-32 max-sm:px-6">
          <h2 className="md:w-[600px] xl:w-[738px] font-ubuntu text-[64px] max-sm:text-[32px] font-bold text-secondaryWhite leading-[73px] max-sm:leading-[48px]">
            Innovating Real Estate with AI Precision
          </h2>
          <h6 className="sm:mt-10 font-roboto font-normal text-[20px] leading-[30px] text-secondaryWhite">
            Transform real estate with the power of data
          </h6>
          <div className="flex items-center gap-6 mt-20 max-sm:flex-col w-full">
            <Link href="/our-products">
              <Button className="h-[60px] w-[185px] max-sm:w-full bg-primaryBlue text-primaryWhite rounded-none font-bold text-2xl leading-[28px] font-roboto">
                Discover More
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="h-[60px] w-[185px] max-sm:w-full bg-primaryWhite text-darkBlue rounded-none font-bold text-2xl leading-[28px] font-roboto ">
                Contact Us
              </Button>
            </Link>
          </div>
        </main>
      </section>
    </section>
  );
};

export default HeroSection;
