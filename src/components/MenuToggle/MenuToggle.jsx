import { cx } from "../../utils/cx";
import "./MenuToggle.scss";

/** Hamburger button that turns into an X when `open`. Only visible on tablet and phone widths. */
export default function MenuToggle({ open = false, onClick, controls, label = "Toggle menu" }) {
  return (
    <button
      type="button"
      className={cx("menu-toggle", open && "is-open")}
      aria-label={label}
      aria-expanded={open}
      aria-controls={controls}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
