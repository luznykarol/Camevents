import React from 'react'
import { RichText } from 'prismic-reactjs'
import Icon from '@/components/Icon'
import htmlSerializer from '../utils/HtmlSerializer'

const FeatureItem = ({ feature, onClick, selected }) => {
  const { title2, content, icon } = feature

  return (
    <article
      className={
        selected
          ? 'shadow-3 border-1 border-blue-600 rounded-sm  bg-white p-4 xl:p-6 cursor-pointer'
          : 'border-1 border-transparent border-blue-transparent  bg-transparent p-4 xl:p-6 cursor-pointer'
      }
      onClick={onClick}>
      <div className='flex justify-center md:justify-start'>
        <div className='icon-outline mr-4 h-11 w-11'>
          <Icon className='w-6 h-6' icon={icon} />
        </div>
        <div className='max-w-xs w-full'>
          <h6 className='text-black font-semibold mb-3'>{title2.text}</h6>
          <div className='font-normal leading-8 text-grey-600'>
            <RichText render={content.raw} htmlSerializer={htmlSerializer} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default FeatureItem
