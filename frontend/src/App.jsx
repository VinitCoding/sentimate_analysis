import React from 'react'
import './App.css'
import bg_img from './assets/bg_img.svg'
import Reviews from './components/Reviews'
import Analysis from './components/Analysis'
import DetailedAnalysis from './components/DetailedAnalysis'


const App = () => {
  return (
    <section className='w-screen h-screen bg-cover bg-center outfit px-8 pt-10' style={{ backgroundImage: `url(${bg_img})` }}>

      <div className=' '>
        {/* Review div */}
        <div className=' p-6 rounded-2xl bg-[#ffffffac]'>
          <Reviews />
        </div>

        {/* Analysis div */}
        <div className=' p-6 rounded-2xl bg-[#ffffffac] mt-8'>
          <Analysis />
        </div>

        {/* Detailed Analysis div */}
        <div className=' p-6 rounded-2xl mt-8'>
          <DetailedAnalysis />
        </div>
      </div>
    </section>
  )
}

export default App