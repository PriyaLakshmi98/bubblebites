import Logo from "../Logo";
import "./BrandMark.scss";

/** Small logo plus the brand name, used as the home link in the navbar. */
export default function BrandMark({ href = "#home", name = "BUBBLE BITES", ...rest }) {
  return (
    <a className="brand" href={href} {...rest}>
      <Logo size={44} shadow={false} alt="" />
      <span>{name}</span>
    </a>
  );
}
