/* eslint-disable react-hooks/purity */
import { useMemo } from "react";

const Home = () => {
  // Memoize floating hearts positions
  const floatingHearts = useMemo(() => {
    return [...Array(15)].map(() => ({
      left: Math.random() * 100,

      top: Math.random() * 100,
      fontSize: Math.random() * 3 + 1,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 4 + 4,
    }));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <div className="card-romantic max-w-3xl w-full">
        <div className="text-center space-y-6">
          {/* Header */}
          <h1 className="text-6xl font-romantic text-gradient-romantic animate-slide-up">
            My Dearest Love ❤️
          </h1>

          {/* Message */}
          <div className="space-y-4 text-sakura-800 text-lg leading-relaxed">
            <p className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              From the moment I met you, my world became brighter. Every day
              with you is a blessing I never knew I needed.
            </p>

            <p className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              Your smile lights up my darkest days, and your laugh is my
              favorite sound in the entire world.
            </p>

            <p className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              I want you to know that you are my everything. You make me want to
              be a better person every single day.
            </p>
          </div>

          {/* Hearts decoration */}
          <div className="flex justify-center gap-4 text-4xl animate-pulse-slow">
            <span className="animate-float" style={{ animationDelay: "0s" }}>
              💕
            </span>
            <span className="animate-float" style={{ animationDelay: "0.3s" }}>
              💖
            </span>
            <span className="animate-float" style={{ animationDelay: "0.6s" }}>
              💗
            </span>
            <span className="animate-float" style={{ animationDelay: "0.9s" }}>
              💓
            </span>
          </div>

          {/* Main confession */}
          <div
            className="bg-gradient-to-r from-sakura-100 to-blush rounded-2xl p-8 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <h2 className="text-4xl font-romantic text-sakura-700 mb-4">
              I Love You
            </h2>
            <p className="text-sakura-600 text-xl italic">
              "You are my today and all of my tomorrows"
            </p>
          </div>

          {/* Signature */}
          <p
            className="text-sakura-500 text-2xl font-romantic animate-slide-up"
            style={{ animationDelay: "1s" }}
          >
            Forever yours, 💌
          </p>
        </div>
      </div>

      {/* Floating hearts background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {floatingHearts.map((heart, i) => (
          <div
            key={i}
            className="absolute text-sakura-200 opacity-30 animate-float"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.fontSize}rem`,
              animationDelay: `${heart.animationDelay}s`,
              animationDuration: `${heart.animationDuration}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
