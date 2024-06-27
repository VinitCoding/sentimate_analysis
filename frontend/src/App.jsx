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
      <div className='fixed w-full bg-white shadow-lg lg:py-2.5 md:py-4 lg:px-10 md:px-10'>
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