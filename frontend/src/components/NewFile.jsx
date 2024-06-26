import React from 'react'
import { AiOutlineFileAdd } from "react-icons/ai";
import { Tooltip } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const NewFile = () => {
    const navigate = useNavigate()
    const handleNewFile = () => {
        navigate('/')
      }
  return (
    <div className="relative">
        <Tooltip content="Add a new file" placement="left">
          <button className="bg-[#2D2C82] rounded-full p-2 absolute right-[70px]" onClick={handleNewFile}>
            <AiOutlineFileAdd className="text-xl text-white" />
          </button>
        </Tooltip>
    </div>
  )
}

export default NewFile