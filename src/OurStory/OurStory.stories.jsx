import OurStory from "./OurStory";

export default {
  title: "Sections/OurStory",
  component: OurStory,
  parameters: { layout: "fullscreen" },
};

export const Default = {};

export const Tablet = {
  globals: { viewport: { value: "tablet", isRotated: false } },
};

export const Phone = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
};
