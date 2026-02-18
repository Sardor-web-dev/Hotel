"use client";
import Header from "@/components/custom/Header";
import { FaArrowDown } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";

const HomeSection = ({bg}: {bg: string}) => {
  return (
    <section
      className="bg-cover h-screen w-full"
      style={{
        backgroundImage: `url('/${bg}')`,
      }}
    >
      <div className="flex flex-col gap-20 max-w-[1250px] mx-auto">
        <Header />

        <div className="items-start z-10 max-w-[1200px] px-4 w-full h-full flex flex-col justify-center">
          <div className="text-white">
            <p className="text-xl md:text-2xl font-light tracking-widest mb-1">
              WELCOME TO
            </p>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[1] mb-2">
              LUXURY
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-wide">
              HOTELS
            </h2>
            <p className="text-base md:text-lg max-w-[500px] mb-8">
              Book your stay and enjoy Luxury redefined at the most affordable
              rates.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <button className="flex items-center gap-2 cursor-pointer bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition duration-300 mx-auto mb-6">
            <FaRegCalendarCheck className="text-lg" />
            BOOK NOW
          </button>
          <div className="flex flex-col items-center gap-1 text-white">
            <span className="text-sm tracking-wider">Scroll</span>
            <FaArrowDown className="animate-bounce text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
