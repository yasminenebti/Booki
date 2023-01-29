import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

import Navbar from "../components/Navbar";
import logo from "../images/shelf.png";
import { Link } from "react-router-dom";

function BookDetails() {

  console.log("hello");

  const params = useParams();
  console.log(params);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/book")
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mb-6">
      <Header />
      <Navbar />
      <div className="relative max-w-7xl mx-auto pt-5 ">
        {/* *********** */}
        <div>
          {books.map((book) => {
            return (
              params.id === book._id && (
                <div className="flex  space-x-10">
                  <img
                    className="w-1/3"
                    src={book.image}
                    alt=""
                    key={book._id}
                  />
                  <div className="w-1/2">
                    <h2 className=" font-bold uppercase tracking-wider text-3xl text-secondary">
                      {book.name}
                    </h2>
                    <h2 className="font-semibold -tracking-tighter text-grey ">
                      {book.author}
                    </h2>

                    <h2 className="mt-14 w-1/2">{book.description}</h2>
                  </div>
                  <div className=" space-y-12 pt-48 max-w-xl ">
                    <Link to="/notfound">
                      <button className=" text-white bg-green px-5 py-2 w-full shadow-md rounded-md font-bold  hover:shadow-xl active:scale-90 transition duration-150">
                        Get Copy {`${book.price}`}
                      </button>
                    </Link>
                    <div className="text-white">hello</div>
                    <Link to="/notfound">
                      <button
                        
                        className=" text-white bg-green px-5 py-2 shadow-md w-full rounded-md font-bold  hover:shadow-xl active:scale-90 transition duration-150"
                      >
                        Add to wishList
                      </button>
                    </Link>
                  </div>
                  <div className="text-white">hello</div>
                </div>
              )
            );
          })}
        </div>
        <img className="absolute -bottom-11 w-full" alt="" src={logo} />
      </div>
    </div>
  );
}

export default BookDetails;
