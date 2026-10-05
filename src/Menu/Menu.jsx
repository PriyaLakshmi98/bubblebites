import ProductCard from "../ProductCard";
import { menuIntro, menuItems } from "../data/menuData";
import "./Menu.scss";

/** Menu section: a heading and one ProductCard per franchise option. Content comes from data/menuData.js. */
export default function Menu({ id = "menu", intro = menuIntro, items = menuItems }) {
  return (
    <section className="menu" id={id}>
      <div className="menu__inner">
        <header className="menu__header">
          <span className="menu__eyebrow">{intro.eyebrow}</span>
          <h2 className="menu__title">{intro.title}</h2>
          <p className="menu__subtitle">{intro.subtitle}</p>
        </header>

        <div className="menu__grid">
          {items.map((item, i) => (
            <ProductCard
              key={item.id}
              {...item}
              className="menu__card"
              // stagger the entrance animation
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
