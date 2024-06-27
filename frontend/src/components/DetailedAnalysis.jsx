import React, { useState } from "react";
import { MdInsertDriveFile } from "react-icons/md";
import ReadMoreArea from "@foxeian/react-read-more";

const DetailedAnalysis = ({ folderName, fileList, fileData, originalData }) => {
  
  // state for selected file
  const [selectedFile, setSelectedFile] = useState("");
  
  // state for displaying detailed data
  const [detailedData, setDetailedData] = useState("");

  // state for displaying original data
  const [rawData, setRawData] = useState("")

  // HandleDropDwon function
  const handleDropDown = (e) => {
    const selectedValue = e.target.value;
    setSelectedFile(selectedValue);
    console.log(
      `Data of selected file (${selectedValue}): ${fileData[selectedValue]}`
    );
    setDetailedData(fileData[selectedValue]);
    setRawData(originalData[selectedValue])
  };

  // console.log(detailedData);
  return (
    <div className="">
      {/*  */}
      <div className="flex justify-between mx-5 gap-x-20 focus:border-none">
        <p className="w-[30%] px-3 py-2 border-[2px] border-blue-500 border-dotted text-lg rounded-lg text-blue-800 hover:cursor-default">
          <span className="font-medium">Folder Name:</span> {folderName}
        </p>
        <select
          onChange={handleDropDown}
          className="w-[30%] text-lg border-[1.6px] border-blue-500 rounded-lg text-blue-800 px-2 hover:cursor-pointer"
        >
          <option value="" selected disabled hidden>
            Select a file
          </option>
          {fileList.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <p className="flex text-lg items-center gap-x-3 border-[1.6px] px-4 py-2 border-blue-400 mx-auto w-[30%] rounded-lg hover:cursor-default text-blue-800 ">
          <MdInsertDriveFile />
          <span className="font-medium">Selected File:</span>
          {selectedFile}
        </p>
      </div>

      {/*  */}
      {selectedFile && (
        <div className="mt-6 border-[1.6px] border-blue-400 border-dotted mx-5 rounded-lg">
          <h3 className="p-3 text-2xl font-bold text-blue-700">
            Original Review
          </h3>
          <p className="p-3 text-lg text-blue-800 outfit">
            <ReadMoreArea
              lettersLimit={45}
              buttonStyle={{
                color: "white",
                fontSize: "1rem",
                backgroundColor: "#42a5f5",
                borderRadius: "2px",
                marginLeft: "5px",
              }}
            >
              {
                rawData
              }
            </ReadMoreArea>
          </p>
        </div>
      )}
      <div className="mt-6 border-[1.6px] border-blue-400 border-dotted mx-5 rounded-lg">
        <h3 className="p-3 text-2xl font-bold text-blue-700">
          Detailed Analysis
        </h3>
        <pre className="p-3 text-lg text-blue-800 outfit" wrap="hard">
          {detailedData}
        </pre>
      </div>
    </div>
  );
};

export default DetailedAnalysis;
