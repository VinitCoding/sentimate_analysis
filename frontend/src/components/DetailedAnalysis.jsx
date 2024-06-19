import React, { useRef } from 'react'
import { MdInsertDriveFile } from "react-icons/md";;

const DetailedAnalysis = () => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.click()
  }
  return (
    <div className=''>
      <input ref={inputRef} type='file' style={{display: 'none'}}></input>

      {/*  */}
      <div className='flex justify-between gap-x-20 focus:border-none mx-5'>
        <button className='w-[30%] px-3 py-2 border-[2px] border-blue-500 border-dotted text-lg rounded-lg text-blue-800'>Analysis 1</button>
        <select name="" id="" className='w-[30%] text-lg border-[1.6px] border-blue-500 rounded-lg text-blue-800 px-2'> 
          <option value="" >Choose 1</option>
          <option value="" >Choose 2</option>
          <option value="" >Choose 3</option>
        </select>
        <p onClick={handleClick} className='flex text-xl items-center gap-x-4 border-[1.6px] px-4 py-2 border-blue-400 mx-auto w-[30%] rounded-lg hover:cursor-pointer text-blue-800 '><MdInsertDriveFile />Choose file</p>
      </div>

      {/*  */}
      <div className='mt-10 border-[1.6px] border-blue-400 border-dotted mx-5 rounded-lg'>
        <h3 className='text-blue-700 text-2xl p-3 font-bold'>Detailed Analysis</h3>
        <p className='p-3 text-blue-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, nisi sit amet euismod iaculis, tellus velit bibendum massa, a dignissim felis diam nec sapien. Etiam lacinia egestas dui. Donec volutpat nisi sed maximus dignissim. Pellentesque dapibus porttitor massa. Duis nec blandit dolor, faucibus dignissim ligula. In ac tempor nibh. Fusce et tortor nisl. Nunc sit amet ligula vel tellus iaculis rutrum in nec arcu. Morbi id sollicitudin justo. Vivamus ut rhoncus arcu. Sed tincidunt porttitor nisi, eget feugiat orci. Mauris mollis dignissim erat, sed efficitur nibh. Nulla aliquam sapien nibh, in condimentum ligula semper at. Donec at nulla eu ex interdum dapibus ut sed quam. Cras dictum turpis et felis egestas, in dictum turpis luctus. Suspendisse dictum, nulla non placerat ultricies, enim eros vehicula lacus, eu tristique magna libero quis augue.</p>
      </div>
    </div>
  )
}

export default DetailedAnalysis