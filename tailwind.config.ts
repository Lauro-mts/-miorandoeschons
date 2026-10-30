import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base — dark, sober palette grafite e vermelho da logo Miorando Castanho & Schons de Lima
        ink: {
          DEFAULT: "#161314",
          900: "#161314",
          800: "#1d1a1b",
          700: "#262223",
          600: "#2f2a2b",
          500: "#3d3738",
        },
        brand: {
          50: "#fdeced",
          100: "#fad3d5",
          200: "#f5abaf",
          300: "#ef8389",
          400: "#e8606a",
          500: "#e0404a", // destaque em texto sobre fundo escuro
          600: "#ae1016", // vermelho da logo (botões)
          700: "#8a0d12",
          800: "#5e0a0e",
          900: "#3d0709",
        },
        offwhite: {
          DEFAULT: "#f5f2f2",
          muted: "#c9c2c3",
        },
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-line": "linear-gradient(90deg, transparent, #ae1016, transparent)",
      },
      boxShadow: {
        brand: "0 0 0 1px rgba(224,64,74,0.4)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
