import React from "react";
import HomeSection from "@/containers/MainSection";
import FacilitiesSection from "@/containers/FacilitiesSection";
import Footer from "@/components/custom/Footer";

function FacilitiesPage() {
  return (
    <div className="flex flex-col items-center gap-10 justify-center">
      <HomeSection bg="bg-2.png" />
      <FacilitiesSection/>
      <Footer/>
    </div>
  );
}

export default FacilitiesPage;
