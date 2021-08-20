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
      },
      spacing: {
        "13/24": "54.1666667%",
        "15/24": "62.5%"
      },
      padding: {
        "1/24": "4.166667%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
