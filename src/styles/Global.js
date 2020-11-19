import React from 'react'
import { Global, css } from '@emotion/core'
import theme from './theme'
import mediaQueries from './mediaQueries'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        
        /* -------------- */
        /*  TWEAK GATSBY  */
        /* -------------- */
        .tl-edges {
          min-height: 100vh;''
        }
        .gatsby-image-wrapper{
          width: 100%;
        }

        /* ------------- */
        /* STYLES GLOBAL */
        /* ------------- */

        body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
          color: ${theme.colors.main};
        }

        img {
          max-width: 100%;
        }

        a {
          color: ${theme.colors.primary};
          text-decoration: none;
        }

        /* HELPERS */
        .max-container {
          width: ${theme.maxWidth};
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
      `}
    />
  )
}
