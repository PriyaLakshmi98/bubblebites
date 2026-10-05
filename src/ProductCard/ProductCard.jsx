import { useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../components/Button/index";
import { cx } from "../utils/cx";
import { formatPrice } from "../utils/formatPrice";
import "./ProductCard.scss";

/**
 * One franchise option: logo, name, price, badges and an expandable item list.
 * color:    "yellow" | "pink" | "teal" | "orange"
 * logo:     "paniPuri" | "biteSip" | "friedChicken"
 * price:    number (rupees) or null -> "Ask for price"
 * groups:   [{ title, list: string[] }]
 * featured: highlights the card (used for the combo shop)
 */
export default function ProductCard({
  name,
  tagline,
  logo = "paniPuri",
  color = "yellow",
  price = null,
  badges = [],
  groups = [],
  contacts = [],
  featured = false,
  ctaHref = "#franchise",
  className,
  style,
}) {
  const [open, setOpen] = useState(false);
  const priceText = formatPrice(price);
  const hasItems = groups.length > 0;
  const listId = `items-${name?.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article
      className={cx("product", `product--${color}`, featured && "product--featured", className)}
      style={style}
    >
      {featured && <span className="product__ribbon">Best value</span>}

      <Logo variant={logo} size={92} className="product__logo" />

      <h3 className="product__name">{name}</h3>
      <p className="product__tagline">{tagline}</p>

      <div className="product__price">
        <span className="product__price-label">Franchise fee</span>
        <strong>{priceText ?? "Ask for price"}</strong>
      </div>

      {badges.length > 0 && (
        <ul className="product__badges">
          {badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      )}

      {hasItems ? (
        <>
          <button
            type="button"
            className="product__toggle"
            aria-expanded={open}
            aria-controls={listId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Hide what you get" : "See what you get"}
            <span aria-hidden="true">{open ? " −" : " +"}</span>
          </button>

          <div id={listId} className={cx("product__items", open && "is-open")}>
            <div className="product__items-inner">
              {groups.map((group) => (
                <section key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="product__soon">Item list coming soon.</p>
      )}

      {contacts.length > 0 && (
        <p className="product__contacts">
          Call:{" "}
          {contacts.map((number, i) => (
            <span key={number}>
              {i > 0 && " / "}
              <a href={`tel:${number}`}>{number}</a>
            </span>
          ))}
        </p>
      )}

      <Button variant="dark" href={ctaHref} className="product__cta">
        Enquire now
      </Button>
    </article>
  );
}
