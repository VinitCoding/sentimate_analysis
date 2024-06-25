import React, { useEffect, useState } from 'react'
import bg_img from '../assets/bg_img.svg'
import Reviews from '../components/Reviews'
import Analysis from '../components/Analysis'
import DetailedAnalysis from '../components/DetailedAnalysis'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import powered_by from '../assets/powered_by.svg'

const DisplayAllData = () => {
    const location = useLocation()
    const {folderName} = location.state

    

    // State for handling data
    const [responseData, setResponseData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post('http://localhost:8030/fetch_data', {
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


    console.log(responseData);
    console.log('Data arrived', folderName);
  return (
    <section className='w-screen h-screen pb-5 overflow-y-auto bg-center bg-cover lg:px-8 md:px-11 lg:pt-20 md:pt-28 outfit' style={{ backgroundImage: `url(${bg_img})` }}>

      <div className=''>
        {/* Review div */}
        <div className=' p-6 rounded-2xl bg-[#ffffffea]'>
          <Reviews pos_review={responseData.data.positive_counts} neu_review={responseData.data.neutral_counts} neg_review={responseData.data.negative_counts}/>
          <Analysis pos_review={responseData.data.positive_counts} neu_review={responseData.data.neutral_counts} neg_review={responseData.data.negative_counts} image={responseData.data.image}/>
        </div>

        {/* Detailed Analysis div */}
        <div className=' p-6 rounded-2xl bg-[#ffffffc4] mt-8'>
          <DetailedAnalysis folderName={folderName} fileList={responseData.data.file_list} fileData={responseData.data.data}/>
        </div>
      </div>

      <div className='flex justify-center md:mt-10 lg:mt-6'>
        <img src={powered_by} alt="" className='md:w-[210px] lg:w-[170px]'/>
      </div>
    </section>
  )
}

export default DisplayAllData