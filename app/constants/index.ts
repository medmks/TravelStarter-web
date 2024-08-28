import {
  Opendoor,
  airbnb,
  booking,
  traveloka,
  firstImage,
  secondImage,
  thirdImage,
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
    package: "All-inclusive package",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit ",
    image: firstImage,
  },
  {
    Duration: "5 days, 4 nights",
    package: "All-inclusive package",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit ",
    image: secondImage,
  },
  {
    Duration: "2 days, 1 nights",
    package: "All-inclusive package",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit ",
    image: thirdImage,
  },
];


const Questions = [
  {
    question: "What is the cancellation policy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque.",
  },
  {
    question: "Is travel insurance included?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque.",
  },
  {
    question: "What is the best way to pay?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque.",
  },
  {
    question: "Can I customize my trip?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque.",
  },
  {
    question: "What is the duration of the trip?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque.",
  },
];

export { Parteners, Packages ,Questions};
