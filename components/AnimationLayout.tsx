"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "motion/react";
import "@/app/i18n";

export default function AnimationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
