module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: "#CD8A64",
        labelTextColor: "#9F9F9F",
        headlineColor: "#000000",
        subHeadlineColor: "#2F2F2F",
        borderColor: "#DFDFDF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
