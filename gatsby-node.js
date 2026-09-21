exports.onCreateWebpackConfig = ({ actions }) => {
  // pdfjs-dist (via react-pdf) has an optional `require('canvas')` for
  // Node environments. We only render the PDF in the browser, so stub it.
  actions.setWebpackConfig({
    resolve: {
      alias: {
        canvas: false,
      },
    },
  })
}
