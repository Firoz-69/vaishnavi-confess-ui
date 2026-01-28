/* eslint-disable react-hooks/purity */
import { useMemo } from "react";

const HeartBloomTree = () => {
  const blossoms = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 1.2 + 0.6,
      })),
    []
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-20">
      {/* 🌳 Tree */}
      <div className="relative w-72 h-72">
        {/* Heart canopy */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64 rotate-45">
            <div className="absolute w-40 h-40 bg-sakura-400 rounded-full -top-10 left-10" />
            <div className="absolute w-40 h-40 bg-sakura-400 rounded-full top-10 -left-10" />
            <div className="absolute w-56 h-56 bg-sakura-400 rounded-3xl top-10 left-10" />
          </div>
        </div>

        {/* 🌸 Blossoms */}
        {blossoms.map((b, i) => (
          <span
            key={i}
            className="absolute animate-float text-pink-200 opacity-70"
            style={{
              left: `${b.left}%`,
              top: "60%",
              fontSize: `${b.size}rem`,
              animationDelay: `${b.delay}s`,
            }}
          >
            🌸
          </span>
        ))}

        {/* 🌲 Trunk */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-24 bg-amber-700 rounded-full" />
      </div>

      {/* 💬 Quote */}
      <div className="max-w-md text-center md:text-left animate-fade-in">
        <p className="text-3xl font-romantic text-sakura-700 leading-relaxed">
          “Love grows best when two hearts bloom together.”
        </p>
        <p className="mt-4 text-sakura-500 italic">— Always & Forever ❤️</p>
      </div>
    </div>
  );
};

export default HeartBloomTree;
