import React from 'react'
import growing_img from '../assets/Happy.png'
import neutral_img from '../assets/Neutral.png'
import falling_graph_img from '../assets/Sad.png'


const Reviews = ({pos_review, neu_review, neg_review}) => {
    return (
        <section className='flex justify-between lg:mx-5 md:mx-5'>
            {/* Positive Reviews */}
            <div className='flex justify-between py-3 border-2 border-blue-600 border-dotted rounded-md md:p-2 lg:p-3 w-fit h-fit lg:gap-x-[70px] md:gap-x-[100px]'>
                <div>
                    <h2 className='text-blue-700 lg:text-sm md:text-lg'>Positive Reviews</h2>
                    <h3 className='text-3xl text-green-500 '>{pos_review}</h3>
                </div>

                <img src={growing_img} alt="growing_image" className='lg:w-[74px] md:w-[80px]' />
            </div>

            {/* Neutral Reviews */}
            <div className='flex justify-between py-3 border-2 border-blue-600 border-dotted rounded-md md:p-2 lg:p-3 w-fit h-fit lg:gap-x-[70px] md:gap-x-[100px]'>
                <div>
                    <h2 className='text-blue-700 lg:text-sm md:text-lg'>Neutral Reviews</h2>
                    <h3 className='text-3xl text-[#FFD609] '>{neu_review}</h3>
                </div>

                <img src={neutral_img} alt="growing_image" className='lg:w-[74px] md:w-[80px]' />
            </div>

            {/* Negative Reviews */}
            <div className='flex justify-between py-3 border-2 border-blue-600 border-dotted rounded-md md:p-2 lg:p-3 w-fit h-fit lg:gap-x-[70px] md:gap-x-[100px]'>
                <div>
                    <h2 className='text-blue-700 lg:text-sm md:text-lg'>Negative Reviews</h2>
                    <h3 className='text-3xl text-red-500 '>{neg_review}</h3>
                </div>

                <img src={falling_graph_img} alt="growing_image" className='lg:w-[74px] md:w-[80px]' />
            </div>
        </section>
    )
}

export default Reviews