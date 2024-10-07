import Image from "next/image";

import assets from "@/assets/index";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#161527] py-[40px] px-[143px] max-md:py-[40px] max-md:px-[16px]">
      <section className="max-container">
        <div className="flex max-[1200px]:flex-col items-start justify-between">
          <div>
            <h2 className="font-istok font-bold text-[20px] leading-[28px] text-primaryWhite">
              Let&apos;s talk
            </h2>
            <div className="mt-4 flex items-center gap-[36px] ">
              <Link href="#" target="_blank">
                <Image src={assets.facebook} alt="Our Facebook" />
              </Link>
              <Link href="#" target="_blank">
                <Image src={assets.instagram} alt="Our Instagram " />
              </Link>
              <Link href="#" target="_blank">
                <Image src={assets.twitter} alt="Our Twitter" />
              </Link>
            </div>
            <p className="mt-4 font-ubuntu font-normal text-[12px] leading-[18px] text-primaryWhite">
              Innovating Real Estate with AI Precision
            </p>
          </div>
          <div className="flex max-md:flex-col items-center gap-36 max-md:gap-10 max-[1200px]:mt-[32px]">
            <Link
              href="#"
              className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]"
            >
              About Us
            </Link>

            <Link
              href="#"
              className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]"
            >
              Services
            </Link>
            <Link
              href="#"
              className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]"
            >
              Projects
            </Link>
          </div>
          <div>
            <Button className="mt-9 max-[1200px]:mt-[32px] w-[153px] h-[46px] max-md:w-full mx-auto  rounded-none bg-primaryBlue text-primaryLightBlue font-roboto font-bold text-[24px] leading-[28px] text-center">
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
