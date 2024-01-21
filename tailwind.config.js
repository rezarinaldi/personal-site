/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      fontSize: {
        "body-costum": [
          "0.9375rem",
          {
            lineHeight: "1.625rem",
            letterSpacing: "0.00938rem",
            fontWeight: "500",
          },
        ],
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
