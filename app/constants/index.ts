import {  Opendoor, airbnb, booking, traveloka,
          firstImage, secondImage, thirdImage,
 } from "~/assets";

const Parteners = [
  {
    name: "traveloka",
    image: traveloka,
  },
  {
    name: "booking",
    image: booking,
  },
  {
    name: "airbnb",
    image: airbnb,
  },
  {
    name: "Opendoor",
    image: Opendoor,
  },
];

const Packages = [
  {
    Duration: "7 days, 6 nights",
    package:"All-inclusive package",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit ",
    image: firstImage,
  },
  {
    Duration: "5 days, 4 nights",
    package:"All-inclusive package",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit ",
    image: secondImage,
  },
  {
    Duration: "2 days, 1 nights",
    package:"All-inclusive package",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit ",
    image: thirdImage,
  }

];

export {Parteners,Packages};
