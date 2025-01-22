import React, { useState } from "react";
import Image from "next/image";
import { NavItem } from "@/components/Assets.js";
import CloseMenu from "@/public/Images/CloseMenu.svg";
import HamburgerMenu from "@/public/Images/HamburgerMenu.svg";
import Logo from "@/public/Images/Logo1.svg";
import Link from "next/link";

const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Menu Overlay */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-2/3 bg-secondary flex flex-col transform ${
          isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="px-5 mb-10 py-4 flex justify-between">
          <Image src={Logo} alt="logo" />
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={handleClick}
          >
            <Image src={CloseMenu} alt="CloseMenu" />
          </div>
        </div>
        <ul className="w-full text-white flex flex-col gap-4">
          {NavItem.map((link, index) => (
            <li key={index} className="px-5 py-2">
              <Link
                href={link.url}
                className="font-bold border-b-2 border-white hover:text-gray-300 transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      {!isMenuOpen && (
        <div
          className="bg-secondary mt-3 w-[56.2px] h-[50.2px] flex justify-center items-center rounded-e-[10px] cursor-pointer"
          onClick={handleClick}
        >
          <Image src={HamburgerMenu} alt="HamburgerMenu" />
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
