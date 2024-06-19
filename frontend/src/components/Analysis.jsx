import React from 'react'

const Analysis = () => {
  return (
    <section className='border-blue-600 border-2 border-dotted py-8 flex justify-center gap-x-20 mx-5 rounded-md mt-12'>
      {/* Overall sentimate distribution */}
        <button className='border-blue-700 border-[2px] px-4 py-2 rounded-md w-full mx-8 text-lg font-semibold text-blue-800'>Overall Sentiment Distribution</button>
        <button className='border-blue-700 border-[2px] px-4 py-2 rounded-md w-full mx-8 text-lg font-semibold text-blue-800'>Word Cloud</button>
    </section>
  )
}

export default Analysis