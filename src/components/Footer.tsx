/* eslint-disable react-hooks/purity */
import React from "react";
import nameLogo from "../assests/BG_LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sakura-500/5 rounded-full blur-[120px]"></div>

        {/* Floating hearts */}
        {Array.from({ length: 8 }).map((_, i) => (
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
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Left - Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={nameLogo}
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed font-light">
              Oii Selfie Hah Happy Valentines Day Oru ponnu munnadi 1st time
              nikkkiren Ipidi Hm.. Unne kandipudikirathiku 27 varisham ayirichi
              Ithiki melale enakku wait pannelathu so takinu solliren Naa unne …
              love panra Mm? aa.. Aahhh! Neeyum takinu sollenum ndu avesiyam
              ille Konjem time edithiko Wait panre…
            </p>
          </div>

          {/* Middle - Connect With Me */}
          <div className="space-y-6">
            <h3 className="text-sakura-600 font-romantic text-xl font-semibold text-center md:text-left">
              Connect With Me
            </h3>
            <div className="flex items-start gap-4 justify-center md:justify-start">
              {/* Instagram */}
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-2 text-text-secondary hover:text-sakura-500 transition-all duration-300"
                title="Like Me"
              >
                <div className="w-12 h-12 rounded-full border border-sakura-500/30 flex items-center justify-center group-hover:bg-sakura-500 group-hover:border-sakura-500 transition-all duration-300">
                  <svg
                    className="w-6 h-6 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <p className="font-light text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap absolute -bottom-6">
                  Like Me
                </p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-2 text-text-secondary hover:text-sakura-500 transition-all duration-300"
                title="Text Me"
              >
                <div className="w-12 h-12 rounded-full border border-sakura-500/30 flex items-center justify-center group-hover:bg-sakura-500 group-hover:border-sakura-500 transition-all duration-300">
                  <svg
                    className="w-6 h-6 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <p className="font-light text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap absolute -bottom-6">
                  Text Me
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="group relative flex flex-col items-center gap-2 text-text-secondary hover:text-sakura-500 transition-all duration-300"
                title="Call Me"
              >
                <div className="w-12 h-12 rounded-full border border-sakura-500/30 flex items-center justify-center group-hover:bg-sakura-500 group-hover:border-sakura-500 transition-all duration-300">
                  <svg
                    className="w-6 h-6 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </div>
                <p className="font-light text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap absolute -bottom-6">
                  Call Me
                </p>
              </a>
            </div>
          </div>

          {/* Right - Special Message */}
          <div className="space-y-6">
            <h3 className="text-sakura-600 font-romantic text-xl font-semibold">
              A Note For You
            </h3>
            <div className="bg-dark-card border border-sakura-500/20 rounded-xl p-6 space-y-3">
              <p className="text-text-secondary text-sm font-light italic leading-relaxed">
                "Unmai kaadhal yaarendral Unnai ennai solvenae Neeyum naanum poi
                endraal Kadhalai thedi kolvenae Koonthal meesai ondraaga oosi
                noolil thaipenae Thengai kulle neer pola Nenjil thekki vaipenae“
              </p>
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-8 bg-sakura-500"></div>
                <svg
                  className="w-4 h-4 text-sakura-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="h-[1px] w-8 bg-sakura-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sakura-500/30 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-text-muted text-sm font-light">
            © 2026 Made with ❤️ By Talented Developer Gokul__Siddu
          </p>

          {/* Heart decoration */}
          <div className="flex items-center gap-3">
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

          {/* Valentine's Day Date */}
          <p className="text-text-muted text-sm font-light">
            Valentine's Day 2026 • 14.02.2026
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-sakura-500 via-heart to-sakura-600"></div>
    </footer>
  );
};

export default Footer;
