import React from 'react'
import Reviews from '../components/Reviews'
import Analysis from '../components/Analysis'
import DetailedAnalysis from '../components/DetailedAnalysis'

const Home = () => {
  return (
    <section className='w-screen h-screen px-8 py-10 overflow-y-scroll bg-center bg-cover outfit' style={{ backgroundImage: `url(${bg_img})` }}>

      <div className=''>
        {/* Review div */}
        <div className=' p-6 rounded-2xl bg-[#ffffffc4]'>
          <Reviews />
          <Analysis />
        </div>

        {/* Detailed Analysis div */}
        <div className=' p-6 rounded-2xl bg-[#ffffffc4] mt-8'>
          <DetailedAnalysis />
        </div>
      </div>
    </section>
  )
}

export default Home