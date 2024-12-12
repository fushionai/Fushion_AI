"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
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
  ];

  const pathname = usePathname();

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
        <Link href="/">
          <NavbarBrand className="flex items-center gap-4">
            <Image src={logo} alt="Logo" />
            <p className="font-bold text-primaryWhite text-[18px] max-sm:text-[16px] font-istok leading-[23px] tracking-[.30em]">
              FUSHION AI
            </p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-10" justify="center">
        <NavbarItem>
          <Link
            className={`${
              pathname === "/" ? "text-primaryWhite" : "text-secondaryGray"
            } font-roboto font-bold text-[16px]`}
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
            } font-roboto font-bold text-[16px]`}
            href="/our-products"
          >
            Our Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`${
              pathname?.includes("/about-us")
                ? "text-primaryWhite"
                : "text-secondaryGray"
            } font-roboto font-bold text-[16px]`}
            href="/about-us"
          >
            About Us
          </Link>
        </NavbarItem>
        <button
          onClick={onOpen}
          className="font-roboto font-bold text-[16px] leading-[18px] text-secondaryGray"
        >
          Our projects
        </button>
        <NavbarItem>
          <Link className="" href="/contact">
            <Button className="h-[37px] rounded-none font-roboto bg-primaryBlue text-primaryWhite font-bold text-[16px]">
              Contact
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden "
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
              className={`flex flex-col items-center ${
                index === 3 ? "bg-primaryBlue" : ""
              }`}
            >
              <Link
                className={`${
                  index == 0
                    ? pathname === "/"
                      ? "text-primaryWhite"
                      : "text-secondaryGray"
                    : pathname?.includes(item.link)
                    ? "text-primaryWhite"
                    : "text-secondaryGray"
                } font-roboto font-bold text-[24px]`}
                href={item.link}
                size="lg"
              >
                {index === 4 ? (
                  <Button className="h-[69px]  rounded-none font-roboto bg-primaryBlue   text-primaryWhite font-bold text-[24px]">
                    Contact
                  </Button>
                ) : item.title === "Our Projects" ? (
                  <Button
                    className="font-roboto bg-transparent font-bold text-[24px] leading-[18px] text-secondaryGray"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpen();
                    }}
                  >
                    Our Projects
                  </Button>
                ) : (
                  item.title
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
    </Navbar>
  );
};

export default TopNavBar;
