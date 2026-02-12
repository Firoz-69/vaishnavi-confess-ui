import bg from "../assests/holding-hands-bg.jpeg";
import nameLogoBg from "../assests/BG_LOGO.png";

const HomePage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6 text-white">
        <h1 className="text-2xl font-script">
          <img
            src={nameLogoBg}
            alt="nameLogo_bg"
            className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28"
          />
        </h1>

        {/* <ul className="hidden md:flex gap-8 text-sm tracking-wide font-light">
          <li className="hover:text-white/70 cursor-pointer transition-colors">
            Home
          </li>
          <li className="hover:text-white/70 cursor-pointer transition-colors">
            Trends
          </li>
          <li className="hover:text-white/70 cursor-pointer transition-colors">
            Gallery
          </li>
          <li className="hover:text-white/70 cursor-pointer transition-colors">
            Contact Us
          </li>
        </ul> */}

        <div className="flex gap-4">
          <span className="cursor-pointer">📷</span>
          <span className="cursor-pointer">💬</span>
          <span className="cursor-pointer">❤️</span>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6 pb-24">
        {" "}
        <h1
          className="
    font-hero
    font-thin
    text-white
    text-6xl sm:text-7xl md:text-8xl lg:text-9xl
    tracking-[0.15em]
    mb-6
  "
          style={{
            textShadow: `
      0 0 10px rgba(255,255,255,0.3),
      0 0 20px rgba(255,255,255,0.2)
    `,
          }}
        >
          Lets write our forever.
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-white/80 mb-12 tracking-wide leading-relaxed font-light">
          You are the bane of my existence… and the object of all my desires
        </p>
        <button className="border border-white/50 px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-sm font-light">
          Love More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
