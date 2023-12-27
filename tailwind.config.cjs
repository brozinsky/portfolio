/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1464px",
      },
    },
    extend: {
      colors: {
        background: {
          500: "#111"
        },
        neural: {
          500: "#e5e7eb",
          600: "#bbb",
          800: "#888"
        },
        primary: {
          500: "#F13F3F",
        },
      },
    },
  },
  plugins: [],
};
