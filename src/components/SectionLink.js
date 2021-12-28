import React from 'react'
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

const SectionLink = ({ data, className }) => {
  const { button_link, button_text, button_scroll } = data

  const scroll = button_scroll && button_scroll.text
  const link = button_link && button_link.href
  const page = button_link && button_link.slug
  const text = button_text && button_text.text

  return (
    <div className={`${className} flex justify-center items-center`}>
      {scroll && scroll.startsWith('#') && (
        <button
          className='btn text-base btn--blue btn--medium'
          onClick={() => scrollTo(scroll)}>
          {text}
        </button>
      )}

      {button_link.url !== null && (
        <a
          className='btn btn--medium btn--blue'
          target='_blank'
          rel='noopener noreferrer'
          href={link}>
          {text}
        </a>
      )}
      {page !== null && (
        <Link className='btn btn--medium btn--blue' to={page}>
          {text}
        </Link>
      )}
    </div>
  )
}

export default SectionLink
