import React from 'react'
import growing_img from '../assets/growing.svg'
import neutral_img from '../assets/neutral.svg'
import falling_graph_img from '../assets/falling_graph.svg'


const Reviews = ({pos_review, neu_review, neg_review}) => {
    return (
        <section className='flex justify-between mx-5'>
            {/* Positive Reviews */}
            <div className='w-fit h-fit p-2 border-blue-600 border-dotted border-2 flex justify-between gap-x-20 rounded-md py-3'>
                <div>
                    <h2 className='text-sm text-blue-700'>Positive Reviews</h2>
                    <h3 className='text-green-500 text-3xl '>{pos_review}</h3>
                </div>

                <img src={growing_img} alt="growing_image" className='w-[74px]' />
            </div>

            {/* Neutral Reviews */}
            <div className='w-fit h-fit p-2 border-blue-600 border-dotted border-2 flex justify-between gap-x-20 rounded-md py-3'>
                <div>
                    <h2 className='text-sm text-blue-700'>Neutral Reviews</h2>
                    <h3 className='text-yellow-600 text-3xl '>{neu_review}</h3>
                </div>

                <img src={neutral_img} alt="growing_image" className='w-[74px]' />
            </div>

            {/* Negative Reviews */}
            <div className='w-fit h-fit p-2 border-blue-600 border-dotted border-2 flex justify-between gap-x-20 rounded-md py-3'>
                <div>
                    <h2 className='text-sm text-blue-700'>Negative Reviews</h2>
                    <h3 className='text-red-500 text-3xl '>{neg_review}</h3>
                </div>

                <img src={falling_graph_img} alt="growing_image" className='w-[74px]' />
            </div>
        </section>
    )
}

export default Reviews