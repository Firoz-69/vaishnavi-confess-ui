import { useState, useRef } from "react";
import musicFile from "../assests/First-Sight.mp3"; // adjust path

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
      </audio>

      {/* Floating music button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 left-6 z-50 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Toggle music"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </>
  );
};

export default BackgroundMusic;
