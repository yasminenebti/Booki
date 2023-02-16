import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { booksFetch } from "../redux/bookSlice";
import { useQuery } from "../hooks/index";
import BookCard from "../components/BookCard";

function Search() {
  const query = useQuery();
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(booksFetch());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="max-w-7xl mx-auto px-8  mt-20 ">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 space-y-10">
          {bookList?.map((book) => {
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
