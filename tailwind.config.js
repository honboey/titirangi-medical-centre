module.exports = {
  purge: [
    "./src/pages/**/*.js",
    "./src/components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "display": ["Eiko", "ui-serif"],
        "body": ["Suisse", "ui-sans"]
      },
      colors: {
        "tmc-green": "#f4f9f1"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
