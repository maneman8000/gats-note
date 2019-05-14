module.exports = {
  siteMetadata: {
    title: `Gats Note`,
    navigations: [
      {
        name: `Home`,
        path: `/`
      },
      {
        name: `Profile`,
        path: `/profile`
      },
      {
        name: `Discography`,
        path: `/discography`
      },
      {
        name: `Schedule`,
        path: `/schedule`
      }
    ]
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
