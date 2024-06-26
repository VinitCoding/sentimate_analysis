import React from 'react'
import { IoHome } from "react-icons/io5";
import { Tooltip } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const NewFile = () => {
    const navigate = useNavigate()
    const handleNewFile = () => {
        navigate('/')
      }
  return (
    <div className="relative">
        <Tooltip content="Home Page" placement="left">
          <button className="bg-[#2D2C82] rounded-full p-2 absolute right-[70px]" onClick={handleNewFile}>
            <IoHome className="text-[18px] text-white" />
          </button>
        </Tooltip>
    </div>
  )
}

export default NewFile