import { useStaticQuery, graphql } from 'gatsby'
export const useSocialMedia = () => {
  const {
    prismicSocialMedia: { data },
  } = useStaticQuery(
    graphql`
      query SocialMediaLinksQuery {
        prismicSocialMedia {
          data {
            social_media_links {
              link {
                url
              }
              social_medium
            }
            email {
              url
            }
            text {
              text
            }
          }
        }
      }
    `,
  )
  return data
}
