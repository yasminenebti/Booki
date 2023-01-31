import React from "react";

import Banner from "../components/Banner";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <BookList />
      <Slider /> 
    </>
  );
}

export default Home;
