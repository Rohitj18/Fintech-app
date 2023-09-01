/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#122848",
        "secondary-color": "#102341",
        "ternary-color":"#0e1e39",
        "black-color":"#040D12",
        "subheading-color":"#2f3d5e",
        "primary-blue":"#2d5eff",
        "secondary-blue":"#2d8fff",
        "primary-white":"#ffffff",
        "secondary-white":"#E6E6E6"
      },
    },
  },
  plugins: [],
};
