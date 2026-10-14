import { useState, useEffect } from "react";
import BrandMark from "../BrandMark";
import Button from "../Button";
import MenuToggle from "../MenuToggle";
import { navCta, navLinks } from "../../data/navLinks";
import { cx } from "../../utils/cx";
import "./Navbar.scss";

/**
 * Sticky top bar. On tablet and phone widths the links collapse into a dropdown
 * opened by the hamburger button.
 */
export default function Navbar({
  links = navLinks,
  cta = navCta,
  activeHref,
}) {
  const [open, setOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

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
                {link.label}
              </a>
            );
          })}

          <Button
            className="nav__cta-mobile"
            href={cta.href}
            onClick={close}
          >
            {cta.label}
          </Button>
        </nav>

        <Button className="nav__cta" href={cta.href}>
          {cta.label}
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