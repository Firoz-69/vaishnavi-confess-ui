/* eslint-disable react-hooks/purity */
import { useMemo } from "react";

const FloatingHeartsBackground = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 25 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 0.8,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 6,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h, i) => (
        <div
          key={i}
          className="absolute text-sakura-200 opacity-30 animate-float"
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            fontSize: `${h.size}rem`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHeartsBackground;
