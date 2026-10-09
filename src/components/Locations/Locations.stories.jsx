import Locations from "./Locations";

export default {
  title: "Sections/Locations",
  component: Locations,
  parameters: { layout: "fullscreen" },
};

export const Default = {};

export const Phone = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
};
