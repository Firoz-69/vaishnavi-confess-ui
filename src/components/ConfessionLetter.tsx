/* eslint-disable react-hooks/purity */
import React, { useState } from "react";

const ConfessionLetter = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg py-24 px-6 relative overflow-hidden flex items-center">
      {/* Magical Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Twinkling stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sakura-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 5}s infinite`,
              boxShadow: "0 0 4px 2px rgba(235, 95, 137, 0.3)",
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sakura-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-heart/10 rounded-full blur-[120px]"></div>

        {/* Floating hearts */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`heart-${i}`}
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
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {!isOpened ? (
          /* Sealed Envelope */
          <div className="flex flex-col items-center">
            {/* Pre-letter message */}
            <div className="text-center mb-12">
              <h2
                className="text-5xl md:text-6xl font-romantic font-bold text-sakura-700 mb-6"
                style={{
                  textShadow: `
                    0 0 20px rgba(235, 95, 137, 0.4),
                    0 0 40px rgba(235, 95, 137, 0.3)
                  `,
                }}
              >
                This page holds all my heart…
              </h2>
              <p className="text-text-secondary text-lg font-light max-w-2xl mx-auto leading-relaxed">
                I wish it could travel the miles and reach you instantly.
              </p>
            </div>

            {/* Envelope */}
            <div
              className="relative group cursor-pointer"
              onClick={() => setIsOpened(true)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sakura-500/20 to-heart/20 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>

              {/* Envelope container */}
              <div className="relative bg-gradient-to-br from-dark-card to-dark-surface border-2 border-sakura-500/30 rounded-lg p-12 shadow-2xl group-hover:shadow-[0_0_60px_rgba(235,95,137,0.4)] transition-all duration-500">
                {/* Wax seal */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-heart to-sakura-500 rounded-full border-4 border-dark-bg shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>

                {/* Envelope flap decoration */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sakura-500/10 to-transparent rounded-t-lg"></div>

                {/* Letter preview */}
                <div className="text-center space-y-6 mt-8">
                  <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    💌
                  </div>
                  <p className="text-2xl font-romantic text-sakura-600 italic">
                    "Please read it fully "
                  </p>
                  <p className="text-text-muted text-sm uppercase tracking-widest">
                    Click to open
                  </p>

                  {/* Pulse indicator */}
                  <div className="flex justify-center gap-2 mt-6">
                    <div className="w-2 h-2 rounded-full bg-sakura-500 animate-pulse"></div>
                    <div
                      className="w-2 h-2 rounded-full bg-sakura-500 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-sakura-500 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-sakura-500/40"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-sakura-500/40"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-sakura-500/40"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-sakura-500/40"></div>
              </div>
            </div>

            {/* Instruction text */}
            <p className="text-text-muted text-sm mt-8 italic animate-pulse">
              ✨ "A little note for you.." ✨
            </p>
          </div>
        ) : (
          /* Opened Letter */
          <div className="animate-fade-in">
            {/* Letter Paper */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden">
              {/* Decorative top border */}
              <div className="h-2 bg-gradient-to-r from-sakura-500 via-heart to-sakura-600"></div>

              {/* Letter content */}
              <div className="p-12 md:p-16 space-y-8">
                {/* Header */}
                <div className="text-center border-b-2 border-sakura-500/20 pb-8">
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
                    Valentine's Day 2026
                  </p>
                  <h3 className="text-4xl md:text-5xl font-romantic font-bold text-gray-800 mb-4">
                    -from My Heart to Yours
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-sakura-500"></div>
                    <svg
                      className="w-5 h-5 text-sakura-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-sakura-500"></div>
                  </div>
                </div>

                {/* Letter body */}
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg first-letter:text-7xl first-letter:font-romantic first-letter:text-sakura-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
                    We first met on 9th June 2021, and I never imagined how much
                    my life would change. Growing up as a single child, I often
                    felt alone, closed off within my four walls, unable to share
                    my feelings even with my parents. I was introverted, quiet,
                    and only comfortable with a few people — but then you came
                    into my life, and everything shifted. God sent me happiness
                    in the form of you.
                  </p>

                  <p className="text-lg">
                    From that day, every moment with you has been unforgettable.
                    I explored new places with you, laughed endlessly, and even
                    experienced my first flight — a surprise you arranged that
                    melted my heart completely. You took me to your home, where
                    I felt loved and cared for, just like with my own family,
                    and your family welcomed me with open hearts. Every little
                    gesture made me feel incredibly blessed.
                  </p>

                  <p className="text-lg">
                    Of course, we have our fights, annoy each other, and
                    challenge one another daily — but our love always grows
                    stronger after every quarrel. The only thing that sometimes
                    hurts is when trust falters. I am completely loyal to you,
                    and my heart always chooses you, yet when doubt enters, it
                    cuts deep. I hope you can understand my heart a little more
                    because I always want us to trust each other completely.
                  </p>

                  <p className="text-lg">
                    Even with everything, my love for you keeps growing every
                    single day. Every memory, every laugh, every shared moment
                    feels magical, and I cannot wait to make more memories with
                    you.
                  </p>

                  <p className="text-lg">
                    Happy Valentine’s Day, my love. I can’t wait for the day we
                    celebrate as husband and wife — and I know our love story
                    will continue to be as beautiful, playful, and extraordinary
                    as it has always been.
                  </p>

                  {/* Special highlight section */}
                  <div className="bg-gradient-to-br from-sakura-500/10 to-heart/10 border-l-4 border-sakura-500 p-6 rounded-r-xl my-8">
                    <p className="text-xl font-romantic italic text-gray-800">
                      I like you. More than I planned to. More than I expected
                      to.
                    </p>
                  </div>
                </div>

                {/* Closing */}

                {/* Decorative footer */}
                <div className="flex justify-center gap-2 pt-8">
                  <svg
                    className="w-6 h-6 text-sakura-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-sakura-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-sakura-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>

              {/* Decorative bottom border */}
              <div className="h-2 bg-gradient-to-r from-sakura-500 via-heart to-sakura-600"></div>
            </div>

            {/* Close button - optional */}
            <div className="text-center mt-8">
              <button
                onClick={() => setIsOpened(false)}
                className="text-text-muted hover:text-sakura-500 text-sm uppercase tracking-widest transition-colors"
              >
                ← Close Letter
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConfessionLetter;
