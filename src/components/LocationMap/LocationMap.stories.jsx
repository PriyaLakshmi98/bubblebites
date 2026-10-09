import LocationMap from "./LocationMap";
import { locations } from "../../data/locations";

export default {
  title: "UI/LocationMap",
  component: LocationMap,
  parameters: { layout: "padded" },
  args: { locations },
  decorators: [
    (Story) => (
      <div style={{ height: 480 }}>
        <Story />
      </div>
    ),
  ],
};

export const AllLocations = {};

export const KeralaOnly = { args: { locations: locations.filter((l) => l.state === "Kerala") } };

// One place: the map zooms right in on it
export const SinglePlace = { args: { locations: locations.filter((l) => l.state === "Puducherry") } };

// Opens with the Chennai popup showing
export const WithSelected = { args: { selectedId: "chennai-velachery" } };
