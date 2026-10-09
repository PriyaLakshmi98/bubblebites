import { cx } from "../utils/cx";
import useCountUp from "../hooks/useCountUp";
import useInView from "../hooks/useInView";
import useScrollProgress from "../hooks/useScrollProgress";
import { story as defaultStory } from "../data/storyContent";
import "./OurStory.scss";

/** One stat row: icon + label + number that counts up when it scrolls into view. */
function Stat({ icon, label, value, prefix = "", color }) {
  const [ref, seen] = useInView(0.6);
  const count = useCountUp(value, seen);
  return (
    <div className="story__stat" ref={ref}>
      <span className={cx("story__stat-icon", `story__stat-icon--${color}`)} aria-hidden="true">
        {icon}
      </span>
      <div>
        <span className="story__stat-label">{label}</span>
        <strong className="story__stat-value">
          {prefix}
          {count.toLocaleString("en-IN")}
        </strong>
      </div>
    </div>
  );
}

/** Our story section: heading, scroll-filling timeline, sticky stats card and a closing quote. Content comes from data/storyContent.js. */
export default function OurStory({ id = "story", content = defaultStory }) {
  const { title, highlight, lead, steps, badge, stats, quote, floaters } = content;
  const [timelineRef, progress] = useScrollProgress();
  const [quoteRef, quoteSeen] = useInView(0.4);

  return (
    <section className="story" id={id}>
      {floaters.map((emoji, i) => (
        <span key={emoji} className={`story__floater story__floater--${i + 1}`} aria-hidden="true">
          {emoji}
        </span>
      ))}

      <div className="story__inner">
        <div className="story__main">
          <h2 className="story__title">
            {title} <span>{highlight}</span>
          </h2>
          <p className="story__lead">{lead}</p>

          <ol className="story__timeline" ref={timelineRef} style={{ "--progress": `${progress * 100}%` }}>
            {steps.map((step, i) => {
              // a step lights up once the orange line has reached it
              const reached = progress >= i / steps.length + 0.02;
              return (
                <li key={step.title} className={cx("story__step", reached && "is-on")}>
                  <span className="story__dot" aria-hidden="true">
                    {step.icon}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <aside className="story__aside">
          <div className="story__stats">
            <span className="story__badge">{badge}</span>
            {stats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </aside>
      </div>

      <div className="story__inner story__inner--quote">
        <blockquote className={cx("story__quote", quoteSeen && "is-in")} ref={quoteRef}>
          {quote.map((line, i) => (
            <p key={line} className="story__quote-line" style={{ transitionDelay: `${i * 0.35}s` }}>
              {line}
              {i === quote.length - 1 && <span className="story__heart"> ❤️</span>}
            </p>
          ))}
          <span className="story__quote-bar" aria-hidden="true" />
        </blockquote>
      </div>
    </section>
  );
}
