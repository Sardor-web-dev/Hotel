"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Rooms", path: "/rooms" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "top-6 px-6" : "top-0 px-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 flex justify-between items-center ${
          isScrolled
            ? "max-w-6xl rounded-full px-8 py-3 bg-charcoal/95 shadow-2xl backdrop-blur-md border border-white/10"
            : "max-w-full rounded-none px-12 py-6 bg-charcoal/60 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <Link href="/" className="flex flex-col items-center">
          <span
            className={`font-serif tracking-[0.2em] uppercase text-gold transition-all duration-500 ${
              isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            }`}
          >
            Shodlik
          </span>
          <span
            className={`tracking-[0.4em] uppercase text-white/60 transition-all duration-500 ${
              isScrolled
                ? "text-[7px] md:text-[8px]"
                : "text-[8px] md:text-[10px]"
            }`}
          >
            Luxury Hotel
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`tracking-[0.2em] uppercase transition-all duration-500 hover:text-gold font-medium ${
                isScrolled ? "text-[11px]" : "text-xs"
              } ${pathname === link.path ? "text-gold" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+123456789"
            className={`flex items-center space-x-2 bg-gold hover:bg-gold-light text-charcoal rounded-full transition-all duration-500 font-bold uppercase tracking-widest ${
              isScrolled ? "px-5 py-2 text-[10px]" : "px-8 py-3 text-xs"
            }`}
          >
            <Phone size={isScrolled ? 12 : 14} />
            <span>Book Now</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={isScrolled ? 24 : 28} />
          ) : (
            <Menu size={isScrolled ? 24 : 28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute left-0 right-0 bg-charcoal/95 backdrop-blur-xl md:hidden overflow-hidden shadow-2xl border-white/10 ${
              isScrolled
                ? "top-full mt-4 mx-6 rounded-3xl border"
                : "top-full border-t"
            }`}
          >
            <nav className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-[0.3em] uppercase font-medium ${
                    pathname === link.path ? "text-gold" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+123456789"
                className="bg-gold text-charcoal text-center py-4 rounded-2xl font-bold tracking-[0.3em] uppercase text-xs"
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
