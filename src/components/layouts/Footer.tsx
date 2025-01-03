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
import { localization } from "@/data/localization";
import { useAppSelector } from "@/redux/hooks";
import { langSelector } from "@/redux/store";

const Footer = () => {
  const { language } = useAppSelector(langSelector) as { language: "en" | "nl" };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const downloadPdf = (filename: string) => {
    const pdfUrl = `/${filename}.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${filename}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-[#161527] py-[40px] px-[143px] max-xl:px-[40px] max-md:py-[40px] max-md:px-[16px]">
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
                {/* <Link href="#" target="_blank">
                  <Image src={assets.facebook} alt="Our Facebook" />
                </Link> */}
                <Link
                  href="https://www.instagram.com/fushionai?igsh=cXJ2MnZ1bTNmZGQ5"
                  target="_blank"
                >
                  <Image src={assets.instagram} alt="Our Instagram " />
                </Link>
                <Link
                  href="https://x.com/fushionai?t=fU36xZWVL43L7oycp72Ojw&s=08"
                  target="_blank"
                >
                  <Image src={assets.twitter} alt="Our Twitter" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/fushion-ai/"
                  target="_blank"
                >
                  <Image src={assets.linkedin} alt="Our Twitter" />
                </Link>
              </div>
            </div>

            <p className="mt-7 max-md:mt-9   font-ubuntu font-normal text-base leading-[18px] text-primaryWhite">
              Email: info@fushionai.com
            </p>

            <div className="mt-5  font-ubuntu font-normal text-base leading-6 text-primaryWhite">
              <span className="text-nowrap">WhatsApp: +31 (0)6 1099 1835</span>
            </div>
          </div>
          <div className="max-md:w-full flex max-md:flex-col items-center pt-2 gap-24 max-md:gap-10 max-[1200px]:mt-[32px]">
            <Link
              href="/about-us"
              className="max-md:self-start font-roboto font-bold text-base leading-[18px] text-[#AFAFAF] text-nowrap"
            >
              {/* About Us */}
              {localization.AboutUs.title[language]}
            </Link>
            <Link
              href="/our-products"
              className="max-md:self-start font-roboto font-bold text-base leading-[18px] text-[#AFAFAF] text-nowrap"
            >
              {/* Our Products */}
              {localization.Project.title[language]}
            </Link>
            <button
              onClick={onOpen}
              className="max-md:self-start font-roboto font-bold text-base leading-[18px] text-[#AFAFAF] text-nowrap"
            >
              {/* Our projects */}
              {localization.Project.title[language]}
            </button>
            <div className="flex max-md:w-full">
              <Link className="max-md:w-full" href="/contact">
                <Button className=" w-[110px] h-[40px] max-md:w-full mx-auto  rounded-none bg-primaryBlue text-primaryLightBlue font-roboto font-bold text-base max-md:text-lg leading-[28px] text-center">
                  {/* Contact Us */}
                  {localization.UpFooter.buttons.contactUs[language]}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 h-[1px] bg-primaryWhite opacity-[17%]"></div>
        <div className="flex flex-col gap-4 mt-6">
          <p className="font-ubuntu font-normal text-[13px] leading-[18px] text-primaryWhite">
            {/* Innovating Real Estate with AI Precision */}
            {localization.Footer.heading[language]}
          </p>

          <div className="flex flex-wrap items-center gap-2 font-ubuntu font-normal text-[13px] leading-[18px] text-primaryWhite">
            <p> Fushion AI 2024 (c) {localization.Footer.rights[language]} </p>
            <p>|</p>
            <button onClick={() => downloadPdf("Privacy policy")}>
              {/* Privacy Policy */}
              {localization.Footer.privacyPolicy[language]}{" "}
            </button>
            <p>|</p>
            <button onClick={() => downloadPdf("Terms and conditions")}>
              {/* Terms and Conditions */}
              {localization.Footer.termsAndConditions[language]}{" "}
            </button>
            <p>|</p>
            <button onClick={() => downloadPdf("Cookie policy")}>
              {/* Cookie Policy */}
              {localization.Footer.CookiePolicy[language]}{" "}
            </button>
          </div>
        </div>
      </section>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {/* Coming Soon: Exciting New Projects! */}
                {localization.ProjectModal.Header[language]}
              </ModalHeader>
              <ModalBody>
                <p>
                  {/* Big things are on the way! We’re gearing up to launch a series
                  of innovative projects designed to inspire and impress. From
                  cutting-edge technology to fresh, bold ideas, there’s
                  something for everyone. Stay tuned for updates, we cant wait
                  to share whats next! */}
                  {localization.ProjectModal.Body[language]}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {/* Close */}
                  {localization.ProjectModal.Footer.CloseButton[language]}
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
