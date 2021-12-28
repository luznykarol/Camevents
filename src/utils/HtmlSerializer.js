import * as React from 'react'
import { Link } from 'gatsby'
import { Elements } from 'prismic-richtext'
import { Link as PrismicLink } from 'prismic-reactjs'

import { linkResolver } from './linkResolver'

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = function (type, element, content, children, key) {
  switch (type) {
    // Add a class to hyperlinks
    case Elements.hyperlink:
      const url = PrismicLink.url(element.data, linkResolver)

      if (element.data.link_type === 'Document') {
        return (
          <Link key={key} to={url}>
            {content}
          </Link>
        )
      }

      return (
        <a
          key={key}
          href={url}
          target={element.data.target}
          rel={element.data.target ? 'noopener' : undefined}
          className='link-class'>
          {children}
        </a>
      )

    // Return null to stick with the default behavior
    default:
      return null
  }
}

export default htmlSerializer
