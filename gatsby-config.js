module.exports = {
  siteMetadata: {
    title: 'Ash Hellwig',
    author: 'Ash Hellwig',
    description:
      'Personal website for Ash Hellwig based on Dimension by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ash Hellwig\'s Personal Site',
        short_name: 'Ash Hellwig',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo-square.png', // This path is relative to the root of the site.
        icons: [
          {
              src: "src/images/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png"
          },
          {
              src: "src/images/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png"
          }
      ],
      },
    },
    'gatsby-plugin-sass',
  ],
  flags: {
    DEV_SSR: false
    ,
  },
}
