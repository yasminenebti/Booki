import { configureStore } from "@reduxjs/toolkit";
import bookSlice, { booksFetch } from "./features/bookSlice";

import { booksApi } from "./features/booksApi";

export const store = configureStore({
  reducer: {
    books: bookSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(booksApi.middleware),
  
});

store.dispatch(booksFetch()); 
