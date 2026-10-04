import { cx } from "../../utils/cx";
import "./ConfettiDot.scss";

/**
 * Small pulsing decorative dot. Position it inside a `position: relative` parent
 * with top / left / right / bottom (any CSS length, e.g. "46%").
 * color: "orange" | "yellow" | "pink" | "teal" | "green"
 */
export default function ConfettiDot({
  color = "pink",
  size = 16,
  top,
  left,
  right,
  bottom,
  delay = 0,
  className,
}) {
  return (
    <span
      aria-hidden="true"
      className={cx("dot", `dot--${color}`, className)}
      style={{ width: size, height: size, top, left, right, bottom, animationDelay: `${delay}s` }}
    />
  );
}
