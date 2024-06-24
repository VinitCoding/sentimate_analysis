import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = ({ image, pos_review, neu_review, neg_review }) => {
  // State for handling word cloud modal
  const [openImage, setOpenImage] = useState(false);

  // State for handling charts
  const [openChart, setOpenChart] = useState(false);

  // Coding for Pie chart
  const chartData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: [pos_review, neu_review, neg_review],
        backgroundColor: ['#2E8B57', '#FFD700', '#E2252B'],
        hoverBackgroundColor: ['#53D28A', '#FFE456', '#FF6A6E'],
      },
    ],
  };

  const options = {}

  const handleImage = () => {
    setOpenImage(!openImage);
  };

  const handleChart = () => {
    setOpenChart(!openChart);
  };
  return (
    <section className="border-blue-600 border-2 border-dotted py-8 flex justify-center gap-x-20 mx-5 rounded-md mt-12">
      {/* Overall sentimate distribution */}
      <button
        className="border-blue-700 border-[2px] px-4 py-2 rounded-md w-full mx-8 text-lg font-semibold text-blue-800"
        onClick={handleChart}
      >
        Overall Sentiment Distribution
      </button>
      <button
        className="border-blue-700 border-[2px] px-4 py-2 rounded-md w-full mx-8 text-lg font-semibold text-blue-800"
        onClick={handleImage}
      >
        Word Cloud
      </button>

      {openImage && (
        <Dialog
          open={openImage}
          className="flex justify-center flex-col items-center "
        >
          <DialogHeader className="w-full flex justify-between border-b-2 border-blue-gray-200">
            <h2>Word Cloud</h2>
            <IoMdClose
              onClick={handleImage}
              className="hover:bg-red-500 hover:text-white cursor-pointer transition-all ease-in-out duration-75 rounded-md"
              title="Close"
            />
          </DialogHeader>
          <DialogBody className="w-full flex justify-center ">
            <img src={`data:image/png;base64,${image}`} className="w-full " />
          </DialogBody>
        </Dialog>
      )}

      {openChart && (
        <Dialog
          open={openChart}
          className="flex justify-center flex-col items-center "
        >
          <DialogHeader className="w-full flex justify-between border-b-2 border-blue-gray-200">
            <h2>Overall Sentiment Distribution</h2>
            <IoMdClose onClick={handleChart}
              className="hover:bg-red-500 hover:text-white cursor-pointer transition-all ease-in-out duration-75 rounded-md"
              title="Close"/>
          </DialogHeader>
          <DialogBody className="w-[60%] flex justify-center">
            <Pie data={chartData} options={options}>
            </Pie>
          </DialogBody>
        </Dialog>
      )}
    </section>
  );
};

export default Analysis;
