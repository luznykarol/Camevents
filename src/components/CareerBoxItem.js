import React from 'react'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../utils/HtmlSerializer'

const CareerBoxItem = ({ box }) => {
  const { content, title2 } = box
  return (
    <article className='p-8 sm:p-12 lg:p-20 xl:p-24 shadow-3 border-1 border-grey-200 rounded-md bg-gradient-lightest'>
      <div className='flex flex-col justify-center items-center'>
        <h6 className='text-h6 text-center text-black font-semibold'>
          {title2.text}
        </h6>
        <div className='mt-3 text-center text-grey-600 text-lg leading-8'>
          <RichText render={content.raw} htmlSerializer={htmlSerializer} />
        </div>
      </div>
    </article>
  )
}

export default CareerBoxItem
