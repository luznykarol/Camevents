import React from 'react'

import { Link } from 'gatsby'
const JobItem = ({ job }) => {
  const title = job.node.data.title1.text
  const link = job.node.uid

  return (
    <Link
      to={`/careers/${link}/`}
      className='p-12 lg:p-20 xl:p-24 shadow-3 border-1 border-grey-200 rounded-md bg-gradient-lightest'>
      <div className='flex flex-col justify-center items-center'>
        <h5 className='text-h5 text-center text-black font-semibold'>
          {title}
        </h5>
        {/* <div className='mt-3 text-center text-grey-600 text-lg leading-8'>
          <RichText render={content.raw} />
        </div> */}
      </div>
    </Link>
  )
}

export default JobItem
