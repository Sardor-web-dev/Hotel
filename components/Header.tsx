"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ru";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.rooms"), path: "/rooms" },
    { name: t("nav.about"), path: "/about" },
  ];

  const languages = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "uz", label: "UZ" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

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
        <nav className="hidden md:flex items-center space-x-8">
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

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1 text-white hover:text-gold transition-colors uppercase tracking-widest text-[11px] font-medium"
            >
              <Globe size={14} />
              <span>{currentLang.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 bg-charcoal border border-white/10 rounded-xl overflow-hidden shadow-2xl min-w-[80px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-[10px] tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-colors text-left ${
                        i18n.language === lang.code ? "text-gold" : "text-white"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="tel:+123456789"
            className={`flex items-center space-x-2 bg-gold hover:bg-gold-light text-charcoal rounded-full transition-all duration-500 font-bold uppercase tracking-widest ${
              isScrolled ? "px-5 py-2 text-[10px]" : "px-8 py-3 text-xs"
            }`}
          >
            <Phone size={isScrolled ? 12 : 14} />
            <span>{t("nav.book")}</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="text-white hover:text-gold transition-colors uppercase tracking-widest text-[10px] font-medium"
          >
            {currentLang.toUpperCase()}
          </button>
          <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={isScrolled ? 24 : 28} />
            ) : (
              <Menu size={isScrolled ? 24 : 28} />
            )}
          </button>
        </div>
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
              <div className="flex space-x-4 pt-4 border-t border-white/10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`text-xs tracking-widest uppercase ${
                      i18n.language === lang.code
                        ? "text-gold"
                        : "text-white/60"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <a
                href="tel:+123456789"
                className="bg-gold text-charcoal text-center py-4 rounded-2xl font-bold tracking-[0.3em] uppercase text-xs"
              >
                {t("nav.book")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
