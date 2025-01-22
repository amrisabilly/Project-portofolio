import React from "react";
import { Scrol } from "@/components/Assets.js";
import Image from "next/image";

const Scroll = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center gap-2 md:gap-10 animate-scroll">
        {Scrol.concat(Scrol).map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <Image src={item.link} alt={item.link} width={50} height={50} className="xl:w-[100%] xl:h-[100%]"/>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 10s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Scroll;
