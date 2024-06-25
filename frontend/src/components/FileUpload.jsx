import React from "react";
import bg_img from "../assets/bg_img.svg";
import { useRef } from "react";
import { IoCloudUpload } from "react-icons/io5";
import powerBy_img from "../assets/powered_by.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { DNA, Vortex } from "react-loader-spinner";
// import { Spinner } from '@material-tailwind/react'

const FileUpload = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  // State for file handling
  const [file, setFile] = useState(null);

  // State for loading
  const [loading, setLoading] = useState(false);

  // State for displaying Error
  const [error, setError] = useState("");

  // fileValidation file
  const fileValidation = (e) => {
    const inputFile = e.target.files[0];
    if (inputFile) {
      const fileType = inputFile.name.split(".").pop().toLowerCase();
      if (fileType === "zip") {
        setError("");
        setFile(inputFile);
        console.log("file got selected", inputFile);
      } else {
        setError('Please upload an ".zip" files only');
        setFile(null);
        console.log("Error while selecting file");
      }
    }
  };

  // handleApiData function
  const handleApiData = async () => {
    setLoading(true);
    if (!file) {
      toast.error("Please select file..", {
        duration: 2000,
      });
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://localhost:8030/begin_analysis",
        formData
      );
      if (response.status) {
        setLoading(false);
        navigate("/display_data", {
          state: { folderName: response.data.folder_name },
        });
      }
    } catch (error) {
      setLoading(false);
      console.log("Error while fetching data:", error);
    }
  };

  // Handle File function
  const handleFile = () => {
    inputRef.current.click();
  };

  return (
    <section
      className="flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden bg-center bg-no-repeat bg-cover notoSans"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <Toaster />
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={fileValidation}
      />
      <div className="flex gap-x-20 items-start bg-[#ffffffc4] md:px-[50px] lg:px-11 md:py-14 lg:py-10 rounded-lg md:mt-[120px] lg:mt-[130px]">
        {/* File Upload Div */}
        <div
          onClick={handleFile}
          className="border-[2px] border-darkBlue border-dashed rounded-md justify-center cursor-pointer"
        >
          <div className="flex flex-col items-center text-center md:px-24 lg:px-20 lg:py-[46px] md:py-[77px] ">
            <IoCloudUpload className="xl:text-[100px] lg:text-[60px] text-darkBlue" />
            <h2 className="md:text-[32px] lg:text-[28px] my-4 text-darkBlue font-bold ">
              Click to upload file
            </h2>
            <p className="my-2 md:text-[22px] lg:text-[18px] text-darkBlue">
              Max Size: <span className="font-semibold">50MB</span>
            </p>
            <p className="my-2 md:text-[22px] lg:text-[18px] text-darkBlue">
              Supported File types: <span className="font-semibold">.zip</span>
            </p>
            {error && (
              <p className="md:text-[22px] lg:text-[18px] text-center text-red-500 md:mb-[-45px] lg:mb-[-30px] md:mt-3 lg:mt-2">
                {error}
              </p>
            )}
            {file && (
              <p className="md:text-[22px] lg:text-[18px] text-center text-green-500 md:mb-[-45px] lg:mb-[-30px] md:mt-3 lg:mt-2">
                <span className="font-semibold">File Name: </span>
                {file.name}
              </p>
            )}
          </div>
        </div>

        {/* Instruction for Div */}
        <div className="w-[470px]">
          <ul className="list-disc md:leading-[40px] lg:leading-10">
            <li className="md:text-[24px] lg:text-[20px] text-darkBlue font-semibold mb-4">
              Understand customer emotions and opinions in detail.
            </li>
            <li className="md:text-[22px] lg:text-[20px] text-darkBlue font-semibold my-4">
              Extract key trends and patterns from reviews.
            </li>
            <li className="md:text-[22px] lg:text-[20px] text-darkBlue font-semibold my-4">
              Turn feedback into effective business decisions.
            </li>
            <li className="md:text-[22px] lg:text-[20px] text-darkBlue font-semibold my-4">
              Seamlessly incorporate insights into your workflow.
            </li>
          </ul>
          <button
            className="w-full px-2 py-2 mt-3 font-semibold text-white transition-all duration-75 ease-in-out border-none rounded-md bg-darkBlue hover:bg-gray-400 hover:text-darkBlue"
            onClick={handleApiData}
          >
            Send
          </button>
        </div>

        {loading && (
          <div className="fullloader">
            <div className="absolute md:left-[47%] lg:left-[46%] flex flex-col w-full h-full md:top-[38%] lg:top-[36%] md:-mb-3 ">
              {/* <DNA
                                visible={true}
                                height="200"
                                width="200"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            /> */}

              <Vortex
                visible={true}
                height="150"
                width="150"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={[
                  "#2D2C82",
                  "#FF540B",
                  "#2D2C82",
                  "#FF540B",
                  "#2D2C82",
                  "#FF540B",
                ]}
              />
              <h2 className="absolute md:top-[14%] lg:top-[19%] md:left-[-1%] lg:left-[1%]  md:text-[40px] lg:text-[25px] font-semibold text-blue-900 animate-pulse">
                Analyzing...
              </h2>
            </div>
          </div>
        )}
      </div>
      <img
        src={powerBy_img}
        alt="powered_by_image"
        className="w-[200px] md:mt-12 lg:mt-10 mb-10 "
      />
    </section>
  );
};

export default FileUpload;
