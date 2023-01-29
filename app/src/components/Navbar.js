import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex justify-center items-center space-x-4 py-2 mb-5 shadow-md ">
        <Link
          to="/"
          className=" text-grey cursor-pointer  rounded-xl px-4 py-1 hover:placeholder-shown:first-letter hover:font-semibold  hover:text-green"
        >
          Home
        </Link>
        <Link
          to="/bestseller"
          className=" text-grey cursor-pointer  rounded-xl px-4 py-1 hover:placeholder-shown:first-letter hover:font-semibold  hover:text-green"
        >
          Bestseller
        </Link>
        <Link
          to="/category"
          className=" text-grey cursor-pointer  rounded-xl px-4 py-1 hover:placeholder-shown:first-letter hover:font-semibold  hover:text-green"
        >
          Category
        </Link>
        <Link
          to="/notfound"
          className=" text-grey cursor-pointer  rounded-xl px-4 py-1 hover:placeholder-shown:first-letter hover:font-semibold  hover:text-green"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
