import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ lang, meta, data }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            separator
            themeColor
            author
          }
        }
      }
    `,
  )

  const metadata = site.siteMetadata
  const metaTitle = data.title || metadata.title
  const fullTitle = `${metaTitle} ${metadata.separator} ${metadata.title}`
  const metaDescription = data.description || metadata.description
  const metaImage = data.image || metadata.image

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${metadata.title}`}>
      <meta name='description' content={metaDescription} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:image' content={metaImage} />
      <meta property='og:description' content={metaDescription} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={metaImage} />
      <link
        rel='apple-touch-icon'
        sizes='57x57'
        href='/img/favicons/apple-icon-57x57.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='60x60'
        href='/img/favicons/apple-icon-60x60.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href='/img/favicons/apple-icon-72x72.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='/img/favicons/apple-icon-76x76.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/img/favicons/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/img/favicons/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/img/favicons/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/img/favicons/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/img/favicons/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/img/favicons/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/img/favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/img/favicons/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/img/favicons/favicon-16x16.png'
      />
      <link rel='manifest' href='/img/favicons/manifest.json' />
      <meta name='msapplication-TileColor' content='#07172D' />
      <meta
        name='msapplication-TileImage'
        content='/img/favicons/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#07172D'></meta>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default Seo
