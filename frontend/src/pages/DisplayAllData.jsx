import React from 'react'
import bg_img from '../assets/bg_img.svg'
import Reviews from '../components/Reviews'
import Analysis from '../components/Analysis'
import DetailedAnalysis from '../components/DetailedAnalysis'
import {useLocation} from 'react-router-dom'

const DisplayAllData = () => {
  const location = useLocation()
  const {folderName} = location.state

  console.log('Data arrived', folderName);
  return (
    <section className='w-screen h-screen bg-cover bg-center outfit px-8 pb-5 pt-20 overflow-y-scroll' style={{ backgroundImage: `url(${bg_img})` }}>

      <div className=' '>
        {/* Review div */}
        <div className=' p-6 rounded-2xl bg-[#ffffffc4]'>
          <Reviews />
          <Analysis />
        </div>

        {/* Detailed Analysis div */}
        <div className=' p-6 rounded-2xl bg-[#ffffffc4] mt-8'>
          <DetailedAnalysis folderName={folderName}/>
        </div>
      </div>
    </section>
  )
}

export default DisplayAllData