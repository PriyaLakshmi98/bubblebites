import { cx } from "../../utils/cx";
import "./Button.scss";

/**
 * Pill-shaped button. Renders a link when `href` is given, otherwise a <button>.
 * variant: "orange" | "dark" | "white"
 */
export default function Button({ variant = "orange", href, className, children, ...rest }) {
  const classes = cx("btn", `btn--${variant}`, className);

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
