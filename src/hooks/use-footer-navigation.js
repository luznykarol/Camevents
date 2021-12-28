import { useStaticQuery, graphql } from 'gatsby'

export const useFooterNavigation = () => {
  const {
    allPrismicFooterNavigation: { edges: data },
  } = useStaticQuery(
    graphql`
      query FooterNavigationQuery {
        allPrismicFooterNavigation {
          edges {
            node {
              data {
                body {
                  ... on PrismicFooterNavigationDataBodyNavigation {
                    id
                    primary {
                      title
                      order
                    }
                    items {
                      alt_link
                      link {
                        slug
                        link_type
                        uid
                        url
                      }
                      name
                      image {
                        alt
                        fluid(maxWidth: 130, imgixParams: { q: 60 }) {
                          ...GatsbyPrismicImageFluid_noBase64
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  )
  return data
}
