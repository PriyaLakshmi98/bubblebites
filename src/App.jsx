import { Navbar } from "./components";
import HomePage from "./pages/Home";
import Menu from "./Menu";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Menu />
    </>
  );
}
