import { cx } from "../../utils/cx";
import "./Pill.scss";

/** Small rounded badge, e.g. "Franchise open". */
export default function Pill({ className, children, ...rest }) {
  return (
    <span className={cx("pill", className)} {...rest}>
      {children}
    </span>
  );
}
