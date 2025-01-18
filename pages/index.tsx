import React from "react";
import Image from "next/image";
// components
import Navbar from "@/components/Navbar";
import Tittle from "@/components/Tittle";
// Logo
import LogoBunga from "@/public/Images/LogoBunga.svg";
import LogoFile from "@/public/Images/File_logo.svg";
import Background from "@/public/Images/Frame.png";
// Sosmed
import Linkind from "@/public/Images/Sosmed/Linkind.svg";
import Instagram from "@/public/Images/Sosmed/Instagram.svg";
import Facebook from "@/public/Images/Sosmed/Facebook.svg";
// Profile
import Photo1 from "@/public/Images/Profile/Photo1.svg";
import Photo2 from "@/public/Images/Profile/Photo2.svg";

export default function Home() {
  return (
    <div className="px-20 relative">
      <Navbar />

      {/* Section Home */}
      <div className="flex justify-between items-center mt-40">
        {/* Sisi Kiri */}
        <div className="flex flex-col">
          <Image
            src={LogoBunga}
            alt="logoBunga"
            className="w-6 md:w-[101.52px]"
          />
          <Tittle />
          <h3 className="font-bold text-[22px]">Hi, Im Andri Syahrizal</h3>
          <p className="font-normal text-[22px] w-[28em]">
            Bringing 23 years of retail expertise and 13 years of consulting to
            the table, I specialize in crafting innovative solutions for modern
            retail and cooperatives, driving growth for MSMEs and communities
            across Indonesia.
          </p>
          <a href="">
            <button className="flex gap-3 bg-gradient-to-r from-[#660066]  to-[#E1306C] text-white py-2 px-6 rounded-lg font-bold text-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl">
              <Image src={LogoFile} alt="file" className="w-6 md:w-[24px]" />
              <p className="font-medium text-[21px]">Download CV</p>
            </button>
          </a>
        </div>

        {/* Sisi Kanan */}
        <div>
          <Image src={Photo1} alt="logoBunga" className="" />
        </div>
      </div>

      {/* Sosmed */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Linkind} alt="linkind" className="w-8 h-8" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Instagram} alt="instagram" className="w-8 h-8" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Facebook} alt="facebook" className="w-8 h-8" />
        </a>
      </div>
      {/* Background Image */}
      <div className="absolute top-1/2 left-0 w-full h-[100em] z-[-1] overflow-hidden pt-[45em]">
        <Image
          src={Background}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="relative z-10 text-primary px-20">
          <div className="flex flex-wrap">
            <Image src={Photo2} alt="Background" />
          </div>
        </div>
      </div>
    </div>
  );
}
