require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://http://www.titirangimc.co.nz/",
    title: "Titirangi Medical Centre",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred"
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/favicon.png"
      }
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `titirangimedicalcentre`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: require('./src/utilities/linkResolver').linkResolver,
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          about: require("./custom_types/about.json"),
        },
      },
    },
  ],
};
