import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  args: { children: "Get franchise", href: "#franchise" },
  argTypes: {
    variant: { control: "select", options: ["orange", "dark", "white"] },
  },
};

export const Orange = { args: { variant: "orange" } };

export const Dark = { args: { variant: "dark", children: "Explore menu" } };

export const White = {
  args: { variant: "white", children: "Start a franchise" },
  decorators: [
    (Story) => (
      <div style={{ background: "#ffd23f", padding: 32 }}>
        <Story />
      </div>
    ),
  ],
};

// No href, so it renders a real <button>
export const AsButton = { args: { href: undefined, children: "Click me" } };
