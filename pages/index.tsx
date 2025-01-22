import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ExperienceMob } from "@/components/Assets";
// components
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import Tittle from "@/components/Tittle";
import Scroll from "@/components/Scroll";
import Sosmed from "@/components/Sosmed";
// Logo
import Logo from "@/public/Images/Logo.svg";
import LogoBunga from "@/public/Images/LogoBunga.svg";
import LogoBunga1 from "@/public/Images/LogoBunga1.svg";
import LogoFile from "@/public/Images/File_logo.svg";
import Background from "@/public/Images/Frame.png";
import BackgroundMobile from "@/public/mobile.png";
import Graduation from "@/public/Images/Graduation_logo.svg";
import Graduation1 from "@/public/Images/Graduation_logo2.svg";

// Profile
import Photo1 from "@/public/Images/Profile/Photo1.svg";
import Photo2 from "@/public/Images/Profile/Photo2.svg";
import Photo3 from "@/public/Images/Profile/Photo3.svg";
//Grid Mobile
import Grid1 from "@/public/Images/Grid/grid1.svg";
import Grid2 from "@/public/Images/Grid/grid2.svg";
import Grid3 from "@/public/Images/Grid/grid3.svg";
import Grid4 from "@/public/Images/Grid/grid4.svg";
import Grid5 from "@/public/Images/Grid/grid5.svg";
import Grid6 from "@/public/Images/Grid/grid6.svg";
import Grid7 from "@/public/Images/Grid/grid7.svg";

