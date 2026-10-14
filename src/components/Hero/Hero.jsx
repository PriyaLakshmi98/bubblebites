
import { useTranslation } from "react-i18next";

import Button from "../Button";
import ConfettiDot from "../ConfettiDot";
import Logo from "../Logo";
// import Pill from "../Pill";
import "./Hero.scss";

export default function Hero({
  id = "home",
  badge = "hero.badge",
  titleBefore = "hero.titleBefore",
  highlight = "hero.highlight",
  titleAfter = "hero.titleAfter",
  subtitle = "hero.subtitle",
  primaryCta = {
    label: "hero.primaryCta",
    href: "#menu",
  },
  secondaryCta = {
    label: "hero.secondaryCta",
    href: "#franchise",
  },
}) {
  const { t } = useTranslation();

  return (
    <section className="hero" id={id}>
      <div className="hero__blob hero__blob--orange" />
      <div className="hero__blob hero__blob--gold" />

      <ConfettiDot color="pink" size={16} left="46%" top="9%" />
      <ConfettiDot color="teal" size={20} left="52%" bottom="14%" delay={1} />
      <ConfettiDot color="green" size={13} left="6%" top="14%" delay={0.5} />
      <ConfettiDot color="orange" size={11} left="38%" bottom="9%" delay={1.5} />

      <div className="hero__inner">
        <div className="hero__text">
          {/* <Pill>{t(badge)}</Pill> */}

          <h1 className="hero__title rise" style={{ animationDelay: ".15s" }}>
            {t(titleBefore)}
            <em>{t(highlight)}</em>
            {t(titleAfter)}
          </h1>

          <p className="hero__subtitle rise" style={{ animationDelay: ".3s" }}>
            {t(subtitle)}
          </p>

          <div className="hero__actions rise" style={{ animationDelay: ".45s" }}>
            <Button variant="dark" href={primaryCta.href}>
              {t(primaryCta.label)}
            </Button>

            <Button variant="white" href={secondaryCta.href}>
              {t(secondaryCta.label)}
            </Button>
          </div>
        </div>

        <div className="hero__logos">
          <Logo
            variant="paniPuri"
            float="a"
            className="hero__logo hero__logo--big"
          />
          <Logo
            variant="biteSip"
            float="b"
            className="hero__logo hero__logo--small"
          />
        </div>
      </div>
    </section>
  );
}
