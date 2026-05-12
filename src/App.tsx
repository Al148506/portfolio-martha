import "./App.css";
import Navbar from "./components/layout/Navbar";
import Contacto from "./components/sections/Contacto";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Portafolio from "./components/sections/Portafolio";
import Servicios from "./components/sections/Servicios";
import SobreMi from "./components/sections/SobreMi";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "5rem" }}>
        <Hero />
        <SobreMi />
        <Servicios />
        <Portafolio />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
