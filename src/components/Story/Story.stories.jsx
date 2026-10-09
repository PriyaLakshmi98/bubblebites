import Story from "./Story";

export default {
  title: "Sections/Story",
  component: Story,
  parameters: { layout: "fullscreen" },
};

export const Default = {};

export const Phone = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
};
