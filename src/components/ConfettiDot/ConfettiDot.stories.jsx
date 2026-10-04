import ConfettiDot from "./ConfettiDot";

export default {
  title: "UI/ConfettiDot",
  component: ConfettiDot,
  args: { color: "pink", size: 24, top: "40%", left: "40%" },
  argTypes: {
    color: { control: "select", options: ["orange", "yellow", "pink", "teal", "green"] },
  },
  decorators: [
    (Story) => (
      <div style={{ position: "relative", width: 240, height: 140, background: "#ffd23f" }}>
        <Story />
      </div>
    ),
  ],
};

export const Pink = {};

export const Teal = { args: { color: "teal", delay: 1 } };
