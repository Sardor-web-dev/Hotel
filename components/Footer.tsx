"use client"

import Link  from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-serif tracking-[0.2em] uppercase text-gold">
                Shodlik
              </span>
              <span className="text-[8px] tracking-[0.4em] uppercase text-white/60">
                Luxury Hotel
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/40 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-white transition-colors"
                >
                  {t("nav.rooms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>410100, Samarkand, Samarqand Region, Uzbekistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+998 (97) 911 90 90</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">
              {t("footer.location")}
            </h4>
            <div className="w-full h-48 bg-white/5 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.0775086509739!2d67.04572761834365!3d39.64970770376893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d21b69e730d87%3A0xc2f87ad74f8bca22!2sHotel%20Shodlik%20Samarkand!5e0!3m2!1sen!2sus!4v1775751543449!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/40">
          <p>{t("footer.rights")}</p>
          <p className="mt-4 md:mt-0">{t("footer.crafted")}</p>
        </div>
      </div>
    </footer>
  );
}
