import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  textarea,
} from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import StackedBarChart from "../Chart/StackedBarChart";
import PieChart from "../Chart/PieChart";
import BubbleChart from "../Chart/BubbleChart";
import HorizontalBarChart from "../Chart/HorizontalBarChart";
import Histogram from "../Chart/Histogram";
import Distplot from "../Chart/Distplot"

ChartJS.register(ArcElement, Tooltip, Legend);

// const Analysis = ({ pos_review, neu_review, neg_review,  positive_wc, negative_wc }) => {
const Analysis = ({
  plotly_data,
  sen_bubble_x,
  sen_bubble_y,
  sen_bubble_size,
  sen_bubble_title,
  sen_bubble_x_axis,
  // ratings_bubble_x,
  // ratings_bubble_y,
  // ratings_bubble_size,
  // ratings_bubble_title,
  // ratings_bubble_x_axis,
  ratings_histogram_x,
  ratings_histogram_title,
  ratings_histogram_x_axis,
  ratings_median_x, 
  rating_line,
  // rating_distplot,
  rating_distplot_data,
  rating_distplot_layout,
  h_bar,
  aspect_bubble_x,
  aspect_bubble_y,
  aspect_bubble_size,
  aspect_bubble_title,
  aspect_bubble_x_axis,
  positive_counts,
  negative_counts,
  neutral_counts,
  bubble_text,
  bubble_color,
}) => {
  console.log(
    "sen_bubble values : ",
    sen_bubble_x,
    sen_bubble_y,
    sen_bubble_size,
    sen_bubble_title
  );
  console.log(
    "ratings_histogram values : ",
    ratings_histogram_x,
    ratings_histogram_title,
    ratings_histogram_x_axis,
  );
  // State for handling Positive Review word cloud modal
  const [openPositiveImage, setOpenPositiveImage] = useState(false);

  // State for handling Negative Review word cloud modal
  const [openNegativeImage, setOpenNegativeImage] = useState(false);

  // State for handling charts
  const [openChart, setOpenChart] = useState(false);

  // Coding for Pie chart
  // const chartData = {
  //   labels: ["Positive", "Neutral", "Negative"],
  //   datasets: [
  //     {
  //       label: 'Reviews in "%" ',
  //       data: [pos_review, neu_review, neg_review],
  //       backgroundColor: ["#2E8B57", "#FFD700", "#E2252B"],
  //       hoverBackgroundColor: ["#53D28A", "#FFE456", "#FF6A6E"],
  //     },
  //   ],
  // };

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
    <section className="">
      {/* <div>
        <h2></h2>
      <select name="" id="">
        <option value="">Positive Review Word Cloud</option>
        <option value="">Overall Sentiment Distribution</option>
        <option value="">Negative Review Word Cloud</option>
      </select>
      </div> */}

      {/* Overall sentimate distribution */}
      {/* <div className="flex justify-between w-full">
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
      </div> */}

      <div className="flex justify-start w-full mt-3">
        <h2 className="ml-4 text-2xl font-extrabold text-blue-700 ">
          Visualization of Analysis
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center pt-3 pb-8 mx-5 mt-4 mb-5 border-2 border-blue-600 border-dotted rounded-md gap-x-20">
        {/* Div 1 */}
        <div className="flex justify-center p-3 pb-3 mb-2 bg-gray-100 border border-gray-100 shadow-lg gap-x-3 md:mt-8 lg:mt-4">
          <StackedBarChart plotly_data={plotly_data} />
          <PieChart
            sentiment_counts={[
              positive_counts,
              negative_counts,
              neutral_counts,
            ]}
            sentiment_titles={["Positive", "Negative", "Neutral"]}
            sentiment_colors={["#90ee90", "#ff0000", "#ffd700"]}
          />
        </div>

        {/* Div 3 */}
        <div className="flex flex-col justify-center p-3 bg-gray-100 border border-gray-100 shadow-lg gap-y-3 md:mt-8 lg:mt-4">
          <h2 className="w-full py-2 mt-2 text-2xl text-[#444444] text-center bg-white">
            {aspect_bubble_title}
          </h2>
          <div className="flex gap-x-3">
            <BubbleChart
              bubble_x={aspect_bubble_x}
              bubble_y={aspect_bubble_y}
              // 3.0 > green, 3.0 = yellow, 3.0 < red
              bubble_size={aspect_bubble_size}
              color={bubble_color}
              bubble_x_axis={aspect_bubble_x_axis}
              bubble_height={400}
              bubble_width={600}
              bubble_tick_size={12}
              bubble_text={bubble_text}
            />
            <HorizontalBarChart h_bar={h_bar} />
          </div>
        </div>
        {/* Div 2 */}
        <div className="flex justify-center p-3 mb-2 bg-gray-100 border border-gray-100 shadow-lg gap-x-3 md:mt-8 lg:mt-4">
          {/* <BubbleChart
            bubble_x={sen_bubble_x}
            bubble_y={sen_bubble_y}
            bubble_size={sen_bubble_size}
            bubble_title={sen_bubble_title}
            bubble_x_axis={sen_bubble_x_axis}
            bubble_y_axis={"Counts"}
            bubble_height={400}
            bubble_width={625}
            bubble_tick_size={12}
          /> */}
          {/* <BubbleChart
            bubble_x={ratings_bubble_x}
            bubble_y={ratings_bubble_y}
            bubble_size={ratings_bubble_size}
            bubble_title={ratings_bubble_title}
            bubble_x_axis={ratings_bubble_x_axis}
            bubble_y_axis={"Counts"}
            bubble_height={400}
            bubble_width={1260}
            bubble_tick_size={12}
          /> */}

          {/* <Histogram
            rating_x={ratings_histogram_x}
            rating_line = {rating_line}
            // histogram_colors = {histogram_colors}
            // rating_y={ratings_bubble_y}
            // rating_size={ratings_bubble_size}
            ratings_median_x={ratings_median_x}
            rating_title={ratings_histogram_title}
            rating_x_axis={ratings_histogram_x_axis}
            // rating_y_axis={"Counts"}
            rating_height={400}
            rating_width={750}
            rating_tick_size={12}
          /> */}
          
          <Distplot
          rating_distplot_data = {rating_distplot_data}
          rating_distplot_layout = {rating_distplot_layout}
          />

        </div>
      </div>

      {/* Positive word cloud Pop up */}
      {/* {openPositiveImage && (
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
            <img src={`data:image/png;base64,${positive_wc}`} className="w-full " />
          </DialogBody>
        </Dialog>
      )} */}

      {/* Pie Chart pop up*/}
      {/* {openChart && (
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
      )} */}

      {/* Negative word cloud pop up */}
      {/* {openNegativeImage && (
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
          <img src={`data:image/png;base64,${negative_wc}`} className="w-full " />
          </DialogBody>
        </Dialog>
      )} */}
    </section>
  );
};

export default Analysis;
