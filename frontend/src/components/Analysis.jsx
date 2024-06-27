import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import chistats from '../assets/chistat_logo.png'

ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = ({ image, pos_review, neu_review, neg_review }) => {
  // State for handling Positive Review word cloud modal
  const [openPositiveImage, setOpenPositiveImage] = useState(false);

  // State for handling Negative Review word cloud modal
  const [openNegativeImage, setOpenNegativeImage] = useState(false);

  // State for handling charts
  const [openChart, setOpenChart] = useState(false);

  // Coding for Pie chart
  const chartData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: 'Reviews in "%" ',
        data: [pos_review, neu_review, neg_review],
        backgroundColor: ["#2E8B57", "#FFD700", "#E2252B"],
        hoverBackgroundColor: ["#53D28A", "#FFE456", "#FF6A6E"],
      },
    ],
  };

  const options = {};

  const handlePositiveImage = () => {
    setOpenPositiveImage(!openPositiveImage);
  };
  const handleChart = () => {
    setOpenChart(!openChart);
  };
  const handleNegativeImage = () => {
    setOpenNegativeImage(!openNegativeImage);
  };
  return (
    <section className="flex flex-col items-center justify-center py-8 mx-5 mt-12 border-2 border-blue-600 border-dotted rounded-md gap-x-20">
      {/* Overall sentimate distribution */}
      <div className="flex justify-between w-full">
        <button
          className="border-blue-700 border-[2px] px-4 py-2 rounded-md w-fit mx-5 text-lg font-semibold text-blue-800"
          onClick={handlePositiveImage}
        >
          Positive Review Word Cloud
        </button>
        <button
          className="border-blue-700 border-[2px] px-4 py-2 rounded-md mx-5 text-lg font-semibold text-blue-800 w-fit"
          onClick={handleChart}
        >
          Overall Sentiment Distribution
        </button>
        <button
          className="border-blue-700 border-[2px] px-4 py-2 rounded-md w-fit mx-5 text-lg font-semibold text-blue-800"
          onClick={handleNegativeImage}
        >
          Negative Review Word Cloud
        </button>
      </div>

      {openPositiveImage ? (
        <Dialog
          open={openPositiveImage}
          className="flex flex-col items-center justify-center "
        >
          <DialogHeader className="flex justify-between w-full border-b-2 border-blue-gray-200">
            <h2>Positive Review Word Cloud</h2>
            <IoMdClose
              onClick={handlePositiveImage}
              className="transition-all duration-75 ease-in-out rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
              title="Close"
            />
          </DialogHeader>
          <DialogBody className="flex justify-center w-full ">
            <img src={`data:image/png;base64,${image}`} className="w-full " />
          </DialogBody>
        </Dialog>
      ): (null)}

      {openChart && (
        <Dialog
          open={openChart}
          className="flex flex-col items-center justify-center "
        >
          <DialogHeader className="flex justify-between w-full border-b-2 border-blue-gray-200">
            <h2>Overall Sentiment Distribution</h2>
            <IoMdClose
              onClick={handleChart}
              className="transition-all duration-75 ease-in-out rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
              title="Close"
            />
          </DialogHeader>
          <DialogBody className="w-[60%] flex justify-center">
            <Pie data={chartData} options={options}></Pie>
          </DialogBody>
        </Dialog>
      )}

      {openNegativeImage ? (
        <Dialog
          open={openNegativeImage}
          className="flex flex-col items-center justify-center "
        >
          <DialogHeader className="flex justify-between w-full border-b-2 border-blue-gray-200">
            <h2>Negative Review Word Cloud</h2>
            <IoMdClose
              onClick={handleNegativeImage}
              className="transition-all duration-75 ease-in-out rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
              title="Close"
            />
          </DialogHeader>
          <DialogBody className="flex justify-center w-full ">
          <img src={`data:image/png;base64,${image}`} className="w-full " />
          </DialogBody>
        </Dialog>
      ): (null)}
    </section>
  );
};

export default Analysis;
