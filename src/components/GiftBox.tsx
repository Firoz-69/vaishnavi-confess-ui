import { useState, useMemo, useEffect } from "react";

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox = ({ onOpen }: GiftBoxProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [idleShake, setIdleShake] = useState(false);

  // ⭐ AUTO SHAKE EFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpening) {
        setIdleShake(true);
        setTimeout(() => setIdleShake(false), 600);
      }
    }, 1000); // shake every 3 seconds

    return () => clearInterval(interval);
  }, [isOpening]);

  // const floatingHearts = useMemo(() => {
  //   return [...Array(20)].map(() => ({
  //     left: Math.random() * 100,
  //     top: Math.random() * 100,
  //     fontSize: Math.random() * 2 + 1,
  //     animationDelay: Math.random() * 3,
  //     animationDuration: Math.random() * 3 + 3,
  //   }));
  // }, []);

  const sparkles = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      left: 50 + 40 * Math.cos((i * Math.PI) / 4),
      top: 50 + 40 * Math.sin((i * Math.PI) / 4),
      animationDelay: i * 0.2,
    }));
  }, []);

  const escapingHearts = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      animationDelay: i * 0.1,
      rotation: i * 30,
      translateY: i * 20,
    }));
  }, []);

  const handleClick = () => {
    setIdleShake(false);
    setIsShaking(true);

    setTimeout(() => {
      setIsShaking(false);
      setIsOpening(true);
      setTimeout(onOpen, 800);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
      <div className="text-center z-10">
        <div
          onClick={handleClick}
          className={`relative mx-auto cursor-pointer transition-transform duration-300 ${
            isShaking || idleShake ? "animate-shake" : ""
          } ${isOpening ? "scale-150 opacity-0" : "hover:scale-110"}`}
        >
          {/* Sparkles */}
          <div className="absolute -inset-8">
            {sparkles.map((sparkle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-sakura-400 rounded-full animate-ping"
                style={{
                  left: `${sparkle.left}%`,
                  top: `${sparkle.top}%`,
                  animationDelay: `${sparkle.animationDelay}s`,
                }}
              />
            ))}
          </div>

          {/* Gift box */}
          <div className="relative">
            {/* Lid */}
            <div
              className={`transition-all duration-700 ${
                isOpening ? "-translate-y-32 rotate-12" : ""
              }`}
            >
              <div className="w-48 h-12 bg-gradient-to-br from-sakura-400 to-sakura-500 rounded-t-xl shadow-2xl relative">
                <div className="absolute inset-x-0 top-0 bottom-0 w-8 mx-auto bg-sakura-600" />
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl">
                  🎀
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="w-48 h-32 bg-gradient-to-br from-sakura-300 to-sakura-400 rounded-b-xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-sakura-500" />

              {isOpening &&
                escapingHearts.map((heart, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 bottom-1/2 -translate-x-1/2 text-2xl animate-float-away"
                    style={{
                      animationDelay: `${heart.animationDelay}s`,
                      transform: `rotate(${heart.rotation}deg) translateY(-${heart.translateY}px)`,
                    }}
                  >
                    ❤️
                  </div>
                ))}
            </div>
          </div>
        </div>

        {!isOpening && (
          <p className="mt-10 text-sakura-600 text-lg animate-pulse">
            Click to open 💝
          </p>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-6px) rotate(-3deg); }
          75% { transform: translateX(6px) rotate(3deg); }
        }

        @keyframes float-away {
          from { opacity: 1; transform: translateY(0) scale(0.5); }
          to { opacity: 0; transform: translateY(-200px) scale(1.5); }
        }

        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }

        .animate-float-away {
          animation: float-away 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GiftBox;
