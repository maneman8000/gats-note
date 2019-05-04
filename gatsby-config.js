module.exports = {
  siteMetadata: {
    title: `Gats Note`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${__dirname}/node_modules/`],
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/admin/*`] },
    },
  ],
}
