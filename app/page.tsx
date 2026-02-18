import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import HomeSection from "@/containers/MainSection";
import RoomTypes from "@/containers/RoomTypesSection";
import TestimonialSection from "@/containers/TestimonialSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
          <HomeSection bg="home-bg.svg" />
          <RoomTypes/>
          <TestimonialSection/>
          <Footer/>
      </div>
    </>
  );
}
