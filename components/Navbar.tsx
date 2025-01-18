import React from "react";
import Logo from "@/public/Images/Logo.svg";
import Image from "next/image";
import { NavItem } from "@/components/Assets.js";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md py-3">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={Logo} alt="logoNama" className="w-6 md:w-[61px]" />
        </div>
        {/* Nav Items */}
        <div className="flex-1">
          <ul className="flex justify-center items-center space-x-6">
            {NavItem.map((item) => (
              <li
                key={item.id}
                className="text-secondary font-normal text-[18px]"
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
