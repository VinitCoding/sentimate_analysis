import React, { useEffect, useState } from "react";
import bg_img from "../assets/bg_img.svg";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { SlOptionsVertical } from "react-icons/sl";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ProductSelection = () => {
  const [respdata, setRespData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.post("http://localhost:8026/get_products");
    // console.log(response.data);
    setRespData(response.data);

    // setRespData(response.data)
  };
  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
    const val = respdata[value];
    console.log(val);
    if (val) {
      navigate("/display_data", { state: { data: val } });
    } else {
      console.log("No data found in Product selection page");
    }
  };

    console.log(respdata);

  return (
    <div
      className="w-screen h-screen px-8 py-10 overflow-hidden bg-center bg-cover outfit"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div className="fixed top-20 right-20">
        <Popover placement="bottom-end">
          <PopoverHandler>
            <button className="p-2 bg-[#ffffffc4] rounded-full">
              <SlOptionsVertical />
            </button>
          </PopoverHandler>
          <PopoverContent className="">
            <button >
              <Link to='/' className="font-semibold notoSans text-darkBlue">Go to reupload page</Link>
            </button>
          </PopoverContent>
        </Popover>
      </div>

      <select
        //   onChange={handleDropDown}
        className="w-[30%] fixed top-20 text-lg border-[1.6px] border-blue-500 rounded-lg text-blue-800 px-2 hover:cursor-pointer"
        onChange={handleClick}
      >
        <option value="" selected disabled hidden>
          Select a product
        </option>
        {/* {fileList.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))} */}
        {Object.keys(respdata).map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>

      
    </div>
  );
};

export default ProductSelection;
