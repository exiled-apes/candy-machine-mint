import { useState } from "react";
import "./App.css";
import DisplayArt from "./DisplayArt";
import Intro from "./Intro";
import Navbar from "./Navbar";
import RoadMap from "./Roadmap";
import Footer from "./Footer";
import Solana from "./Solana";

const App = () => {
  const [theme] = useState<string>("blue");

  return (
    <div className={`app dark-mode blue`}>
      <Navbar />
      <Intro />
      <DisplayArt />
      <RoadMap />
      <Footer />

      {/* <NewYorkCityCollection /> */}
    </div>
  );
};

export default App;
