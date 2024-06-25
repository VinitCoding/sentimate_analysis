import React, { useState } from "react";
import { MdInsertDriveFile } from "react-icons/md";

const DetailedAnalysis = ({ folderName, fileList, fileData }) => {
  // state for displaying detailed data
  const [detailedData, setDetailedData] = useState("");

  // state for selected file
  const [selectedFile, setSelectedFile] = useState("");

  // State for showing less or more
  const [isOpen, setIsOpen] = useState(false)
  const [showReadMoreButton, setShowReadMoreButton] = useState(false)

  // HandleDropDwon function
  const handleDropDown = (e) => {
    const selectedValue = e.target.value;
    setSelectedFile(selectedValue);
    console.log(
      `Data of selected file (${selectedValue}): ${fileData[selectedValue]}`
    );
    setDetailedData(fileData[selectedValue]);
  };

  // console.log(detailedData);
  return (
    <div className="">
      {/*  */}
      <div className="flex justify-between mx-5 gap-x-20 focus:border-none">
        <p className="w-[30%] px-3 py-2 border-[2px] border-blue-500 border-dotted text-lg rounded-lg text-blue-800">
          Folder Name: {folderName}
        </p>
        <select
          onChange={handleDropDown}
          className="w-[30%] text-lg border-[1.6px] border-blue-500 rounded-lg text-blue-800 px-2"
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
        <p className="flex text-lg items-center gap-x-3 border-[1.6px] px-4 py-2 border-blue-400 mx-auto w-[30%] rounded-lg hover:cursor-pointer text-blue-800 ">
          <MdInsertDriveFile />
          Selected File: {selectedFile}
        </p>
      </div>

      {/*  */}
      {selectedFile && (
        <div className="mt-10 border-[1.6px] border-blue-400 border-dotted mx-5 rounded-lg">
          <h3 className="p-3 text-2xl font-bold text-blue-700">Original Review</h3>
          <p className="p-3 text-lg text-blue-800 outfit" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit asperiores placeat eum aliquid? Libero sunt magnam dicta aut repellendus illum, esse dolore a, deleniti tempore vero! Quidem delectus iusto in temporibus voluptates cumque soluta fuga commodi pariatur nemo voluptatum exercitationem repellat obcaecati itaque, minus nihil eligendi amet laboriosam! Omnis repellendus ullam pariatur aspernatur explicabo harum! Quo adipisci, deleniti ullam laudantium cum sit officia, vitae ratione consectetur tenetur commodi est pariatur veritatis id eum consequuntur autem repudiandae qui. Officiis quaerat hic repudiandae veritatis at repellendus ipsa, veniam modi nesciunt corrupti natus facilis quos dolore autem molestias sit voluptatum? Aperiam, enim.
          </p>
        </div>
      )}
      <div className="mt-10 border-[1.6px] border-blue-400 border-dotted mx-5 rounded-lg">
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