//Grid Desktop
import gridDesk1 from "@/public/Images/Grid/Desktop/grid1.svg";
import gridDesk2 from "@/public/Images/Grid/Desktop/grid2.svg";
import gridDesk3 from "@/public/Images/Grid/Desktop/grid3.svg";
import gridDesk4 from "@/public/Images/Grid/Desktop/grid4.svg";
import gridDesk5 from "@/public/Images/Grid/Desktop/grid5.svg";
import gridDesk6 from "@/public/Images/Grid/Desktop/grid6.svg";
import gridDesk7 from "@/public/Images/Grid/Desktop/grid7.svg";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Set nilai awal saat komponen pertama kali dirender
    handleResize();

    // Tambahkan event listener untuk menangani perubahan ukuran jendela
    window.addEventListener("resize", handleResize);

    // Hapus event listener saat komponen di-unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <div>
          <NavbarMobile />
          <div id="home" className="w-full px-8">
            <div className="flex justify-end mt-5 items-center">
              <Image
                src={Logo}
                alt="logo"
                className="right-0 w-[46px]"
                data-aos="fade-left"
              />
            </div>
            {/* Sosmed */}
            <Sosmed />
            <div className="mt-[4em]">
              <Image
                src={LogoBunga}
                alt="logoBunga"
                className="w-[55.42px] mb-3"
                data-aos="fade-up"
              />
              <Tittle />
              <h3 className="font-bold text-[16px] mb-3" data-aos="fade-up">
                Hi, Im Andri Syahrizal
              </h3>
              <p className="font-normal text-[12px]  mb-6" data-aos="fade-up">
                Bringing 23 years of retail expertise and 13 years of consulting
                to the table, I specialize in crafting innovative solutions for
                modern retail and cooperatives, driving growth for MSMEs and
                communities across Indonesia.
              </p>
              <a href="/cv.pdf" download>
                <button
                  data-aos="fade-up"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#660066] to-[#E1306C] text-white py-1 w-full rounded-3xl font-bold text-lg transition-transform transform  active:scale-95 shadow-lg hover:shadow-2xl"
                >
                  <Image src={LogoFile} alt="file" className="w-[13px]" />
                  <p className="font-medium text-[12px]">Download CV</p>
                </button>
              </a>
            </div>
            <div className="mt-8" data-aos="fade-up">
              <Image src={Photo1} alt="Photo" />
            </div>
          </div>
          <div className="absolute top-[50em]">
            <div className="relative z-10">
              <Image
                src={BackgroundMobile}
                alt="Background"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 px-8">
                <Image
                  src={Photo3}
                  alt="Photo"
                  className="mt-[12em] mb-3"
                  data-aos="fade-up"
                />
                <div id="education" className="flex flex-col text-primary">
                  <div className="flex gap-2 mb-1" data-aos="fade-up">
                    <Image
                      src={Graduation}
                      alt="graduation"
                      className="w-[20px]"
                    />
                    <p className="text-[16px] font-normal">Education</p>
                  </div>
                  <h3 className="text-[18px] font-bold mb-2" data-aos="fade-up">
                    Opened the doors to discovery
                  </h3>
                  <p className="text-[12px] font-normal" data-aos="fade-up">
                    Dedicated to lifelong learning, my education has shaped my
                    mindset and laid a strong foundation for delivering
                    impactful solutions in the future.
                  </p>
                  <div className="m-4">
                    <div
                      className="relative border-l-4 border-[#FFFFFF]"
                      data-aos="fade-up"
                    >
                      {/* Item 1 */}
                      <div className="mb-2 ml-8">
                        <div className="absolute w-5 h-5 bg-white rounded-full -left-[12px] border-4 border-[#FF9500]"></div>
                        <time
                          className="mb-1 text-[11px] font-normal leading-none text-primary"
                          data-aos="fade-left"
                        >
                          2004
                        </time>
                        <h3
                          className="text-[12px] mt-1 font-bold text-primary"
                          data-aos="fade-left"
                        >
                          UIN Sunan Kalijaga
                        </h3>
                        <p
                          className="text-[12px] font-normal text-primary"
                          data-aos="fade-left"
                        >
                          Bachelor of Islamic Economics
                        </p>
                      </div>

                      {/* Item 2 */}
                      <div className="mb-2 ml-8">
                        <div className="absolute w-5 h-5 bg-white rounded-full -left-[12px] border-4 border-[#FF9500]"></div>
                        <time
                          className="mb-1 text-[11px] font-normal leading-none text-primary"
                          data-aos="fade-left"
                        >
                          2020 - 2023
                        </time>
                        <h3
                          className="text-[12px] mt-1 font-bold text-primary"
                          data-aos="fade-left"
                        >
                          Kelas Prakerja
                        </h3>
                        <p
                          className="text-[12px] font-normal text-primary"
                          data-aos="fade-left"
                        >
                          Manajemen Toko Retail Makanan
                        </p>
                      </div>

                      {/* Item 3 */}
                      <div className="ml-8">
                        <div className="absolute w-5 h-5 bg-white rounded-full -left-[12px] border-4 border-[#FF9500]"></div>
                        <time
                          className="mb-1 text-[11px] font-normal leading-none text-primary"
                          data-aos="fade-left"
                        >
                          2020 - 2023
                        </time>
                        <h3
                          className="text-[12px] mt-1 font-bold text-primary"
                          data-aos="fade-left"
                        >
                          Dinas Koperasi dan UMKM
                        </h3>
                        <p
                          className="text-[12px] font-normal text-primary"
                          data-aos="fade-left"
                        >
                          Pelatihan Manajemen Ritel untuk UMKM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[5em] bg-primary shadow-xl rounded-md mt-3 flex items-center gap-3 p-2">
                  {/* Item 1 */}

                  <div className="flex flex-col items-center">
                    <div className="flex gap-1 items-end text-secondary">
                      <h1 className="font-bold text-[20px]">23</h1>
                      <h3 className="font-bold text-[10px] mb-[5px]">Years</h3>
                    </div>
                    <p className="text-center font-normal text-[8px]">
                      Experienced in Retail Management
                    </p>
                  </div>

                  {/* Item 1 */}

                  <div className="flex flex-col items-center">
                    <div className="flex gap-1 items-end text-secondary">
                      <h1 className="font-bold text-[20px]">13</h1>
                      <h3 className="font-bold text-[10px] mb-[5px]">Years</h3>
                    </div>
                    <p className="text-center font-normal text-[8px]">
                      Being a Business Consultant{" "}
                    </p>
                  </div>

                  {/* Item 1 */}

                  <div className="flex flex-col items-center">
                    <div className="flex gap-1 items-end text-secondary">
                      <h1 className="font-bold text-[20px]">10</h1>
                      <h3 className="font-bold text-[10px] mb-[5px]">+</h3>
                    </div>
                    <p className="text-center font-normal text-[8px]">
                      Active Community{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100em] bg-primary px-6 mb-48">
            {/* Section 3 */}
            <div
              id="experience"
              className="flex flex-col items-center text-center mt-[43em]"
            >
              <div className="flex items-end gap-3 mb-3 " data-aos="fade-up">
                <Image
                  src={Graduation1}
                  alt="graduation"
                  className="w-[20px]"
                />
                <h4 className="text-[16px] font-normal">Experience</h4>
              </div>
              <h3
                className="md:text-[18px] font-bold w-[20em] mb-3"
                data-aos="fade-up"
              >
                Driving Success with Decades of Professional Experience
              </h3>
              <p className="text-[12px] font-normal mb-8" data-aos="fade-up">
                With a passion for retail management and consulting, Ive
                delivered impactful solutions that drive growth and innovation
                for businesses.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {ExperienceMob.map((item) => (
                  <div
                    className="bg-primary h-[15em] shadow-lg rounded-xl flex flex-col justify-evenly py-4 px-4 text-[12px] text-left"
                    key={item.id}
                    data-aos="fade-up"
                  >
                    <p className="font-medium text-[#616161] text-[11px]">
                      {item.tahun}
                    </p>
                    <h3 className="font-bold">{item.jabatan}</h3>
                    <p className="font-normal">{item.keterangan}</p>
                  </div>
                ))}
                <div className="bg-transparent rounded-xl flex flex-col justify-center items-center col-span-2">
                  <Image
                    src={LogoBunga1}
                    alt="logo"
                    className="w-[155px]"
                    data-aos="fade-up"
                  />
                </div>
              </div>
            </div>

            <div
              id="gallery"
              className="flex flex-col items-center text-center mt-[3em]"
            >
              <div className="flex items-end gap-3 mb-3 " data-aos="fade-up">
                <Image
                  src={Graduation1}
                  alt="graduation"
                  className="w-[20px]"
                />
                <h4 className="text-[16px] font-normal">Gallery</h4>
              </div>
              <h3
                className="md:text-[18px] font-bold w-[20em] mb-3"
                data-aos="fade-up"
              >
                Gallery of my Activities{" "}
              </h3>
              <div className="">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-3">
                    <Image
                      src={Grid1}
                      alt="Group Event"
                      className=""
                      data-aos="fade-up"
                    />
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-rows-1 gap-2">
                      {/* Row 1 */}
                      <div
                        className="row-span-1 relative h-[54px]"
                        data-aos="fade-right"
                      >
                        <Image
                          src={Grid2}
                          alt="Group Event"
                          className="w-full h-full object-cover rounded-[8.46px]"
                        />
                      </div>

                      {/* Row 2 */}
                      <div
                        className="row-span-1 relative h-[110px]"
                        data-aos="fade-right"
                      >
                        <Image
                          src={Grid4}
                          alt="Group Event"
                          className="w-full h-full object-cover rounded-[8.46px]"
                        />
                      </div>

                      {/* Row 3 */}
                      <div
                        className="row-span-1 relative h-[97px]"
                        data-aos="fade-right"
                      >
                        <Image
                          src={Grid7}
                          alt="Group Event"
                          className="w-full h-full object-cover rounded-[8.46px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-rows-3 gap-2 h-[270px]">
                      <div
                        className="row-span-1 relative h-full"
                        data-aos="fade-left"
                      >
                        <Image
                          src={Grid3}
                          alt="Group Event"
                          className="absolute inset-0 w-full h-full object-cover rounded-[8.46px]"
                        />
                      </div>
                      <div className="row-span-2">
                        <div className="grid grid-cols-2 gap-2 h-[184px]">
                          {/* Kolom 1 */}
                          <div
                            className="col-span-1 relative h-full "
                            data-aos="fade-up"
                          >
                            <Image
                              src={Grid5}
                              alt="Group Event"
                              className="absolute inset-0 w-full h-full object-cover rounded-[8.46px]"
                            />
                          </div>

                          {/* Kolom 2 */}
                          <div
                            className="col-span-1 relative h-full"
                            data-aos="fade-left"
                          >
                            <Image
                              src={Grid6}
                              alt="Group Event"
                              className="absolute inset-0 w-full h-full object-cover rounded-[8.46px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10" data-aos="fade-up">
              <Scroll />
            </div>

            <div
              data-aos="fade-up"
              className="w-full h-[0.5em] bg-gradient-to-r from-[#660066] to-[#E1306C] rounded-xl mt-10"
            ></div>
          </div>
        </div>
      ) : (
        // Tampilan Desktop

        <div className="md:px-8 lg:px-9 xl:px-28 relative">
          <Navbar />

          {/* Section Home */}
          <div id="home" className="flex flex-row justify-between mt-36">
            <div className="flex flex-col md:w-[25em] lg:w-[30em] xl:w-[30em] pt-20">
              <Image
                src={LogoBunga}
                alt="logoBunga"
                className="w-[101.52px] mb-5"
                data-aos="fade-up"
              />
              <Tittle />
              <h3 className="font-bold text-[25px] mb-3" data-aos="fade-up">
                Hi, Im Andri Syahrizal
              </h3>
              <p
                className="font-normal text-[17px] md:w-[20em] lg:w-[28em] xl:w-[28em] mb-6 md:mb-14"
                data-aos="fade-up"
              >
                Bringing 23 years of retail expertise and 13 years of consulting
                to the table, I specialize in crafting innovative solutions for
                modern retail and cooperatives, driving growth for MSMEs and
                communities across Indonesia.
              </p>
              <a href="/cv.pdf" download data-aos="fade-up">
                <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#660066] to-[#E1306C] text-white py-1 md:py-3 w-full rounded-3xl font-bold text-lg transition-transform transform  md:hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl">
                  <Image src={LogoFile} alt="file" className="w-[24px]" />
                  <p className="font-medium text-[18px]">Download CV</p>
                </button>
              </a>
            </div>

            {/* Sisi Kanan */}
            <div>
              <Image
                src={Photo1}
                alt="logoBunga"
                className="md:w-[300px] lg:w-[400px] xl:w-full h-[338.69px] md:h-full"
                data-aos="fade-up"
              />
            </div>
          </div>

          <Sosmed />
          {/* Section 2 */}

          {/* Background Image */}
          <div className="absolute md:top-[18em] lg:top-[14em] xl:top-[18em] left-0 w-full h-[100em] z-[-1] overflow-hidden md:pt-[40em] lg:pt-[43em] xl:pt-[45em]">
            <Image
              src={Background}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="rounded-b-[6em]"
            />

            <div className="relative z-10 text-primary md:px-8 lg:px-9 xl:px-32">
              <div className="flex flex-row md:gap-8 lg:gap-10 xl:gap-40">
                {/* Background Image */}
                <Image
                  src={Photo2}
                  alt="photo2"
                  className="md:w-[300px] lg:w-[330px] xl:w-[370px]"
                  data-aos="fade-right"
                />
                <div id="education" className="flex flex-col">
                  <div className="flex items-end gap-3 mb-3" data-aos="fade-up">
                    <Image
                      src={Graduation}
                      alt="graduation"
                      className="w-[44px]"
                    />
                    <p className="text-[25px] font-normal">Education</p>
                  </div>
                  <h3 className="text-[40px] font-bold mb-2" data-aos="fade-up">
                    Opened the doors to discovery
                  </h3>
                  <p
                    className="md:w-[25em] lg:w-[30em] xl:w-[40em] text-[17px] font-normal"
                    data-aos="fade-up"
                  >
                    Dedicated to lifelong learning, my education has shaped my
                    mindset and laid a strong foundation for delivering
                    impactful solutions in the future.
                  </p>
                  <div className="m-10">
                    <div
                      className="relative border-l-4 border-[#FFFFFF]"
                      data-aos="fade-up"
                    >
                      {/* Item 1 */}
                      <div className="mb-10 ml-10">
                        <div className="absolute w-7 h-7 bg-white rounded-full -left-[16px] border-8 border-[#FF9500]"></div>
                        <time
                          className="mb-1 text-[17px] font-normal leading-none text-primary"
                          data-aos="fade-left"
                        >
                          2004
                        </time>
                        <h3
                          className="text-[25px] mt-2 font-bold text-primary"
                          data-aos="fade-left"
                        >
                          UIN Sunan Kalijaga
                        </h3>
                        <p
                          className="text-[25px] font-normal text-primary"
                          data-aos="fade-left"
                        >
                          Bachelor of Islamic Economics
                        </p>
                      </div>

                      {/* Item 2 */}
                      <div className="mb-10 ml-10">
                        <div className="absolute w-7 h-7 bg-white rounded-full -left-[16px] border-8 border-[#FF9500]"></div>
                        <time
                          className="mb-1 text-[17px] font-normal leading-none text-primary"
                          data-aos="fade-left"
                        >
                          2020 - 2023
                        </time>
                        <h3
                          className="text-[25px] mt-2 font-bold text-primary"
                          data-aos="fade-left"
                        >
                          Kelas Prakerja
                        </h3>
                        <p
                          className="text-[25px] font-normal text-primary"
                          data-aos="fade-left"
                        >
                          Manajemen Toko Retail Makanan (Daring)
                        </p>
                      </div>

                      {/* Item 3 */}
                      <div className="ml-10">
                        <div className="absolute w-7 h-7 bg-white rounded-full -left-[16px] border-8 border-[#FF9500]"></div>
                        <time
                          className="mb-1 text-[17px] font-normal leading-none text-primary"
                          data-aos="fade-left"
                        >
                          2020 - 2023
                        </time>
                        <h3
                          className="text-[25px] mt-2 font-bold text-primary"
                          data-aos="fade-left"
                        >
                          Dinas Koperasi dan UMKM
                        </h3>
                        <p
                          className="text-[25px] font-normal text-primary"
                          data-aos="fade-left"
                        >
                          Pelatihan Manajemen Ritel untuk UMKM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FEFEFE] rounded-[20px] shadow-lg md:mt-[69em] lg:mt-[71em] xl:mt-[71em] md:mb-20 lg:mb-28 xl:mb-40 flex justify-evenly items-center pb-4">
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
                <h1 className="font-bold text-[60px]">13</h1>
                <h3 className="font-bold text-[28px] mb-5">Years</h3>
              </div>
              <p className="w-60 text-center font-normal text-[17px]">
                Being a Business Consultant{" "}
              </p>
            </div>

            {/* Item 1 */}

            <div className="flex flex-col items-center">
              <div className="flex gap-2 items-end text-secondary">
                <h1 className="font-bold text-[60px]">13</h1>
                <h3 className="font-bold text-[28px] mb-5">+</h3>
              </div>
              <p className="w-60 text-center font-normal text-[17px]">
                Active Community{" "}
              </p>
            </div>
          </div>

          {/* Section 3  Experience */}
          <div
            id="experience"
            className="w-full flex flex-col items-center text-center mb-20"
          >
            <div className="flex items-end gap-3 mb-3 " data-aos="fade-up">
              <Image src={Graduation1} alt="graduation" className="w-[44px]" />
              <h4 className="text-[25px] font-normal">Experience</h4>
            </div>
            <h3
              className="md:text-[40px] font-bold w-[20em] mb-7"
              data-aos="fade-up"
            >
              Driving Success with Decades of Professional Experience
            </h3>
            <p
              className="w-[40em] text-[17px] font-normal mb-20"
              data-aos="fade-up"
            >
              With a passion for retail management and consulting, Ive delivered
              impactful solutions that drive growth and innovation for
              businesses.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[42px]">
              <div
                data-aos="fade-up"
                className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left"
              >
                <p className="font-medium text-[#616161]">2004 - 2010</p>
                <h3 className="font-bold text-[18px]">Direktur Wilayah</h3>
                <p className="font-normal">
                  Lembaga Pendidikan Perkoperasian (LAPENKOP) Wilayah DIY
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left"
              >
                <p className="font-medium text-[#616161]">2010 - Now</p>
                <h3 className="font-bold text-[18px]">
                  Senior Trainer Nasional
                </h3>
                <p className="font-normal">
                  Lembaga Pendidikan Perkoperasian (LAPENKOP) Wilayah DIY{" "}
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left"
              >
                <p className="font-medium text-[#616161]">2010 - Now</p>
                <h3 className="font-bold text-[18px]">Owner</h3>
                <p className="font-normal">Lepassendholic - Toko Online </p>
              </div>
              <div
                data-aos="fade-up"
                className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left"
              >
                <p className="font-medium text-[#616161]">2010 - Now</p>
                <h3 className="font-bold text-[18px]">
                  Konsultan Pendamping Manajemen Retail
                </h3>
                <p className="font-normal">Dinas Perindagkop Sleman </p>
              </div>
              <div
                data-aos="fade-up"
                className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left"
              >
                <p className="font-medium text-[#616161]">2013 - Now</p>
                <h3 className="font-bold text-[18px]">Presiden Direktur</h3>
                <p className="font-normal">
                  PT. Ritelteam Sejahtera Indonesia{" "}
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left"
              >
                <p className="font-medium text-[#616161]">2016 - Now</p>
                <h3 className="font-bold text-[18px]">Komisaris</h3>
                <p className="font-normal">PT. Surau Ritel Indonesia </p>
              </div>
              <div
                data-aos="fade-up"
                className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left"
              >
                <p className="font-medium text-[#616161]">2017 - Now</p>
                <h3 className="font-bold text-[18px]">Direktur</h3>
                <p className="font-normal">Ritelteam Institute</p>
              </div>
              <div
                data-aos="fade-up"
                className="w-[392px] h-[183px] rounded-xl hidden lg:hidden xl:flex flex-col justify-evenly py-6 px-10 text-[17px] text-left"
              >
                <Image src={LogoBunga1} alt="LogoBunga" className="" />
              </div>
              <div
                data-aos="fade-up"
                className="w-[392px] h-[183px] bg-primary shadow-lg rounded-xl flex flex-col justify-evenly py-6 px-10 text-[17px] text-left"
              >
                <p className="font-medium text-[#616161]">2017 - Now</p>
                <h3 className="font-bold text-[18px]">Ketua Umum</h3>
                <p className="font-normal">Koperasi Cinta Nusantara </p>
              </div>
            </div>
          </div>

          {/* Section 4 Gallery */}
          <div
            id="gallery"
            className="w-full h-full flex flex-col items-center text-center"
          >
            <div className="flex items-end gap-3 mb-3 " data-aos="fade-up">
              <Image src={Graduation1} alt="graduation" className="w-[44px]" />
              <h4 className="text-[25px] font-normal">Experience</h4>
            </div>
            <h3
              className="md:text-[40px] font-bold w-[20em] mb-14"
              data-aos="fade-up"
            >
              Gallery of my Activities
            </h3>

            <div className="block lg:block xl:hidden">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-3">
                  <Image src={Grid1} alt="Group Event" className="" />
                </div>
                <div className="col-span-1">
                  <div className="grid grid-rows-1 gap-2">
                    {/* Row 1 */}
                    <div className="row-span-1 relative h-[54px]">
                      <Image
                        src={Grid2}
                        alt="Group Event"
                        className="w-full h-full object-cover rounded-[8.46px]"
                      />
                    </div>

                    {/* Row 2 */}
                    <div className="row-span-1 relative h-[110px]">
                      <Image
                        src={Grid4}
                        alt="Group Event"
                        className="w-full h-full object-cover rounded-[8.46px]"
                      />
                    </div>

                    {/* Row 3 */}
                    <div className="row-span-1 relative h-[97px]">
                      <Image
                        src={Grid7}
                        alt="Group Event"
                        className="w-full h-full object-cover rounded-[8.46px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-rows-3 gap-2 h-[270px]">
                    <div className="row-span-1 relative h-full">
                      <Image
                        src={Grid3}
                        alt="Group Event"
                        className="absolute inset-0 w-full h-full object-cover rounded-[8.46px]"
                      />
                    </div>
                    <div className="row-span-2">
                      <div className="grid grid-cols-2 gap-2 h-[184px]">
                        {/* Kolom 1 */}
                        <div className="col-span-1 relative h-full ">
                          <Image
                            src={Grid5}
                            alt="Group Event"
                            className="absolute inset-0 w-full h-full object-cover rounded-[8.46px]"
                          />
                        </div>

                        {/* Kolom 2 */}
                        <div className="col-span-1 relative h-full">
                          <Image
                            src={Grid6}
                            alt="Group Event"
                            className="absolute inset-0 w-full h-full object-cover rounded-[8.46px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:hidden xl:flex flex-col items-center h-full w-full gap-5">
              <div className="flex h-[304px] gap-5">
                <div
                  className="relative w-[770px] h-[304px]"
                  data-aos="fade-right"
                >
                  <Image
                    src={gridDesk1}
                    alt="Group Event"
                    className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                  />
                </div>
                <div
                  className="relative h-[304px] w-[496px]"
                  data-aos="fade-left"
                >
                  <Image
                    src={gridDesk2}
                    alt="Group Event"
                    className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col justify-center gap-5">
                  <div
                    className="relative h-[220px] w-[416px]"
                    data-aos="fade-right"
                  >
                    <Image
                      src={gridDesk3}
                      alt="Group Event"
                      className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                    />
                  </div>
                  <div
                    className="relative h-[398px] w-[416px]"
                    data-aos="fade-right"
                  >
                    <Image
                      src={gridDesk6}
                      alt="Group Event"
                      className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 justify-center">
                  <div
                    className="relative h-[383px] w-[416px]"
                    data-aos="fade-up"
                  >
                    <Image
                      src={gridDesk4}
                      alt="Group Event"
                      className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                    />
                  </div>
                  <div
                    className="relative h-[233px] w-[416px]"
                    data-aos="fade-up"
                  >
                    <Image
                      src={gridDesk7}
                      alt="Group Event"
                      className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div
                    className="relative h-[638px] w-[416px]"
                    data-aos="fade-left"
                  >
                    <Image
                      src={gridDesk5}
                      alt="Group Event"
                      className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mt-[10em] xl:mt-[20em]" data-aos="fade-up">
            <Scroll />
          </div>

          <div
            data-aos="fade-up"
            className="w-full h-[0.5em] bg-gradient-to-r from-[#660066] to-[#E1306C] rounded-xl mt-10 mb-[5em] lg:mb-[5em] xl:mb-[7em]"
          ></div>
        </div>
      )}
    </div>
  );
}
