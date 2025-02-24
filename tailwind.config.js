const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "container-padding": "1rem",
        "container-fluid-padding": "2rem",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        body: "#f8f8f8",
        primary: "#004C9A",
        secend: "#ebebeb",
        dark: "rgba(0,0,0,.8)",
      },
      fontFamily: {
        Vazir: ["Vazir", "sans-serif"],
        Nilfa: ["Nilfa", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": { maxWidth: "640px" },
          "@screen md": { maxWidth: "768px" },
          "@screen lg": { maxWidth: "1024px" },
          "@screen xl": { maxWidth: "1280px" },
          "@screen 2xl": { maxWidth: "1536px" },
        },
        ".container-fluid": {
          width: "100%",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        },
        ".row": {
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "-0.5rem",
          marginRight: "-0.5rem",
        },
        ".col": {
          flex: "1 1 0%",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        },
        ".col-auto": { flex: "0 0 auto", width: "auto" },
        ".col-1": { flex: "0 0 8.333333%", maxWidth: "8.333333%" },
        ".col-2": { flex: "0 0 16.666667%", maxWidth: "16.666667%" },
        ".col-3": { flex: "0 0 25%", maxWidth: "25%" },
        ".col-4": { flex: "0 0 33.333333%", maxWidth: "33.333333%" },
        ".col-5": { flex: "0 0 41.666667%", maxWidth: "41.666667%" },
        ".col-6": { flex: "0 0 50%", maxWidth: "50%" },
        ".col-7": { flex: "0 0 58.333333%", maxWidth: "58.333333%" },
        ".col-8": { flex: "0 0 66.666667%", maxWidth: "66.666667%" },
        ".col-9": { flex: "0 0 75%", maxWidth: "75%" },
        ".col-10": { flex: "0 0 83.333333%", maxWidth: "83.333333%" },
        ".col-11": { flex: "0 0 91.666667%", maxWidth: "91.666667%" },
        ".col-12": { flex: "0 0 100%", maxWidth: "100%" },

        ".col-xs-6": { "@screen xs": { flex: "0 0 50%", maxWidth: "50%" } },
        ".col-sm-6": { "@screen sm": { flex: "0 0 50%", maxWidth: "50%" } },
        ".col-md-6": { "@screen md": { flex: "0 0 50%", maxWidth: "50%" } },
        ".col-lg-6": { "@screen lg": { flex: "0 0 50%", maxWidth: "50%" } },
        ".col-xl-6": { "@screen xl": { flex: "0 0 50%", maxWidth: "50%" } },
      });
    }),
  ],
};
