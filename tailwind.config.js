import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {

      colors: {
        bg: "#0a0a0b",
        bg2: "#111114",
        bg3: "#18181d",

        blue: "#4a8fff",
      },

      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 40px rgba(74,143,255,0.25)",
      },

      borderRadius: {
        xl: "14px",
      },

      letterSpacing: {
        tightest: "-0.03em",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.6s ease-out",
        pulseSoft: "pulseSoft 2s infinite",
      },
    },
  },

  plugins: [],
};