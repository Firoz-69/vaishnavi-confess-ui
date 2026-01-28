/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main palette
        sakura: {
          50: "#fef7f8",
          100: "#fdeef1",
          200: "#fcdde3",
          300: "#fab3c5",
          400: "#f689a7",
          500: "#eb5f89",
          600: "#d8386d",
          700: "#b52a5a",
          800: "#96254d",
          900: "#7d2345",
        },
        // Accent colors
        cloud: "#f8f9fa",
        cream: "#fffbfc",
        heart: "#ff1744",
        "rose-gold": "#b76e79",
        blush: "#ffeef2",
      },
      fontFamily: {
        romantic: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-in",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
