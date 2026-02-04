/* eslint-disable react-hooks/purity */
import React, { useState } from "react";

const ValentineCard = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonSize, setNoButtonSize] = useState(1);
  const [yesClicked, setYesClicked] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleNoHover = () => {
    // Move the "No" button to a random position
    const randomX = Math.random() * 200 - 100; // Random between -100 and 100
    const randomY = Math.random() * 200 - 100;

    setNoButtonPosition({ x: randomX, y: randomY });

    // Make "No" button smaller and "Yes" button bigger
    setNoButtonSize((prev) => Math.max(0.5, prev - 0.1));
    setAttempts((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  const messages = [
    "Come on, just click Yes! 💕",
    "The No button is running away! 😄",
    "You know you want to say Yes! 💖",
    "Please? Pretty please? 🥺",
    "I promise the No won't let you click it! 😂",
  ];

  const getEncouragementMessage = () => {
    if (attempts === 0) return "Will you be my Valentine? 💕";
    const index = Math.min(attempts - 1, messages.length - 1);
    return messages[index];
  };

  return (
    <section className="min-h-screen bg-dark-bg py-24 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-sakura-500/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sakura-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-heart/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10 w-full">
        {!yesClicked ? (
          /* Postal Card */
          <div className="relative">
            {/* Postal Card Container */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
              {/* Stamp */}
              <div className="absolute top-6 right-6 w-20 h-24 border-4 border-dashed border-sakura-500/30 rounded-lg flex items-center justify-center bg-sakura-500/10">
                <div className="text-center">
                  <div className="text-3xl mb-1">💕</div>
                  <p className="text-xs text-sakura-600 font-semibold">LOVE</p>
                </div>
              </div>

              {/* Postmark */}
              <div className="absolute top-8 right-32 w-16 h-16 border-2 border-sakura-500/30 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-sakura-600 font-semibold">FEB</p>
                  <p className="text-lg text-sakura-600 font-bold">14</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-12 pt-20">
                {/* Header decoration */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-sakura-500"></div>
                  <svg
                    className="w-8 h-8 text-sakura-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-sakura-500"></div>
                </div>

                {/* Main Message */}
                <h2
                  className="text-5xl md:text-6xl font-romantic font-bold text-center mb-6 bg-gradient-to-r from-sakura-500 via-heart to-sakura-600 bg-clip-text text-transparent"
                  style={{
                    textShadow: "0 0 20px rgba(235, 95, 137, 0.3)",
                  }}
                >
                  {getEncouragementMessage()}
                </h2>

                {/* Subtext */}
                <p className="text-center text-gray-600 text-lg mb-12 font-light italic">
                  Choose wisely... or try to! 😉
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-8 min-h-[80px] relative">
                  {/* Yes Button - Gets bigger */}
                  <button
                    onClick={handleYesClick}
                    className="px-12 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-sakura-500 to-heart shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-xl"
                    style={{
                      transform: `scale(${1 + attempts * 0.1})`,
                    }}
                  >
                    Yes! 💕
                  </button>

                  {/* No Button - Moves around and shrinks */}
                  <button
                    onMouseEnter={handleNoHover}
                    onTouchStart={handleNoHover}
                    className="px-8 py-3 rounded-full font-semibold text-gray-700 bg-gray-200 border-2 border-gray-300 shadow-md transition-all duration-300 cursor-not-allowed"
                    style={{
                      transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(${noButtonSize})`,
                      transition: "transform 0.3s ease-out",
                    }}
                  >
                    No
                  </button>
                </div>

                {/* Hint text */}
                {attempts > 0 && (
                  <p className="text-center text-sakura-600 text-sm mt-8 animate-fade-in italic">
                    {attempts > 3
                      ? "The No button really doesn't want to be clicked! 😂"
                      : "Oops! The No button is shy! 🙈"}
                  </p>
                )}

                {/* Footer decoration */}
                <div className="mt-12 pt-8 border-t-2 border-sakura-500/20">
                  <p className="text-center text-gray-500 text-sm italic">
                    "Every love story is beautiful, but ours is my favorite" 💌
                  </p>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-sakura-500/40"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-sakura-500/40"></div>

              {/* Postal lines */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sakura-500/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Shadow effect */}
            <div className="absolute inset-0 -z-10 bg-sakura-500/20 blur-2xl rounded-3xl transform translate-y-4"></div>
          </div>
        ) : (
          /* Success Message */
          <div className="text-center animate-fade-in">
            {/* Celebration */}
            <div className="mb-8 relative">
              <div className="text-9xl animate-pulse">💕</div>

              {/* Confetti hearts */}
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-sakura-500"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${Math.random() * 30 + 20}px`,
                  }}
                >
                  {
                    ["❤️", "💕", "💖", "💗", "💓"][
                      Math.floor(Math.random() * 5)
                    ]
                  }
                </div>
              ))}
            </div>

            {/* Success card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12 border-4 border-white">
              <h2
                className="text-6xl md:text-7xl font-romantic font-bold mb-6 bg-gradient-to-r from-sakura-500 via-heart to-sakura-600 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 30px rgba(235, 95, 137, 0.5)",
                }}
              >
                Yay! You said Yes! 🎉
              </h2>

              <p className="text-2xl text-gray-700 font-romantic italic mb-8">
                You just made me the happiest person alive! 💖
              </p>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
                I can't wait to celebrate this Valentine's Day with you. Every
                moment with you is special, and I'm so grateful you're mine.
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-sakura-500"></div>
                <span className="text-3xl">💕</span>
                <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-sakura-500"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ValentineCard;
