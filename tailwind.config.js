/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, html}"],
  theme: {
    extend: {
      colors: {
        brand: "#E31C5F",
        "brand-dark": "#D70466",
        background: "#FFFFFF",
        border: {
          strong: "#222222",
          default: "#A0A0A0",
          weak: "#CCCCCC",
        },
        text: {
          default: "#222222",
          weak: "#717171",
        },
      },
    },
  },
  plugins: [],
};
