module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['"Kumbh Sans"', "sans-serif"],
      },
      colors: {
        tb: "#292A2C",
        tg: "#85868A",
        orange: "#FF7D1A",
      },
      backgroundImage: {
        "icon-next": "url('/icon-next.svg')",
        "icon-prev": "url('/icon-previous.svg')",
      },
    },
  },
  plugins: [],
};
