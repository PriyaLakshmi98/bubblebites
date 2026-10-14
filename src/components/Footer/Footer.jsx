
import { useTranslation } from "react-i18next";

import BrandMark from "../BrandMark";
import { cx } from "../../utils/cx";
import { footer as defaultContent } from "../../data/footerContent";
import "./Footer.scss";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle
        cx="17.3"
        cy="6.7"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/** Site footer: brand, quick links, phone numbers and Instagram. */
export default function Footer({
  content = defaultContent,
  className,
}) {
  const { t } = useTranslation();
  const { instagram } = content;

  return (
    <footer className={cx("footer", className)}>
      <div className="footer__inner">
        <div className="footer__brand">
          <BrandMark />

          <p className="footer__tagline">
            {t(content.tagline)}
          </p>

          <p className="footer__text">
            {t(content.text)}
          </p>

          <a
            className="footer__insta"
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            <span>@{instagram.handle}</span>
          </a>
        </div>

        <nav className="footer__col" aria-label={t("footer.explore")}>
          <h3>{t("footer.explore")}</h3>

          <ul>
            {content.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  {t(link.labelKey || link.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3>{t("footer.callUs")}</h3>

          <ul>
            {content.phones.map((number) => (
              <li key={number}>
                <a href={`tel:${number}`}>{number}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer__copy">
        {t("footer.copyright", {
          year: new Date().getFullYear(),
        })}
      </p>
    </footer>
  );
}
