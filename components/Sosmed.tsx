import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations
import Linkind from "@/public/Images/Sosmed/Linkind.svg"; // Make sure to import your social media icons
import Instagram from "@/public/Images/Sosmed/Instagram.svg";
import Facebook from "@/public/Images/Sosmed/Facebook.svg";

const Sosmed = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showSosmed, setShowSosmed] = useState(true);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        // Scrolling down
        setShowSosmed(false);
      } else {
        // Scrolling up
        setShowSosmed(true);
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <motion.div
    data-aos="fade-up"
      className="fixed right-8 xl:right-5 top-24 md:top-1/3 xl:top-1/3 transform -translate-y-1/2 flex flex-col gap-3 md:gap-8 z-50"
      initial={{ opacity: 1 }}
      animate={{
        opacity: showSosmed ? 1 : 0, // Fade in when scrolling up, fade out when scrolling down
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <a
        href="https://www.linkedin.com/in/adri-syahrizal-74a8b2187/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Linkind} alt="linkedin" className="w-8 md:w-12 lg:w-12 xl:w-14 cursor-pointer" />
      </a>
      <a
        href="https://www.instagram.com/adrisyahrizal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Instagram} alt="instagram" className="w-8 md:w-12 lg:w-12 xl:w-14 cursor-pointer" />
      </a>
      <a
        href="https://www.facebook.com/adri.syahrizal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Facebook} alt="facebook" className="w-8 md:w-12 lg:w-12 xl:w-14 cursor-pointer" />
      </a>
    </motion.div>
  );
};

export default Sosmed;
