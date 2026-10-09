// Every pin on the map comes from this list. Edit it to add, move or remove places.
//
// HOW TO GET EXACT COORDINATES: open Google Maps, right-click the shop, click the numbers at the top of the
// menu (they copy "12.9791, 80.2209"). The first number is `lat`, the second is `lng`.
//
// logo:    "paniPuri" | "biteSip" | "friedChicken"   (the picture shown inside the pin)
// address: optional. If empty, the popup shows "city, state".
//
// TODO: only Velachery (Chennai) came from your Google Maps screenshot. The other places are example
// pins placed at the middle of each city. Replace them with your real outlet addresses and coordinates.

export const locationsIntro = {
  eyebrow: "Find us",
  title: "Bubble Bites near you",
  subtitle: "Tap a pin or pick a place from the list. We are growing across South India.",
};

export const locations = [
  // Tamil Nadu
  { id: "chennai-velachery", name: "Bubble Bites, Velachery", city: "Chennai", state: "Tamil Nadu", lat: 12.9791, lng: 80.2209, logo: "biteSip", address: "Velachery, Chennai" },
  { id: "coimbatore", name: "Bubble Bites, Coimbatore", city: "Coimbatore", state: "Tamil Nadu", lat: 11.0168, lng: 76.9558, logo: "paniPuri", address: "" },
  { id: "madurai", name: "Bubble Bites, Madurai", city: "Madurai", state: "Tamil Nadu", lat: 9.9252, lng: 78.1198, logo: "friedChicken", address: "" },
  { id: "tiruchirappalli", name: "Bubble Bites, Tiruchirappalli", city: "Tiruchirappalli", state: "Tamil Nadu", lat: 10.7905, lng: 78.7047, logo: "paniPuri", address: "" },

  // Kerala (2 places)
  { id: "kochi", name: "Bubble Bites, Kochi", city: "Kochi", state: "Kerala", lat: 9.9312, lng: 76.2673, logo: "biteSip", address: "" },
  { id: "thiruvananthapuram", name: "Bubble Bites, Thiruvananthapuram", city: "Thiruvananthapuram", state: "Kerala", lat: 8.5241, lng: 76.9366, logo: "friedChicken", address: "" },

  // Puducherry
  { id: "puducherry", name: "Bubble Bites, Puducherry", city: "Puducherry", state: "Puducherry", lat: 11.9416, lng: 79.8083, logo: "paniPuri", address: "" },
];
