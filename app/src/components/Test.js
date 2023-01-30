import React from "react";
import { useGetAllBooksQuery } from "../features/booksApi";

function Test() {
  const { data, error, isLoading } = useGetAllBooksQuery();
  return <div>Test</div>;
}

export default Test;
