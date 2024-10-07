import React, { useEffect, useState } from "react";
import bg_img from "../assets/bg_img.svg";
import Reviews from "../components/Reviews";
import Analysis from "../components/Analysis";
import DetailedAnalysis from "../components/DetailedAnalysis";
import { useLocation } from "react-router-dom";
import axios from "axios";
import powered_by from "../assets/powered_by.svg";
import NewFile from "../components/NewFile";

const DisplayAllData = () => {
  const location = useLocation();
  const { data } = location.state;
console.log('data : ', data)
const [loading, setLoading] = useState(true);
// State for handling data
const [responseData, setResponseData] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8026/fetch_data", {
        folder_name: data,
      });
      if (response.status) {
        setLoading(false);
      }
      setResponseData(response.data);
    } catch (error) {
      console.log("Error while fetching the file");
    }
  }
  
  fetchData();
}, [data]);
console.log('responseData : ', responseData)
  if (!responseData || !responseData.data) {
    return <div>Loading....</div>;
  }


  // HandleNewFile function

  return (
    <section
      className="w-screen h-screen overflow-y-auto bg-center bg-cover lg:px-8 md:px-11 lg:pt-[70px] md:pt-28 outfit "
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      {/* Add new file */}
      <div className="fixed w-full">
        <NewFile />
      </div>
      <div className="lg:pt-[45px]">
        {/* Review div */}
        <div className=" px-3 py-5 rounded-2xl bg-[#ffffffea]">
          <Reviews
            pos_review={responseData.data.positive_counts}
            neu_review={responseData.data.neutral_counts}
            neg_review={responseData.data.negative_counts}
          />
          <Analysis
          plotly_data={responseData.data.aspect_bar_data}
          sen_bubble_x={responseData.data.sentiment_bubble.x}
          sen_bubble_y={responseData.data.sentiment_bubble.y}
          sen_bubble_size={responseData.data.sentiment_bubble.size}
          sen_bubble_title={responseData.data.sentiment_bubble.title}
          sen_bubble_x_axis = {responseData.data.sentiment_bubble.x_axis}
          ratings_bubble_x={responseData.data.rating_bubble.x}
          ratings_bubble_y={responseData.data.rating_bubble.y}
          ratings_bubble_size={responseData.data.rating_bubble.size}
          ratings_bubble_title={responseData.data.rating_bubble.title}
          ratings_bubble_x_axis = {responseData.data.rating_bubble.x_axis}
          h_bar = {responseData.data.aspect_counts}
          aspect_bubble_x={responseData.data.aspect_counts.x}
          aspect_bubble_y={responseData.data.aspect_counts.y}
          aspect_bubble_size={responseData.data.aspect_counts.size}
          aspect_bubble_title={responseData.data.aspect_counts.title}
          aspect_bubble_x_axis={responseData.data.aspect_counts.x_axis}
          positive_counts={responseData.data.positive_counts}
          neutral_counts={responseData.data.neutral_counts}
          negative_counts={responseData.data.negative_counts}
            // positive_wc={responseData.data.positive_wc}
            // negative_wc={responseData.data.negative_wc}
          />
        </div>

        {/* Detailed Analysis div */}
        <div className=" p-6 rounded-2xl bg-[#ffffffc4] mt-5">
          <DetailedAnalysis
            folderName={data}
            fileList={responseData.data.file_list}
            fileData={responseData.data.output_data}
            originalData={responseData.data.original_review}
            
          />
        </div>
      </div>
      {loading && (
          <div className="fullloader">
            <div className="absolute md:left-[47%] lg:left-[46%] flex flex-col w-full h-full md:top-[38%] lg:top-[36%] md:-mb-3 ">
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
      <div className="flex justify-center md:mt-8 lg:mt-4">
        <img src={powered_by} alt="" className="md:w-[210px] lg:w-[170px]" />
      </div>
    </section>
  );
};

export default DisplayAllData;
