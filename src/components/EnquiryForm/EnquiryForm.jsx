import { useId, useState } from "react";
import Button from "../Button";
import { menuItems } from "../../data/menuData";
import { contact } from "../../data/franchiseContent";
import { cleanIndianMobile } from "../../utils/phone";
import { cx } from "../../utils/cx";
import "./EnquiryForm.scss";

const NOT_SURE = "Not sure yet";

/**
 * Franchise enquiry form. There is no server: on submit it opens WhatsApp with the details filled in,
 * sent to the number in data/franchiseContent.js.
 */
export default function EnquiryForm({
  options = menuItems.map((item) => item.name),
  whatsapp = contact.whatsapp,
  className,
}) {
  const uid = useId();
  const [values, setValues] = useState({ name: "", phone: "", city: "", option: NOT_SURE });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    setErrors((e) => ({ ...e, [field]: undefined })); // clear the message as soon as they edit
    setSent(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const phone = cleanIndianMobile(values.phone);
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name";
    if (!phone) next.phone = "Enter a 10-digit mobile number";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    const lines = [
      "Hi Bubble Bites, I'm interested in a franchise.",
      `Name: ${values.name.trim()}`,
      `Phone: ${phone}`,
      values.city.trim() && `City: ${values.city.trim()}`,
      `Interested in: ${values.option}`,
    ].filter(Boolean);

    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
  };

  const field = (name, label, props = {}) => {
    const id = `${uid}-${name}`;
    return (
      <div className="enquiry__field">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          value={values[name]}
          onChange={change(name)}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${id}-error` : undefined}
          {...props}
        />
        {errors[name] && (
          <span id={`${id}-error`} className="enquiry__error" role="alert">
            {errors[name]}
          </span>
        )}
      </div>
    );
  };

  return (
    <form className={cx("enquiry", className)} onSubmit={submit} noValidate>
      <h3 className="enquiry__title">Franchise enquiry</h3>
      <p className="enquiry__intro">Tell us a little about you. We reply on WhatsApp.</p>

      {field("name", "Your name", { type: "text", autoComplete: "name", placeholder: "Priya Sharma" })}
      {field("phone", "Mobile number", { type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "98765 43210" })}
      {field("city", "City (optional)", { type: "text", autoComplete: "address-level2", placeholder: "Coimbatore" })}

      <div className="enquiry__field">
        <label htmlFor={`${uid}-option`}>Interested in</label>
        <select id={`${uid}-option`} value={values.option} onChange={change("option")}>
          <option>{NOT_SURE}</option>
          {options.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </div>

      <Button type="submit" variant="dark" className="enquiry__submit">
        Send on WhatsApp
      </Button>

      {sent && (
        <p className="enquiry__sent" role="status">
          WhatsApp is opening with your details. Press send there to reach us.
        </p>
      )}
    </form>
  );
}
