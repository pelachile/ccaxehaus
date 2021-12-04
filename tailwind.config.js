module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-page": "url('./img/AxeHausHome.jpeg')",
        "home-page2": "url('../img/AxeHausHome2.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
