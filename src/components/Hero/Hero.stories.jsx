import Hero from "./Hero";
import { hero } from "../../data/homeContent";

export default {
  title: "Sections/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
  args: hero,
};

export const Default = {};

export const Phone = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
};

export const DifferentCopy = {
  args: {
    badge: "New cart",
    titleBefore: "Crispy, ",
    highlight: "golden",
    titleAfter: " fried chicken",
    subtitle: "Our newest cart is open for franchise.",
  },
};
