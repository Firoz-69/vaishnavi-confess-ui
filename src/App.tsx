import AutoSlider from "./components/AutoSlider";
import ConfessionLetter from "./components/ConfessionLetter";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import LoveMeter from "./components/LoveMeter";
import MemoriesSection from "./components/Memoriessection";
import ValentineCard from "./components/ValentineCard";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <div>
      <HomePage />
      <ValentineCard /> {/* ← Add here */}
      <Countdown />
      <MemoriesSection />
      <AutoSlider />
      <ConfessionLetter />
      <Footer />
      <LoveMeter />
    </div>
  );
};

export default App;
