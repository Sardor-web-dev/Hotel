import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";

function Footer() {
  return (
    <div className="w-full mt-10 h-[200px] bg-[#14274A] flex items-center text-white">
      <div className="flex items-center justify-between w-full max-w-[1250px] mx-auto">
        <div className="flex flex-col max-w-[270px] gap-5">
          <div className="flex flex-col ">
            <p className="text-lg font-bold">Shodlik</p>
            <p>Hotel</p>
          </div>
          <span className="text-sm">
            497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903
            luxury_hotels@gmail.com
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <Link className="text-sm font-semibold" href="/">
            About
          </Link>
          <Link className="text-sm font-semibold" href="/">
            Contact
          </Link>
          <Link className="text-sm font-semibold" href="/">
            Terms & Conditions
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            className="text-sm flex items-center gap-1 font-semibold"
            href="/"
          >
            <FaFacebook />
            Facebook
          </Link>
          <Link
            className="text-sm flex items-center gap-1 font-semibold"
            href="/"
          >
            <FaTwitter />
            Twitter
          </Link>
          <Link
            className="text-sm flex items-center gap-1 font-semibold"
            href="/"
          >
            <FaInstagram />
            Instagram
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p>Subscribe to our newsletter</p>
          <div>
            <div className="flex items-center gap-2">
              <input
                className="px-4 py-2 rounded-md background-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#E0B973] focus:border-transparent"
                type="email"
                placeholder="Enter your email"
              />
              <Button className="bg-[#E0B973] cursor-pointer px-4 py-2 rounded-md text-white font-semibold">
                OK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
