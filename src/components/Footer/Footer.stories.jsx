import Footer from "./Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
};

export const Default = {};

export const Phone = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
};
