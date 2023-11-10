import Banner from "./components/Banner";
import KeyFeatures from "./components/KeyFeatures";
import Services from "./components/Services";
import { Subscribe } from "./components/Subscribe";
import TopDestinations from "./components/TopDestinations";
import TravelPoint from "./components/TravelPoint";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
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
