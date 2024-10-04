import Image from "next/image";

import assets from "@/assets/index";
import { Button } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="bg-[#161527] py-[40px] px-[143px] max-md:py-[40px] max-md:px-[16px]">
      <section className="max-container">
        <div className="flex max-md:flex-col items-start justify-between">
          <div>
            <h2 className="font-istok font-bold text-[20px] leading-[28px] text-primaryWhite">
              Let&apos;s talk
            </h2>
            <div className="mt-4 flex items-center gap-[36px] ">
              <Image src={assets.facebook} alt="Our Facebook" />
              <Image src={assets.instagram} alt="Our Instagram " />
              <Image src={assets.twitter} alt="Our Twitter" />
            </div>
            <p className="mt-4 font-ubuntu font-normal text-[12px] leading-[18px] text-primaryWhite">
              Innovating Real Estate with AI Precision
            </p>
          </div>
          <div className="flex max-md:flex-col items-center gap-36 max-md:gap-10 max-md:mt-10">
            <h2 className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]">
              About Us
            </h2>
            <h2 className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]">
              Services
            </h2>
            <h2 className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]">
              Projects
            </h2>
          </div>
          <div>
            <Button className="mt-9 max-md:mt-6 w-[153px] h-[46px] max-md:w-full mx-auto  rounded-none bg-primaryBlue text-primaryLightBlue font-roboto font-bold text-[24px] leading-[28px] text-center">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="mt-14 h-[1px] bg-primaryWhite opacity-[17%]"></div>

        <p className="mt-10 font-ubuntu font-normal text-[12px] leading-[18px] text-primaryWhite">
          Fushion AI 2024 (c) All rights reserved | Privacy Policy
        </p>
      </section>
    </footer>
  );
};

export default Footer;
