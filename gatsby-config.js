module.exports = {
  siteMetadata: {
    title: `Gats Note`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${__dirname}/node_modules/`],
      }
    }
  ],
}
