import React from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import {Routes, Route} from 'react-router-dom'
import FileUpload from './components/FileUpload'
import DisplayAllData from './pages/DisplayAllData'

const App = () => {
  return (
    <section>
      {/* Navbar */}
      <div className='fixed bg-white xl:w-full lg:w-full xl:px-6 lg:px-4 xl:py-4 lg:py-2'>
        <Navbar />
      </div>

      {/* Main Data */}
      <div>
        <Routes>
          <Route path='/' element={<FileUpload />}/>
          <Route path='/display_data' element={<DisplayAllData />}/>
        </Routes>
      </div>
      
    </section>
  )
}

export default App