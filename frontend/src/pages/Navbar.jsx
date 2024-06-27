import React from "react";
import chistats_logo from '../assets/chistat_logo.png'
import sentiment_analysis_logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <img src={sentiment_analysis_logo} alt="logo" className="lg:w-[50px] md:w-[60px]"/>
        <h2 className="font-semibold bg-white lg:text-2xl md:text-2xl text-darkBlue hover:cursor-default">
          Sentiment Analysis
        </h2>
        </div>
        <img src={chistats_logo} alt="logo" className="h-6 w-[120px]" />
    </div>
  );
};

export default Navbar;
