"use client"

import { motion } from "motion/react";
import { ArrowRight, Star, Coffee, Wifi, Utensils, Waves } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-luxury-hotel-room-with-a-view-of-the-city-4264-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-gold tracking-[0.5em] uppercase text-xs md:text-sm mb-6 block font-medium">
              {t("hero.welcome")}
            </span>
            <h1 className="text-5xl md:text-8xl text-white mb-8 leading-tight">
              {t("hero.title").split("Luxury")[0]} <br />{" "}
              {t("hero.title").includes("Luxury") ? "of " : ""}{" "}
              <span className="italic">
                {t("hero.title").includes("Luxury")
                  ? "Luxury Living"
                  : t("hero.title")}
              </span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
              <Link
                href="/rooms"
                className="bg-gold hover:bg-gold-light text-charcoal px-10 py-4 rounded-full transition-all duration-300 font-bold tracking-widest uppercase text-sm flex items-center group"
              >
                {t("hero.explore")}
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Link>
              <Link
                href="/about"
                className="border border-white/30 hover:border-white text-white px-10 py-4 rounded-full transition-all duration-300 font-bold tracking-widest uppercase text-sm backdrop-blur-sm"
              >
                {t("hero.story")}
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] mb-2">
            {t("hero.scroll")}
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* Hotel Info Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold tracking-[0.3em] uppercase text-xs mb-4 block">
                {t("home.experience")}
              </span>
              <h2 className="text-4xl md:text-5xl mb-8">
                {t("home.sanctuary")}
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-8 text-lg">
                {t("home.description")}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Utensils size={20} />
                  </div>
                  <span className="font-medium text-sm">
                    {t("home.fineDining")}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Waves size={20} />
                  </div>
                  <span className="font-medium text-sm">{t("home.pool")}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Wifi size={20} />
                  </div>
                  <span className="font-medium text-sm">{t("home.wifi")}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Coffee size={20} />
                  </div>
                  <span className="font-medium text-sm">
                    {t("home.lounge")}
                  </span>
                </div>
              </div>
              <Link
                href="/about"
                className="text-gold font-bold tracking-widest uppercase text-xs border-b-2 border-gold/30 hover:border-gold transition-all pb-1 inline-block"
              >
                {t("home.learnMore")}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
                  alt="Hotel Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-8 border-cream hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600"
                  alt="Spa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Preview */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-gold tracking-[0.3em] uppercase text-xs mb-4 block">
                {t("home.accommodations")}
              </span>
              <h2 className="text-4xl md:text-5xl">
                {t("home.refinedComfort")}
              </h2>
            </div>
            <Link
              href="/rooms"
              className="mt-6 md:mt-0 text-gold hover:text-white transition-colors flex items-center tracking-widest uppercase text-xs font-bold"
            >
              {t("home.viewAll")} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Deluxe Suite",
                image:
                  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Presidential Villa",
                image:
                  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Ocean View Loft",
                image:
                  "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&q=80&w=800",
              },
            ].map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-bold tracking-widest uppercase text-xs border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
                      {t("nav.book")}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl mb-2 group-hover:text-gold transition-colors">
                  {room.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-10"
            >
              {t("home.testimonial")}
            </motion.p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 grayscale">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                  alt="Guest"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold tracking-widest uppercase text-xs">
                Alexander Wright
              </span>
              <span className="text-charcoal/40 text-[10px] uppercase tracking-widest mt-1">
                CEO, Wright Enterprises
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
