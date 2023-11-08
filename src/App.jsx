import Banner from "./components/Banner";
import KeyFeatures from "./components/KeyFeatures";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { Subscribe } from "./components/Subscribe";
import TopDestinations from "./components/TopDestinations";
import TravelPoint from "./components/TravelPoint";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <TopDestinations />
      <TravelPoint />
      <KeyFeatures />
      <Testimonials />
      <Subscribe />
    </>
  );
}

export default App;
