import { useStaticQuery, graphql } from 'gatsby'
export const useAllPrismicPosts = () => {
  const {
    allPrismicBlogPost: { edges: data },
  } = useStaticQuery(
    graphql`
      query AllPostsQuery {
        allPrismicBlogPost(sort: { fields: [data___date], order: DESC }) {
          edges {
            node {
              id
              uid
              data {
                title1 {
                  text
                }
                content {
                  text
                }
                date(formatString: "MMM DD, yyyy")
                excerpt {
                  text
                }
                thumbnail {
                  fluid(maxWidth: 350, maxHeight: 250, imgixParams: { q: 60 }) {
                    ...GatsbyPrismicImageFluid_noBase64
                  }
                  alt
                }
                author {
                  document {
                    ... on PrismicAuthor {
                      id
                      data {
                        name {
                          text
                        }
                        description {
                          text
                        }
                        image {
                          url
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
