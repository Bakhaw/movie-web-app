/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      grey: "#56535E",
      orange: "#C66E2F",
      purple: "#312438",
      "purple-light": "#4B3953",
      "purple-dark": "#2D2032",
      "purple-grey": "#2C1F31",
      red: "#E80016",
      white: "#ffffff",
    },
  },
  plugins: [],
};
