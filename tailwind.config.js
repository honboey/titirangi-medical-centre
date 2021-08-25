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
        "8/22": "36.363636%",
        "14/22": "63.636364%",
        "7/24": "29.166667%",
        "13/24": "54.1666667%",
        "15/24": "62.5%",
        "21/24": "87.5%"
      },
      padding: {
        "1/8": "12.5%",
        "1/14": "7.142857%",
        "1/16": "6.25%",
        "1/22": "4.545455%",
        "1/24": "4.166667%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
