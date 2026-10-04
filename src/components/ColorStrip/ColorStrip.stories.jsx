import ColorStrip from "./ColorStrip";

export default {
  title: "UI/ColorStrip",
  component: ColorStrip,
  parameters: { layout: "fullscreen" },
};

export const Default = {};

export const WarmOnly = { args: { colors: ["orange", "yellow", "orange", "yellow"] } };
