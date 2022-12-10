/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yuki: "#aa00ff",
        "yuki-dark": "#7c00c8",
      },
    },
  },
  plugins: [],
};
