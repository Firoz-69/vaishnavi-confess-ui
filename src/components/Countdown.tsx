/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isValentinesDay, setIsValentinesDay] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Valentine's Day 2025 - February 14, 2025
      const valentinesDay = new Date("2025-06-14T00:00:00");
      const now = new Date();
      const difference = now.getTime() - valentinesDay.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsValentinesDay(false);
      } else {
        // It's Valentine's Day or past it!
        setIsValentinesDay(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-dark-surface py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sakura-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-heart/10 rounded-full blur-[120px]"></div>

        {/* Floating hearts */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-sakura-500/5"
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
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {!isValentinesDay ? (
          <>
            {/* Countdown Section */}
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-2 rounded-full bg-sakura-500/10 border border-sakura-500/30 text-sakura-600 text-sm uppercase tracking-[0.3em] mb-6">
                Counting Down
              </span>
              <h2
                className="text-5xl md:text-6xl font-romantic font-bold text-sakura-700 mb-4"
                style={{
                  textShadow: "0 0 20px rgba(235, 95, 137, 0.3)",
                }}
              >
                Our Days of Annoying & Loving You
              </h2>
              <p className="text-text-secondary text-lg font-light max-w-2xl mx-auto leading-relaxed">
                In every tomorrow… will you still choose me?
              </p>
            </div>

            {/* Countdown Timer Grid */}
            {/* Countdown Timer Grid */}
            {/* Countdown Timer Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {/* Days - Flips to "I" */}
              <div className="group perspective-1000">
                <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front - Days */}
                  <div className="backface-hidden">
                    <div className="relative">
                      <div className="absolute inset-0 bg-sakura-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-dark-card border-2 border-sakura-500/30 rounded-3xl p-8 text-center">
                        <div className="text-6xl md:text-7xl font-romantic font-bold text-gradient-romantic mb-3">
                          {String(timeLeft.days).padStart(2, "0")}
                        </div>
                        <div className="text-text-secondary text-sm uppercase tracking-widest font-light">
                          Days
                        </div>
                        <div className="absolute -top-3 -right-3 text-sakura-500/30">
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back - "I" */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="bg-gradient-to-br from-sakura-500 to-heart border-2 border-sakura-600 rounded-3xl p-8 text-center h-full flex items-center justify-center">
                      <div className="text-8xl font-romantic font-bold text-white drop-shadow-lg">
                        I
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours - Flips to "Love" */}
              <div className="group perspective-1000">
                <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front - Hours */}
                  <div className="backface-hidden">
                    <div className="relative">
                      <div className="absolute inset-0 bg-sakura-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-dark-card border-2 border-sakura-500/30 rounded-3xl p-8 text-center">
                        <div className="text-6xl md:text-7xl font-romantic font-bold text-gradient-romantic mb-3">
                          {String(timeLeft.hours).padStart(2, "0")}
                        </div>
                        <div className="text-text-secondary text-sm uppercase tracking-widest font-light">
                          Hours
                        </div>
                        <div className="absolute -top-3 -right-3 text-sakura-500/30">
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back - "Love" */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="bg-gradient-to-br from-sakura-500 to-heart border-2 border-sakura-600 rounded-3xl p-8 text-center h-full flex items-center justify-center">
                      <div className="text-6xl font-romantic font-bold text-white drop-shadow-lg">
                        Love
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minutes - Flips to "You" */}
              <div className="group perspective-1000">
                <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front - Minutes */}
                  <div className="backface-hidden">
                    <div className="relative">
                      <div className="absolute inset-0 bg-sakura-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-dark-card border-2 border-sakura-500/30 rounded-3xl p-8 text-center">
                        <div className="text-6xl md:text-7xl font-romantic font-bold text-gradient-romantic mb-3">
                          {String(timeLeft.minutes).padStart(2, "0")}
                        </div>
                        <div className="text-text-secondary text-sm uppercase tracking-widest font-light">
                          Minutes
                        </div>
                        <div className="absolute -top-3 -right-3 text-sakura-500/30">
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back - "You" */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="bg-gradient-to-br from-sakura-500 to-heart border-2 border-sakura-600 rounded-3xl p-8 text-center h-full flex items-center justify-center">
                      <div className="text-7xl font-romantic font-bold text-white drop-shadow-lg">
                        You
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seconds - Flips to heart emoji */}
              <div className="group perspective-1000">
                <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front - Seconds */}
                  <div className="backface-hidden">
                    <div className="relative">
                      <div className="absolute inset-0 bg-sakura-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-dark-card border-2 border-sakura-500/30 rounded-3xl p-8 text-center">
                        <div className="text-6xl md:text-7xl font-romantic font-bold text-gradient-romantic mb-3">
                          {String(timeLeft.seconds).padStart(2, "0")}
                        </div>
                        <div className="text-text-secondary text-sm uppercase tracking-widest font-light">
                          Seconds
                        </div>
                        <div className="absolute -top-3 -right-3 text-sakura-500/30">
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back - Heart emoji */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="bg-gradient-to-br from-sakura-500 to-heart border-2 border-sakura-600 rounded-3xl p-8 text-center h-full flex items-center justify-center">
                      <div className="text-5xl font-romantic font-bold text-white drop-shadow-lg">
                        Mamakutty
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom message */}
            <div className="text-center">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-sakura-500"></div>
                <svg
                  className="w-6 h-6 text-sakura-500 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-sakura-500"></div>
              </div>
              <p className="text-sakura-600 text-xl font-romantic italic">
                Packing my heart for our next chapter.
              </p>
            </div>
          </>
        ) : (
          /* Valentine's Day Arrived Message */
          <div className="text-center py-20">
            {/* Celebration animation */}
            <div className="mb-8 relative">
              <div className="text-9xl animate-pulse">💕</div>
              {/* Confetti hearts */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-sakura-500"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${Math.random() * 20 + 20}px`,
                  }}
                >
                  ❤️
                </div>
              ))}
            </div>

            <h2
              className="text-6xl md:text-7xl font-romantic font-bold text-gradient-romantic mb-6"
              style={{
                textShadow: "0 0 30px rgba(235, 95, 137, 0.5)",
              }}
            >
              Happy Valentine's Day!
            </h2>
            <p className="text-2xl text-sakura-600 font-romantic italic mb-8">
              Today is our special day! 💖
            </p>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Every moment with you is a celebration of love. Here's to us, to
              our journey, and to all the beautiful memories we continue to
              create together.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;
