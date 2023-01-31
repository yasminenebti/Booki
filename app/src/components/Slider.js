import React, { useState, useEffect } from "react";
import axios from "axios";
import { nextSlide, prevSlide, thisSlide } from "../redux/slideSlicer";
import { useSelector, useDispatch } from "react-redux";

function Slider() {
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

  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div className=" relative space-x-3 pt-10">
      <div>
        {books?.map((book, index) => {
          return <div key={book._id}>{book.name + index}</div>;
        })}
      </div>
      <button onClick={() => dispatch(prevSlide(slideIndex - 1))}>prev</button>

      <button onClick={() => dispatch(nextSlide(slideIndex + 1))}>next</button>
    </div>
  );
}

export default Slider;
