import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "./Header";
import axios from "axios";
import { useQuery } from "../hooks/index";
import BookCard from "../components/BookCard";

function Search() {
  const query = useQuery();
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
      <div className="max-w-7xl mx-auto px-8  mt-20 ">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 space-y-10">
          {books.map((book) => {
            return (
              book.name.includes(query.get("q")) && (
                <BookCard
                  key={book._id}
                  image={book.image}
                  id={book._id}
                  name={book.name}
                  author={book.author}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
