import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

// Import NavItem dan Logo
import { NavItem } from "@/components/Assets.js";
import Logo from "@/public/Images/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const router = useRouter();

  useEffect(() => {
    // Set active section based on hash
    if (typeof window !== "undefined") {
      const currentHash = window.location.hash;
      if (currentHash) {
        setActiveSection(currentHash);
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    // Observe sections for active state
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
      { threshold: 0.5 }
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

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setShowNavbar(window.scrollY <= prevScrollY);
      }
      setPrevScrollY(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, isOpen]);

  // Scroll to section with smooth animation
  const scrollToSection = (url: string) => {
    const section = document.querySelector(url);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); // Close menu when a link is clicked
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showNavbar && (
        <motion.div
          initial={{ y: -100 }}  // Navbar starts from above the screen
          animate={{ y: 0 }}      // Move to its normal position
          exit={{ y: -100 }}      // Move back up when closing
          transition={{ duration: 0.3 }}  // Duration for smooth transition
          className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md py-3 px-16 lg:px-16 xl:px-28"
        >
          <div className="container mx-auto flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src={Logo} alt="Logo" className="w-[61px]" />
            </div>
            {/* Nav Items */}
            <div className="flex-1">
              <ul className="flex justify-center items-center space-x-6">
                {NavItem.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.url)}
                      className={`${
                        isActive(item.url)
                          ? "border-b-2 border-[#660066]"
                          : "border-transparent"
                      } text-secondary font-normal text-[17px]`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
