"use client";

import { useState } from "react";
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

import logo from "../assets/icons/logo.svg";
import Image from "next/image";

const TopNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Our Product", "About Us", "Contact"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      maxWidth="2xl"
      className="md:px-10 md:pt-3 bg-transparent"
    >
      <NavbarContent>
        <NavbarBrand className="flex items-center gap-4">
          <Image src={logo} alt="Logo" />
          <p className="font-bold text-primaryWhite text-[18px] font-istok leading-[23px] tracking-[.30em]">
            FUSHION AI
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-10" justify="center">
        <NavbarItem>
          <Link
            className="text-secondaryGray font-roboto font-bold text-[16px]"
            href="#"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-secondaryGray font-roboto font-bold text-[16px]"
            href="#"
            // aria-current="page"
          >
            Our Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-secondaryGray font-roboto font-bold text-[16px]"
            href="#"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="" href="#">
            <Button className="h-[37px] rounded-none font-roboto bg-primaryBlue text-primaryWhite font-bold text-[16px]">
              Contact
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden "
      />

      <NavbarMenu className="bg-gray-950 pt-20 gap-12">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className={`flex flex-col items-center ${
              index === 3 ? "bg-primaryBlue" : ""
            }`}
          >
            <Link
              className=" text-secondaryGray font-roboto font-bold text-[24px] "
              href="#"
              size="lg"
            >
              {index === 3 ? (
                <Button className="h-[69px]  rounded-none font-roboto bg-primaryBlue  text-primaryWhite font-bold text-[24px]">
                  Contact
                </Button>
              ) : (
                item
              )}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default TopNavBar;
