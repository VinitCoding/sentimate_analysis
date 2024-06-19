import React from 'react'
import './App.css'
import bg_img from './assets/bg_img.svg'
import Reviews from './components/Reviews'
import Analysis from './components/Analysis'
import DetailedAnalysis from './components/DetailedAnalysis'


const App = () => {
  return (
    <section className='w-screen h-screen bg-cover bg-center outfit px-8 py-10 overflow-y-scroll' style={{ backgroundImage: `url(${bg_img})` }}>

      <div className=' '>
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

export default App