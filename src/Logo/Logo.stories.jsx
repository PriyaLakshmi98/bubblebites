import Logo from "./Logo";

export default {
  title: "UI/Logo",
  component: Logo,
  args: { size: 220 },
  argTypes: {
    variant: { control: "radio", options: ["paniPuri", "biteSip", "friedChicken"] },
    float: { control: "radio", options: [false, "a", "b"] },
  },
};

export const PaniPuri = { args: { variant: "paniPuri" } };

export const BiteSipRepeat = { args: { variant: "biteSip" } };

export const FriedChicken = { args: { variant: "friedChicken" } };

export const Floating = { args: { variant: "paniPuri", float: "a" } };

export const Small = { args: { variant: "paniPuri", size: 44, shadow: false } };
