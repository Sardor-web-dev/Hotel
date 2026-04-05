"use client"

import { motion } from "motion/react";
import { Award, Users, Globe, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.3em] uppercase text-xs mb-4 block">
              {t("about.subtitle")}
            </span>
            <h1 className="text-5xl md:text-7xl mb-8">{t("about.title")}</h1>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
              {t("about.description1")}
            </p>
            <p className="text-charcoal/60 leading-relaxed">
              {t("about.description2")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200"
              alt="Hotel History"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Award />, count: "25+", label: t("about.stats.awards") },
              {
                icon: <Users />,
                count: "150k+",
                label: t("about.stats.guests"),
              },
              {
                icon: <Globe />,
                count: "12",
                label: t("about.stats.countries"),
              },
              {
                icon: <Heart />,
                count: "100%",
                label: t("about.stats.dedication"),
              },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-gold mb-4">{stat.icon}</div>
                <span className="text-4xl font-serif mb-2">{stat.count}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Values */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-gold tracking-[0.3em] uppercase text-xs mb-4 block">
              {t("about.values.subtitle")}
            </span>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t("about.values.title")}
            </h2>
            <p className="text-charcoal/60">{t("about.values.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: t("about.values.excellence"),
                desc: t("about.values.excellenceDesc"),
              },
              {
                title: t("about.values.authenticity"),
                desc: t("about.values.authenticityDesc"),
              },
              {
                title: t("about.values.innovation"),
                desc: t("about.values.innovationDesc"),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-2xl shadow-xl border border-charcoal/5"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 font-serif text-2xl">
                  0{index + 1}
                </div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-charcoal/60 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1920"
            alt="CTA Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl mb-10">{t("about.cta")}</h2>
          <button className="bg-gold hover:bg-gold-light text-charcoal px-12 py-5 rounded-full transition-all duration-300 font-bold tracking-widest uppercase text-sm">
            {t("about.reserve")}
          </button>
        </div>
      </section>
    </div>
  );
}
