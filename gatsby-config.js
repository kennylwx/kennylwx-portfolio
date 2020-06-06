/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `KennyLWX`,
    description: 'Kenny&#39s fabulous portfolio.',
    author: `kennylwx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0E1015`,
        theme_color: `#0E1015`,
        display: `minimal-ui`,
        icon: `src/images/LWX-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KennyLWX`,
        short_name: `KennyLWX`,
        start_url: `/`,
        description: `Kenny&#39s portfolio.`,
        lang: `en`,
        background_color: `#0E1015`,
        theme_color: `#0E1015`,
        display: `standalone`,
        icon: `src/images/LWX-icon.png`,
        legacy: true,
        include_favicon: true,
      },
    },
    {
      resolve: "@rhysforyou/gatsby-plugin-safari-site-icon",
      options: {
        icon: "./src/images/LWX-icon.png",
        color: "#0E1015",
      },
    },
  ],
};
