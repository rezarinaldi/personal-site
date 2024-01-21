/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "800px",

      tablet: "801px",

      desktop: "1200px",
    },
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
    },
  },
  plugins: [],
};
