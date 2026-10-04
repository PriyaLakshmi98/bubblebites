import "./ColorStrip.scss";

const DEFAULT_COLORS = ["orange", "yellow", "pink", "teal", "green"];

/** Thin multicolour divider. colors: names from the brand palette. */
export default function ColorStrip({ colors = DEFAULT_COLORS }) {
  return (
    <div className="strip" aria-hidden="true">
      {colors.map((color, i) => (
        <span key={`${color}-${i}`} className={`strip__segment strip__segment--${color}`} />
      ))}
    </div>
  );
}
