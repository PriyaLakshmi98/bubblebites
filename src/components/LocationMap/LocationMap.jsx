
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { logos } from "../../assets/images";
import { directionsUrl, mapUrl } from "../../utils/maps";
import { cx } from "../../utils/cx";

import "./LocationMap.scss";

// OpenStreetMap tiles — no API key required
const TILES =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors';


// Fallback provider if CARTO tiles fail
const FALLBACK_TILES =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const FALLBACK_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors';

// Validate coordinates before creating markers
const isValidLocation = (location) => {
  const lat = Number(location?.lat);
  const lng = Number(location?.lng);

  return (
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
};

// Round Bubble Bites logo pin
const pinIcon = (logo) => {
  const logoSrc = logos[logo] ?? logos.paniPuri;

  return L.divIcon({
    className: "pin",
    html: `
      <span class="pin__ring">
        <img src="${logoSrc}" alt="" />
      </span>
    `,
    iconSize: [48, 58],
    iconAnchor: [24, 58],
    popupAnchor: [0, -54],
  });
};

// Safely create popup DOM elements
const el = (tag, text, attrs = {}) => {
  const node = document.createElement(tag);

  if (text != null && text !== "") {
    node.textContent = String(text);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });

  return node;
};

// Popup content for each location
function popupContent(location) {
  const root = el("div", "", { class: "map-popup" });

  const address =
    location.address ||
    [location.city, location.state].filter(Boolean).join(", ");

  root.append(
    el("strong", location.name || "Bubble Bites"),
    el("span", address)
  );

  const links = el("div", "", {
    class: "map-popup__links",
  });

  links.append(
    el("a", "Directions", {
      href: directionsUrl(location),
      target: "_blank",
      rel: "noopener noreferrer",
    }),
    el("a", "Open in Maps", {
      href: mapUrl(location),
      target: "_blank",
      rel: "noopener noreferrer",
    })
  );

  root.append(links);

  return root;
}

/**
 * Interactive Bubble Bites locations map.
 *
 * locations: [{ id, name, city, state, lat, lng, logo, address }]
 * selectedId: ID of the selected location
 * onSelect: callback receiving the selected location ID
 * className: optional additional CSS class
 */
export default function LocationMap({
  locations = [],
  selectedId = null,
  onSelect,
  className,
}) {
  const canvasRef = useRef(null);
  const mapRef = useRef(null);
  const layerRef = useRef(null);
  const tileLayerRef = useRef(null);
  const markersRef = useRef(new Map());
  const onSelectRef = useRef(onSelect);

  // Keep callback current without recreating the map.
  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  // Initialize Leaflet once.
  useEffect(() => {
    const container = canvasRef.current;

    if (!container || mapRef.current) return;

    let fallbackUsed = false;

    const map = L.map(container, {
      center: [10.5, 78.3],
      zoom: 7,
      scrollWheelZoom: false,
      dragging: !L.Browser.mobile,
      zoomControl: true,
      preferCanvas: true,
    });

    mapRef.current = map;

    const layer = L.layerGroup().addTo(map);
    layerRef.current = layer;

    // Create the tile layer.
    const createTileLayer = (url, attribution, subdomains) =>
      L.tileLayer(url, {
        attribution,
        subdomains,
        maxZoom: 19,
        minZoom: 1,
        crossOrigin: true,
      });

    const primaryLayer = createTileLayer(
      TILES,
      ATTRIBUTION,
      "abcd"
    );

    tileLayerRef.current = primaryLayer;

    // Switch providers if the primary tile service fails.
    primaryLayer.on("tileerror", () => {
      if (fallbackUsed || !mapRef.current) return;

      fallbackUsed = true;

      console.log(
        "CARTO map tiles failed. Switching to OpenStreetMap."
      );

      primaryLayer.off("tileerror");
      map.removeLayer(primaryLayer);

      const fallbackLayer = createTileLayer(
        FALLBACK_TILES,
        FALLBACK_ATTRIBUTION,
        "abc"
      );

      tileLayerRef.current = fallbackLayer;
      fallbackLayer.addTo(map);
    });

    primaryLayer.on("tileload", () => {
      // Tile loaded successfully.
    });

    primaryLayer.addTo(map);

    // Correct the map dimensions after layout.
    const invalidateMapSize = () => {
      if (mapRef.current) {
        map.invalidateSize({ pan: false });
      }
    };

    const frameId = requestAnimationFrame(invalidateMapSize);

    // Support responsive layouts and animated containers.
    let resizeObserver;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(invalidateMapSize);
      resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", invalidateMapSize);
    }

    // Cleanup on unmount.
    return () => {
      cancelAnimationFrame(frameId);

      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener("resize", invalidateMapSize);
      }

      map.remove();

      mapRef.current = null;
      layerRef.current = null;
      tileLayerRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  // Update markers whenever the locations change.
  useEffect(() => {
    const map = mapRef.current;
    const layer = layerRef.current;

    if (!map || !layer) return;

    layer.clearLayers();
    markersRef.current.clear();

    const validLocations = locations.filter((location) => {
      const valid = isValidLocation(location);

      if (!valid) {
        console.log(
          "Skipping location with invalid coordinates:",
          location
        );
      }

      return valid;
    });

    validLocations.forEach((location) => {
      const marker = L.marker(
        [Number(location.lat), Number(location.lng)],
        {
          icon: pinIcon(location.logo),
          title: location.name || "Bubble Bites",
          alt: location.name || "Bubble Bites location",
          riseOnHover: true,
        }
      );

      marker.bindPopup(popupContent(location), {
        offset: [0, 0],
        autoPan: true,
      });

      marker.on("click", () => {
        onSelectRef.current?.(location.id);
      });

      marker.addTo(layer);

      markersRef.current.set(location.id, marker);
    });

    // Automatically frame all locations.
    if (validLocations.length === 1) {
      const location = validLocations[0];

      map.setView(
        [Number(location.lat), Number(location.lng)],
        13,
        { animate: false }
      );
    } else if (validLocations.length > 1) {
      const bounds = L.latLngBounds(
        validLocations.map((location) => [
          Number(location.lat),
          Number(location.lng),
        ])
      );

      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 12,
      });
    } else {
      // Default view when no locations are available.
      map.setView([10.5, 78.3], 7);
    }

    // Ensure the map renders correctly after updating markers.
    requestAnimationFrame(() => {
      if (mapRef.current) {
        map.invalidateSize({ pan: false });
      }
    });
  }, [locations]);

  // Zoom to the selected location and open its popup.
  useEffect(() => {
    const map = mapRef.current;

    if (!map) return;

    const marker = markersRef.current.get(selectedId);

    if (!marker) {
      map.closePopup();
      return;
    }

    const location = locations.find(
      (item) => item.id === selectedId
    );

    if (!location || !isValidLocation(location)) {
      map.closePopup();
      return;
    }

    map.flyTo(
      [Number(location.lat), Number(location.lng)],
      Math.max(map.getZoom(), 13),
      { duration: 0.8 }
    );

    marker.openPopup();
  }, [selectedId, locations]);

  return (
    <div className={cx("location-map", className)}>
      <div
        ref={canvasRef}
        className="location-map__canvas"
        role="region"
        aria-label="Map of Bubble Bites locations"
      />
    </div>
  );
}
