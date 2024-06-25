import React from 'react'
import Reviews from '../components/Reviews'
import Analysis from '../components/Analysis'
import DetailedAnalysis from '../components/DetailedAnalysis'

const Home = () => {
  return (
    <section className='w-screen h-screen overflow-y-scroll bg-center bg-cover xl:px-8 lg:px-7 lg:py-10 xl:py-9 outfit' style={{ backgroundImage: `url(${bg_img})` }}>

      <div className=''>
        {/* Review div */}
        <div className=' xl:p-6 lg:p-5 rounded-2xl bg-[#ffffffc4]'>
          <Reviews />
          <Analysis />
        </div>

        {/* Detailed Analysis div */}
        <div className=' xl:p-6 lg:p-5 rounded-2xl bg-[#ffffffc4] xl:mt-8 lg:mt-7'>
          <DetailedAnalysis />
        </div>
      </div>
    </section>
  )
}

export default Home