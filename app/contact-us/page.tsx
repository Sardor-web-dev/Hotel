import ContactHeader from "@/components/custom/ContactHeader";
import Footer from "@/components/custom/Footer";
import ContactSection from "@/containers/ContactSection";

export default function Contactpage() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center gap-10 justify-center">
          <ContactHeader/>
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
