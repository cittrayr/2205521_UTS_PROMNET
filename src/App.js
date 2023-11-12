import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import PictureComp from "./components/PictureComp";
import ServicesComp from "./components/ServicesComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <div>
      <HeroComp />

      {/* Content */}
      <NavbarComp />
      <PictureComp />
      <ServicesComp />
      {/* Content */}

      <FooterComp />
    </div>
  );
}

export default App;