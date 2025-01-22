module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "12px",
    },

    screens: {
      xs: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      Unbounded: ["Unbounded", "serif"],
      Jost: ["Jost", "serif"],
    },

    colors: {
      white: "#FFF",
      black: "#000",
      black1: "#181818",
      primary: "#023436",
      secondary: "#037971",
      accent: "#03B5AA",
    },
  },
  plugins: [],
};
