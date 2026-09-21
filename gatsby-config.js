module.exports = {
  siteMetadata: {
    title: 'Ash Hellwig',
    author: 'Ash Hellwig',
    description:
      'Ash Hellwig — Colorado-based systems and cloud engineer and Python developer. Exchange, Proofpoint, and Microsoft GCC High migrations with CMMC, NIST SP 800-171, DFARS 7012, and CUI/ITAR compliance.',
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
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        // The HTML5 UP "Dimension" theme SCSS predates Dart Sass's module
        // system. Silence those warnings rather than rewriting vendored
        // theme code.
        sassOptions: {
          silenceDeprecations: [
            'import',
            'global-builtin',
            'slash-div',
            'color-functions',
            'if-function',
            'elseif',
            'new-global',
          ],
        },
      },
    },
  ],
}
