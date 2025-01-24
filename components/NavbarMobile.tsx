import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NavItem } from "@/components/Assets.js";
import CloseMenu from "@/public/Images/CloseMenu.svg";
import HamburgerMenu from "@/public/Images/HamburgerMenu.svg";
import Logo from "@/public/Images/Logo1.svg";
import { motion } from "framer-motion"; // For animations
import { useRouter } from "next/router";

const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isMenuVisible, setIsMenuVisible] = useState(true); // Track menu visibility
  
  const router = useRouter();

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  // Set active section based on the current URL hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentHash = window.location.hash;
      if (currentHash) {
        setActiveSection(currentHash);
      }
    }
  }, [router.pathname]);

  // Use IntersectionObserver to detect which section is in view
  useEffect(() => {
    const sections = NavItem.filter((item) => item.url.startsWith("#"))
      .map((item) => document.querySelector(item.url))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section as Element));

    return () => {
      sections.forEach((section) => observer.unobserve(section as Element));
    };
  }, []);

  const isActive = (url: string) => {
    if (url.startsWith("#")) {
      return activeSection === url;
    }
    return router.pathname === url;
  };

  // Handle scroll events to show/hide the menu
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          // Scrolling down, hide the menu
          setIsMenuVisible(false);
        } else {
          // Scrolling up, show the menu
          setIsMenuVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Function to scroll smoothly to a section
  const scrollToSection = (url: string) => {
    const section = document.querySelector(url);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Menu Overlay */}
        <div
          className={`fixed top-0 left-0 min-h-screen w-1/2 bg-secondary flex flex-col transform ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
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
                <button
                  onClick={() => scrollToSection(link.url)}
                  className={`font-bold hover:text-gray-300 transition-all ${
                    isActive(link.url) ? "border-white border-b-2" : ""
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon with transition */}
        {isMenuVisible && !isMenuOpen && (
          <div
            className="bg-secondary mt-3 w-[50.2px] h-[45.2px] flex justify-center items-center rounded-e-[10px] cursor-pointer transition-all duration-300"
            onClick={handleClick}
          >
            <Image src={HamburgerMenu} alt="HamburgerMenu" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NavbarMobile;
