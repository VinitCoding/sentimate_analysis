import React, { useState } from "react";
import { MdInsertDriveFile } from "react-icons/md";

const DetailedAnalysis = ({ folderName, fileList, fileData }) => {

  // state for displaying detailed data
  const [detailedData, setDetailedData] = useState('')

  // state for selected file
  const [selectedFile, setSelectedFile] = useState('')

  // HandleDropDwon function 
  const handleDropDown = (e) => {
    const selectedValue = e.target.value
    setSelectedFile(selectedValue)
    console.log(`Data of selected file (${selectedValue}): ${fileData[selectedValue]}`);
    setDetailedData(fileData[selectedValue])
  }

  console.log(detailedData);
  return (
    <div className="">
      {/*  */}
      <div className="flex justify-between gap-x-20 focus:border-none mx-5">
        <p className="w-[30%] px-3 py-2 border-[2px] border-blue-500 border-dotted text-lg rounded-lg text-blue-800">
          Folder Name: {folderName}
        </p>
        <select
          onChange={handleDropDown}
          className="w-[30%] text-lg border-[1.6px] border-blue-500 rounded-lg text-blue-800 px-2"
        >
          <option value='' selected disabled hidden>Select a file</option>
          {fileList.map((item, index) => (
            <option value={item} key={index} >{item}</option>
          ))}
        </select>
        <p className="flex text-xl items-center gap-x-3 border-[1.6px] px-4 py-2 border-blue-400 mx-auto w-[30%] rounded-lg hover:cursor-pointer text-blue-800 ">
          <MdInsertDriveFile />
          Selected File: {selectedFile}
        </p>
      </div>

      {/*  */}
      <div className="mt-10 border-[1.6px] border-blue-400 border-dotted mx-5 rounded-lg">
        <h3 className="text-blue-700 text-2xl p-3 font-bold">
          Detailed Analysis
        </h3>
        <pre className="p-3 text-blue-800 outfit text-lg" wrap='hard'>
          {detailedData}
        </pre>
      </div>
    </div>
  );
};

export default DetailedAnalysis;
