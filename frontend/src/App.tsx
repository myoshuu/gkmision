import About from "./pages/home/About";
import Navbar from "./components/Navbar";
import Renungan from "./pages/home/Renungan";
import VisiMisi from "./pages/home/VisiMisi";
import HorizontalLine from "./components/HorizontalLine";
import Livestream from "./pages/home/Livestream";
import Jadwal from "./pages/home/Jadwal";
import Tema from "./pages/home/Tema";

import { Element } from "react-scroll";
import Footer from "./pages/home/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Element name="tema">
        <Tema />
      </Element>

      <Element name="sejarah">
        <About />
      </Element>

      <Element name="renungan">
        <Renungan />
      </Element>

      <Element name="visimisi">
        <VisiMisi />
      </Element>

      <HorizontalLine />

      <Element name="livestream">
        <Livestream />
      </Element>

      <HorizontalLine />

      <Element name="jadwal">
        <Jadwal />
      </Element>

      <Footer />
    </>
  );
};

export default App;
