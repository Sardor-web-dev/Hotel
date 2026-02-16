import Header from "@/components/custom/Header";
import HomeSection from "@/containers/MainSection";
import RoomTypes from "@/containers/RoomTypesSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
          <HomeSection />
          <RoomTypes/>
      </div>
    </>
  );
}
