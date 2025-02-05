"use client";

import { startTransition, useState } from "react";
import { useParams } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  // Link,
  Button,
} from "@nextui-org/react";

import logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import assets from "@/assets/index";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

const TopNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Our Products",
      link: "/our-products",
    },
    {
      title: "Our Projects",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },

    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Language",
      link: "",
    },
  ];

  // const pathname = usePathname(); //todo:

  const t = useTranslations("");

  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: lang }
      );
    });
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      disableAnimation={false}
      maxWidth="2xl"
      className={`md:px-10 md:pt-3 bg-transparent ${
        isMenuOpen ? "bg-[#161527]" : ""
      }`}
    >
      <NavbarContent>
        <Link locale={locale} href="/">
          <NavbarBrand className="flex items-center gap-4">
            <div className="w-[90px] h-[100px] sm:w-[160px] sm:h-[120px]">
              <Image src={logo} alt="Logo" className="w-full h-full" />
            </div>
            <p className="font-bold text-primaryWhite text-[12px] sm:text-[18px] max-sm:text-[16px] font-istok leading-[15px] sm:leading-[23px] tracking-[.20em] sm:tracking-[.30em]">
              FUSHION AI
            </p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex gap-6 xl:gap-10"
        justify="center"
      >
        <NavbarItem>
          <Link
            className={`${
              pathname === "/" ? "text-primaryWhite" : "text-secondaryGray"
            } font-roboto font-bold text-xl`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className={`${
              pathname?.includes("/our-products")
                ? "text-primaryWhite"
                : "text-secondaryGray"
            } font-roboto font-bold text-xl`}
            href="/our-products"
          >
            {/* Our Products */}
            {t("ProductsHeroSection.title")}
          </Link>
        </NavbarItem>

        <button
          onClick={onOpen}
          className="font-roboto font-bold text-xl leading-[18px] text-secondaryGray"
        >
          {/* Our projects */}
          {t("Project.title")}
        </button>
        <NavbarItem>
          <Link
            className={`${
              pathname?.includes("/about-us")
                ? "text-primaryWhite"
                : "text-secondaryGray"
            } font-roboto font-bold text-xl`}
            href="/about-us"
          >
            {/* About Us */}
            {t("AboutUs.title")}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link locale={locale} className="" href="/contact">
            <Button className="h-[37px] rounded-none font-roboto bg-primaryBlue text-primaryWhite font-bold text-xl">
              {/* Contact */}
              {t("Contact.title")}
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <button
            className="flex gap-x-1 items-center text-primaryWhite text-xl"
            onClick={() => {
              handleLanguageChange(locale == "en" ? "nl" : "en");
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
            </svg>

            <p className="font-semibold font-roboto text-lg text-primaryWhite">
              {/* {language == "en" ? "EN" : "NL"} */}
              {locale.toLocaleUpperCase()}
            </p>
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden "
        icon={
          isMenuOpen ? (
            <Image src={assets.close} alt="Navbar close" loading="eager" />
          ) : (
            <Image src={assets.menu} alt="Navbar menu" loading="eager" />
          )
        }
      />

      <NavbarMenu className="bg-[#161527] pt-20 gap-12 ">
        {menuItems.map((item, index) => {
          return (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className={`flex flex-col items-center`}
            >
              <Link
                className={`${
                  index == 0
                    ? pathname === "/"
                      ? "text-primaryWhite"
                      : "text-secondaryGray"
                    : item.title === "Our Projects"
                    ? "text-secondaryGray" // redirects to products
                    : pathname?.includes(item.link)
                    ? "text-primaryWhite"
                    : "text-secondaryGray"
                } w-full font-roboto font-bold text-[24px]`}
                href={item.link}
                // size="lg"
              >
                {index === 4 ? (
                  <Link locale={locale} href="/contact" className="w-full">
                    <button className="w-full h-[69px]  rounded-none font-roboto bg-primaryBlue   text-primaryWhite font-bold text-[24px]">
                      {/* Contact */}
                      {t("Contact.title")}
                    </button>
                  </Link>
                ) : item.title === "Language" ? (
                  <button
                    className="flex gap-x-1 items-center text-primaryWhite text-xl w-full justify-center mt-[-30px]"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange(locale == "en" ? "nl" : "en");
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                    </svg>

                    <p className="font-semibold font-roboto text-lg text-primaryWhite">
                      {locale == "en" ? "EN" : "NL"}
                    </p>
                  </button>
                ) : item.title === "Our Projects" ? (
                  <button
                    className="w-full text-center font-roboto bg-transparent font-bold text-[24px] leading-[18px] text-secondaryGray"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpen();
                    }}
                  >
                    {/* Our Projects */}
                    {t("Project.title")}
                  </button>
                ) : index === 1 ? (
                  <p className="text-center mx-auto">
                    {t("ProductsHeroSection.title")}
                  </p>
                ) : index === 3 ? (
                  <p className="text-center mx-auto">{t("AboutUs.title")}</p>
                ) : (
                  <p className="text-center mx-auto">{item.title}</p>
                )}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>

      {/* details modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {/* Coming Soon: Exciting New Projects! */}
                {t("ProjectModal.Header")}
              </ModalHeader>
              <ModalBody>
                <p>
                  {/* Big things are on the way! We’re gearing up to launch a series
                  of innovative projects designed to inspire and impress. From
                  cutting-edge technology to fresh, bold ideas, there’s
                  something for everyone. Stay tuned for updates, we cant wait
                  to share whats next! */}
                  {t("ProjectModal.Body")}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {/* Close */}
                  {t("ProjectModal.Footer.CloseButton")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Navbar>
  );
};

export default TopNavBar;
