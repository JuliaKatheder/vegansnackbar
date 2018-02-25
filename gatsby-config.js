module.exports = {
  siteMetadata: {
    title: 'Vegan Snackbar',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    'test-plugin'
  ],
  pathPrefix: '/'
};
