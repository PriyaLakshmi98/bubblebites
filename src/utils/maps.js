// Links that open Google Maps (no API key needed)
export const mapUrl = ({ lat, lng }) => `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
export const directionsUrl = ({ lat, lng }) => `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

// Keyless Google Maps embeds, used when no API key is set
export const embedMapUrl = ({ lat, lng }) => `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
export const embedStreetUrl = ({ lat, lng }) =>
  `https://maps.google.com/maps?layer=c&cbll=${lat},${lng}&cbp=12,0,0,0,0&output=svembed`;
export const embedSearchUrl = (text) => `https://maps.google.com/maps?q=${encodeURIComponent(text)}&z=13&output=embed`;

// Straight-line distance in km between two { lat, lng } points
export function distanceKm(a, b) {
  const rad = (d) => (d * Math.PI) / 180;
  const h =
    Math.sin(rad(b.lat - a.lat) / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lng - a.lng) / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}
