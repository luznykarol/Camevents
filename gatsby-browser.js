/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import 'gatsby-plugin-prismic-previews/dist/styles.css'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
)
