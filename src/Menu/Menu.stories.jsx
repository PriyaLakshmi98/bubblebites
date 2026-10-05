import Menu from "./Menu";

export default {
  title: "Sections/Menu",
  component: Menu,
  parameters: { layout: "fullscreen" },
};

export const Default = {};

export const Phone = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
};
