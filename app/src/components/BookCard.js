import React from "react";
import { Link } from "react-router-dom";

function BookCard({ image, id, name, author }) {
  return (
    <div className="flex items-center  space-x-4 rounded-xl ">
      <div className="relative h-24 w-24 ">
        <img
          className="rounded-xl hover:scale-105 transition duration-200 ease-out"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-md font-semibold mt-3 ">{name}</h3>
        <h3 className="text-sm mb-10 text-grey">{author}</h3>
        <Link
          to={`/book/${id}`}
          className=" bg-white text-yellow border-yellow border-2 px-5 py-1 shadow-xl rounded-md  my-2 hover:shadow-xl hover:text-silver hover:bg-yellow active:scale-90 transition duration-150 ease-out"
        >
          Read
        </Link>
      </div>
    </div>
  );
}

export default BookCard;

// cursor-pointer hover:scale-105 transform transition duration-300 ease-out
