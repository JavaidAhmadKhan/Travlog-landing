import Banner from "./components/Banner";
import BgDivider from "./components/BgDivider";
import KeyFeatures from "./components/KeyFeatures";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TopDestinations from "./components/TopDestinations";
import TravelPoint from "./components/TravelPoint";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <TopDestinations />
      <TravelPoint />
      <KeyFeatures />
      <BgDivider/>
    </>
  );
}

export default App;
