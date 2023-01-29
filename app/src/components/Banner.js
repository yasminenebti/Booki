import React from "react";
import { Link } from "react-router-dom";
import banner from "../images//home.svg";

function Banner() {
  return (
    <div className="bg-primary h-56 sm:w-2/3 px-7 mx-auto relative flex items-center justify-between my-3 sm:my-12 ">
      <Link to="/search?q=" className=" w-full p-3 flex justify-end">
        <img src={banner} alt="banner" className="max-h-72" />
      </Link>
      <div className="w-full p-8 flex flex-col items-center">
        <h2 className="mb-4  text-2xl font-bold text-secondary">
          Build Your Library
        </h2>
        <div className="text-md  py-2">Explore new worlds from authors!</div>
        <Link
          to="/search?q="
          className="text-white bg-green px-5 py-2 shadow-md rounded-md font-bold my-2 hover:shadow-xl active:scale-90 transition duration-150"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default Banner;
