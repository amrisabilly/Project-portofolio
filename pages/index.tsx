import React from "react";
import Image from "next/image";
// components
import Navbar from "@/components/Navbar";
import Tittle from "@/components/Tittle";
// Logo
import LogoBunga from "@/public/Images/LogoBunga.svg";
import LogoBunga1 from "@/public/Images/LogoBunga1.svg";
import LogoFile from "@/public/Images/File_logo.svg";
import Background from "@/public/Images/Frame.png";
import Graduation from "@/public/Images/Graduation_logo.svg";
import Graduation1 from "@/public/Images/Graduation_logo2.svg";
// Sosmed
import Linkind from "@/public/Images/Sosmed/Linkind.svg";
import Instagram from "@/public/Images/Sosmed/Instagram.svg";
import Facebook from "@/public/Images/Sosmed/Facebook.svg";
// Profile
import Photo1 from "@/public/Images/Profile/Photo1.svg";
import Photo2 from "@/public/Images/Profile/Photo2.svg";

export default function Home() {
  return (
    <div className="px-28 relative">
      <Navbar />

      {/* Section Home */}
      <div className="flex justify-between mt-36">
        {/* Sisi Kiri */}
        <div className="flex flex-col pt-20">
          <Image
            src={LogoBunga}
            alt="logoBunga"
            className="w-6 md:w-[101.52px] mb-5"
          />
          <Tittle />
          <h3 className="font-bold text-[25px] mb-3">Hi, Im Andri Syahrizal</h3>
          <p className="font-normal text-[17px] w-[28em] mb-14">
            Bringing 23 years of retail expertise and 13 years of consulting to
            the table, I specialize in crafting innovative solutions for modern
            retail and cooperatives, driving growth for MSMEs and communities
            across Indonesia.
          </p>
          <a href="">
            <button className="flex gap-3 bg-gradient-to-r from-[#660066]  to-[#E1306C] text-white py-3 px-40 rounded-3xl font-bold text-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl">
              <Image src={LogoFile} alt="file" className="w-6 md:w-[24px]" />
              <p className="font-medium text-[18px]">Download CV</p>
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
          <Image src={Linkind} alt="linkind" className="w-10 h-10" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Instagram} alt="instagram" className="w-10 h-10" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Facebook} alt="facebook" className="w-10 h-10" />
        </a>
      </div>

      {/* Section 2 */}

      {/* Background Image */}
      <div className="absolute top-[18em] left-0 w-full h-[100em] z-[-1] overflow-hidden pt-[45em]">
        <Image
          src={Background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-b-[6em]"
        />
        <div className="relative z-10 text-primary px-32">
          <div className="flex flex-wrap gap-40">
            {/* Background Image */}
            <Image src={Photo2} alt="photo2" className="w-[370px]" />
            <div className="flex flex-col">
              <div className="flex items-end gap-3 mb-3">
                <Image src={Graduation} alt="graduation" className="w-[44px]" />
                <p className="text-[25px] font-normal">Education</p>
              </div>
              <h3 className="text-[40px] font-bold mb-2">
                Opened the doors to discovery
              </h3>
              <p className="w-[40em] text-[17px] font-normal">
                Dedicated to lifelong learning, my education has shaped my
                mindset and laid a strong foundation for delivering impactful
                solutions in the future.
              </p>
              <div className="m-10">
                <div className="relative border-l-4 border-[#FFFFFF]">
                  {/* Item 1 */}
                  <div className="mb-10 ml-10">
                    <div className="absolute w-7 h-7 bg-white rounded-full -left-[16px] border-8 border-[#FF9500]"></div>
                    <time className="mb-1 text-[17px] font-normal leading-none text-primary">
                      2004
                    </time>
                    <h3 className="text-[25px] mt-2 font-bold text-primary">
                      UIN Sunan Kalijaga
                    </h3>
                    <p className="text-[25px] font-normal text-primary">
                      Bachelor of Islamic Economics
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="mb-10 ml-10">
                    <div className="absolute w-7 h-7 bg-white rounded-full -left-[16px] border-8 border-[#FF9500]"></div>
                    <time className="mb-1 text-[17px] font-normal leading-none text-primary">
                      2020 - 2023
                    </time>
                    <h3 className="text-[25px] mt-2 font-bold text-primary">
                      Kelas Prakerja
                    </h3>
                    <p className="text-[25px] font-normal text-primary">
                      Manajemen Toko Retail Makanan (Daring)
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="ml-10">
                    <div className="absolute w-7 h-7 bg-white rounded-full -left-[16px] border-8 border-[#FF9500]"></div>
                    <time className="mb-1 text-[17px] font-normal leading-none text-primary">
                      2020 - 2023
                    </time>
                    <h3 className="text-[25px] mt-2 font-bold text-primary">
                      Dinas Koperasi dan UMKM
                    </h3>
                    <p className="text-[25px] font-normal text-primary">
                      Pelatihan Manajemen Ritel untuk UMKM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FEFEFE] rounded-[20px] shadow-lg mt-[71em] mb-40 flex justify-evenly items-center pb-4">
        {/* Item 1 */}

        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-end text-secondary">
            <h1 className="font-bold text-[60px]">23</h1>
            <h3 className="font-bold text-[28px] mb-5 ">Years</h3>
          </div>
          <p className="w-60 text-center font-normal text-[17px]">
            Experienced in Retail Management
          </p>
        </div>

        {/* Item 1 */}

        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-end text-secondary">
            <h1 className="font-bold text-[60px]">23</h1>
            <h3 className="font-bold text-[28px] mb-5">Years</h3>
          </div>
          <p className="w-60 text-center font-normal text-[17px]">
            Experienced in Retail Management
          </p>
        </div>

        {/* Item 1 */}

        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-end text-secondary">
            <h1 className="font-bold text-[60px]">23</h1>
            <h3 className="font-bold text-[28px] mb-5">Years</h3>
          </div>
          <p className="w-60 text-center font-normal text-[17px]">
            Experienced in Retail Management
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full h-[100em] flex flex-col items-center  text-center">
        <div className="flex items-end gap-3 mb-3 ">
          <Image src={Graduation1} alt="graduation" className="w-[44px]" />
          <h4 className="text-[25px] font-normal">Experience</h4>
        </div>
        <h3 className="text-[40px] font-bold w-[20em] mb-7">
          Driving Success with Decades of Professional Experience
        </h3>
        <p className="w-[40em] text-[17px] font-normal mb-20">
          With a passion for retail management and consulting, Ive delivered
          impactful solutions that drive growth and innovation for businesses.
        </p>
        <div className="grid grid-cols-3 gap-[42px]">
          <div className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left">
            <p className="font-medium text-[#616161]">2004 - 2010</p>
            <h3 className="font-bold text-[18px]">Direktur Wilayah</h3>
            <p className="font-normal">
              Lembaga Pendidikan Perkoperasian (LAPENKOP) Wilayah DIY
            </p>
          </div>
          <div className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left">
            <p className="font-medium text-[#616161]">2010 - Now</p>
            <h3 className="font-bold text-[18px]">Senior Trainer Nasional</h3>
            <p className="font-normal">
              Lembaga Pendidikan Perkoperasian (LAPENKOP) Wilayah DIY{" "}
            </p>
          </div>
          <div className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left">
            <p className="font-medium text-[#616161]">2010 - Now</p>
            <h3 className="font-bold text-[18px]">Owner</h3>
            <p className="font-normal">Lepassendholic - Toko Online </p>
          </div>
          <div className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left">
            <p className="font-medium text-[#616161]">2010 - Now</p>
            <h3 className="font-bold text-[18px]">
              Konsultan Pendamping Manajemen Retail
            </h3>
            <p className="font-normal">Dinas Perindagkop Sleman </p>
          </div>
          <div className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left">
            <p className="font-medium text-[#616161]">2013 - Now</p>
            <h3 className="font-bold text-[18px]">Presiden Direktur</h3>
            <p className="font-normal">PT. Ritelteam Sejahtera Indonesia </p>
          </div>
          <div className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left">
            <p className="font-medium text-[#616161]">2016 - Now</p>
            <h3 className="font-bold text-[18px]">Komisaris</h3>
            <p className="font-normal">PT. Surau Ritel Indonesia </p>
          </div>
          <div className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left">
            <p className="font-medium text-[#616161]">2017 - Now</p>
            <h3 className="font-bold text-[18px]">Direktur</h3>
            <p className="font-normal">Ritelteam Institute</p>
          </div>
          <div className="w-[392px] h-[183px] rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left">
            <Image src={LogoBunga1} alt="LogoBunga" className="" />
          </div>
          <div className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left">
            <p className="font-medium text-[#616161]">2017 - Now</p>
            <h3 className="font-bold text-[18px]">Ketua Umum</h3>
            <p className="font-normal">Koperasi Cinta Nusantara </p>
          </div>
        </div>
      </div>
    </div>
  );
}
