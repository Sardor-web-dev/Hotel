import { FacilityInterface } from "@/lib/facilities";

function FacilityCard({ facility }: { facility: FacilityInterface }) {
  return (
    <div
      className={`w-[1250px] h-[900px] relative bg-cover bg-center flex items-end justify-center`}
      style={{
        backgroundImage: `url('/${facility.img}')`,
      }}
    >
      <div className="bg-white w-[500px] h-[80px] flex items-center justify-center text-[#14274A]">
        <p className="text-2xl font-semibold">{facility.title}</p>
      </div>
    </div>
  );
}

export default FacilityCard;
