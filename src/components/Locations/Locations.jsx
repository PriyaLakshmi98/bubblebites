import { useMemo, useRef, useState } from "react";
import LocationMap from "../LocationMap";
import Logo from "../Logo";
import Pill from "../Pill";
import  useInView from "../../hooks/useInView";
import { directionsUrl } from "../../utils/maps";
import { cx } from "../../utils/cx";
import { locations as defaultLocations, locationsIntro } from "../../data/locations";
import "./Locations.scss";

const ALL = "All";

/**
 * "Find us" section: state filter buttons, a list of places and the map, all linked together.
 * Pick a place in the list (or tap a pin) and the map zooms to it.
 */
export default function Locations({ id = "locations", intro = locationsIntro, locations = defaultLocations }) {
  const [ref, seen] = useInView();
  const mapRef = useRef(null);
  const [state, setState] = useState(ALL);
  const [selectedId, setSelectedId] = useState(null);

  // "All", then each state in the order it first appears, with how many places it has
  const filters = useMemo(() => {
    const states = [...new Set(locations.map((l) => l.state))];
    return [ALL, ...states].map((name) => ({
      name,
      count: name === ALL ? locations.length : locations.filter((l) => l.state === name).length,
    }));
  }, [locations]);

  const visible = useMemo(
    () => (state === ALL ? locations : locations.filter((l) => l.state === state)),
    [state, locations]
  );

  const chooseState = (name) => {
    setState(name);
    setSelectedId(null);
  };

  const choosePlace = (placeId) => {
    setSelectedId(placeId);
    // on phones the map sits above the list, so bring it into view
    if (window.matchMedia("(max-width: 860px)").matches) {
      mapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section ref={ref} id={id} className={cx("locations", seen && "is-visible")}>
      <div className="locations__inner">
        <header className="locations__header">
          <Pill>{intro.eyebrow}</Pill>
          <h2 className="locations__title">{intro.title}</h2>
          <p className="locations__subtitle">{intro.subtitle}</p>

          <div className="locations__filters" role="group" aria-label="Filter by state">
            {filters.map(({ name, count }) => (
              <button
                key={name}
                type="button"
                className={cx("locations__chip", state === name && "is-active")}
                aria-pressed={state === name}
                onClick={() => chooseState(name)}
              >
                {name} <span>{count}</span>
              </button>
            ))}
          </div>
        </header>

        <div className="locations__body">
          <ul className="locations__list">
            {visible.map((place) => (
              <li key={place.id} className={cx("locations__item", selectedId === place.id && "is-selected")}>
                <button type="button" className="locations__pick" onClick={() => choosePlace(place.id)}>
                  <Logo variant={place.logo} size={52} shadow={false} alt="" />
                  <span>
                    <strong>{place.name}</strong>
                    <small>
                      {place.city}, {place.state}
                    </small>
                  </span>
                </button>
                <a className="locations__go" href={directionsUrl(place)} target="_blank" rel="noopener noreferrer">
                  Directions
                </a>
              </li>
            ))}
          </ul>

          <div ref={mapRef} className="locations__map">
            <LocationMap locations={visible} selectedId={selectedId} onSelect={setSelectedId} />
          </div>
        </div>
      </div>
    </section>
  );
}
