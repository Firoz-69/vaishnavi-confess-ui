import React, { useState, useEffect } from "react";

const LoveMeter = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate percentage scrolled
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / totalScrollableHeight) * 100;

      setScrollProgress(Math.min(progress, 100));

      // Show heart after scrolling 100px
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // Auto-close when reaching 0% or 100%
    if ((scrollProgress <= 0 || scrollProgress >= 100) && isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 500); // 1 second delay

      return () => clearTimeout(timer);
    }
  }, [scrollProgress, isOpen]);

  // Get love message based on scroll progress
  const getLoveMessage = () => {
    if (scrollProgress < 20) return "Starting to fall...";
    if (scrollProgress < 40) return "Getting closer...";
    if (scrollProgress < 60) return "Heart racing...";
    if (scrollProgress < 80) return "Almost there...";
    if (scrollProgress < 95) return "Deeply in love...";
    return "Love you fully! 💕";
  };

  return (
    <>
      {/* Floating Heart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-20 pointer-events-none"
        }`}
        style={{
          animation: isVisible ? "jiggle 2s ease-in-out infinite" : "none",
        }}
        aria-label="Toggle Love Meter"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-sakura-500/30 blur-xl rounded-full scale-125 animate-pulse"></div>

        {/* Heart Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-heart to-sakura-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
          <svg
            className="w-8 h-8 text-white drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>

          {/* Percentage badge */}
          <div className="absolute -top-2 -right-2 bg-white text-heart text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg border-2 border-sakura-500">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </button>

      {/* Meter Popup */}
      {isOpen && (
        <>
          {/* Backdrop */}

          {/* Meter Card */}
          <div className="fixed bottom-28 right-8 z-50 animate-fade-in pointer-events-auto">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-sakura-500/20 blur-2xl rounded-3xl"></div>

              {/* Card */}
              <div className="relative bg-dark-card/95 backdrop-blur-xl border-2 border-sakura-500/40 rounded-3xl p-6 shadow-2xl w-64">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-text-muted hover:text-sakura-500 transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Title */}
                <div className="text-center mb-5">
                  <h3
                    className="text-sakura-600 font-romantic text-2xl font-bold mb-1"
                    style={{
                      textShadow: "0 0 10px rgba(235, 95, 137, 0.3)",
                    }}
                  >
                    Love Meter
                  </h3>
                </div>

                {/* Horizontal Progress Bar */}
                <div className="mb-5">
                  <div className="relative h-8 bg-dark-surface rounded-full border-2 border-sakura-500/30 overflow-hidden">
                    {/* Fill */}
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-heart via-sakura-500 to-sakura-600 transition-all duration-500 ease-out flex items-center justify-end pr-2"
                      style={{ width: `${scrollProgress}%` }}
                    >
                      {scrollProgress > 15 && (
                        <svg
                          className="w-5 h-5 text-white animate-pulse"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      )}
                    </div>

                    {/* Shimmer effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shimmer-animation"
                      style={{
                        width: `${scrollProgress}%`,
                      }}
                    />

                    {/* Percentage text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-sm drop-shadow-lg">
                        {Math.round(scrollProgress)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Love Message */}
                <div className="text-center mb-4 min-h-[40px]">
                  <p className="text-sakura-600 text-base font-romantic italic">
                    {getLoveMessage()}
                  </p>
                </div>

                {/* Hearts indicator */}
                <div className="flex justify-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      className={`w-6 h-6 transition-all duration-300 ${
                        index < Math.ceil(scrollProgress / 20)
                          ? "text-sakura-500 scale-100"
                          : "text-sakura-500/20 scale-75"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        filter:
                          index < Math.ceil(scrollProgress / 20)
                            ? "drop-shadow(0 0 4px rgba(235, 95, 137, 0.5))"
                            : "none",
                      }}
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ))}
                </div>

                {/* Decorative corners */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-sakura-500/40 rounded-tl-xl"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-sakura-500/40 rounded-br-xl"></div>
              </div>

              {/* Arrow pointing to button */}
              <div className="absolute -bottom-3 right-8 w-6 h-6 bg-dark-card/95 border-r-2 border-b-2 border-sakura-500/40 transform rotate-45"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoveMeter;
