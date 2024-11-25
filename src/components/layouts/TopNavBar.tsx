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

const TopNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <NavbarBrand className="flex items-center gap-4 ">
          <Image src={logo} alt="Logo" />
          <p className="font-bold text-primaryWhite text-[18px] max-sm:text-[16px] font-istok leading-[23px] tracking-[.30em]">
            FUSHION AI
          </p>
        </NavbarBrand>
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
        {menuItems.map((item, index) => (
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
              {index === 3 ? (
                <Button className="h-[69px]  rounded-none font-roboto bg-primaryBlue  text-primaryWhite font-bold text-[24px]">
                  Contact
                </Button>
              ) : (
                item.title
              )}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default TopNavBar;
