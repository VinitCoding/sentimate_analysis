import React from "react";
import chistats_logo from '../assets/chistat_logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between ">
        <h2 className="text-xl font-semibold bg-white text-darkBlue hover:cursor-default">
          Sentiment Analysis
        </h2>
        <img src={chistats_logo} alt="logo" className="h-6 w-28" />
    </div>
  );
};

export default Navbar;
