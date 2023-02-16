import React, {  useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { booksFetch } from "../redux/bookSlice";

import BookCard from "../components/BookCard";
import Loading from "../utils/Loading";

function Category() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(booksFetch());
  }, [dispatch]);
  
 
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-5">
        <h2 className="font-bold uppercase tracking-wider text-2xl text-secondary">
          Biography
        </h2>
        <hr className="mx-auto w-full h-0.5 rounded border-0 mt-2 mb-4 bg-grey"></hr>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {bookList?.map((book) => {
            return (
              book.genre === "Biography" && (
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
        <h2 className="font-bold uppercase tracking-wider text-2xl text-secondary mt-32">
          Fiction
        </h2>
        <hr className="mx-auto w-full h-0.5 rounded border-0 mt-2 mb-4 bg-grey"></hr>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {bookList?.map((book) => {
            return (
              book.genre === "Fiction" && (
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
        <h2 className="font-bold uppercase tracking-wider text-2xl text-secondary mt-32">
          Business
        </h2>
        <hr className="mx-auto w-full h-0.5 rounded border-0 mt-2 mb-4 bg-grey"></hr>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {bookList?.map((book) => {
            return (
              book.genre === "Business" && (
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
        <h2 className="font-bold uppercase tracking-wider text-2xl text-secondary mt-32">
          Romance
        </h2>
        <hr className="mx-auto w-full h-0.5 rounded border-0 mt-2 mb-4 bg-grey"></hr>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {bookList?.map((book) => {
            return (
              book.genre === "Romance" && (
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
        <h2 className="font-bold uppercase tracking-wider text-2xl text-secondary mt-32">
          Self-help book
        </h2>
        <hr className="mx-auto w-full h-0.5 rounded border-0 mt-2 mb-4 bg-grey"></hr>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {bookList.map((book) => {
            return (
              book.genre === "Self-help book" && (
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

        {isLoading && <Loading />}
        {error && <div>Error</div>}
      </div>
    </>
  );
}

export default Category;
