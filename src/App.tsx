import { useState } from "react";
import GiftBox from "./components/GiftBox";
import Home from "./components/Home";
import FloatingHeartsBackground from "./components/FloatingHeartsBackground";

const App = () => {
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌸 Background always running */}
      <FloatingHeartsBackground />

      {/* 🎁 Show GiftBox FIRST */}
      {!isGiftOpened && <GiftBox onOpen={() => setIsGiftOpened(true)} />}

      {/* 🏠 Show Home ONLY AFTER gift is opened */}
      {isGiftOpened && <Home />}
    </div>
  );
};

export default App;
