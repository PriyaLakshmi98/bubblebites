// Loads the Google Maps JavaScript API once. The key lives in a .env file: VITE_GOOGLE_MAPS_API_KEY=...
export const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

let loading = null;

export function loadGoogleMaps() {
  if (!mapsKey) return Promise.reject(new Error("No Google Maps key"));
  if (window.google?.maps?.importLibrary) return Promise.resolve(window.google.maps);

  loading ??= new Promise((resolve, reject) => {
    // Google calls this when the key is wrong or the API is not enabled
    window.gm_authFailure = () => {
      loading = null;
      reject(new Error("Google Maps key rejected"));
    };
    window.__bubbleBitesMapsReady = () => resolve(window.google.maps);

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(mapsKey)}&v=weekly&loading=async&region=IN&callback=__bubbleBitesMapsReady`;
    script.async = true;
    script.onerror = () => {
      loading = null;
      reject(new Error("Could not load Google Maps"));
    };
    document.head.append(script);
  });
  return loading;
}
