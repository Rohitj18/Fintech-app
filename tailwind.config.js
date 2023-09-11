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
        "secondary-white":"#E6E6E6",



        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        blue: {
          100: "#47A5C5",
        },
        pink: {
          200: "#EF476F",
        },
        yellow: {
          50: "#FFD60A",
        },
      },
      fontFamily:{
        Oswald:['Oswald','Fraunces','Poppins','sans-serif'] 
      }
    },
  },
  plugins: [],
};
