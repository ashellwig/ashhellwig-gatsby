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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_MEASUREMENT_ID,
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: true,
      // Setting this parameter is optional
      anonymize: false,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ['/preview/**', '/do-not-track/me/too/'],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // Enables Google Optimize using your container Id
      optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
      // Enables Google Optimize Experiment ID
      experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
      // Set Variation ID. 0 for original 1,2,3....
      variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
      // Defers execution of google analytics script after page load
      defer: false,
      // Any additional optional fields
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: 'ash.ashwigltd.com',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo-square.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
