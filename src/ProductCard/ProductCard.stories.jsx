import ProductCard from "./ProductCard";
import { menuItems } from "../../data/menuData";

const byId = (id) => menuItems.find((item) => item.id === id);

export default {
  title: "Sections/ProductCard",
  component: ProductCard,
  decorators: [
    (Story) => (
      <div style={{ width: 340 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: { control: "select", options: ["yellow", "pink", "teal", "orange"] },
    logo: { control: "select", options: ["paniPuri", "biteSip", "friedChicken"] },
  },
};

export const FriedChickenCart = { args: byId("fried-chicken") };

export const ComboShop = { args: byId("combo-shop") };

// No price and no items yet: shows "Ask for price" and "Item list coming soon."
export const PaniPuriCart = { args: byId("pani-puri") };
