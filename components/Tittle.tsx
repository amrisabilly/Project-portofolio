import React, { useState, useEffect } from "react";

const Tittle = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const words = ["Vision", "Strategy", "Inovation"]; // Kata-kata yang akan diganti

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsFadingOut(false);
      }, 100); // Durasi fade-out
    }, 2000); // Pergantian setiap 3 detik
    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  return (
    <div>
      <h3 className="text-[27.29px] lg:text-[40px] font-extrabold mb-3 md:mb-5" data-aos="fade-up">
        Bringing {" "}
        <span
          className={`inline-block transition-opacity transform ${
            isFadingOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
          } duration-500 ease-in-out`}
        >
           {words[currentWordIndex]}
        </span>
        <br />
        to <span className="text-secondary">Retail Management</span>
      </h3>
    </div>
  );
};

export default Tittle;
