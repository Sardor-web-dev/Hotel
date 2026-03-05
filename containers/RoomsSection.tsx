import RoomCard from '@/components/custom/RoomTypeCard';
import { roomsTypes } from '@/lib/roomtype';
import React from 'react'
import TestimonialSection from './TestimonialSection';

function RoomsSection() {
  return (
    <div className="flex flex-col items-center gap-10 justify-center max-w-[1250px] mx-auto">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-4xl text-[#14274A] font-semibold">ROOMS AND RATES</p>
        <span className="text-md max-w-[800px]">
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms’ sea-view windows and terraces.
        </span>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        {roomsTypes.map((room, i) => (
            <RoomCard key={i} room={room}/>
        ))} 
      </div>
      <TestimonialSection/>
    </div>
  );
}

export default RoomsSection