"use client";

import { RoomInterface} from "@/lib/rooms";
import { Button } from "../ui/button";
import Image from "next/image";

const RoomCard = ({ room }: { room: RoomInterface }) => {
  return (
    <section className="mx-auto max-w-[1250px]">
      <div className="flex items-center justify-between gap-12">
        <div className="max-w-[400px] flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-slate-800">{room.title}</h2>

          <p className="text-gray-600 leading-relaxed">{room.description}</p>

          <Button className="w-[200px] cursor-pointer bg-[#E0B973] h-[40px] rounded-md text-white">
            EXPLORE
          </Button>
        </div>

        <Image
          className="w-[500px] h-[300px] object-cover rounded-md"
          src={room.img}
          alt={room.title}
          width={500}
          height={300}
        />
      </div>
    </section>
  );
};

export default RoomCard;
