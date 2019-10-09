/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "yogesh mishra",
    author: "YoGi.js",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "18pse39emtkh",
        accessToken: "8t0H37euXm82aRf4nqEbg2MrYrPuyABOE_z4KLpo5FM",
      },
    },

    "gatsby-plugin-sass",
    `gatsby-plugin-playground`, //this plugin for graphQl playground

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },

    //#2 for images

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}

//"gatsby-transformer-remark",