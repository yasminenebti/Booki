import axios from "axios";
import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import Loading from "../utils/Loading";

function BookList() {
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
    <div className="max-w-7xl mx-auto px-8 sm:px-16 mt-20 ">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {books?.slice(0, 4).map((book,index) => {
          return (
            <>
              <BookCard
                key={index}
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
  );
}

export default BookList;
