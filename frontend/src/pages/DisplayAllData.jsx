import React, { useEffect, useState } from 'react'
import bg_img from '../assets/bg_img.svg'
import Reviews from '../components/Reviews'
import Analysis from '../components/Analysis'
import DetailedAnalysis from '../components/DetailedAnalysis'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

const DisplayAllData = () => {
    const location = useLocation()
    const {folderName} = location.state

    // State for handling data
    const [responseData, setResponseData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post('http://localhost:8006/fetch_data', {
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
    <section className='w-screen h-screen xl:px-8 lg:px-7 xl:pt-20 lg:pt-[73px] xl:pb-5 lg:pb-4 overflow-y-scroll bg-center bg-cover outfit' style={{ backgroundImage: `url(${bg_img})` }}>

      <div className=''>
        {/* Review div */}
        <div className=' xl:p-6 lg:p-5 rounded-2xl bg-[#ffffffc4]'>
          <Reviews pos_review={responseData.data.positive_counts} neu_review={responseData.data.neutral_counts} neg_review={responseData.data.negative_counts}/>
          <Analysis pos_review={responseData.data.positive_counts} neu_review={responseData.data.neutral_counts} neg_review={responseData.data.negative_counts} image={responseData.data.img_str}/>
        </div>

        {/* Detailed Analysis div */}
        <div className=' xl:p-6 lg:p-5 rounded-2xl bg-[#ffffffc4] xl:mt-8 lg:mt-7'>
          <DetailedAnalysis folderName={folderName} fileList={responseData.data.file_list} fileData={responseData.data.data}/>
        </div>
      </div>
    </section>
  )
}

export default DisplayAllData