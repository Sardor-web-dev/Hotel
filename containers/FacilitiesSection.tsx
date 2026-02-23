import FacilityCard from "@/components/custom/FacilityCard";
import { facilities } from "@/lib/facilities";
import React from "react";

function FacilitiesSection() {
  return (
      <div className="flex flex-col items-center gap-10 justify-center max-w-[1250px] mx-auto">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-4xl text-[#14274A] font-semibold">FACILITIES</p>
          <span className="text-md max-w-[800px]">
            We want your stay at our lush hotel to be truly unforgettable. That
            is why we give special attention to all of your needs so that we can
            ensure an experience quite uniquw. Luxury hotels offers the perfect
            setting with stunning views for leisure and our modern luxury resort
            facilities will help you enjoy the best of all.
          </span>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center">
          {facilities.map((facility, i) => (
            <FacilityCard facility={facility} key={i} />
          ))}
        </div>
      </div>
  );
}

export default FacilitiesSection;
