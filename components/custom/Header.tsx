"use client";

import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="bg-transparent max-w-[1250px] w-full mx-auto flex items-center justify-between">
        <div className="flex justify-center items-center bg-[#E0B973] text-[#14274A] rounded-b-4xl w-[256px] h-[90px] flex-col">
          <p className="text-3xl font-bold">Shodlik</p>
          <span className="text-xl font-medium">Hotel</span>
        </div>
        <div className="flex items-center text-white gap-4 text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="/facilities">Facilities</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/contact-us">Contact-us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
