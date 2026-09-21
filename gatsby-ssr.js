/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import { renderToString } from 'react-dom/server'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from './src/createEmotionCache'

// Render with an Emotion cache and lift the critical CSS for MUI components
// into <head>, so the body markup matches what React hydrates on the client.
export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  const html = renderToString(
    <CacheProvider value={cache}>{bodyComponent}</CacheProvider>
  )
  const { styles } = extractCriticalToChunks(html)

  setHeadComponents(
    styles.map(style => (
      <style
        key={style.key}
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))
  )
  replaceBodyHTMLString(html)
}
