export interface RoomInterface {
    title: string;
    details: string[];
    price: string;
    img: string
}

export const roomsTypes: RoomInterface[] = [
  {
    title: "Single Room",
    details: [""],
    price: "$147 Avg/night",
    img: "single.png",
  },
  {
    title: "Double Room",
    details: [""],
    price: "$155 Avg/night",
    img: "double.png",
  },
  {
    title: "Twin Room",
    details: [""],
    price: "$185 Avg/night",
    img: "twin.png",
  },
];