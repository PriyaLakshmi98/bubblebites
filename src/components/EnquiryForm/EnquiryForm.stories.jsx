import EnquiryForm from "./EnquiryForm";

export default {
  title: "UI/EnquiryForm",
  component: EnquiryForm,
  decorators: [
    (Story) => (
      <div style={{ width: 400, padding: "30px 40px 30px 20px", background: "#e8572a" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {};

// Custom list of options for the dropdown
export const OnlyCarts = { args: { options: ["Pani puri cart", "Waffle cart", "Fried chicken cart"] } };
