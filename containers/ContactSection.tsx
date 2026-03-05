import React from "react";
import { FaArrowRight } from "react-icons/fa";

function ContactSection() {
  return (
    <div className="w-[1250px] mx-auto flex flex-col gap-[120px]">
      <div className="flex flex-col gap-4 text-left ">
        <p className="font-bold text-[#14274A] text-3xl">WE ARE HERE FOR YOU</p>
        <span className="text-md text-[#14274A]">
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, compaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </span>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex max-w-[450px] flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xl max-w-[270px] font-semibold text-[#14274A]">497 Evergreen Rd. Roseville, CA 95673</p>
            <span className="flex items-center gap-2 font-bold text-2xl text-[#14274A]">
              View map <FaArrowRight />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold text-[#14274A]">Phone: +44 345 678 903</p>
            <p className="text-xl font-semibold text-[#14274A]">Email: luxury_hotels@gmail.com</p>
          </div>
        </div>
        <div className="w-[570px]">
            <form className="flex flex-col items-end gap-4">
                <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                <textarea placeholder="Message" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-[150px] resize-none"></textarea>
                <button className="w-[145px] h-[50px] cursor-pointer rounded-md text-white bg-[#E0B973] font-bold">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
