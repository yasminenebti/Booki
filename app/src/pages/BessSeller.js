import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import Loading from "../utils/Loading";
import axios from "axios";
import Header from "./Header";
import Navbar from "../components/Navbar";
import logo from "../images/shelf.png";

function BessSeller() {
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
    <div>
      <Header />
      <Navbar />
      <div className=" max-w-8xl mx-auto px-8 sm:px-16 mt-20 ">
        <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {books?.slice(5, 9).map((book) => {
            return (
              <>
                <BookCard
                  key={book._id}
                  image={book.image}
                  id={book._id}
                  name={book.name}
                  author={book.author}
                />
              </>
            );
          })}
        </div>
        {books.length === 0 && <Loading />}
      </div>
      <img className="" alt="" src={logo} />
    </div>
  );
}

export default BessSeller;
