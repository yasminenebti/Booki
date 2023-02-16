import React from "react";

import Banner from "../components/Banner";

import BookList from "../components/BookList";
import Navbar from "../components/Navbar";

import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <BookList />
     
    </>
  );
}

export default Home;
