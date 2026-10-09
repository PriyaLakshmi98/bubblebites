import BenefitCard from "../BenefitCard";
import ConfettiDot from "../ConfettiDot";
import EnquiryForm from "../EnquiryForm";
import Pill from "../Pill";
import useInView  from "../../hooks/useInView";
import { cx } from "../../utils/cx";
import { contact as defaultContact, franchise as defaultContent } from "../../data/franchiseContent";
import "./Franchise.scss";

/**
 * Franchise section: heading, four benefit cards, the enquiry form and a "call us" bar.
 * Has two anchors for the navbar: #franchise (the section) and #contact (the call bar).
 */
export default function Franchise({ content = defaultContent, contact = defaultContact }) {
  const [ref, seen] = useInView();

  return (
    <section ref={ref} id={content.id} className={cx("franchise", seen && "is-visible")}>
      <ConfettiDot color="yellow" size={16} left="6%" top="7%" />
      <ConfettiDot color="teal" size={20} right="7%" top="14%" delay={1} />
      <ConfettiDot color="pink" size={13} left="50%" bottom="9%" delay={0.5} />

      <div className="franchise__inner">
        <header className="franchise__header">
          <Pill>{content.eyebrow}</Pill>
          <h2 className="franchise__title">{content.title}</h2>
          <p className="franchise__subtitle">{content.subtitle}</p>
        </header>

        <div className="franchise__body">
          <div className="franchise__benefits">
            {content.benefits.map((benefit, i) => (
              <BenefitCard key={benefit.title} {...benefit} style={{ transitionDelay: `${i * 0.1}s` }} />
            ))}
          </div>

          <div className="franchise__form">
            <EnquiryForm whatsapp={contact.whatsapp} />
          </div>
        </div>

        <div id={contact.id} className="franchise__call">
          <div>
            <h3>{contact.title}</h3>
            <p>{contact.text}</p>
          </div>
          <div className="franchise__phones">
            {contact.phones.map((number) => (
              <a key={number} href={`tel:${number}`}>
                {number}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
