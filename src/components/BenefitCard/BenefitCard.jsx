import BenefitIcon from "./BenefitIcon";
import { cx } from "../../utils/cx";
import "./BenefitCard.scss";

/** White card with an icon, a short title and a sentence. icon: "royalty" | "training" | "equipment" | "warranty" */
export default function BenefitCard({ icon, title, text, className, style }) {
  return (
    <article className={cx("benefit", className)} style={style}>
      <span className="benefit__icon">
        <BenefitIcon name={icon} />
      </span>
      <h3 className="benefit__title">{title}</h3>
      <p className="benefit__text">{text}</p>
    </article>
  );
}
