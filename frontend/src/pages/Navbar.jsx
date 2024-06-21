import React from 'react'
import chistats_logo from '../assets/chistat_logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <h2 className='text-xl font-semibold text-darkBlue'>Sentimate Analysis</h2>
      <img src={chistats_logo} alt="logo" className='w-28 h-6'/>
    </div>
  )
}

export default Navbar