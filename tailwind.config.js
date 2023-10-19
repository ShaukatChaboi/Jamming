/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      Jamming: {
        950: "#010c3f",
        600: "#6c41ec",
        textColor:'#ffffff',
        bgTextInput:"#000000",
        btn:'#010c3f',
        btnHover:'#7e22ce',
        playlistiv:'#3730a3',
        result:'#221455',
        saveToSpot:'#6c41ec',
        saveHover:'rgba(108,65,233,.7)'
      },
    },
    fontFamily: {
      'sans': ["Poppins", "sans-serif"],
    },
 
    extend: {},
  },
  plugins: [],
};


