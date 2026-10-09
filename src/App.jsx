import { Navbar } from "./components";
import HomePage from "./pages/Home";
import Menu from "./Menu";
import { ColorStrip,Franchise,Locations } from "./components";
import OurStory from "./OurStory";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Menu />
      <ColorStrip />
      <OurStory />
      <Franchise />
      <Locations />
    </>
  );
}

