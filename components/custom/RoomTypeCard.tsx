import { RoomInterface } from "@/lib/roomtype";

function RoomCard({ room }: { room: RoomInterface }) {
  return (
    <div className="flex rounded-lg flex-col pb-5 gap-5 text-black border-1 border-black">
      <div
        className={`w-[1250px] min-h-[800px] relative bg-cover bg-center flex items-end justify-center`}
        style={{
          backgroundImage: `url('/${room.img}')`,
        }}
      >
        <div className="bg-[#14274A] w-full h-[110px] flex items-center justify-center text-white">
          <p className="text-4xl font-semibold">{room.title.toUpperCase()}</p>
        </div>
      </div>
      <div className="flex w-[1000px] mx-auto items-center justify-between text-black">
        <span className="flex items-center gap-2 text-lg"> <img className="w-[30px] cursor-pointer h-[30px]" src="/more.png" alt="" /> View Room Details</span>
        <button className="font-semibold w-[188px] h-[58px] rounded-lg cursor-pointer bg-[#E0B973] text-white">{room.price}</button>
      </div>
    </div>
  );
}

export default RoomCard;
