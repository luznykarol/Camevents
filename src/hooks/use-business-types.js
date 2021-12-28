import { useStaticQuery, graphql } from 'gatsby'
export const useBusinessTypes = () => {
  const {
    allPrismicBusinessType: { edges: data },
  } = useStaticQuery(
    graphql`
      query AllBusinessQuery {
        allPrismicBusinessType {
          edges {
            node {
              id
              data {
                title {
                  text
                }
                content {
                  raw
                }
                icon
              }
              uid
            }
          }
        }
      }
    `,
  )
  return data
}
