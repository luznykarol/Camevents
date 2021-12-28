import { useStaticQuery, graphql } from 'gatsby'
export const useAllJobs = () => {
  const {
    allPrismicJobOffer: { edges: data },
  } = useStaticQuery(
    graphql`
      query AllJobsQuery {
        allPrismicJobOffer {
          edges {
            node {
              id
              data {
                title1 {
                  text
                }
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
