import Header from "@/components/custom/Header";
import HomeSection from "@/containers/MainSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[url('/home-bg.svg')]  bg-cover">
        <Header />
          <HomeSection />
      </div>
    </>
  );
}
