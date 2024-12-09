"use client";
import Image from "next/image";

import assets from "@/assets/index";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import logo from "@/assets/icons/logo.svg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const Footer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <footer className="bg-[#161527] py-[40px] px-[143px] max-md:py-[40px] max-md:px-[16px]">
      <section className="max-container">
        <div className="flex max-[1200px]:flex-col items-start justify-between">
          <div>
            <Link href="/" className="flex items-center gap-4 ">
              <Image src={logo} alt="Logo" />
              <p className="font-bold text-primaryWhite text-[18px] max-sm:text-[16px] font-istok leading-[23px] tracking-[.30em]">
                FUSHION AI
              </p>
            </Link>

            <div className=" mt-5 flex items-center gap-6 ">
              <div className="flex items-center gap-[36px] ">
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

              <div className="bg-white w-[1px] h-4"></div>

              <p className="font-ubuntu font-normal text-base leading-[18px] text-primaryWhite">
                info@fushionai.com
              </p>
            </div>

            <div className="mt-5 max-md:mt-9 font-ubuntu font-normal text-base leading-6 text-primaryWhite">
              You can reach our customer service via WhatsApp:
              <span className="text-nowrap"> + 1 (31) 36- 2036297 </span>
            </div>

            <div className="mt-5 max-md:mt-6 font-ubuntu font-normal text-base leading-6 text-primaryWhite">
              Our business bank account:
              <span className="text-nowrap"> 1000872289 </span>
            </div>
          </div>
          <div className="flex max-md:flex-col items-center pt-2 gap-24 max-md:gap-10 max-[1200px]:mt-[32px]">
            <Link
              href="/about-us"
              className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]"
            >
              About Us
            </Link>
            {/* <Link
              href="/our-products"
              className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]"
            >
              Services
            </Link> */}
            <Link
              href="/our-products"
              className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]"
            >
              Our Products
            </Link>
            <button
              onClick={onOpen}
              className="font-roboto font-bold text-[16px] leading-[18px] text-[#AFAFAF]"
            >
              Our projects
            </button>
          </div>
          <div className="flex items-start max-md:w-full">
            <Link className="max-md:w-full" href="/contact">
              <Button className="max-[1200px]:mt-[32px] w-[153px] h-[46px] max-md:w-full mx-auto  rounded-none bg-primaryBlue text-primaryLightBlue font-roboto font-bold text-[24px] max-md:text-lg leading-[28px] text-center">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-14 h-[1px] bg-primaryWhite opacity-[17%]"></div>
        <div className="flex flex-col gap-4 mt-6">
          <p className="font-ubuntu font-normal text-[12px] leading-[18px] text-primaryWhite">
            Innovating Real Estate with AI Precision
          </p>

          <p className=" font-ubuntu font-normal text-[12px] leading-[18px] text-primaryWhite">
            Fushion AI 2024 (c) All rights reserved | Privacy Policy
          </p>
        </div>
      </section>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Coming Soon: Exciting New Projects!
              </ModalHeader>
              <ModalBody>
                <p>
                  Big things are on the way! We’re gearing up to launch a series
                  of innovative projects designed to inspire and impress. From
                  cutting-edge technology to fresh, bold ideas, there’s
                  something for everyone. Stay tuned for updates, we cant wait
                  to share whats next!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </footer>
  );
};

export default Footer;
