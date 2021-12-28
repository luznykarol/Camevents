import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../utils/HtmlSerializer'

const PositionItem = ({ position }) => {
  const { content, title2, link } = position
  return (
    <Link className='py-12 rounded-md shadow-3 border-1 border-grey-200 bg-gradient-lightest'>
      <div className='flex flex-col justify-center items-center'>
        <h5 className='text-black font-semibold'>{title2.text}</h5>
        <div className='mt-2 text-grey-600 text-lg'>
          <RichText render={content.raw} htmlSerializer={htmlSerializer} />
        </div>
      </div>
    </Link>
  )
}

export default PositionItem
