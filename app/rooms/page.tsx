"use client"

import { motion } from "motion/react";
import {
  Coffee,
  Wifi,
  Tv,
  Wind,
  Shield,
  Waves,
  ArrowRight,
  Utensils,
  Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ExploreRooms() {
  const { t } = useTranslation();

  const rooms = [
    {
      id: 1,
      title: "Deluxe Garden Suite",
      description:
        "A spacious suite featuring a private garden terrace, perfect for those seeking tranquility and a connection with nature.",
      size: "65 m²",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200",
      amenities: ["King Bed", "Garden View", "Rain Shower", "Minibar"],
    },
    {
      id: 2,
      title: "Presidential Ocean Villa",
      description:
        "Our most exclusive offering. A multi-level villa with a private infinity pool, personal butler service, and panoramic ocean views.",
      size: "240 m²",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
      amenities: [
        "Private Pool",
        "Butler Service",
        "Full Kitchen",
        "Home Cinema",
      ],
    },
    {
      id: 3,
      title: "Executive Skyline Loft",
      description:
        "Modern industrial design meets luxury. High ceilings and floor-to-ceiling windows offer breathtaking views of the city skyline.",
      size: "85 m²",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&q=80&w=1200",
      amenities: ["City View", "Work Station", "Smart Home", "Wine Cellar"],
    },
    {
      id: 4,
      title: "Royal Penthouse",
      description:
        "The ultimate urban retreat. Occupying the entire top floor, featuring a private spa, library, and 360-degree views.",
      size: "450 m²",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
      amenities: ["Private Spa", "Library", "Helipad Access", "Grand Piano"],
    },
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-xs mb-4 block">
            {t("rooms.subtitle")}
          </span>
          <h1 className="text-5xl md:text-7xl mb-8">{t("rooms.title")}</h1>
          <p className="text-charcoal/60 text-lg leading-relaxed">
            {t("rooms.description")}
          </p>
        </motion.div>
      </section>

      {/* Rooms List */}
      <section className="container mx-auto px-6 space-y-32">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
          >
            {/* Image */}
            <div className="w-full lg:w-3/5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Info */}
            <div className="w-full lg:w-2/5">
              <span className="text-gold tracking-[0.2em] uppercase text-[10px] font-bold mb-4 block">
                {room.size} — Premium Suite
              </span>
              <h2 className="text-3xl md:text-4xl mb-6">{room.title}</h2>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                {room.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {room.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 text-sm text-charcoal/60"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-charcoal text-white px-8 py-4 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 font-bold tracking-widest uppercase text-xs flex items-center group">
                  {t("rooms.bookRoom")}
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </button>
                <button className="border border-charcoal/20 hover:border-charcoal px-8 py-4 rounded-full transition-all duration-300 font-bold tracking-widest uppercase text-xs">
                  {t("rooms.viewDetails")}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Amenities Grid */}
      <section className="mt-32 bg-charcoal py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold tracking-[0.3em] uppercase text-xs mb-4 block">
              {t("rooms.standardFeatures")}
            </span>
            <h2 className="text-4xl">{t("rooms.features")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Wifi />, title: "Fiber WiFi" },
              { icon: <Tv />, title: "Smart TV" },
              { icon: <Wind />, title: "Climate Control" },
              { icon: <Coffee />, title: "Nespresso" },
              { icon: <Shield />, title: "Digital Safe" },
              { icon: <Waves />, title: "Luxury Spa" },
              { icon: <Utensils />, title: "24/7 Service" },
              { icon: <Star />, title: "Premium Linen" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-sm tracking-widest uppercase font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
