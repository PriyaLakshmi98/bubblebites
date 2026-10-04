import { ColorStrip, Hero } from "../../components";
import { hero } from "../../data/homeContent";

/** Home page: add new sections (Menu, Our story, Franchise, Contact) here as they are built. */
export default function HomePage() {
  return (
    <>
      <Hero {...hero} />
      <ColorStrip />
    </>
  );
}
