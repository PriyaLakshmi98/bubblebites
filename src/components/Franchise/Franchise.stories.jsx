import Franchise from "./Franchise";

export default {
  title: "Sections/Franchise",
  component: Franchise,
  parameters: { layout: "fullscreen" },
};

export const Default = {};

export const Phone = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
};
