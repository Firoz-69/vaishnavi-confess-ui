import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import AutoSlider from "./components/AutoSlider";
import ConfessionLetter from "./components/ConfessionLetter";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import LoveMeter from "./components/LoveMeter";
import MemoriesSection from "./components/Memoriessection";
import ValentineCard from "./components/ValentineCard";
import HomePage from "./pages/Home";
import BackgroundMusic from "./components/BackgroundMusic";

// Home page with all components
const Home = () => {
  return (
    <div>
      <BackgroundMusic />
      <HomePage />
      <Countdown />
      <MemoriesSection />
      <AutoSlider />
      <ConfessionLetter />
      <Footer />
      <LoveMeter />
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ValentineCard />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
