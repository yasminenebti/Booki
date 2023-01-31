import { combineReducers } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/books.reducer";

const reducers = combineReducers({
  allBooks: booksReducer,
});

export default reducers;
