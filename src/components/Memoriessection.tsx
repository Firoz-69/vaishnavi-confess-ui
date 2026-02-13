import React from "react";

// Import your images
import moment1 from "../assests/sec21.jpeg";
import moment2 from "../assests/colag1.png";

const MemoriesSection = () => {
  const memories = [
    {
      image: moment1,
      title: "Our First Adventure",
      date: "S💗A",
      description:
        "The day we explored the city together, laughing at every corner, creating memories that would last forever. Your hand in mine felt like home.",
      tags: ["Adventure", "Laughter", "First Times"],
    },
    {
      image: moment2,
      title: "Sunset by the Beach",
      date: "S💗A",
      description:
        "Watching the sun paint the sky in shades of pink and orange, just like the colors you brought into my life. That moment, I knew you were my forever.",
      tags: ["Sunset", "Romance", "Peace"],
    },
  ];
  // Generate random stars
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  };

  const stars = generateStars(100); // Generate 100 stars

  return (
    <section className="bg-dark-bg py-24 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              opacity: 0,
            }}
          />
        ))}
      </div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-sakura-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-heart/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sakura-600 text-sm uppercase tracking-[0.3em] font-light">
              Our Journey
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-romantic font-bold text-sakura-700 mb-6"
            style={{
              textShadow: `
      0 0 15px rgba(235, 95, 137, 0.4),
      0 0 30px rgba(235, 95, 137, 0.3),
      0 0 45px rgba(235, 95, 137, 0.2)
    `,
            }}
          >
            Time With You
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Every moment we've shared has been a treasure. Here are some of my
            favorite memories with you.
          </p>
        </div>

        {/* Memories Grid - Alternating Layout */}
        <div className="space-y-32">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? "" : "md:grid-flow-dense"
              }`}
            >
              {/* Image Side - Polaroid Style */}
              <div
                className={`${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                } group`}
              >
                <div className="relative">
                  {/* Decorative tape effect */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/10 backdrop-blur-sm rotate-2 z-10 rounded-sm"></div>

                  {/* Polaroid frame */}
                  <div className="bg-white p-4 pb-16 shadow-2xl transform group-hover:scale-105 transition-all duration-500 group-hover:rotate-1">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* Polaroid text area */}
                    <div className="mt-4 text-center">
                      <p className="font-script text-gray-700 text-xl">
                        {memory.date}
                      </p>
                    </div>
                  </div>

                  {/* Decorative doodles */}
                  <div className="absolute -bottom-6 -right-6 text-sakura-500/30">
                    <svg
                      className="w-20 h-20"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M50 30 Q60 40 50 50 Q40 60 50 70"
                        strokeLinecap="round"
                      />
                      <circle cx="70" cy="30" r="8" />
                      <path d="M30 60 L35 70 L25 70 Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div
                className={`${
                  index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                } space-y-6`}
              >
                {/* Date badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sakura-500/10 border border-sakura-500/30">
                  <svg
                    className="w-4 h-4 text-sakura-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sakura-600 text-sm font-light tracking-wide">
                    {memory.date}
                  </span>
                </div>

                {/* Title */}
                {/* <h3 className="text-4xl md:text-5xl font-romantic font-bold text-sakura-700 leading-tight">
                  {memory.title}
                </h3> */}
                {/* Title */}
                <h3
                  className="text-4xl md:text-5xl font-romantic font-bold text-sakura-700 leading-tight"
                  style={{
                    textShadow: `
      0 0 10px rgba(235, 95, 137, 0.3),
      0 0 20px rgba(235, 95, 137, 0.2),
      0 0 30px rgba(235, 95, 137, 0.1)
    `,
                  }}
                >
                  {memory.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-lg leading-relaxed font-light">
                  {memory.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {memory.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-dark-card border border-dark-border text-text-muted text-sm font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Decorative line */}
                <div className="pt-6">
                  <div className="h-[1px] w-24 bg-gradient-to-r from-sakura-500 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-sakura-500"></div>
            <svg
              className="w-6 h-6 text-sakura-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-sakura-500"></div>
          </div>
          <p className="mt-6 text-text-muted italic font-light">
            And there are countless more moments to come...
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
