import React from 'react'
import { RichText } from 'prismic-reactjs'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import htmlSerializer from '../utils/HtmlSerializer'

const PricingItem = ({ pricing, isChecked }) => {
  const {
    content_bottom,
    content_top,
    price_monthly,
    price_yearly,
    featured,
  } = pricing

  const contentClass = featured
    ? 'pricing__content pricing__content--featured'
    : 'pricing__content'

  return (
    <article
      className={`${
        featured
          ? 'pricing pricing--common  pt-8 px-8 lg:px-4 xl:px-8 pb-4'
          : 'border-grey-200 border-1 lg:border-0 pricing  p-8 pt-8 px-8 lg:px-4 xl:px-8 pb-4'
      }`}>
      {featured && <div className='featured__heading'>Most Common</div>}
      <div className={contentClass}>
        <div className='pricing__content--top'>
          <RichText render={content_top.raw} htmlSerializer={htmlSerializer} />
        </div>
        <div className='mt-8 pt-2 mb-1 pb-2 pricing__content--mid overflow-hidden relative  '>
          <SwitchTransition mode='out-in'>
            <CSSTransition
              classNames={isChecked ? 'pricing-card-2' : 'pricing-card'}
              addEndListener={(node, done) => {
                node.addEventListener('transitionend', done, false)
              }}
              key={isChecked}>
              {isChecked ? (
                <RichText
                  render={price_yearly.raw}
                  htmlSerializer={htmlSerializer}
                />
              ) : (
                <RichText
                  render={price_monthly.raw}
                  htmlSerializer={htmlSerializer}
                />
              )}
            </CSSTransition>
          </SwitchTransition>
        </div>
        <span className='text-xs text-grey-600 font-400'>
          billed {isChecked ? 'yearly' : 'monthly'}
        </span>
        <div
          className='pricing__content--bottom
        mt-8'>
          <RichText
            render={content_bottom.raw}
            htmlSerializer={htmlSerializer}
          />
        </div>
      </div>
    </article>
  )
}

export default PricingItem
