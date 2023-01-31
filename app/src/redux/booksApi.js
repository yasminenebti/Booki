import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000",
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (name) => `books/${name}`,
    }),
  }),
});

export const { useGetAllBooksQuery } = booksApi;

