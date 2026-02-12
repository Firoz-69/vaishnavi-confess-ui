import React, { useState, useEffect } from "react";

// Import your images
import slide1 from "../assests/slide1a.jpeg";
import slide2 from "../assests/slide2a.jpeg";
import slide3 from "../assests/slide3a.jpeg";

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Generate sparkles
  const generateSparkles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  };

  const sparkles = generateSparkles(50);

  const slides = [
    {
      image: slide1,
      title: "Every Smile You Give",
      subtitle: "Lights Up My World",
      description:
        "Your smile is the first thing I fell in love with. It has the power to brighten even my darkest days and reminds me why every moment with you is precious.",
      quote: "You are my sunshine on cloudy days",
    },
    {
      image: slide2,
      title: "The Way You Look At Me",
      subtitle: "Makes Me Feel Alive",
      description:
        "In your eyes, I see a future filled with love, laughter, and endless possibilities. The way you look at me makes me believe in magic.",
      quote: "Your eyes tell stories my heart loves to hear",
    },
    {
      image: slide3,
      title: "Our Adventures Together",
      subtitle: "Create the Best Memories",
      description:
        "Whether we're exploring new places or just enjoying quiet moments at home, every adventure with you becomes a cherished memory I'll treasure forever.",
      quote: "Life is better when we're together",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-dark-surface py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      {/* <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-sakura-500/5 rounded-full blur-[120px] -translate-x-1/2"></div> */}
      {/* Background Effects Combo - Gradient Mesh + Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="opacity-20">
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-sakura-500 rounded-full blur-[150px]"
            style={{ animation: "pulse-slow 8s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-heart rounded-full blur-[120px]"
            style={{ animation: "pulse-slow 6s ease-in-out infinite reverse" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/2 w-72 h-72 bg-sakura-600 rounded-full blur-[100px]"
            style={{
              animation: "pulse-slow 7s ease-in-out infinite",
              animationDelay: "1s",
            }}
          ></div>
        </div>

        {/* Sparkle Particles */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-1 h-1 bg-sakura-400 rounded-full"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animation: `twinkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
              boxShadow: "0 0 4px 2px rgba(235, 95, 137, 0.3)",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-sakura-500/10 border border-sakura-500/30 text-sakura-600 text-sm uppercase tracking-[0.3em] mb-6">
            Why I Love You
          </span>
          <h2 className="text-5xl md:text-6xl font-romantic font-bold text-sakura-700">
            Reasons My Heart Chose You
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Side - Image */}
            <div className="relative h-[500px] md:h-[600px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  {/* Polaroid-style frame */}
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-white p-6 pb-20 shadow-2xl transform -rotate-2">
                      <div className="h-full w-full overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Polaroid caption */}
                      <div className="absolute bottom-6 left-6 right-6 text-center">
                        <p className="font-script text-gray-700 text-2xl">
                          {slide.quote}
                        </p>
                      </div>
                    </div>

                    {/* Decorative hearts */}
                    <div className="absolute -top-4 -right-4 text-sakura-500 opacity-20">
                      <svg
                        className="w-16 h-16"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Content */}
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0 relative"
                      : "opacity-0 -translate-x-full absolute"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Slide number */}
                    <div className="flex items-center gap-4">
                      <div className="text-sakura-500/30 text-6xl font-romantic font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-sakura-500/50 to-transparent"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-5xl md:text-6xl font-romantic font-bold text-sakura-700 leading-tight">
                      {slide.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-2xl font-romantic text-sakura-600 italic">
                      {slide.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-lg text-text-secondary leading-relaxed font-light">
                      {slide.description}
                    </p>

                    {/* Decorative divider */}
                    <div className="pt-6">
                      <div className="flex items-center gap-3">
                        <div className="h-[1px] w-12 bg-sakura-500"></div>
                        <svg
                          className="w-4 h-4 text-sakura-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <div className="h-[1px] w-12 bg-sakura-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            {/* Progress Dots */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 h-3 bg-sakura-500"
                      : "w-3 h-3 bg-sakura-500/30 hover:bg-sakura-500/50"
                  } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-sakura-500/50 flex items-center justify-center text-sakura-500 hover:bg-sakura-500 hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-sakura-500/50 flex items-center justify-center text-sakura-500 hover:bg-sakura-500 hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoSlider;
