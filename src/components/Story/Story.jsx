import ConfettiDot from "../ConfettiDot";
import Logo from "../Logo";
// import StatCard from "../StatCard";
import  useInView  from "../../hooks/useInView";
import { cx } from "../../utils/cx";
import { story as defaultStory, storyStats } from "../../data/storyContent";
import "./Story.scss";

// a paragraph can be a plain string or { text, variant }
const toParagraph = (item) => (typeof item === "string" ? { text: item } : item);

/**
 * "Our story" section. Text on the left, stat card on the right, vertically centred with flex.
 * Slides in when scrolled to.
 */
export default function Story({ content = defaultStory, stats = storyStats }) {
  const [ref, seen] = useInView();

  return (
    <section ref={ref} id={content.id} className={cx("story", seen && "is-visible")}>
      <ConfettiDot color="pink" size={16} left="47%" top="9%" />
      <ConfettiDot color="teal" size={20} right="8%" bottom="12%" delay={1} />
      <ConfettiDot color="green" size={13} left="4%" bottom="16%" delay={0.5} />

      <div className="story__inner">
        <div className="story__text">
          <h2 className="story__title">{content.title}</h2>
          <p className="story__subtitle">{content.subtitle}</p>

          {content.paragraphs.map(toParagraph).map(({ text, variant }) => (
            <p key={text} className={cx("story__paragraph", variant && `story__paragraph--${variant}`)}>
              {text}
            </p>
          ))}

          <div className="story__closing">
            {content.closing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="story__aside">
          {/* <StatCard items={stats} /> */}
          <Logo variant="paniPuri" size={96} float="b" alt="" className="story__logo" />
        </div>
      </div>
    </section>
  );
}
