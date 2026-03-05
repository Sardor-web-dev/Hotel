import React from "react";
import HomeSection from "@/containers/MainSection";
import Footer from "@/components/custom/Footer";
import RoomsSection from "@/containers/RoomsSection";

export default function RoomsPage() {
  return (
    <div className="flex flex-col items-center gap-10 justify-center">
      <HomeSection bg="bg-3.png" />
      <RoomsSection/>
      <Footer/>
    </div>
  );
}

