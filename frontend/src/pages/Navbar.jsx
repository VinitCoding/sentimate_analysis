import React from "react";
import chistats_logo from '../assets/chistat_logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-darkBlue">
          Sentiment Analysis
        </h2>
        <img src={chistats_logo} alt="logo" className="h-6 w-28" />
      </div>
    </div>
  );
};

export default Navbar;
