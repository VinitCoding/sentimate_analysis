import React from 'react'
import bg_img from '../assets/bg_img.svg'
import { useRef } from 'react'
import { IoCloudUpload } from "react-icons/io5";
import powerBy_img from '../assets/powered_by.svg'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '@material-tailwind/react'

const FileUpload = () => {
    const inputRef = useRef()
    const navigate = useNavigate()
    // State for file handling
    const [file, setFile] = useState(null)

    // State for loading
    const [loading, setLoading] = useState(false)

    // fileValidation file
    const fileValidation = (e) => {
        const inputFile = e.target.files[0]
        if (inputFile) {
            const fileType = inputFile.name.split('.').pop().toLowerCase()
            if (fileType === 'zip') {
                setFile(inputFile)
                console.log('file got selected', inputFile);
            } else {
                setFile(null)
                console.log('Error while selecting file');
            }
        }

    }

    // handleApiData function
    const handleApiData = async () => {
        setLoading(true)
        if (!file) {
            setLoading(false)
            return
        }
        const formData = new FormData()
        formData.append('file', file)
        try {
            const response = await axios.post('http://localhost:8000/begin_analysis', formData)
            if (response.status) {
                setLoading(false)
                console.log('Data from Api', response);
                navigate('/display_data', { state: { folderName: response.data.folder_name } })
            }
        } catch (error) {
            setLoading(false)
            console.log('Error while fetching data:', error);
        }
    }

    // Handle File function
    const handleFile = () => {
        inputRef.current.click()
    }


    return (
        <section className='w-screen h-screen bg-cover bg-no-repeat bg-center notoSans flex  flex-col justify-center items-center ' style={{ backgroundImage: `url(${bg_img})` }}>
            <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={fileValidation} />
            <div className='flex gap-x-20 items-start bg-[#ffffffc4] rounded-lg p-24 mt-20'>
                {/* File Upload Div */}
                <div onClick={handleFile} className='border-[2px] border-darkBlue border-dashed rounded-md justify-center cursor-pointer'>
                    <div className='items-center text-center flex flex-col py-10 px-16'>
                        <IoCloudUpload className='text-[70px] text-darkBlue' />
                        <h2 className='text-[25px] my-4 text-darkBlue font-bold '>Click to upload file</h2>
                        <p className='my-2 text-[18px] text-darkBlue'>Max Size: <span className='font-semibold'>50MB</span></p>
                        <p className='my-2 text-[18px] text-darkBlue'>Supported File types: <span className='font-semibold'>.zip</span></p>

                    </div>
                </div>

                {/* Instruction for Div */}
                <div className='w-[470px]'>
                    <ul className='list-disc leading-8'>
                        <li className='text-[20px] text-darkBlue font-semibold mb-4'>Understand customer emotions and opinions in detail.</li>
                        <li className='text-[20px] text-darkBlue font-semibold my-4'>Extract key trends and patterns from reviews.</li>
                        <li className='text-[20px] text-darkBlue font-semibold my-4'>Turn feedback into effective business decisions.</li>
                        <li className='text-[20px] text-darkBlue font-semibold my-4'>Seamlessly incorporate insights into your workflow.</li>
                    </ul>
                    <button className='w-full bg-darkBlue text-white px-2 py-2 border-none rounded-md mt-3 hover:bg-gray-400 hover:text-darkBlue transition-all duration-75 ease-in-out font-semibold' onClick={handleApiData}>Send</button>
                </div>

                {
                    loading && (
                        <div className='fullloader' >
                            <center className='center'>
                                <div class="loader" id="loader"></div>
                                <div class="loader" id="loader2"></div>
                                <div class="loader" id="loader3"></div>
                                <div class="loader" id="loader4"></div>
                                <span id="text">LOADING...</span>
                            </center>
                        </div>
                    )
                }

            </div>
            <img src={powerBy_img} alt="powered_by_image" className='mt-12 w-18 ' />

        </section>
    )
}

export default FileUpload