import { logos } from "../assets/images";
import { cx } from "../utils/cx";
// import "./Logo.scss";

const DEFAULT_ALT = {
  paniPuri: "Bubble Bites pani puri logo with two hugging puri mascots",
  biteSip: "Bubble Bites bite sip repeat logo with burger and bubble tea mascots",
  friedChicken: "Bubble Bites fried chicken logo with two chicken mascots",
};

/**
 * Round Bubble Bites logo.
 * variant: "paniPuri" | "biteSip" | "friedChicken"
 * size:    optional number (px) or CSS length; leave out to size it with CSS
 * float:   false | "a" | "b"  (two different floating animations)
 * shadow:  drop shadow on/off
 */
export default function Logo({
  variant = "paniPuri",
  size,
  float = false,
  shadow = true,
  alt,
  className,
  style,
  ...rest
}) {
  const classes = cx("logo", !shadow && "logo--flat", float && `logo--float-${float}`, className);
  const dimensions = size ? { width: size, height: size } : undefined;

  return (
    <img
      className={classes}
      src={logos[variant]}
      alt={alt ?? DEFAULT_ALT[variant]}
      style={{ ...dimensions, ...style }}
      {...rest}
    />
  );
}
