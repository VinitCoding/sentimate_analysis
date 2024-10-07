import React, { useEffect, useState } from "react";
import bg_img from "../assets/bg_img.svg";
import Reviews from "../components/Reviews";
import Analysis from "../components/Analysis";
import DetailedAnalysis from "../components/DetailedAnalysis";
import axios from "axios";
import powered_by from "../assets/powered_by.svg";
import footer_logo from "../assets/footer_logo.svg";
import NewFile from "../components/NewFile";
import { useLocation } from "react-router-dom";

const DisplayAllData = () => {
  // const location = useLocation()
  // const {data} = location.state
  const [responseData, setResponseData] = useState(null); // state for sotring data from fetch_data
  const [respdata, setRespData] = useState({}); // state for storing datad from get_products route
  const [selectedProduct, setSelectedProduct] = useState(''); // Store selected product
  const [loading, setLoading] = useState(false); // Handle loading state

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:8026/get_products");
      setRespData(response.data); // Set respdata when fetching products
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Effect to set the default selected product once respdata is populated
  useEffect(() => {
    if (Object.keys(respdata).length > 0) {
      const defaultProduct = Object.keys(respdata)[0]; // Get the first product
      setSelectedProduct(defaultProduct); // Set default product as selected
      onChange(respdata[defaultProduct]); // Call onChange with the default product's value
    }
  }, [respdata]);

  const handleClick = (e) => {
    setLoading(true)
    const value = e.target.value; // Get the selected product
    setSelectedProduct(value);    // Set the selected product
    const val = respdata[value];  // Get the value for the selected product
    onChange(val);
    setLoading(false)
    // setTimeout(() => {
    //   setLoading(true)  
    //   setLoading(false)  
    // }, 2000)              // Call onChange with the selected product's value
  };

  const onChange = async (value) => {
    try {
      // setLoading(true); // Start loading
      const response = await axios.post("http://localhost:8026/fetch_data", {
        folder_name: value,
      });
      console.log(response);
      setResponseData(response.data); // Set responseData here
    } catch (error) {
      console.log("Error while fetching the file");
      setLoading(false);
    }
  };
  // const rating_distplot = JSON.parse(responseData.data.rating_distplot)
  // console.log('Rating Distplot in DisplayAllData: ', rating_distplot);
  // console.log('Rating Distplot in DisplayAllData: ', responseData.data.rating_distplot);
  



  return (
    <section
      className="w-screen h-screen overflow-x-hidden bg-center bg-cover scroll-smooth"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      {/* Add new file */}
      <div className="fixed -right-11 top-16">
        <NewFile />
      </div>

      <div className="overflow-y-auto lg:px-8 md:px-11 lg:pt-[70px] md:pt-28 outfit">
        {/* Always show the product dropdown */}
      <div className="bg-[#ffffffea] w-[99%] rounded-xl mt-3 py-4 px-6 pb-6 border">
        <h2 className="text-2xl font-extrabold text-blue-700">Selection of Product</h2>
        <select
          className="w-[30%] mt-3 py-2 text-lg border-[1.6px] border-blue-500 rounded-lg text-blue-800 px-2 hover:cursor-pointer focus:outline-none"
          onChange={handleClick}
          value={selectedProduct} // Set the selected product
        >
          {/* <option value="" disabled hidden>
            Select a product
          </option> */}
          {Object.keys(respdata).map((item, index) => (
            <option value={item} key={index} >
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Conditionally show the descriptive section based on whether a product is selected */}
      {selectedProduct && responseData && responseData.data ? (
        <div className="lg:mt-6 w-[99%]">
          {/* Review div */}
          <div className="px-3 py-5 rounded-2xl bg-[#ffffffea]">
            <Reviews
              pos_review={responseData.data.positive_counts ?? 0}
              neu_review={responseData.data.neutral_counts ?? 0}
              neg_review={responseData.data.negative_counts ?? 0}
            />
           
          </div>

          <div className="p-3 mt-6 rounded-2xl bg-[#ffffffea]">
          <Analysis
              plotly_data={responseData.data.aspect_bar_data ?? []}
              sen_bubble_x={responseData.data.sentiment_bubble?.x ?? []}
              sen_bubble_y={responseData.data.sentiment_bubble?.y ?? []}
              sen_bubble_size={responseData.data.sentiment_bubble?.size ?? []}
              sen_bubble_title={responseData.data.sentiment_bubble?.title ?? ''}
              sen_bubble_x_axis={responseData.data.sentiment_bubble?.x_axis ?? ''}
              
              ratings_histogram_x={responseData.data.rating_histogram?.x ?? []}
              ratings_histogram_title={responseData.data.rating_histogram?.title ?? ''}
              ratings_histogram_x_axis={responseData.data.rating_histogram?.x_axis ?? ''}
              ratings_median_x={responseData.data.rating_histogram?.median_x ?? ''}
              rating_line={responseData.data.rating_histogram?.rating_line ?? ''}
              // rating_distplot={responseData.data.rating_distplot ?? ''}
              rating_distplot_data={responseData.data.rating_distplot.data ?? ''}
              rating_distplot_layout={responseData.data.rating_distplot.layout ?? ''}
              // histogram_colors = {responseData.data.rating_histogram?.histogram_colors ?? ''}
              
              // ratings_bubble_x={responseData.data.rating_bubble?.x ?? []}
              // ratings_bubble_y={responseData.data.rating_bubble?.y ?? []}
              // ratings_bubble_size={responseData.data.rating_bubble?.size ?? []}
              // ratings_bubble_title={responseData.data.rating_bubble?.title ?? ''}
              // ratings_bubble_x_axis={responseData.data.rating_bubble?.x_axis ?? ''}
              h_bar={responseData.data.aspect_counts ?? []}
              aspect_bubble_x={responseData.data.aspect_counts?.x ?? []}
              aspect_bubble_y={responseData.data.aspect_counts?.y ?? []}
              aspect_bubble_size={responseData.data.aspect_counts?.size ?? []}
              aspect_bubble_title={responseData.data.aspect_counts?.title ?? ''}
              aspect_bubble_x_axis={responseData.data.aspect_counts?.x_axis ?? ''}
              positive_counts={responseData.data.positive_counts ?? 0}
              neutral_counts={responseData.data.neutral_counts ?? 0}
              negative_counts={responseData.data.negative_counts ?? 0}
              bubble_text={responseData.data.aspect_counts?.text ?? ''}
              bubble_color={responseData.data.aspect_counts?.bubble_color ?? ''}
            />
          </div>
          
          <div className="p-6 rounded-2xl bg-[#ffffffea] mt-5">
            <DetailedAnalysis
              folderName={responseData.data.folder_name ?? ''}
              // folderName={data ?? ''}
              fileList={responseData.data.file_list ?? []}
              fileData={responseData.data.output_data ?? []}
              originalData={responseData.data.original_review ?? []}
            />
          </div>
        </div>
      ) : (
        <div className="lg:pt-[45px]">
          {/* Message to show when no product is selected */}
          <p className="text-gray-500">Please select a product to view its details.</p>
        </div>
      )}

      <div className="flex justify-center mb-3 md:mt-8 lg:mt-4">
        {/* <img src={powered_by} alt="" className="md:w-[210px] lg:w-[170px]" /> */}
        <img src={footer_logo} alt="" className="md:w-[210px] lg:w-[14%]" />
      </div>

      {
        loading && (
          <h3>Loading Animation... please wait</h3>
        )
      }
      </div>
    </section>
  );
};

export default DisplayAllData;



