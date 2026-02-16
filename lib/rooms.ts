export const rooms = [
  {
    title: "Luxury redefined",
    description:
      "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
    img: "/room1.png",
  },
  {
    title: "Leave your worries in the sand",
    description:
      "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean. ",
    img: "/room2.png",
  },
];
export interface RoomInterface {
  title: string;
  description: string;
  img: string;
}