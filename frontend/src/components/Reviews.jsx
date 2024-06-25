import React from 'react'
import growing_img from '../assets/growing_graph.svg'
import neutral_img from '../assets/neutral.svg'
import falling_graph_img from '../assets/falling_graph.svg'


const Reviews = ({pos_review, neu_review, neg_review}) => {
    return (
        <section className='flex justify-between xl:mx-5 lg:mx-4'>
            {/* Positive Reviews */}
            <div className='flex justify-between xl:p-2 lg:p-1 xl:py-3 lg:py-2 border-2 border-blue-600 border-dotted rounded-md w-fit h-fit xl:gap-x-20 lg:gap-x-[72px]'>
                <div>
                    <h2 className='text-sm text-blue-700'>Positive Reviews</h2>
                    <h3 className='text-3xl text-green-500 '>{pos_review}</h3>
                </div>

                <img src={growing_img} alt="growing_image" className='w-[74px]' />
            </div>

            {/* Neutral Reviews */}
            <div className='flex justify-between border-2 border-blue-600 border-dotted rounded-md xl:p-2 lg:p-1 xl:py-3 lg:py-2 w-fit h-fit gap-x-20'>
                <div>
                    <h2 className='text-sm text-blue-700'>Neutral Reviews</h2>
                    <h3 className='text-3xl text-yellow-600 '>{neu_review}</h3>
                </div>

                <img src={neutral_img} alt="growing_image" className='w-[74px]' />
            </div>

            {/* Negative Reviews */}
            <div className='flex justify-between xl:p-2 lg:p-1 xl:py-3 lg:py-2 border-2 border-blue-600 border-dotted rounded-md w-fit h-fit xl:gap-x-20 lg:gap-x-[72px]'>
                <div>
                    <h2 className='text-sm text-blue-700'>Negative Reviews</h2>
                    <h3 className='text-3xl text-red-500 '>{neg_review}</h3>
                </div>

                <img src={falling_graph_img} alt="growing_image" className='w-[74px]' />
            </div>
        </section>
    )
}

export default Reviews