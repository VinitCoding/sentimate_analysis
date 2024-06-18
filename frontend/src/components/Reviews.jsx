import React from 'react'
import growing_img from '../assets/growing.svg'
import neutral_img from '../assets/neutral.svg'
import falling_graph_img from '../assets/falling_graph.svg'


const Reviews = () => {
    return (
        <section className='flex justify-between px-10'>
            {/* Positive Reviews */}
            <div className='w-fit h-fit p-2 border-black border-dotted border-2 flex justify-between gap-x-20 rounded-md py-3'>
                <div>
                    <h2 classname='text-sm'>Positive Reviews</h2>
                    <h3 className='text-green-500 text-3xl '>100</h3>
                </div>

                <img src={growing_img} alt="growing_image" className='w-[74px]' />
            </div>

            {/* Neutral Reviews */}
            <div className='w-fit h-fit p-2 border-black border-dotted border-2 flex justify-between gap-x-20 rounded-md py-3'>
                <div>
                    <h2 classname='text-sm'>Positive Reviews</h2>
                    <h3 className='text-yellow-600 text-3xl '>100</h3>
                </div>

                <img src={neutral_img} alt="growing_image" className='w-[74px]' />
            </div>

            {/* Negative Reviews */}
            <div className='w-fit h-fit p-2 border-black border-dotted border-2 flex justify-between gap-x-20 rounded-md py-3'>
                <div>
                    <h2 classname='text-sm'>Positive Reviews</h2>
                    <h3 className='text-red-500 text-3xl '>100</h3>
                </div>

                <img src={falling_graph_img} alt="growing_image" className='w-[74px]' />
            </div>
        </section>
    )
}

export default Reviews