
import React, {  useEffect } from "react";
import BookCard from "./BookCard";
import Loading from "../utils/Loading";
import { useSelector, useDispatch } from 'react-redux';
import { booksFetch } from "../redux/bookSlice";

function BookList() {
  const dispatch = useDispatch();
  const bookList = useSelector(state => state.books.books);
  const isLoading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  useEffect(() => {
  dispatch(booksFetch())
  }, [dispatch])
  

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-16 mt-20 ">

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {bookList?.slice(0, 4).map((book,index) => {
          return (
            
              <BookCard
                key={index}
                image={book.image}
                id={book._id}
                name={book.name}
                author={book.author}
              />
          
          );
        })}
      </div>
      {isLoading && <Loading/>}
      {error && <div>Error</div>}
    </div>
  );
}

export default BookList;
