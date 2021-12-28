import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import Layout from '@/components/layout'
import Seo from '@/components/seo'
import SliceZone from '@/components/SliceZone'
import { linkResolver } from '@/utils/linkResolver'

const Page = ({ data }) => {
  if (!data) return null

  const document = data.prismicPage.data

  const seo = {
    title: document.title.text,
    description: document.description,
    image: document.image.url,
  }

  return (
    <Layout>
      <Seo data={seo} />
      <SliceZone data={document.body} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($uid: String) {
    prismicPage(uid: { eq: $uid }) {
      uid
      _previewable
      ...PrismicSlices
      data {
        title1 {
          text
        }
      }
    }
  }
`
export default withPrismicPreview(Page, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
    linkResolver,
  },
])
