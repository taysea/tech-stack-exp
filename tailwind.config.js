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
          strong: "#000000",
        },
      },
      fontSize: {
        xsmall: ["0.75rem", { lineHeight: "1rem" }],
        small: ["0.875rem", { lineHeight: "1.25rem" }],
        medium: ["1rem", { lineHeight: "1.5rem" }],
        large: ["1.125rem", { lineHeight: "1.75rem" }],
        xlarge: ["1.25rem", { lineHeight: "1.75rem" }],
      },
    },
  },
  plugins: [],
};
