"use client";

import RoomCard from "@/components/custom/RoomCard";
import { rooms } from "@/lib/rooms";

const RoomTypes = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 max-w-[1250px] gap-10 mx-auto">
        <p className="text-2xl font-medium">
          All our room types are including complementary breakfast
        </p>
        <div className="flex flex-col gap-10">
          {rooms.map((room, i) => (
            <RoomCard room={room} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomTypes;
