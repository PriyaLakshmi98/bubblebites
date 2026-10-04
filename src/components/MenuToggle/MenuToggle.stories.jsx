import { useState } from "react";
import MenuToggle from "./MenuToggle";

export default {
  title: "UI/MenuToggle",
  component: MenuToggle,
  // The button is hidden on wide screens, so open the Viewport toolbar and pick a phone size.
  parameters: { docs: { description: { component: "Visible at 860px wide and below." } } },
};

export const Closed = { args: { open: false } };

export const Open = { args: { open: true } };

export const Interactive = {
  render: () => {
    const [open, setOpen] = useState(false);
    return <MenuToggle open={open} onClick={() => setOpen((o) => !o)} />;
  },
};
