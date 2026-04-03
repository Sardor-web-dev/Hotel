"use client"
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-serif tracking-[0.2em] uppercase text-gold">Shodlik</span>
              <span className="text-[8px] tracking-[0.4em] uppercase text-white/60">Luxury Hotel & Spa</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Experience unparalleled luxury and comfort in the heart of the city. Our hotel offers world-class amenities and personalized service to make your stay unforgettable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-white transition-colors">Explore Rooms</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>123 Luxury Avenue, Downtown City, 45678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>info@shodlikhotel.com</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Our Location</h4>
            <div className="w-full h-48 bg-white/5 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.83543450937!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1625123456789!5m2!1sen!2sus" 
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
          <p>© 2026 Shodlik Luxury Hotel. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafted for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
