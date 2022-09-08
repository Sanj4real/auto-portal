const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/comps/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1472px",
      },
      fontSize: {
        xm: "0.8125rem",
        mbase: "0.9375rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      fontFamily: {
        barlow: ["Barlow", ...defaultTheme.fontFamily.sans],
        // barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        default: "#374253",
        primary: "#5065F6",
        warning: "#C63617",
        info: "#144FFF",
        "primary-400": "#6F80F8",
        "primary-900": "#172BB6",
        "gray-200": "#E6EAF0",
        "gray-300": "F4F7FB",
        "gray-400": "#A7B2C3",
        "gray-600": "#596579",
        "gray-800": "#192638",
        "gray-900": "#0F1825",
        "green-100": "#0E9E49",
        "warning-400": "#FFD65D",
        footerColor: "#172337",
        footerBg: "#0c1a46",
        hoverColor: "#0953a0",
        hoverbgColor: "#064689",
        notifyColor: "#3fc03e",
        // bgButton: "#5168f6",
        paraColor: "#a2adbd",
        boxShadow: "0 0 13px 0 rgb(125 125 125 / 10%)",
        // bgGround: "#f1f1f9",
        bgGround: "#f1f6fb",
      },
      margin: {
        80: "80px",
      },
      backgroundImageAuth: {
        bgImage: "url('/signup/bg-img.svg') no-repeat",
      },
    },
  },
  plugins: [],
};
