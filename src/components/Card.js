import React from 'react'
import Icon from '@/components/Icon'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../utils/HtmlSerializer'

const Card = ({ card, type }) => {
  const cardClass =
    type === 'Dark'
      ? 'card-dark max-w-md w-full mx-auto sm:mx-0 sm:max-w-none'
      : 'card-light max-w-md w-full mx-auto sm:mx-0 sm:max-w-none'
  const { icon, content } = card

  return (
    <article className={cardClass}>
      {icon && (
        <Icon className='mb-8 flex justify-center items-center' icon={icon} />
      )}

      <div className='markdown-content text-center mt-6'>
        <RichText render={content.raw} htmlSerializer={htmlSerializer} />
      </div>
    </article>
  )
}

export default Card
