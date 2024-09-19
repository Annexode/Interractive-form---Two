/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        darkblue: ["#1f2630"],
        veryDarkBlue: ["#141519"],
        lightGray: ["#959eac"],
        orange:["#fc7613"],
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
