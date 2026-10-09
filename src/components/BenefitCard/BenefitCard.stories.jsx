import BenefitCard from "./BenefitCard";
import { franchise } from "../../data/franchiseContent";

export default {
  title: "UI/BenefitCard",
  component: BenefitCard,
  argTypes: {
    icon: { control: "select", options: ["royalty", "training", "equipment", "warranty"] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300, padding: 30, background: "#e8572a" }}>
        <Story />
      </div>
    ),
  ],
};

export const NoRoyalty = { args: franchise.benefits[0] };

export const Training = { args: franchise.benefits[1] };

export const Equipment = { args: franchise.benefits[2] };

export const Warranty = { args: franchise.benefits[3] };
