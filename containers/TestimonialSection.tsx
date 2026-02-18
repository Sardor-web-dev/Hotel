import { Button } from "@/components/ui/button";

function TestimonialSection() {
  return (
    <section className="mt-16 bg-gray-100">
      <div className="max-w-[1250px] flex text-center gap-3 flex-col mx-auto">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">
            "Calm, Serene, Retro – What a way to relax and enjoy"
          </p>
          <span> Mr. and Mrs. Baxter, UK</span>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <Button className="bg-[#E0B973] text-white text-xl">{"<"}</Button>
            <Button className="bg-[#E0B973] text-white text-xl">{">"}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
