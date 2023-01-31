import { configureStore } from "@reduxjs/toolkit";
import bookSlice, { booksFetch } from "./redux/bookSlice";
import slideReducer from "./redux/slideSlicer";

import { booksApi } from "./redux/booksApi";

export const store = configureStore({
  reducer: {
    slider : slideReducer,
    books: bookSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

store.dispatch(booksFetch());
