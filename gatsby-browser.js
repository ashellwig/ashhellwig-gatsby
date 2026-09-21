/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from './src/createEmotionCache'

const cache = createEmotionCache()

// Must mirror the CacheProvider used in gatsby-ssr.js.
export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>{element}</CacheProvider>
)
