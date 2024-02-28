import { useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import "./App.css";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MobileMenu from "./MobileMenu/MobileMenu";
import Services from "./Services/Services";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      <Header setIsVisible={setIsVisible} />
      {isVisible && <MobileMenu setIsVisible={setIsVisible} />}
      <Banner />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
