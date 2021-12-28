import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const FooterLink = ({ data }) => {
  const { link, name, image } = data

  return image.fluid ? (
    <a
      className='inline-block w-full mb-4'
      rel='noopener noreferrer'
      target='_blank'
      href={link.url}>
      <Img fluid={image.fluid} />
    </a>
  ) : link.slug ? (
    <Link
      className='text-center md:text-left font-medium block mb-3 text-sm text-grey-500 leading-5'
      to={`/${link.slug}/`}>
      {name}
    </Link>
  ) : (
    <a
      rel='noopener noreferrer'
      target='_blank'
      href={link.url}
      className='text-center md:text-left font-medium  block mb-3 text-sm text-grey-500 leading-5'>
      {name}
    </a>
  )
}

export default FooterLink
