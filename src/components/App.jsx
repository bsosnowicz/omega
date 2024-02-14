import AboutUs from "./AboutUs/AboutUs";
import "./App.css";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Services from "./Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
