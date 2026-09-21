import createCache from '@emotion/cache'

// One Emotion cache definition shared by gatsby-ssr.js and gatsby-browser.js.
// The key must match on both sides so the client picks up the styles the
// server placed in <head> instead of re-inserting them.
export default function createEmotionCache() {
  const cache = createCache({ key: 'css', prepend: true })
  // Disable Emotion's zero-config SSR (which inlines <style> tags into the
  // body and causes React 18 hydration mismatches). Styles are extracted
  // explicitly in gatsby-ssr.js instead.
  cache.compat = true
  return cache
}
