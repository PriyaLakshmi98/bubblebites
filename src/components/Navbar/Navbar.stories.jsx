import Navbar from "./Navbar";

export default {
  title: "Layout/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
};

export const Desktop = {};

// Use the Viewport toolbar to see the hamburger menu; this story just pre-selects a phone size.
export const Phone = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
};

export const DifferentActiveLink = { args: { activeHref: "#menu" } };
