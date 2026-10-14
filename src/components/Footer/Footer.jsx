import BrandMark from "../BrandMark";
import { cx } from "../../utils/cx";
import { footer as defaultContent } from "../../data/footerContent";
import "./Footer.scss";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Site footer: brand, quick links, phone numbers and the Instagram link. */
export default function Footer({ content = defaultContent, className }) {
  const { instagram } = content;
  return (
    <footer className={cx("footer", className)}>
      <div className="footer__inner">
        <div className="footer__brand">
          <BrandMark />
          <p className="footer__tagline">{content.tagline}</p>
          <p className="footer__text">{content.text}</p>
          <a className="footer__insta" href={instagram.url} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            <span>@{instagram.handle}</span>
          </a>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h3>Explore</h3>
          <ul>
            {content.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Call us</h3>
          <ul>
            {content.phones.map((number) => (
              <li key={number}>
                <a href={`tel:${number}`}>{number}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer__copy">© {new Date().getFullYear()} Bubble Bites. All rights reserved.</p>
    </footer>
  );
}
