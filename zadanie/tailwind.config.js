module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: "#CD8A64",
        secondaryColor: "#BB6B3D",
        labelTextColor: "#9F9F9F",
        headlineColor: "#000000",
        subHeadlineColor: "#2F2F2F",
        borderColor: "#DFDFDF",
      },
      fontFamily: {
        hind: "Hind",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
