
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import BrandMark from "../BrandMark";
import Button from "../Button";
import MenuToggle from "../MenuToggle";
import { navCta, navLinks } from "../../data/navLinks";
import { cx } from "../../utils/cx";
import "./Navbar.scss";

const languages = [
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
  { code: "ml", label: "മലയാളം" },
];

export default function Navbar({
  links = navLinks,
  cta = navCta,
  activeHref,
}) {
  const [open, setOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const { t, i18n } = useTranslation();

  const currentLanguage = (
    i18n.resolvedLanguage || i18n.language || "en"
  ).split("-")[0];

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash || "#home");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const close = () => setOpen(false);
  const currentHref = activeHref ?? currentHash;

  const languageDropdown = (
    <div className="nav__language">
      <select
        id="nav-language-select"
        className="nav__language-select"
        value={currentLanguage}
        onChange={handleLanguageChange}
        aria-label={t("navbar.selectLanguage")}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <header className="nav">
      <div className="nav__inner">
        <BrandMark onClick={close} />

        <nav
          id="primary-nav"
          className={cx("nav__links", open && "is-open")}
          aria-label="Main"
        >
          {links.map((link) => {
            const isActive = link.href === currentHref;

            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "location" : undefined}
                onClick={close}
              >
                {t(link.labelKey)}
              </a>
            );
          })}

          {/* Language selector in the mobile menu */}
          {languageDropdown}

          <Button
            className="nav__cta-mobile"
            href={cta.href}
            onClick={close}
          >
            {t(cta.labelKey)}
          </Button>
        </nav>

        {/* Language selector on desktop */}
        <div className="nav__language-desktop">
          {languageDropdown}
        </div>

        <Button className="nav__cta" href={cta.href}>
          {t(cta.labelKey)}
        </Button>

        <MenuToggle
          open={open}
          controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        />
      </div>
    </header>
  );
}
