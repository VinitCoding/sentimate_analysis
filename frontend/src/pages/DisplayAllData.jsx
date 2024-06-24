import React, { useEffect, useState } from 'react'
import bg_img from '../assets/bg_img.svg'
import Reviews from '../components/Reviews'
import Analysis from '../components/Analysis'
import DetailedAnalysis from '../components/DetailedAnalysis'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const DisplayAllData = () => {
    const location = useLocation()
    const {folderName} = location.state

    // State for handling data
    const [responseData, setResponseData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post('http://localhost:8000/fetch_data', {
                    folder_name: folderName
                })
                setResponseData(response.data)
            } catch (error) {
                console.log('Error while fetching the file');
            }
        }

        fetchData()
    }, [folderName])

    if(!responseData || !responseData.data){
        return <div>Loading....</div>
    }


    console.log();
    console.log('Data arrived', folderName);
  return (
    <section className='w-screen h-screen px-8 pt-20 pb-5 overflow-y-scroll bg-center bg-cover outfit' style={{ backgroundImage: `url(${bg_img})` }}>

      <div className=''>
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